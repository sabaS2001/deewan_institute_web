//interface

export interface CollectionBook {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    author: string;
    hosted?: string;
    description?: string;
    // price hidden for now — kept in interface for future use
    // price?: string;
    viewMoreLink?: string;
    wishlistLink?: string;
    cartLink?: string;
}

//Data

export const ammiyehCollection: CollectionBook[] = [
    {
        id: "ammiyeh-beginner",
        image: "/assets/images/books/ammiyeh/ammiyeh1.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Beginner Level",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "Beginner Level",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
    {
        id: "ammiyeh-practice-book",
        image: "/assets/images/books/ammiyeh/ammiyeh2.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Practice Book",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "The Practice Book",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
    {
        id: "ammiyeh-intermediate",
        image: "/assets/images/books/ammiyeh/ammiyeh3.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Intermediate Level",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "Intermediate Level",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
    {
        id: "ammiyeh-advanced",
        image: "/assets/images/books/ammiyeh/ammiyeh4.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Advanced Level",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "Advanced Level",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
    {
        id: "ammiyeh-french",
        image: "/assets/images/books/ammiyeh/ammiyeh5.png",
        imageAlt: "Manuel Complet d'Arabe Levantin – Arabe Pour Les Non-Natifs",
        title: "Manuel Complet d'Arabe Levantin",
        subtitle: "Arabe Pour Les Non-Natifs",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
    {
        id: "ammiyeh-spanish",
        image: "/assets/images/books/ammiyeh/ammiyeh6.png",
        imageAlt: "La Guía Completa de Árabe Levantino",
        title: "La Guía Completa de Árabe Levantino",
        author: "Mohammad K. Ayaseh",
        viewMoreLink: "#",
    },
];