interface Foreign {
    title: string,
    primaryColor: string,
    rgb: string,
    backgroundImg: string,
    bannerImg: string,
    description: string,
    language: string,
    bottomBannerImg: string,
    bottomBannerTitle: string,
    bottomBannerButtonTitle: string,
    course: Array<{
        name: string
        description: string
        boldDescription?: string
        link: string
    }>
}

export const spanishData : Foreign = {
    title: "Spanish Course",
    primaryColor: "#2D4683",
    rgb: '45, 70, 131',
    backgroundImg: "../assets/images/background/spanishBG.png",
    bannerImg: "../assets/images/banner/spanishBanner.png",
    description: "Learn Spanish and connect with one of the most widely spoken languages worldwide. Our courses welcome learners of all ages and emphasize real-life conversation and cultural awareness, ensuring steady progress at every level. Students can choose:",
    language: "Spanish",
    bottomBannerImg: "../assets/images/banner/spanishBBG.png",
    bottomBannerTitle: "Take Your Spanish to the Next Level with Us!",
    bottomBannerButtonTitle: "Enroll Now!",
    course: [
        // Certificate
        {
            name: "Certificate",
            description: "Awarded upon completion of the course.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
        // One-to-One Course
        {
            name: "One-to-One Course",
            description: "Private one-on-one classes tailored to individual needs.",
            boldDescription: "(10 JD per 45-minute session)",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
        // Group Course
        {
            name: "Group Course",
            description: "Small group courses with a maximum of 6 students",
            boldDescription: "(5 JD per 45-minute session)",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
        // Hop On Hop Off Course
        {
            name: "Hop On Hop Off Course",
            description: "A flexible conversational course for intermediate and advanced learners, taught by native speakers. Students can join any time and attend until their package ends.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
        // Exam 
        {
            name: "Exam Preparation for DELE (Diplomas of Spanish as a Foreign Language)",
            description: "Tailored training for DELE (Diplomas of Spanish as a Foreign Language) at all levels.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
    ]
}

export default spanishData; 