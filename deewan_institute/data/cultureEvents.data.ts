export const SIGNUP_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScUjUaO344snsC7-Q6uWl2A-QEzkg-kBbJO8m91_jdJFkk5jg/viewform";

export interface EventMeta {
  time: string;
  oneToOne: string;
  group?: string;
  cost?: string;
}

export interface CultureEvent {
  index: string;
  accentKey: "accentRed" | "accentNavy" | "accentGold" | "accentTeal" | "accentPlum";
  btnKey: "red" | "navy" | "gold" | "teal" | "plum";
  label: string;
  title: string;
  body: string;
  meta: EventMeta;
  image: string;
  imageAlt: string;
  imageLeft: boolean;
  altBg: boolean;
}

export const events: CultureEvent[] = [
  {
    index: "01",
    accentKey: "accentRed",
    btnKey: "red",
    label: "Craft & Heritage",
    title: "Palestinian Embroidery Workshop",
    body: "In this weekly hands-on workshop, students will discover different styles of Palestinian embroidery, learn the stories behind the patterns, and practice traditional cross-stitch techniques — no prior experience needed.",
    meta: {
      time: "Sundays 6:20 PM – 8:00 PM",
      oneToOne: "7 JDs (includes all materials)",
      group: "14 JDs (includes all materials)",
    },
    image: "/assets/images/others/culture3.svg",
    imageAlt: "Palestinian Embroidery Workshop",
    imageLeft: false,
    altBg: false,
  },
  {
    index: "02",
    accentKey: "accentGold",
    btnKey: "gold",
    label: "Food & Language",
    title: "Arabic Cooking — Cook, Learn & Eat",
    body: "Turn your passion for food into a fun and flavorful cultural experience. Learn Arabic while cooking and enjoying some of the region's most iconic and delicious dishes. Come cook, learn, and eat with us!",
    meta: {
      time: "Mondays 5:00 PM – 8:00 PM",
      oneToOne: "7 JDs (includes all materials)",
      group: "14 JDs (includes all materials)",
    },
    image: "/assets/images/others/culture5.svg",
    imageAlt: "Arabic Cooking Class",
    imageLeft: true,
    altBg: true,
  },
  {
    index: "03",
    accentKey: "accentNavy",
    btnKey: "navy",
    label: "Art & Script",
    title: "Calligraphy Course",
    body: "Discover the beauty of Arabic through calligraphy in this creative and hands-on 2-hour session, where art meets language. Learn the basics of Arabic lettering, experiment with traditional styles, and create your own calligraphy artwork — no prior experience needed.",
    meta: {
      time: "Tuesdays 6:20 PM – 8:00 PM",
      oneToOne: "7 JDs (includes all materials)",
      group: "14 JDs (includes all materials)",
    },
    image: "/assets/images/others/culture4.svg",
    imageAlt: "Arabic Calligraphy Course",
    imageLeft: false,
    altBg: false,
  },
  {
    index: "04",
    accentKey: "accentPlum",
    btnKey: "plum",
    label: "Cinema & Dialogue",
    title: "Arabic Film Discussion Night",
    body: "Discover the richness of Arabic language and culture through film! Each week we screen a different Arabic movie with subtitles, followed by a casual group discussion. Learn new vocabulary, explore diverse perspectives, and enjoy a relaxed evening with others who love cinema and culture.",
    meta: {
      time: "Thursdays 5:00 PM – 8:00 PM",
      oneToOne: "7 JDs",
    },
    image: "/assets/images/others/culture8.svg",
    imageAlt: "Arabic Film Discussion Night",
    imageLeft: true,
    altBg: true,
  },
];