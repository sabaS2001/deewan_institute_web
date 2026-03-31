interface palestineHistory {
    subTitle: string,
    bannerImg: string,
    info: Array<{
        id: string,
        title?: string
        subtitle?: string,
        image?: string,
        flag_one?: string,
        caption_one?: string,
        flag_two?: string,
        caption_two?: string,
        description: string,
    }>
}

export const palestineHistory = {
    subTitle: "The Zionist Project in Palestine",
    bannerImg: "../assets/images/others/history8.png",
    info: [
        {
            id: "overview",
            title: "Overview",
            description: "This page presents a clear and structured overview of the complex historical context and the main stages of the situation in Palestine.",
        },
        {
            id: "whatME",
            title: "What is the Middle East?",
            description: "It is difficult to pinpoint an exact starting point for the Arab-Israeli situation, and there are a wide range of opinions regarding what events were most important in setting in motion the current situation. Nevertheless, we will begin with the rise of Zionist movement in the late 19th century for the sake of giving a broad overview. <br><br> The World Zionist Organization was founded in 1897 at the first ever Zionist congress led by Theodore Herzl, known as the father of modern Zionism. After being elected president, Herzl presented the Basel Program for the first time, which was adopted as the first Zionist manifesto. The Basel program set out the goals of the Zionist movement, which meant, first and foremost, the establishment of a publicly and legally assured home in Palestine for all Jewish people. Palestine, which was under control of the Ottoman Empire at the time, started to receive large amounts of Jewish immigrants who were “returning” from Europe and other parts of the world to what they would call their home. Zionist organizations began buying plots of land in Palestine with the goal of (re)claiming land on which Jews could live and work. At the same time, a strong sense of Arab nationalism was growing among the Ottoman-ruled Arabs."
        },
        {
            id: "whereME",
            title: "Where did the term ‘Middle East’ come from?",
            description: "Though this region is steeped in ancient history of the oldest civilizations, the term Middle East is a relatively new invention, originally conceived in the late nineteenth century by British imperialists to denote an area between the Near East (theBalkans and the Ottoman Empire) and the Far East (countries of eastern Asia such as China, Japan, and Korea). <br><br>Of course, the description of areas as ‘near’ or ‘far’ to the east is entirely in reference to Europe and the West. Interestingly, the modern Arabic endonym to describe the region matches the Eurocentric term ‘Middle East’; the term in Arabic is الشرق الاوسط(al-Sharq al-Awsat), which literally means the Middle East. In English, some people also use the term Near East synonymously with Middle East. ",
        },
        {
            id: "mesopotamian",
            title: "Early Mesopotamian History: 4000 BCE-323 BCE",
            description: "This region of the world is often called the cradle of civilization. Much of the rise of agriculture, writing, and technology can be attributed to ancient Mesopotamia. Materials like bronze were developed here, and the first ever alphabet was created in the Levant. Though humans were present in the region long before the fourth millennium, the first formation of organized civilization is dated to this time. During this time, numerous empires rose and fell, such as the first Egyptian and Sumerian civilizations, the Akkadian Empire, the Babylonian Empire, the Neo-Assyrian Empire, the Phoenician Empire, the Achaemenid (Persian) Empire, among many others. These empires created the foundations for the modern civilizations that would later arise in the region.",
        },
        {
            id: "greekRoman",
            title: "Greek and Roman Empires",
            description: "In 334 BCE Alexander the Great, king of Macedon, invaded and captured the Persian Empire in its entirety. By the time he died in 323 BCE, his empire stretched all the way from Greece to northwest India. While Hellenistic cultural influences in the region have largely been overshadowed by subsequent empires, relics of Hellenic history remain in things as simple as names—such as Alexandria in Egypt or the historic name of Amman, “Philadelphia.”",
            image: "../assets/images/others/history2.png",
        },
        {
            id: "earlyRoman",
            title: "The Early Roman Empire",
            description: "In 31 BCE, Augustus overthrew the Hellenic powers, initiating the start of the Roman Empire. Augustus ruled until 14 CE, reforming Roman laws and securing the empire’s borders. During this early period the Romans established themselves as one of the preeminent civilizations and empires of the Middle East, creating a 200 year-long Pax Romana. <br><br>However, from 235 CE the Roman Empire faced numerous attacks threatening its prosperity, and continued to face such threats until 300 CE. Given the extent of internal and external threats to Roman stability, the emperor Diocletian split the empire into two in 285 CE. The Western Roman empire would administer the western half while the Eastern Roman Empire would administer the eastern half. Thus, after 285 CE the Eastern Roman Empire continued to govern the Middle Eastern territories, becoming known as the Byzantine Empire.",
            image: "../assets/images/others/history3.png",
        },
    ]

}

export default palestineHistory; 