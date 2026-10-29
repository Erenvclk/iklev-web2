const haber = {
  name: "haber",
  title: "Haber",
  type: "document",
  fields: [
    {
      name: "baslik",
      title: "Başlık",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "baslik", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "yayinTarihi",
      title: "Yayın Tarihi",
      type: "datetime",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "ozet",
      title: "Özet",
      type: "text",
      rows: 3,
    },
    {
      name: "kapakGorseli",
      title: "Kapak Görseli",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alternatif metin",
          type: "string",
        },
      ],
    },
    {
      name: "icerik",
      title: "İçerik",
      type: "array",
      of: [{ type: "block" }],
    },
  ],
  preview: {
    select: {
      title: "baslik",
      media: "kapakGorseli",
      date: "yayinTarihi",
    },
  },
};

export default haber;
