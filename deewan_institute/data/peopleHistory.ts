interface peopleHistory {
    subTitle: string,
    bannerImg: string,
    info: Array<{
        id: string,
        title?: string
        label?: string,
        subtitle?: string,
        image?: string,
        image_two?: string,
        flag_one?: string,
        caption_one?: string,
        flag_two?: string,
        caption_two?: string,
        description: string,
    }>
}

export const peopleHistory = {
    subTitle: "The People of the Middle East",
    bannerImg: "../assets/images/others/history14.webp",
    info: [
        {
            id: "overview",
            title: "Overview",
            description: "The Middle East has been the crossroad of the world’s biggest empires and the meeting point of continents and peoples. Since ancient times, its population has consisted of numerous heterogeneous ethnic and religious groups. This list is by no means a complete overview of every religious or ethnic group in the Middle East but serves to indicate some of the largest and most well-known groups inhabiting the region."
        },
        {
            id: "arabs",
            title: "Arabs",
            image_two: "../assets/images/others/history15.jpeg",
            description: "Arabs are by far the biggest ethnic group in the region, and aside from the populations of Turkey, Iran, and Palestine, Arabs are the largest ethnic group in every country in the Middle East. As the group “Arab” itself consists of multiple sub-groups, we often make further distinctions based on religion or country, like Arab-Christian, Arab-Syrian, Arab-Muslim etc. Arabs, as the name suggests, speak the Arabic language, but colloquial dialects differ significantly by region; the most prominent of which are the Levantine, Iraqi, Gulf, and Egyptian dialects. Arab societies feature a diverse range of cultures and customs that differ across various regions, which is why it’s essential to appreciate the unique aspects of each rather than assuming a singular Arab culture.",
        },
        {
            id: "druze",
            title: "Druze",
            images: "../assets/images/others/history16.webp",
            description: "Most Druze people reside in Syria and Lebanon, where they are mostly concentrated around the Jabal Al-Druze and Mount Lebanon area. Even though the Druze population is relatively small, they have played a big role in Syrian and Lebanese politics and nation building. While Druze people are often portrayed as being Arabs that follow the Druze religion, partly because most Druze are native Arabic speakers, Druze are often considered a distinct sub-ethnic group of Arabs."
        },
        {
            id: "kurds",
            title: "Kurds",
            image_two: "../assets/images/others/history17.jpg",
            description: "Kurds are another group who live the Middle East; however, their native lands are divided by international borders of four states, namely Iran, Iraq, Syria, and Turkey. Due to this geopolitical division of their lands, we will often refer to, for example, Kurdish people from Iraq as Iraqi-Kurds. It is important to note that, as with Arabs, Kurdish culture differs by region and the Kurdish language is comprised of different regional dialects. Since the Kurdish people do not have an internationally recognized country or state, some Kurdish groups aim to establish a state of Kurdistan. The way in which Kurdish national aspirations are recognized varies drastically from state to state, in Iraq an autonomous Kurdish region already exists, while in Syria and Turkey there is significant resistance to Kurdish independence."
        },
        {
            id: "persians",
            title: "Persians",
            image_two: "../assets/images/others/history18.webp",
            description: "While Persians mostly live in the Islamic Republic of Iran, large groups of Persians can also be found in Lebanon, Syria, Iraq, and various Gulf states. The most common language among Persians is Persian (Farsi), again, with strong regional differences in dialect, although in most Arab countries Persians also speak the local Arabic dialect. Persians are often portrayed as enemies of Arabs and as being in constant conflict with Arab nations; although there have been conflicts between certain Arab and Persian groups, Persians and Arabs also have a long history of peaceful co-existence and cultural, religious, and linguistic exchange.",
        },
        {
            id: "turks",
            title: "Turks",
            image_two: "../assets/images/others/history19.jpg",
            description: "Historically, large populations of Turks have lived across the Middle East due to centuries of Ottoman rule in the region. Today, you will find innumerable examples of Ottoman architecture, history, and influence in the region. Most Turkish groups in the Middle East are descendants of migrants from Ottoman times, while other Turkish migrations have occurred in the 20th century, and more recently Turkish refugees have fled from territories of conflict, such as Syria. Most Turks are fully integrated as locals and often only speak the local tongue, usually Arabic."
        },
        {
            id: "jews",
            title: "Jews",
            image_two: "../assets/images/others/history20.jpg",
            description: "Jews have been present in the Middle East in fields such as science, literature, philosophy, and politics. Historically, Jewish populations were spread throughout the region, but today most Jews reside in the modern state of Israel. Since the establishment of Israel, large numbers of Jews moved to this newly created state, encouraged by the opportunities it offered. Israel’s government provided incentives such as free land, housing, and financial support, which attracted Jewish populations from across the Middle East and beyond. As a result, the Jewish presence in other Middle Eastern countries declined significantly. The Israeli policy known as the “Law of Return” further ensured that Jews from around the world could become Israeli citizens, leading to a population that is highly diverse in terms of ethnic background."
        },
        {
            id: "others",
            title: "Other Peoples of the Middle East",
            description: "Other groups in the Middle East include Berbers , Arameans , Assyrians, Baloch, Copts, Cappadocian Greeks, Cypriots, Gilaks, Greeks, Laz, Lurs, Mandaeans, Maronites, Mazanderanis, Mhallami, Nawar, Pontic Greeks, Rûm, Samaritans, Shabaks, Talysh, Tats and Zazas."
        },
    ]

}

export default peopleHistory; 