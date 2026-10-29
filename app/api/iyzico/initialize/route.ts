import { randomUUID } from "node:crypto";
import Iyzipay from "iyzipay";
import { initializeCheckout, verifyIyzicoSignature } from "@/lib/iyzico";

export const runtime = "nodejs";

type DonationRequest = Record<"amount" | "name" | "surname" | "email" | "phone" | "identityNumber" | "city" | "address" | "zipCode", unknown>;
const text = (value: unknown) => typeof value === "string" ? value.trim() : "";

function getClientIp(request: Request) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim()
    || request.headers.get("x-real-ip") || "127.0.0.1";
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as DonationRequest;
    const amountNumber = Number(body.amount);
    const name = text(body.name);
    const surname = text(body.surname);
    const email = text(body.email).toLowerCase();
    const phone = text(body.phone).replace(/[\s()-]/g, "");
    const identityNumber = text(body.identityNumber);
    const city = text(body.city);
    const address = text(body.address);
    const zipCode = text(body.zipCode);

    if (!Number.isFinite(amountNumber) || amountNumber < 1 || amountNumber > 1_000_000) {
      return Response.json({ error: "Bağış tutarı 1 TL ile 1.000.000 TL arasında olmalıdır." }, { status: 400 });
    }
    if (!name || !surname || !/^\S+@\S+\.\S+$/.test(email)) {
      return Response.json({ error: "Ad, soyad ve geçerli bir e-posta adresi gereklidir." }, { status: 400 });
    }
    if (!/^\+?\d{10,15}$/.test(phone) || !/^\d{11}$/.test(identityNumber)) {
      return Response.json({ error: "Telefon veya T.C. kimlik numarası biçimi geçersiz." }, { status: 400 });
    }
    if (!city || address.length < 10) {
      return Response.json({ error: "Şehir ve açık adres gereklidir." }, { status: 400 });
    }

    const appUrl = process.env.NEXT_PUBLIC_APP_URL?.trim().replace(/\/$/, "");
    if (!appUrl) throw new Error("NEXT_PUBLIC_APP_URL ortam değişkeni tanımlı değil.");

    const amount = amountNumber.toFixed(2);
    const id = randomUUID();
    const conversationId = `donation-${id}`;
    const basketId = `DON-${id}`;
    const contactName = `${name} ${surname}`;
    const billingAddress = { contactName, city, country: "Türkiye", address, ...(zipCode ? { zipCode } : {}) };

    const result = await initializeCheckout({
      locale: Iyzipay.LOCALE.TR,
      conversationId,
      price: amount,
      paidPrice: amount,
      currency: Iyzipay.CURRENCY.TRY,
      basketId,
      paymentGroup: Iyzipay.PAYMENT_GROUP.PRODUCT,
      callbackUrl: `${appUrl}/api/iyzico/callback`,
      enabledInstallments: [1],
      buyer: {
        id: `BY-${id}`, name, surname,
        gsmNumber: phone.startsWith("+") ? phone : `+90${phone.replace(/^0/, "")}`,
        email, identityNumber, registrationAddress: address, ip: getClientIp(request),
        city, country: "Türkiye", ...(zipCode ? { zipCode } : {}),
      },
      billingAddress,
      basketItems: [{
        id: basketId, name: "İKLEV Bağışı", category1: "Bağış",
        itemType: Iyzipay.BASKET_ITEM_TYPE.VIRTUAL, price: amount,
      }],
    });

    if (result.status !== "success") {
      return Response.json({ error: result.errorMessage || "iyzico ödeme oturumu oluşturulamadı." }, { status: 502 });
    }
    if (!verifyIyzicoSignature([result.conversationId, result.token], result.signature) || !result.paymentPageUrl) {
      return Response.json({ error: "iyzico yanıtı doğrulanamadı." }, { status: 502 });
    }
    return Response.json({ paymentPageUrl: result.paymentPageUrl });
  } catch (error) {
    console.error("iyzico initialize error", error instanceof Error ? error.message : error);
    return Response.json({ error: "Ödeme başlatılırken beklenmeyen bir hata oluştu." }, { status: 500 });
  }
}
