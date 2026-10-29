const ayarlar = {
  name: "ayarlar",
  title: "Site Ayarları",
  type: "document",
  // Singleton — sadece bir belge olacak
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "adres",
      title: "Adres",
      type: "text",
      rows: 2,
    },
    {
      name: "telefon1",
      title: "Telefon 1",
      type: "string",
    },
    {
      name: "telefon2",
      title: "Telefon 2",
      type: "string",
    },
    {
      name: "eposta",
      title: "E-posta",
      type: "string",
    },
    {
      name: "iban",
      title: "IBAN",
      type: "string",
    },
    {
      name: "banka",
      title: "Banka",
      type: "string",
    },
    {
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    },
    {
      name: "twitter",
      title: "X (Twitter) URL",
      type: "url",
    },
    {
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    },
  ],
  preview: {
    prepare: () => ({ title: "Site Ayarları" }),
  },
};

export default ayarlar;
