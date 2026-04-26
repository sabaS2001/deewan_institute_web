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
  samplePdf?: string;
frontCover?: string;
backCover?: string;
}
// Data

export const podcastSeasons: PodcastSeason[] = [
  {
    id: "podcast-season-1",
    image: "/assets/images/books/podcasts/podcast1.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 1",
    title: "GUIDE TO DEEWAN ARABIC PODCAST : Levantine Arabic",
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
    subtitle: "Season 1",

    // hosted: "Spotify / Apple Podcasts",
    description:
      "Engaging Arabic lessons via teacher-student discussions on cultural topics (veganism, racism, parenting). For all levels, with accompanying book of glossaries and episode-based exercises.",
       samplePdf: "/assets/pdf/samples/se1-sample.pdf",
  frontCover: "/assets/images/books/podcasts/se1-front.jpg",
  backCover: "/assets/images/books/podcasts/se1-back.jpg",
  },
  {
    id: "podcast-season-2",
    image: "/assets/images/books/podcasts/podcast2.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 2: Levantine Arabic",
    title: "GUIDE TO DEEWAN ARABIC PODCAST: Levantine Arabic",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Season 2",
    // hosted: "Spotify / Apple Podcasts",
    description:
      "Pioneering Arabic lessons with teacher-student chats on cultural topics (veganism, racism, parenting). Suits all levels; paired with book of episode glossaries and exercises for immersive learning.",
    listenLink: "#",
      samplePdf: "/assets/pdf/samples/se2-sample.pdf",
  frontCover: "/assets/images/books/podcasts/se2-front.jpg",
  backCover: "/assets/images/books/podcasts/se2-back.jpg",

  },
  {
    id: "podcast-season-3",
    image: "/assets/images/books/podcasts/podcast3.png",
    imageAlt:
      "Guide to Deewan Arabic Podcast – Season 3: Arabic for Non-Native Speakers",
    title: "GUIDE TO DEEWAN ARABIC PODCAST: Arabic for Non-Native Speakers",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Season 3",
    // hosted: "Spotify / Apple Podcasts",
    description:
      "Teacher-learner discussions on cultural topics (veganism, racism, parenting) for all Arabic levels. Includes companion book with episode glossaries and exercises for immersive learning.",
    listenLink: "#",
      samplePdf: "/assets/pdf/samples/se3-sample.pdf",
  frontCover: "/assets/images/books/podcasts/se3-front.jpg",
  backCover: "/assets/images/books/podcasts/se3-back.jpg",
  },
  {
    id: "podcast-season-5",
    image: "/assets/images/books/podcasts/podcast5.png",
    imageAlt: "Guide to Deewan Arabic Podcast – Season 5, Level A1–A2",
    title: "The Deewan Podcast: Bridging Education and Entertainment",
    author: "Mohammad K. Ayaseh",
    price: 15,
    // reviews: [
    //         {
    //             reviewer: "Michael",
    //             rating: 5,
    //             comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
    //         },

    //     ],
    subtitle: "Season 5",
    // hosted: "Spotify",
    description: "A beginner-friendly (A1–A2) Arabic learning series with natural teacher-learner conversations on everyday topics like family, school, friends, and food. Paired with a companion book featuring glossaries and exercises for effective, real-life practice.",
    listenLink: "#",
      samplePdf: "/assets/pdf/samples/se5-sample.pdf",
  frontCover: "/assets/images/books/podcasts/se5-front.jpg",
  backCover: "/assets/images/books/podcasts/se5-back.jpg",
  },
];
