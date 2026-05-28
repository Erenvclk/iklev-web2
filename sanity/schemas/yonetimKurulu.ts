const yonetimKurulu = {
  name: "yonetimKurulu",
  title: "Yönetim Kurulu Üyesi",
  type: "document",
  fields: [
    {
      name: "ad",
      title: "Ad Soyad",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "gorev",
      title: "Görev",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "sira",
      title: "Sıra",
      type: "number",
      description: "Listede görünme sırası (1 = en üst)",
    },
    {
      name: "foto",
      title: "Fotoğraf",
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
  ],
  orderings: [
    {
      title: "Sıraya göre",
      name: "siraAsc",
      by: [{ field: "sira", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "ad",
      subtitle: "gorev",
      media: "foto",
    },
  },
};

export default yonetimKurulu;
