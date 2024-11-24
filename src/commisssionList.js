// Anime-style Characters
//         Fanart and Original Characters, female preferred; NSFW content also available upon request).
// Anime-style Illustrations
//         Featuring both characters and detailed backgrounds.
// Mecha and Mechanical Designs
//         (Mechs, robots, tanks, etc.), along with intricate weapons and architectural elements.
// Highly Detailed
//         High-Resolution Backgrounds to complement character art.
// Note
// Can’t find what you’re looking for above? Feel free to reach out to discuss custom requests!
// No gore, excessive violence, hate-related themes, or political content.
// No furry or bestiality artwork (normal animal characters may be negotiable).
// No fetish art.

// Chest-Up Portrait
// Starting at: $100
// Add-ons:
// Detailed Design: +$30–$100
// Background: +$50–$150 (Simple options included)
// Props: +$20–$200
// Half-Body or Thighs-Up
// Starting at: $150/$170
// Add-ons:
// Detailed Design: +$30–$150
// Background: +$50–$200 (Simple options included)
// Props: +$20–$200
// Full-Body Illustration
// Starting at: $220
// Add-ons:
// Detailed Design: +$30–$150
// Background: +$50–$200 (Simple options included)
// Props: +$20–$200
// (Include "Learn More" or "Customize" buttons for each section)

// key Heghlights:
// Simple Backgrounds: No extra charge for basic colors or textures.
// Customization: Prices adjust based on design complexity and additional elements.
// Flexible Options: Add props or more detailed backgrounds for a fully personalized look.

const customArtworkOptions = [
  [
    {
      title: "Anime-style Characters",
      description:
        "Fanart and Original Characters Fanart and Original Characters, female preferred; NSFW content also available upon request).",
    },
    {
      title: "Anime-style Illustrations",
      description: "Featuring both characters and detailed backgrounds.",
    },
    {
      title: "Mecha and Mechanical Designs",
      description:
        "(Mechs, robots, tanks, etc.), along with intricate weapons and architectural elements.",
    },
    {
      title: "Highly Detailed",
      description: "High-Resolution Backgrounds to complement character art.",
    },
  ],
  [
    {
      title: "Note",
      description:
        "Can’t find what you’re looking for above? Feel free to reach out to discuss custom requests!",
    },
  ],
  [
    "No gore, excessive violence, hate-related themes, or political content.",
    "No furry or bestiality artwork (normal animal characters may be negotiable).",
    "No fetish art.",
  ],
];

const commissionFeatured = [
  {
    image: "assets/images/characters/char_whiteKnight/variant3.jpg",
    title: "Potrait (Headshot)",
    price: 50,
    addons: [
      "Detailed Design: +$30–$100",
      "Background: +$30–$100 ",
      'Props: +$20–$200 (Add a "Learn More" or "Customize" button)',
    ],
  },
  {
    image: "assets/images/characters/char_scarlet/variant2.jpg",
    title: "Burst (Chest-Up)",
    price: 100,
    addons: [
      "Detailed Design: +$30–$100",
      "Background: +$50–$150 ",
      "Props: +$20–$200 ",
    ],
  },
  {
    image: "assets/images/charcates/char_crown/variant2.jpg",
    title: "Half-Body or Thighs-Up",
    price: 150,
    addons: [
      "Detailed Design: +$30–$150",
      "Background: +$50–$200 ",
      "Props: +$20–$200 ",
    ],
  },
  {
    image: "assets/images/charactes/char_snowWhite.jpg",
    title: "Full-Body Illustration",
    price: 220,
    addons: [
      "Detailed Design: +$30–$150",
      "Background: +$50–$200 ",
      "Props: +$20–$200 ",
    ],
  },
];

const keyHighlights = [
  "Simple Backgrounds: No extra charge for basic colors or textures.",
  "Customization: Prices adjust based on design complexity and additional elements.",
  "Flexible Options: Add props or more detailed backgrounds for a fully personalized look.",
];

