import construction from "../assets/Figma/construction.png";
import boogie from "../assets/Figma/boogie.png";
import Furniture from "../assets/Figma/Furniture.png"; 
import perfumeApp from "../assets/Figma/ScentSphere.png"; 

export const caseStudies = [
  {
    slug: "construction",
    title: "Green Country Construction",
    subtitle: "Website UI & Brand System",
    nda: true,
    image: construction,

    role: "UI/UX Designer",
    tools: ["Figma"],

    overview:
      "This project is a redesign of an existing construction company website. The goal was to improve usability, visual clarity, and brand trust while maintaining the core business identity.",

    problem:
      "The original website had outdated visuals, overcrowded sections, and weak visual hierarchy. Users found it difficult to explore events, galleries, and booking information quickly.",

    designPoints: [
      {
        title: "Visual Hierarchy",
        desc: "Above-the-fold content highlights services and CTAs.",
      },
      {
        title: "Trust-Based Layout",
        desc: "Testimonials and projects build credibility.",
      },
    ],

    brandSystem: [
      "Logo usage and spacing rules",
      "Green color palette",
      "Montserrat & Raleway typography",
    ],
  },

  {
    slug: "dj-event-redesign",
    title: "DJ Boogie Event Website",
    subtitle: "Website UI Redesign",
    nda: true,
    image: boogie,

    role: "UI/UX Designer",
    tools: ["Figma"],

    overview:
      "This project is a redesign of an existing DJ and event management website. The goal was to modernize the visual style, improve content flow, and create an immersive experience that reflects the energy of live events.",

    problem:
      "The original website had outdated visuals, overcrowded sections, and weak visual hierarchy. Users found it difficult to explore events, galleries, and booking information quickly.",

    redesignGoals: [
      "Create a bold, immersive dark-themed UI",
      "Improve navigation between pages like Gallery, Contact, and Booking",
      "Highlight event visuals to capture the brand’s energy",
    ],

    designPoints: [
      {
        title: "High-Impact Hero Section",
        desc: "Strong visuals and bold typography immediately communicate the music and party vibe.",
      },
      {
        title: "Structured Content Layout",
        desc: "Information is divided into clear sections for About, Gallery, and Contact.",
      },
      {
        title: "Gallery-Focused Experience",
        desc: "Large imagery and video previews showcase live events and audience engagement.",
      },
      {
        title: "Conversion-Oriented Booking Page",
        desc: "Simplified booking form encourages quick user action.",
      },
    ],

    brandSystem: [
      "Dark UI with red accent highlights",
      "Bold typography for headings",
      "High-contrast layouts for readability",
      "Consistent button and card styles",
    ],
  },

  {
    slug: "furniture-redesign",
    title: "Kumbhkar Furniture",
    subtitle: "E-commerce Website Redesign",
    nda: true,
    image: Furniture,

    role: "UI/UX Designer",
    tools: ["Figma"],

    overview:
      "This project is a redesign of an existing furniture website, converting it into a full-featured e-commerce platform. The goal was to enhance usability, improve product discovery, and create a calm, premium shopping experience aligned with modern interior design trends.",

    problem:
      "The original website lacked visual consistency, had cluttered layouts, and did not effectively highlight products or brand value, resulting in a poor browsing experience.",

    redesignGoals: [
      "Create a clean and minimal UI",
      "Improve product categorization and browsing",
      "Build trust through structured layouts and testimonials",
    ],

    designPoints: [
      {
        title: "Minimal Hero Section",
        desc: "Clean visuals and subtle typography set a premium tone.",
      },
      {
        title: "Category-Based Navigation",
        desc: "Users can quickly explore furniture types without confusion.",
      },
      {
        title: "Product-Centric Layouts",
        desc: "High-quality imagery keeps focus on furniture design and details.",
      },
      {
        title: "Trust & Social Proof",
        desc: "Customer testimonials reinforce brand credibility.",
      },
    ],

    brandSystem: [
      "Neutral color palette for calm visuals",
      "Minimal typography for readability",
      "Soft shadows and spacing for elegance",
      "Consistent product card design",
    ],
  },

  {
    slug: "perfume-ecommerce",
    title: "Scent Sphere",
    subtitle: "Perfume E-commerce App",
    nda: false,
    image: perfumeApp,

    role: "UI/UX Designer",
    tools: ["Figma"],

    overview:
      "Scent Sphere is a personal concept project for a luxury perfume e-commerce app. The goal was to design a clean, elegant, and user-friendly mobile shopping experience that emphasizes premium branding and seamless product discovery.",

    problem:
     "Many perfume apps have cluttered layouts, weak product presentation, or generic branding. I wanted to create an app that feels luxurious while making browsing, exploring, and purchasing perfumes intuitive and delightful.",

    redesignGoals: [
     "Create a premium, elegant visual identity for a perfume brand",
      "Design a smooth user flow from discovery to purchase",
      "Highlight products with immersive imagery and subtle animations",
      "Make promotions and new arrivals visually appealing",
    ],
    designPoints: [
     {
        title: "Hero-Focused Launch Screen",
        desc: "Large product imagery with subtle floral accents immediately communicates the brand identity.",
      },
      {
        title: "Clean Product Listing",
        desc: "New Arrivals and Collections are separated clearly for easy navigation.",
      },
      {
        title: "Promotional Highlights",
        desc: "Discount banners and CTA buttons are prominent but still elegant.",
      },
      {
        title: "Intuitive Navigation",
        desc: "Simple, minimal UI ensures smooth exploration and quick product access.",
      },
    ],
     brandSystem: [
      "Soft pink color palette with floral accents",
      "Elegant serif typography for premium feel",
      "High-contrast product cards for readability",
      "Consistent rounded buttons and spacing for aesthetics",
    ],
  },
];
