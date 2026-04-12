interface Foreign {
  circle: Array<{
    title: string;
    image: string;
    link: string;
  }>;
}

export const foreignData: Foreign = {
  circle: [
    // English
    {
      title: "English",
      image: "../assets/images/others/english.png",
      link: "/foreign-languages/english-course",
    },
    // French
    {
      title: "French",
      image: "../assets/images/others/english.png",
      link: "/foreign-languages/french-course",
    },
    // Spanish
    {
      title: "Spanish",
      image: "../assets/images/others/spanish.png",
      link: "/foreign-languages/spanish-course",
    },
        // Spanish
    {
      title: "German",
      image: "../assets/images/others/germany.png",
      link: "/foreign-languages/german-course",
    },
  ],
};

export default foreignData;
