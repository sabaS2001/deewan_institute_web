/* ─────────────────────────────────────────────
   Interface
   Podcasts have a distinct shape from books:
   - label / subtitle instead of title
   - hosted (platform) is more prominent
   - no author (tied to Deewan brand)
   - no cart/wishlist — just a listen link
───────────────────────────────────────────── */

export interface PodcastSeason {
    id: string;
    image: string;
    imageAlt: string;
    label: string;           // e.g. "Season 1"
    subtitle?: string;       // e.g. "Levantine Arabic" or level tag
    hosted?: string;         // e.g. "Spotify / Apple Podcasts"
    description?: string;
    // for future use
    // price?: string;
    listenLink?: string;     // replaces viewMoreLink — podcasts are listened to, not bought
}

//Data

export const podcastSeasons: PodcastSeason[] = [
    {
        id: "podcast-season-1",
        image: "/assets/images/books/podcasts/podcast1.png",
        imageAlt: "Guide to Deewan Arabic Podcast – Season 1",
        label: "Season 1",
        hosted: "Spotify / Apple Podcasts",
        description: "The first season covering foundational Levantine Arabic topics.",
        listenLink: "#",
    },
    {
        id: "podcast-season-2",
        image: "/assets/images/books/podcasts/podcast2.png",
        imageAlt: "Guide to Deewan Arabic Podcast – Season 2: Levantine Arabic",
        label: "Season 2",
        subtitle: "Levantine Arabic",
        hosted: "Spotify / Apple Podcasts",
        description: "Season 2 dives deeper into Levantine Arabic conversations and culture.",
        listenLink: "#",
    },
    {
        id: "podcast-season-3",
        image: "/assets/images/books/podcasts/podcast3.png",
        imageAlt: "Guide to Deewan Arabic Podcast – Season 3: Arabic for Non-Native Speakers",
        label: "Season 3",
        subtitle: "Arabic for Non-Native Speakers",
        hosted: "Spotify / Apple Podcasts",
        description: "Tailored for non-native speakers looking to build listening comprehension.",
        listenLink: "#",
    },
    {
        id: "podcast-season-5",
        image: "/assets/images/books/podcasts/podcast4.png",
        imageAlt: "Guide to Deewan Arabic Podcast – Season 5, Level A1–A2",
        label: "Season 5",
        subtitle: "Level A1–A2 | Arabic for Non-Native Speakers",
        hosted: "Spotify / Apple Podcasts",
        description: "A structured A1–A2 series ideal for absolute beginners.",
        listenLink: "#",
    },
];