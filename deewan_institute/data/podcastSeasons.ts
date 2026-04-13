export interface Review {
  reviewer: string;
  rating: number; // 1–5
  comment: string;
}
// Interface
export interface PodcastSeason {
  id: string;
  image: string;
  imageAlt: string;
  title: string; // was label
  subtitle?: string;
  author?: string; // optional — podcasts may omit it
  hosted?: string;
  description?: string;
  reviews?: Review[];
  viewMoreLink?: string;
  wishlistLink?: string;
  cartLink?: string;
  listenLink?: string; // kept for the "Listen Now" CTA
  price?: number;
}
// Data

export const podcastSeasons: PodcastSeason[] = [
  {
    id: "podcast-season-1",
    image: "/assets/images/books/podcasts/podcast1.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 1",
    title: "Season 1",
    author: "Mohammad K. Ayaseh",
    price: 15,
    reviews: [
      {
        reviewer: "Scott",
        rating: 5,
        comment:
          "Spoken Arabic resources are few and far between, particularly for anything other than the Egyptian, Syrian, and Lebanese dialects. Not only is this an excellent resource for Jordanian Arabic, ...",
      },

      {
        reviewer: "Lindsey Snell",
        rating: 5,
        comment:
          "Possibly the most useful Levantine learning tool I’ve had. Transcripts of all the Deewan Levantine Arabic podcast episodes (with foreign students of Arabic) English translations, definitions of some likely-new words, and the Arabic transcript notes where a student has made an error.",
      },

      {
        reviewer: "piero schneider",
        rating: 5,
        comment:
          "My feedback about this podcast book? I think it is one of the most useful resources I’ve found until now. Maybe is not suitable for an “absolute beginner”** but if you have a minimum familiarity with the alphabet and with basic grammar rules it can work...",
      },
    ],
    subtitle: "Levantine Arabic",

    // hosted: "Spotify / Apple Podcasts",
    description:
      "The first season covering foundational Levantine Arabic topics.",
  },
  {
    id: "podcast-season-2",
    image: "/assets/images/books/podcasts/podcast2.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 2: Levantine Arabic",
    title: "Season 2",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Levantine Arabic",
    // hosted: "Spotify / Apple Podcasts",
    description:
      "Season 2 dives deeper into Levantine Arabic conversations and culture.",
    listenLink: "#",
  },
  {
    id: "podcast-season-3",
    image: "/assets/images/books/podcasts/podcast3.png",
    imageAlt:
      "Guide to Deewan Arabic Podcast – Season 3: Arabic for Non-Native Speakers",
    title: "Season 3",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Arabic for Non-Native Speakers",
    // hosted: "Spotify / Apple Podcasts",
    description:
      "Tailored for non-native speakers looking to build listening comprehension.",
    listenLink: "#",
  },
  {
    id: "podcast-season-5",
    image: "/assets/images/books/podcasts/podcast4.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 5, Level A1–A2",
    title: "Season 5",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Level A1–A2 | Arabic for Non-Native Speakers",
    // hosted: "Spotify",
    description: "A structured A1–A2 series ideal for absolute beginners.",
    listenLink: "#",
  },
];
