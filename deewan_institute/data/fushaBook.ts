//Interface


interface Review {
    reviewer: string;
    rating: number;
    comment: string;
}
// Re-export so consumers can import Review from here too if needed
export type { Review };

export interface FushaBook {
    id: string;
    image: string;
    imageAlt: string;
    collectionLabel: string;
    title: string;
    subtitle?: string;
    author: string;
    hosted?: string;
    description: string;
    reviews?: Review[];
    //  for future use
    price?: number;
    viewMoreLink: string;
    wishlistLink?: string;
    cartLink?: string;
}

//Data

export const fushaBook: FushaBook = {
    id: "fusha-msa-guide",
    image: "/assets/images/books/fusha/fusha1.png",
    imageAlt: "The Comprehensive Guide to Modern Standard Arabic",
    collectionLabel: "Fusha Collection",
    title: "The Comprehensive Guide to Modern Standard Arabic",
    author: "Mohammad K. Ayaseh",
    //hosted: "Amazon",
    description:
        "The Comprehensive Guide to Modern Standard Arabic is unique to other textbooks in that it focuses less on grammar and more on speaking, with the aim of teaching students to confidently communicate in various professional environments. It is the culmination of years of experience teaching MSA and Levantine Arabic to hundreds of students from all around the world.",
    reviews: [
        {
            reviewer: "Belle",
            rating: 5,
            comment: "The book to learn first grade classes in Arabic.",
        },
        {
            reviewer: "Recientemente tuve el placer de leer",
            rating: 5,
            comment: "As a teacher of the Arabic language, I have found 'The Comprehensive Guide to Modern Standard Arabic' to be an invaluable resource in my teaching curriculum. This unique textbook, authored by co-founder Mohammad K. Ayaseh, places a strong emphasis on practical communication skills in professional contexts...",
        },
    ],
    viewMoreLink: "#",
    wishlistLink: "#",
    cartLink: "#",
    price: 25,
};