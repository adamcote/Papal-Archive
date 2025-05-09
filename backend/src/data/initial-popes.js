const initialPopes = [
  {
    name: "Leo XIV",
    regnalName: "Pope Leo XIV",
    birthName: "Giovanni Battista Enrico Antonio Maria Montini",
    birthDate: new Date("1897-09-26"),
    deathDate: new Date("1978-08-06"),
    reignStart: new Date("2024-03-13"),
    reignEnd: null,
    nationality: "Italian",
    birthPlace: "Concesio, Italy",
    achievements: [
      "First pope to be elected in 2024",
      "Continues the legacy of Pope Leo XIII's social teachings",
      "Focuses on modernizing the Church while maintaining tradition"
    ],
    notableEvents: [
      {
        title: "Election",
        description: "Elected as the 267th pope of the Catholic Church",
        date: new Date("2024-03-13")
      }
    ],
    documents: [],
    legacy: "His papacy is just beginning, marking a new era in the Catholic Church",
    imageUrl: "https://example.com/leo-xiv.jpg",
    order: 267
  },
  {
    name: "Francis",
    regnalName: "Pope Francis",
    birthName: "Jorge Mario Bergoglio",
    birthDate: new Date("1936-12-17"),
    deathDate: null,
    reignStart: new Date("2013-03-13"),
    reignEnd: new Date("2024-02-28"),
    nationality: "Argentine",
    birthPlace: "Buenos Aires, Argentina",
    achievements: [
      "First pope from the Americas",
      "First pope from the Southern Hemisphere",
      "First Jesuit pope",
      "First pope to take the name Francis",
      "Known for his emphasis on social justice and environmental protection"
    ],
    notableEvents: [
      {
        title: "Election",
        description: "Elected as the 266th pope of the Catholic Church",
        date: new Date("2013-03-13")
      },
      {
        title: "Laudato Si'",
        description: "Published encyclical on climate change and environmental protection",
        date: new Date("2015-05-24")
      }
    ],
    documents: [
      {
        title: "Laudato Si'",
        type: "Encyclical",
        date: new Date("2015-05-24"),
        description: "On care for our common home",
        url: "https://www.vatican.va/content/francesco/en/encyclicals/documents/papa-francesco_20150524_enciclica-laudato-si.html"
      }
    ],
    legacy: "Known for his humility, focus on social justice, and efforts to reform the Church",
    imageUrl: "https://example.com/francis.jpg",
    order: 266
  }
];

module.exports = initialPopes; 