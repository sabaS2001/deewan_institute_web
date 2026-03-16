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

export const englishData = {
    title: "English Course",
    primaryColor: "#764249",
    rgb: "118, 66, 73",
    backgroundImg: "../assets/images/background/englishBG.png",
    bannerImg: "../assets/images/banner/englishBanner.png",
    description: "Our English courses are designed to build strong communication skills for learners of all levels and all ages. Whether you are looking to strengthen your grammar, improve fluency, or prepare for academic and professional settings, we offer:",
    language: "English",
    bottomBannerImg: "../assets/images/banner/englishBBG.png",
    bottomBannerTitle: "Ready to Elevate Your English Skills?",
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
        // Exam Preparation (IELTS, TOFEL) 
        {
            name: "Exam Preparation (IELTS, TOFEL)",
            description: "Specialized training for IELTS, TOEFL, and Tawjihi exams, designed to equip students with the strategies and practice needed to succeed.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
        // Business English 
        {
            name: "Business English",
            description: "Tailored one-on-one courses focusing on professional communication, workplace interaction, and industry-specific language.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },


    ]
}

export default englishData; 