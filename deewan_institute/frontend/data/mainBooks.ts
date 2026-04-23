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
    price?: number;
    viewMoreLink: string;
    wishlistLink?: string;
    cartLink?: string;
    samplePdf?: string;
frontCover?: string;
backCover?: string;
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
        price: 20,
        //hosted: "Amazon",
        description:
            "The Comprehensive Guide to Levantine Arabic is not intended only for Beginner Level students but also to fill the gaps for any Arabic student at any level. This book facilitates acquiring and ...",
        reviews: [
            {
                reviewer: "TRH",
                rating: 5,
                comment: "Lovely book if you want to learn to speak and read Arabic. Pair it with Al-Kitaab’s Alif Baa and you get a good rounded education. Worth every penny and fun to use.",
            },
            {
                reviewer: "Margo",
                rating: 5,
                comment: "Mid-last year I was heading to Amman to study Levantine Arabic at Deewan Institute, and one of the major factors in my decision to study there was that their book (Comprehensive Guide to Levantine Arabic) was known to be the best on the market.",
            },
        ],
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
        samplePdf: "/assets/pdf/samples/book-1-sample.pdf",
        frontCover: "/assets/images/books/ammiyeh/book-1-front.jpg",
        backCover: "/assets/images/books/ammiyeh/book-1-back.jpg",
    },
    {
        id: "main-book-everyday-idioms",
        image: "/assets/images/books/mainBooks/idoms.svg",
        imageAlt: "Everyday Arabic Idioms",
        title: "Everyday Arabic Idioms",
        subtitle: "Book 6",
        author: "Mohammad K. Ayaseh",
        price: 10,
        //hosted: "Amazon",
        description:
            "This book helps you expand your vocabulary and improve fluency in Levantine Arabic through common idioms and expressions. Each idiom is presented in context with example sentences and clear English explanations...",
        reviews: [
            {
                reviewer: "	Scott",
                rating: 5,
                comment: "Any time a new spoken Arabic resource comes out on the market, it's a cause for rejoicing for those who live in the Middle East and/or have Arabic-speaking friends and/or family. This book of idioms is no exception, especially as it comes from Deewan Institute in Amman...",
            },
            {
                reviewer: "	Recientemente tuve el placer de leer",
                rating: 5,
                comment: "Everyday Arabic Idioms- is an essential resource for learners of Levantine Arabic. This book is designed to expand your vocabulary and improve your ability to communicate effectively in Arabic.",
            },
        ],
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
        samplePdf: "/assets/pdf/samples/idiom-sample.pdf",
        frontCover: "/assets/images/books/mainBooks/idiom-front.jpg",
        backCover: "/assets/images/books/mainBooks/idiom-back.jpg",
    },
    {
        id: "main-book-levantine-guide-2",
        image: "/assets/images/books/mainBooks/mainBook2.png",
        imageAlt: "GUIDE TO DEEWAN ARABIC PODCAST – Season 5",
        title: "The Deewan Podcast: Bridging Education and Entertainment",
        subtitle: "Season 5",
        author: "Mohammad K. Ayaseh",
        price: 15,
        //hosted: "Amazon",
        description:
            "A beginner-friendly (A1–A2) Arabic learning series with natural teacher-learner conversations on everyday topics like family, school, friends, and food. Paired with a companion book featuring glossaries and exercises for effective, real-life practice.",
        viewMoreLink: "#",
        wishlistLink: "#",
        cartLink: "#",
        samplePdf: "/assets/pdf/samples/se5-sample.pdf",
        frontCover: "/assets/images/books/podcasts/se5-front.jpg",
        backCover: "/assets/images/books/podcasts/se5-back.jpg",
    },
];