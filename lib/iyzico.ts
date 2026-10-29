import { createHmac, timingSafeEqual } from "node:crypto";
import Iyzipay from "iyzipay";

type IyzicoErrorResult = { status: "failure"; errorCode?: string; errorMessage?: string };

export type CheckoutInitializeResult = IyzicoErrorResult | {
  status: "success";
  conversationId: string;
  token: string;
  paymentPageUrl: string;
  signature: string;
};

export type CheckoutRetrieveResult = IyzicoErrorResult | {
  status: "success";
  paymentStatus: string;
  paymentId: string;
  currency: string;
  basketId: string;
  conversationId: string;
  paidPrice: number | string;
  price: number | string;
  token: string;
  signature: string;
  errorCode?: string;
  errorMessage?: string;
  paymentErrorCode?: string;
  paymentErrorMessage?: string;
};

function requiredEnv(name: "IYZICO_API_KEY" | "IYZICO_SECRET_KEY" | "IYZICO_URI") {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} ortam değişkeni tanımlı değil.`);
  return value;
}

export function createIyzicoClient() {
  return new Iyzipay({
    apiKey: requiredEnv("IYZICO_API_KEY"),
    secretKey: requiredEnv("IYZICO_SECRET_KEY"),
    uri: requiredEnv("IYZICO_URI").replace(/\/+$/, ""),
  });
}

export function initializeCheckout(request: Record<string, unknown>) {
  const client = createIyzicoClient();
  return new Promise<CheckoutInitializeResult>((resolve, reject) => {
    // DefinitelyTyped paketi güncel Checkout Form alanlarının tamamını içermiyor.
    client.checkoutFormInitialize.create(request as never, (error, result) => {
      if (error) reject(error);
      else resolve(result as unknown as CheckoutInitializeResult);
    });
  });
}

export function retrieveCheckout(token: string) {
  const client = createIyzicoClient();
  return new Promise<CheckoutRetrieveResult>((resolve, reject) => {
    client.checkoutForm.retrieve({ locale: Iyzipay.LOCALE.TR, token }, (error, result) => {
      if (error) reject(error);
      else resolve(result as unknown as CheckoutRetrieveResult);
    });
  });
}

export function verifyIyzicoSignature(values: Array<string | number>, signature?: string) {
  if (!signature) return false;
  const calculated = createHmac("sha256", requiredEnv("IYZICO_SECRET_KEY"))
    .update(values.join(":"))
    .digest("hex");
  const receivedBuffer = Buffer.from(signature, "utf8");
  const calculatedBuffer = Buffer.from(calculated, "utf8");
  return receivedBuffer.length === calculatedBuffer.length
    && timingSafeEqual(receivedBuffer, calculatedBuffer);
}
