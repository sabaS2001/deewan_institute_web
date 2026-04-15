//interface
export interface Review {
    reviewer: string;
    rating: number; // 1–5
    comment: string;
}
export interface CollectionBook {
    id: string;
    image: string;
    imageAlt: string;
    title: string;
    subtitle?: string;
    author: string;
    hosted?: string;
    description?: string;
    reviews?: Review[];
    // price hidden for now — kept in interface for future use
    price?: number;
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
        description:"The Comprehensive Guide to Levantine Arabic is a user-friendly resource designed for learners at all levels, helping them both build and strengthen their skills in spoken Levantine Arabic. It provides clear, structured instruction, reinforces vocabulary and grammar through progressive lessons, and includes practical listening and speaking exercises—along with exclusive audio resources—to support effective, independent learning.",
        reviews: [
            {
                reviewer: "Michael",
                rating: 5,
                comment: "The best spoken levantine arabic book. The author is a native arabic speaker, and the textbook is very well written. The book starts from the arabic letters and all texts are written with arabic script which is great for the learner...",
            },
            
        ],
        viewMoreLink: "#",
        price: 20,
    },
    {
        id: "ammiyeh-practice-book",
        image: "/assets/images/books/ammiyeh/ammiyeh2.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Practice Book",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "The Practice Book",
        author: "Mohammad K. Ayaseh",
        description: "This practice book is a companion to The Comprehensive Guide to Levantine Arabic, designed to help students deepen their understanding and actively apply their knowledge of Levantine Arabic.",
        reviews: [
            {
                reviewer: "	dave",
                rating: 5,
                comment: "This book is amazing! It is SO difficult to find Arabic textbooks that aren’t in MSA. I was hesitant about the cost at first but let me tell you I would pay double knowing how good it is now. I have a stack of useless Arabic books at home but with this, I feel like I can finally get a handle on learning and my trip to Levantine Arabic fluency just became a lot easier!",
            },
            {
                reviewer: "Sarah's page",
                rating: 5,
                comment: "After much research, we purchased this book--and both my husband and daughter are studying it 30 minutes a day. It's excellent from what they are saying. Highly recommended.",
            },
            {
                reviewer: "Diana Patricia González Estrada",
                rating: 5,
                comment: "I am student at Deewan, and the book is very well done for learning Arabic language. It has good examples to study by yourself too.",
            },
        ],
        viewMoreLink: "#",
        price: 15,
    },
    {
        id: "ammiyeh-intermediate",
        image: "/assets/images/books/ammiyeh/ammiyeh3.png",
        imageAlt: "The Comprehensive Guide to Levantine Arabic – Intermediate Level",
        title: "The Comprehensive Guide to Levantine Arabic",
        subtitle: "Intermediate Level",
        description:"The Comprehensive Guide to Levantine Arabic – Intermediate Level is a versatile resource designed to strengthen and expand learners’ skills in spoken Arabic. While aimed at intermediate (B1–B2) students, it also supports learners at any level by reinforcing foundations, building vocabulary, and improving real-life communication. The book emphasizes practical, everyday usage, making it ideal for both self-study and classroom learning.",
        author: "Mohammad K. Ayaseh",
        // reviews: [
        //     {
        //         reviewer: "Sarah M.",
        //         rating: 5,
        //         comment: "An outstanding resource for anyone starting their Arabic journey.",
        //     },
        // ],
        viewMoreLink: "#",
        price: 20,
    },
    // {
    //     id: "ammiyeh-advanced",
    //     image: "/assets/images/books/ammiyeh/ammiyeh4.png",
    //     imageAlt: "The Comprehensive Guide to Levantine Arabic – Advanced Level",
    //     title: "The Comprehensive Guide to Levantine Arabic",
    //     subtitle: "Advanced Level",
    //     author: "Mohammad K. Ayaseh",
    //     // reviews: [
    //     //     {
    //     //         reviewer: "Sarah M.",
    //     //         rating: 5,
    //     //         comment: "An outstanding resource for anyone starting their Arabic journey.",
    //     //     },
    //     // ],
    //     viewMoreLink: "#",
    // },
    {
        id: "ammiyeh-french",
        image: "/assets/images/books/ammiyeh/ammiyeh5.png",
        imageAlt: "Manuel Complet d'Arabe Levantin – Arabe Pour Les Non-Natifs",
        title: "Manuel Complet d'Arabe Levantin",
        subtitle: "Arabe Pour Les Non-Natifs",
        author: "Mohammad K. Ayaseh",
        description:"*La Guía Completa del Árabe Levantino* est une ressource accessible à tous les apprenants, quel que soit leur niveau, conçue pour développer et renforcer les compétences en arabe levantin. Elle propose une approche claire et progressive, couvrant les bases essentielles du dialecte parlé, tout en intégrant des exercices pratiques de compréhension orale et des fichiers audio exclusifs. Adapté à l’auto-apprentissage comme à l’enseignement encadré, ce livre favorise une progression continue grâce à une méthode structurée et efficace.",
        reviews: [
            {
                reviewer: "Recientemente tuve el placer de leer",
                rating: 5,
                comment: "MANUEL COMPLET D'ARABE LEVANTIN est une ressource exceptionnelle pour les apprenants de l'arabe levantin, qu'ils soient débutants ou avancés. Ce manuel offre un accès exclusif en ligne à des fichiers audio, ce qui en fait une ressource interactive et précieuse...",
            },
        ],
        viewMoreLink: "#",
        price: 20,
    },
    {
        id: "ammiyeh-spanish",
        image: "/assets/images/books/ammiyeh/ammiyeh6.png",
        imageAlt: "La Guía Completa de Árabe Levantino",
        title: "La Guía Completa de Árabe Levantino",
        author: "Mohammad K. Ayaseh",
        description:"*La Guía Completa del Árabe Levantino* es un recurso integral para estudiantes de todos los niveles, diseñado para facilitar tanto el aprendizaje como el refuerzo del árabe levantino. Ofrece una estructura clara que cubre las necesidades esenciales del árabe coloquial, fortalece el vocabulario de forma progresiva e incorpora ejercicios de comprensión auditiva y oral, junto con acceso a archivos de audio. Ideal para el autoaprendizaje o el estudio guiado, promueve una mejora constante mediante un enfoque práctico y accesible.",
        reviews: [
            {
                reviewer: "Recientemente tuve el placer de leer ",
                rating: 5,
                comment: "Recientemente tuve el placer de leer - LA GUÍA COMPLETA DE ÁRABE LEVANTINO, y debo decir que superó todas mis expectativas. Este libro es verdaderamente una joya para cualquier persona interesada en aprender árabe levantino.",
            },

            {
                reviewer: "Dario Shehadeh",
                rating: 5,
                comment: "Estuve buscando un buen manual para introducirme en el arabe a traves del dialecto levantino/shaami",

            },
        ],
        viewMoreLink: "#",
        price: 20,
    },
];