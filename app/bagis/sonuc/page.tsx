import Link from "next/link";

type ResultPageProps = { searchParams: Promise<{ durum?: string; odeme?: string; neden?: string }> };

export default async function DonationResultPage({ searchParams }: ResultPageProps) {
  const { durum, odeme, neden } = await searchParams;
  const successful = durum === "basarili";
  const failureMessage = neden === "odeme"
    ? "Ödeme banka veya kart tarafından onaylanmadı. Bilgileri kontrol ederek tekrar deneyebilirsiniz."
    : neden === "imza"
      ? "Ödeme yanıtının güvenlik doğrulaması tamamlanamadı. Kartınızdan çekim yapıldığını düşünüyorsanız lütfen vakıfla iletişime geçin."
      : "Ödeme sonucu iyzico üzerinden alınamadı. Lütfen tekrar deneyin.";

  return (
    <main className="mx-auto max-w-2xl px-6 py-24 text-center">
      <div className={`rounded-lg border p-8 ${successful ? "border-positive-ring bg-positive-light" : "border-accent-ring bg-accent-light"}`}>
        <h1 className={`text-3xl font-bold ${successful ? "text-positive" : "text-accent"}`}>
          {successful ? "Bağışınız için teşekkür ederiz" : "Ödeme tamamlanamadı"}
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {successful
            ? "Ödemeniz iyzico üzerinden başarıyla doğrulandı. Desteğiniz öğrencilerimizin geleceğine katkı sağlayacak."
            : failureMessage}
        </p>
        {successful && odeme && <p className="mt-4 text-xs text-muted">Ödeme referansı: {odeme}</p>}
        <Link href="/bagis" className="mt-7 inline-flex rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background">Bağış sayfasına dön</Link>
      </div>
    </main>
  );
}
