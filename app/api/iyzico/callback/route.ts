import { NextResponse } from "next/server";
import { retrieveCheckout, verifyIyzicoSignature } from "@/lib/iyzico";

export const runtime = "nodejs";

function resultUrl(request: Request, params: Record<string, string>) {
  const url = new URL("/bagis/sonuc", request.url);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));
  return url;
}

export async function POST(request: Request) {
  try {
    const token = (await request.formData()).get("token");
    if (typeof token !== "string" || !token) {
      return NextResponse.redirect(resultUrl(request, { durum: "hata" }), 303);
    }

    const result = await retrieveCheckout(token);
    if (result.status !== "success") {
      console.warn("iyzico retrieve failure", JSON.stringify({
        errorCode: result.errorCode,
        errorMessage: result.errorMessage,
      }));
      return NextResponse.redirect(resultUrl(request, { durum: "basarisiz", neden: "sorgu" }), 303);
    }

    const signatureValid = verifyIyzicoSignature([
      result.paymentStatus, result.paymentId, result.currency, result.basketId,
      result.conversationId, result.paidPrice, result.price, result.token,
    ], result.signature);
    const successful = signatureValid && result.paymentStatus === "SUCCESS";

    console.info("iyzico payment result", JSON.stringify({
      paymentStatus: result.paymentStatus,
      signatureValid,
      paymentId: result.paymentId,
      errorCode: result.errorCode,
      errorMessage: result.errorMessage,
      paymentErrorCode: result.paymentErrorCode,
      paymentErrorMessage: result.paymentErrorMessage,
    }));

    // Canlıya geçerken paymentId benzersiz anahtarıyla veritabanına idempotent kayıt yazılmalı.
    return NextResponse.redirect(resultUrl(request, {
      durum: successful ? "basarili" : "basarisiz",
      ...(successful ? { odeme: result.paymentId } : {}),
      ...(!successful ? { neden: signatureValid ? "odeme" : "imza" } : {}),
    }), 303);
  } catch (error) {
    console.error("iyzico callback error", error instanceof Error ? error.message : error);
    return NextResponse.redirect(resultUrl(request, { durum: "hata" }), 303);
  }
}