const commissionSamples = [
  [
    {
      name: "char_crown",
      images: [
        "assets/images/characters/char_crown/variant1.jpg",
        "assets/images/characters/char_crown/variant2.jpg",
      ],
      detail: [
        "NIKKE: Crown",
        300,
        {
          subtitle: "Commission Type:",
          points: [
            "Thighs-up Character Illustration with Non-Separable Simple Colored Background.",
            "Canvas Size: 5000x6000 pixels.",
            "Working Time: 7-14 days.",
          ],
        },
        {
          subtitle: "Pricing Breakdown:",
          points: [
            "Character Base Price: $170.",
            "Extra Details Fee: $70.",
            "Sub-Total (Fully Clothed Version): $240.",
            "Alternate Clothing Version: $60.",
          ],
        },
      ],
    },
  ],
  [
    {
      name: "fullCom_elinaBlueWorld",
      images: ["assets/images/fullCom/fullCom_elinaBlueWorld.jpg"],
      detail: [
        "Elina Blue World",
        400,
        {
          subtitle: "Commission Type:",
          points: [
            "Thighs-up Character Illustration with Non-Separable Background.",
            "Canvas Size: 6000x3000 pixels.",
            "Working Time: ~20 days.",
          ],
        },
        {
          subtitle: "Pricing Breakdown:",
          points: [
            "Character Base Price: $170.",
            "Extra Details Fee: $50.",
            "Prop (Flowers): $30.",
            "Medium Detailed Fantasy Background: $150.",
            "Alternate Clothing Version: $60.",
          ],
        },
      ],
    },
  ],
  [
    {
      name: "fullCom_crownVsHarvester",
      images: [
        "assets/images/fullCom/fullCom_crownVsHarvester/variant1.jpg",
        "assets/images/fullCom/fullCom_crownVsHarvester/variant2.jpg",
        "assets/images/fullCom/fullCom_crownVsHarvester/variant3.jpg",
        "assets/images/fullCom/fullCom_crownVsHarvester/variant4.jpg",
        "assets/images/backgrounds/bg_crown.jpg",
      ],
      detail: [
        "NIKKE: Crown Vs. Harvester",
        820,
        {
          subtitle: "Commission Type:",
          points: [
            "Full-body Character Illustration with Separable Background.",
            "Canvas Size: 5000x3000 pixels.",
            "Working Time: ~1 month.",
          ],
        },
        {
          subtitle: "Pricing Breakdown:",
          points: [
            "Character Base Price: $220.",
            "Extra Details Fee: $100.",
            "Prop (Sci-fi Lance Weapon): $150.",
            "Detailed Mecha Background (Separable): $350.",
          ],
        },
      ],
    },
    {
      name: "fullCom_goddesSquad",
      images: [
        "assets/images/fullCom/fullCom_goddesSquad/variant1.jpg",
        "assets/images/fullCom/fullCom_goddesSquad/variant2.jpg",
        "assets/images/fullCom/fullCom_goddesSquad/variant3.jpg",
        "assets/images/fullCom/fullCom_goddesSquad/variant4.jpg",
        "assets/images/backgrounds/bg_crown.jpg",
      ],
      detail: [
        "NIKKE: Goddess Squad",
        916,
        {
          subtitle: "Commission Type:",
          points: [
            "Dynamic Multiple Character Poster Style with Non-Separable Simple Background.",
            "Canvas Size: 6000x3500 pixels.",
            "Working Time: ~1 month.",
          ],
        },
        {
          subtitle: "Pricing Breakdown:",
          points: [
            "Main Character (Middle Bottom):",
            "    Chest-up Base Price: $100.",
            "    Extra Details Fee: $40.",
            "    Sub-Total: $140.",
            "Character 2 (Middle Top):",
            "    Full-body Base Price: $220.",
            "    Extra Details Fee: $50.",
            "    Prop (Sci-fi Assault Rifle): $50.",
            "    Sub-total: $320 x 80% = $256.",
            "Character 3 (Bottom Left):",
            "    Thighs-up Base Price: $170.",
            "    Extra Details Fee: $50.",
            "    Props (Scifi Staft and Halo): $80.",
            "    Sub-total: $300 x 80% = $240.",
            "Character 4 (Bottom Right):",
            "    Half-Body Base Price: $150.",
            "    Extra Details Fee: $50.",
            "     Props (Scifi Gun Turrets): $100.",
            "    Sub-total: $300 x 70% = $210.",
            "Character 5 and 6 (top left/top right):",
            "    Headshot Base Price: $50 x 2.",
            "    Sub-total: $100 x 70% = $70.",
            "    Background: $0 (free of charge).",
          ],
        },
      ],
    },
  ],
  [
    {
      title: "Backgrounds",
      name: "bg_ryukawa",
      images: ["assets/images/backgrounds/bg_ryukawa.jpg"],
      detail: [
        "Fantasy/Scenery Background",
        800,
        {
          points: [
            "Pricing: $300 to $800 (depending on complexity).",
            "Price: $800.",
            "Includes: Complex world design.",
            "Canvas Size: 6000x3000 pixels.",
          ],
        },
      ],
    },
    {
      title: "Backgrounds",
      name: "bg_alteisen",
      images: ["assets/images/backgrounds/bg_alteisen.jpg"],
      detail: [
        "Fantasy/Scenery Background",
        800,
        {
          points: [
            "Pricing: $300 to $800 (depending on complexity)",
            "Price: $800.",
            "Includes: Complex world design.",
            "Canvas Size: 6000x3000 pixels.",
          ],
        },
      ],
    },
  ],
];
