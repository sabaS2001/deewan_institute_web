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

export const frenchData : Foreign = {
    title: "French Course",
    primaryColor: "#3D7F67",
    rgb: '61, 127, 103',
    backgroundImg: "../assets/images/background/frenchBG.png",
    bannerImg: "../assets/images/banner/frenchBanner.png",
    description: "Our French program helps learners of all ages gain confidence in one of the world’s most spoken and culturally rich languages. You will practice speaking, listening, and cultural understanding with native-level teachers. Options include:",
    language: "French",
    bottomBannerImg: "../assets/images/banner/frenchBBG.png",
    bottomBannerTitle: "Master French Effortlessly!",
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
            name: "Exam Preparation for DELF (Diplôme d'études en Langue Française) & DALF (Diplôme Approfondi de Langue Française)",
            description: "Focused courses to prepare for DELF and DALF certifications, ensuring success in official French proficiency exams.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
    ]
}

export default frenchData; 