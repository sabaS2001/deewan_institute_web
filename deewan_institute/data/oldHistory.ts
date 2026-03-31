interface oldHistory {
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

export const oldHistory = {
    subTitle: "History of the Middle East",
    bannerImg: "../assets/images/others/history1.png",
    info: [
        {
            id: "overview",
            title: "Overview",
            description: "The Middle East is a region with a rich and complex history. Let’s explore how the Middle East was formed, what distinguishing features the region has, and who has historically ruled different areas of the Middle East.",
        },
        {
            id: "whatME",
            title: "What is the Middle East?",
            description: "The Middle East is a region comprising of the land to the south and east of the Mediterranean Sea (also known as the Levant), the Arabian Peninsula, and parts of North Africa. Today, the broadest definitions of the MENA region (Middle East & North Africa) include the territories of Lebanon, Syria, Iraq, Jordan, Palestine, Turkey, Cyprus, Saudi Arabia, Yemen, Oman, the UAE, Qatar, Bahrain, Kuwait, Egypt, Libya, Tunisia, Algeria, Morocco, Sudan, Iran, and Afghanistan—and sometimes even consider Greece and Pakistan.",
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
        {
            id: "byzantine",
            title: "The Byzantine Empire",
            description: "Though the Western Roman Empire fell in 476 CE, the Byzantine Empire would survive and thrived all the way until 1453 CE when Constantinople was captured by the Ottomans. However, while the Byzantine Empire remained strong for hundreds of years, its seat of power in the Middle East region only lasted until the mid 7th century. With the rise of Islam in the Arab world, Islamic forces invaded Syria, and would later take the rest of the Byzantine territories in Palestine, Egypt, and North Africa.",

        },
        {
            id: "islamicEmpires",
            title: "The Islamic Empires",
            description: "Following the death of the Prophet Muhammad in 632 CE, Islam spread throughout the Middle East. Between 632-661 CE, the “Rashidun” caliphate was established and led by the first four Islamic Caliphs, or successors of the Prophet—Abu Bakr (632-624 CE), ‘Umar (634-644 CE), ‘Uthman (644-656 CE), and ‘Ali (656-661 CE). These first four Caliphs are known as the “Rightly Guided” Caliphs, since they closely adhered to the teachings of the Prophet Muhammad. Following the death of ‘Ali, the Umayyad family took power and established the first of the great Islamic dynasties.",
        },
        {
            id: "umayyad",
            title: "The Umayyad Dynasty",
            description: "Headed by Abu Sufyan, the Umayyad family were wealthy merchants from Quraysh, and had initially resisted converting to Islam; however, once they did so, they quickly became prominent members of the Prophet Muhammad’s administration, and subsequently Caliphs. Then after several years of war, Abu Sufyan’s son Mu’awiya I overthrew the last of the “Rightly Guided” Caliphs, ‘Ali, and established the Umayyad dynasty. <br><br>The Umayyad dynasty was split into two branches of the Umayyad family, the Sufyanids and the Marwanids. Mu’awiya I and other descendants of Abu Sufyan ruled from 661-684 CE, while Marwan I and his descendants reigned from 684 CE until the end of the Umayyad dynasty in 750 CE. The Umayyad dynasty accelerated the Arabization of the region, establishing Arabic as the only official language and replacing Byzantine coins with new Arabic currency. Notably, the holy site of the Dome of the Rock in Jerusalem was completed under the Umayyad dynasty in 692 CE. <br><br>The Umayyad dynasty was split into two branches of the Umayyad family, the Sufyanids and the Marwanids. Mu’awiya I and other descendants of Abu Sufyan ruled from 661-684 CE, while Marwan I and his descendants reigned from 684 CE until the end of the Umayyad dynasty in 750 CE. The Umayyad dynasty accelerated the Arabization of the region, establishing Arabic as the only official language and replacing Byzantine coins with new Arabic currency. Notably, the holy site of the Dome of the Rock in Jerusalem was completed under the Umayyad dynasty in 692 CE. ",
            image: "../assets/images/others/history4.webp"
        },
        {
            id: "abbasid",
            title: "The Abbasid Dynasty",
            description: "While the Abbasids brought the dynasty to new heights, a series of changes weakened the Islamic Empire. In the 9th century, the Abbasid dynasty began to face internal challenges as several local autonomous dynasties were established. In 945 CE the Buyids established an Iranian Shia dynasty within the Abbasid territory, and in 1055 CE the Turkish Seljuks took over much of the Abbasid dynasty’s power, though they allowed the Abbasids to retain nominal leadership. <br><br>The Abbasid dynasty was the second great Islamic Empire, established after Abu Muslim’s revolt in 747 CE overthrew Marwan II, the last Umayyad Caliph. The Abbasids expanded the status and power of the previous Islamic regime, establishing an international sphere of influence. While the Umayyads had focused much of their attention on the Western parts of the empire, the Abbasids re-centred the Caliphate eastwards, establishing a new capital city in Baghdad. <br><br>Finally, in 1258 CE Mongol forces besieged Baghdad and destroyed the city, officially ending Abbasid rule. The Mongols’ invasion into the Middle East was stopped however, by the Mamluks, who would in turn establish their own empire. ",
            image: "../assets/images/others/history5.webp"
        },
        {
            id: "mamluk",
            title: "The Mamluk Dynasty",
            description: "The Mamluks were originally Turkish slave soldiers used by the Abbasid dynasty in the 9th century. The word Mamluk (مملوك) literally means ‘possessed’ or ‘property’ in Arabic. Though originally enslaved and forced to fight for the Islamic empire, the Mamluks quickly used their military power to seize political power as well, deposing caliphs in the Abbasid dynasty. After the Mongol sacking of Baghdad, the Mamluks successfully prevented further invasions into the Levant, establishing themselves as the dominant force in the region. Though the Mamluks were non-Arab Muslims, they successfully fought the Mongols and the Crusaders, earning praise from the Arabo-Islamic world. The Mamluks maintained a presence in Egypt and Syria even after those territories became provinces of the Ottoman Empire in 1517.",
        },
        {
            id: "ottoman",
            title: "The Ottoman Empire",
            description: "Though Ottoman expansion began much earlier, the Ottomans successfully and thoroughly took control of a large swath of territory in the region in the 16th century. The Ottomans took control of international trade routes previously controlled by the Mamluks, creating a vast and prosperous empire. The Ottoman Empire re-aligned the Islamic world, establishing Anatolia as an integral part of the Arab world, while an independent Iran was subsequently separated from this new Islamic alignment. <br><br>In 1566 the Ottoman empire began to face internal problems related to corruption, economic hardships, and social unrest. Nevertheless, the Ottomans were able tominimize the repercussions of such issues and maintain a strong regional presence throughout the 16th and 17th centuries. In the 18th century the Ottoman Empire faced imperial decline and pressure from superior Western technologies. While much of the ruling Ottoman class resisted making significant reforms, by the early 19th century it was clear the Ottoman empire was in desperate shape. Thus, the 19th century saw significant reorganization and reforms in an effort to create more centralized powers. <br><br>In 1566 the Ottoman empire began to face internal problems related to corruption, economic hardships, and social unrest. Nevertheless, the Ottomans were able to minimize the repercussions of such issues and maintain a strong regional presence throughout the 16th and 17th centuries. In the 18th century the Ottoman Empire faced imperial decline and pressure from superior Western technologies. While much of the ruling Ottoman class resisted making significant reforms, by the early 19th century it was clear the Ottoman empire was in desperate shape. Thus, the 19th century saw significant reorganization and reforms in an effort to create more centralized powers.<br><br>In 1908, a group of reformist conspirators called the Committee of Union and Progress (CUP) successfully overthrew the Ottoman monarchy to create a constitutional governing system. The CUP reformists were commonly known as the Young Turks. While the Young Turks initiated a new movement of Ottoman modernization, their foreign policy mistakes ultimately lead to the demise of the empire. Overestimating German military capabilities, the Ottomans fought in World War I with the Central Powers. At the end of the war in 1918, the Ottoman territories in the Middle East were divided up between the Western powers, as delineated in the 1916 Sykes-Picot agreement. This turn of events shaped much of the current Middle East, and led to the establishment of the modern nation-states that exist today in the region.",
            image: "../assets/images/others/history6.webp"
        }
    ]

}

export default oldHistory; 