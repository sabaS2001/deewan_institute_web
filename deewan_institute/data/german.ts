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

export const germanData = {
    title: "German Course",
    primaryColor: "#472211",
    rgb: '71, 34, 17',
    backgroundImg: "../assets/images/background/germanBG.png",
    bannerImg: "/assets/images/banner/germanBanner.png",
    description: "Our German program equips learners of all ages with practical language skills for travel, work, and academic opportunities. Courses focus on both accuracy and fluency, combining language learning with cultural insights. We offer:",
    language: "German",
    bottomBannerImg: "../assets/images/banner/germanBBG.png",
    bottomBannerTitle: "Transform Your German with Us!",
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
            name: "Exam Preparation (Goethe-Institute Exam,Test DaF, ÖSD)",
            description: "Professional preparation for Goethe-Institute exams, TestDaF, and ÖSD (Österreichisches Sprachdiplom Deutsch), helping students achieve internationally recognized certification.",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSeGhi5lxeMDlS4P_y7UsuJVPwEXsRqYT0tGNb5oPvpwHSJwfg/viewform",
        },
    ]
}

export default germanData; 