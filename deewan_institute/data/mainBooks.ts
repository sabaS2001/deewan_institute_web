//Interface

export interface Review {
    reviewer: string;
    rating: number; // 1–5
    comment: string;
}

export interface MainBook {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    author: string;
    hosted?: string;
    description: string;
    reviews?: Review[];
    // for future use
    // price?: string;
    viewMoreLink: string;
    wishlistLink?: string;
    cartLink?: string;
}

//Data

export const mainBooks: MainBook[] = [
    {
        id: "main-book-levantine-guide-1",
        image: "/assets/images/books/mainBooks/mainAmmiyeh1.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Level 1",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "Beginner Level",
        author: "Mohammad K. Ayaseh",
        hosted: "Amazon",
        description:
            "The Comprehensive Guide to Levantine Arabic is not intended only for Beginner Level students but also to fill the gaps for any Arabic student at any level. This book facilitates acquiring and ...",
        reviews: [
            {
                reviewer: "Sarah M.",
                rating: 5,
                comment: "An outstanding resource for anyone starting their Arabic journey.",
            },
        ],
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
    },
    {
        id: "main-book-everyday-idioms",
        image: "/assets/images/books/mainBooks/idoms.svg",
        imageAlt: "Everyday Arabic Idioms",
        title: "Everyday Arabic Idioms",
        subtitle: "Book 6",
        author: "Mohammad K. Ayaseh",
        hosted: "Amazon",
        description:
            "This book helps you expand your vocabulary and improve fluency in Levantine Arabic through common idioms and expressions. Each idiom is presented in context with example sentences and clear English explanations...",
        reviews: [
            {
                reviewer: "James T.",
                rating: 4,
                comment: "Really bridges the gap between textbook Arabic and everyday speech.",
            },
        ],
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
    },
    {
        id: "main-book-levantine-guide-2",
        image: "/assets/images/books/mainBooks/mainBook2.png",
        imageAlt: "GUIDE TO DEEWAN ARABIC PODCAST – Season 5",
        title: "The Deewan Podcast: Bridging Education and Entertainment",
        subtitle: "Season 5",
        author: "Mohammad K. Ayaseh",
        hosted: "Amazon",
        description:
            "A beginner-friendly (A1–A2) Arabic learning series with natural teacher-learner conversations on everyday topics like family, school, friends, and food. Paired with a companion book featuring glossaries and exercises for effective, real-life practice.",
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
    },
];