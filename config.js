const CONFIG = {
  business: {
    name: "Victor's Barbería",
    tagline: "Cortes frescos y fades limpios, en Lomas Club Deportivo.",
    email: "victbarber21@gmail.com",
    phoneDisplay: "+504 9539-7558",
    whatsappNumber: "50495397558",
    whatsappMessage: "Hola, quiero apartar una silla en Victor's Barbería",
    instagram: "https://www.instagram.com/victor.s_barberia/",
    facebook: "https://www.facebook.com/BarberiaVictors/",
    tiktok: "https://www.tiktok.com/@victor.s_sbarberia"
  },
  hours: [
    { day: "Lunes a sábado", time: "9:00 AM – 6:45 PM" },
    { day: "Domingo", time: "10:00 AM – 5:00 PM" }
  ],
  locations: [
    {
      id: "tegucigalpa",
      name: "Tegucigalpa",
      address: "Lomas Club Deportivo, Bulevar Morazán",
      phoneDisplay: "+504 9539-7558",
      whatsappNumber: "50495397558",
      mapsUrl: "https://maps.app.goo.gl/qYHjjAosdA6d82HH6",
      mapsEmbedUrl: "https://www.google.com/maps?q=14.0992082,-87.1808485&z=17&hl=es&output=embed",
      instagram: "https://www.instagram.com/victor.s_barberia/"
    }
  ],
  services: [
    {
      name: "Corte clásico",
      price: "L 300",
      draft: true,
      teaser: "Máquina o tijera, el corte de siempre.",
      desc: "El corte clásico, a tijera o a máquina, con el contorno limpio."
    },
    {
      name: "Corte moderno",
      price: "L 350",
      draft: true,
      teaser: "Textura y el acabado de ahora.",
      desc: "Forma, textura y el acabado que se usa ahora."
    },
    {
      name: "Cortes para niños",
      price: "L 200",
      draft: true,
      teaser: "Para niños, en la misma silla.",
      desc: "Corte para niños, con la misma atención que el de adulto."
    },
    {
      name: "Perfilado de barba",
      price: "L 250",
      draft: true,
      teaser: "Línea de mejilla, cuello y bigote.",
      desc: "Se marca la mejilla, el cuello y el bigote."
    },
    {
      name: "Afeitado de barba",
      price: "L 200",
      draft: true,
      teaser: "Afeitado completo.",
      desc: "La barba completa, al ras."
    },
    {
      name: "Perfilado de cejas",
      price: "L 80",
      draft: true,
      teaser: "Con navaja, para acompañar el corte.",
      desc: "Definición de cejas con navaja."
    },
    {
      name: "Fade / degradado",
      price: "L 350",
      draft: true,
      teaser: "Degradado limpio, de la sien a la nuca.",
      desc: "El fade va por su cuenta. No va incluido en el corte clásico."
    },
    {
      name: "Corte y barba",
      price: "L 500",
      teaser: "Las dos cosas, en la misma silla.",
      desc: "Corte y perfilado de barba en una sola cita.",
      hot: true
    }
  ],
  gallery: [
    { image: "images/gallery/fade.jpg", alt: "Fade alto, terminado en la silla" },
    { image: "images/gallery/barba.jpg", alt: "Corte con barba perfilada" },
    { image: "images/gallery/corte.jpg", alt: "Corte moderno con barba" },
    { image: "images/gallery/barbero.jpg", alt: "Perfilado de barba en la silla" },
    { image: "images/gallery/silla.jpg", alt: "Barbero y cliente después del corte" },
    { image: "images/gallery/interior.jpg", alt: "Sillas y espejos de Victor's Barbería", wide: true, position: "center 72%" },
    { image: "images/gallery/entrada.jpg", alt: "Entrada de noche, sobre el Bulevar Morazán", wide: true, position: "center 46%" },
    { image: "images/gallery/fachada.jpg", alt: "Fachada de Victor's Barbería en Lomas Club Deportivo", wide: true, position: "center 58%" }
  ]
};
