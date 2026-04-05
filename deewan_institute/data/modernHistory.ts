interface modernHistory {
    subTitle: string,
    bannerImg: string,
    info: Array<{
        id: string,
        title?: string
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

export const modernHistory : modernHistory = {
    subTitle: "Modern History of the Middle East",
    bannerImg: "../assets/images/others/history7.webp",
    info: [
        {
            id: "overview",
            title: "Overview",
            description: "Most countries in the Middle East were only established as independent nation-states in the 20th century. This page will discuss the most important events leading up to this period of independence, and their influence on the modern Middle East"
        },
        {
            id: "greatArabRevolt",
            title: "The Great Arab Revolt & the Sykes-Picot Agreement",
            description: "During the second half of World War I, the British signed an agreement according to which the Arab forces of Hashemite King Hussein bin Ali would help the British fight against the Ottoman Empire. In return, the British promised to recognize a new Arab Kingdom stretching from Syria to Yemen under Hashemite leadership. This was known as the Arab Revolt, or the Great Arab Revolt. <br><br> However, at the same time as Britain was making promises of Arab leadership, Britain was negotiating with France about how to divide the Ottoman Empire between their respective spheres of influence, should they manage to defeat the Ottomans. In 1916 Sir Mark Sykes of Britain and Francois Georges-Picot of France finalized an agreement assuring French influence over Lebanon, Syria, parts of Turkey, and parts of Iraq, and British influence over Palestine, Jordan, and southern Iraq. While the ultimate territorial divisions after World War I did not entirely match the Sykes-Picot agreement of 1916, British promises made regarding Arab independence were cast aside following the end of the war. Nevertheless, many countries became independent nations some years later, albeit heavily influenced by redrawn French and British borders."
        },
        {
            id: "modernNations",
            title: "Modern Nations of the Middle East",
            subtitle: "The Levant",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Palestine",
            flag_two: "../assets/images/flag/jordan.webp",
            caption_two: "Jordan",
            description: "As with most countries in the Middle East, the decline of the Ottoman Empire and the Great Arab Revolt can be seen as the starting point of Jordan’s modern history. After members of the Hashemite family — with help from the British and French armies — were successful inconquering large parts of the Middle East, the ‘Arab Kingdom of Syria’ was declared in 1918, containing parts of Transjordan. As a result of the Sykes-Picot agreement, the French quickly took over control of the kingdom’s northern region; however, the southern region was soon taken by the son of Shariff Hussein, King Abdullah I, who became Emir of Transjordan in 1921. As the British slowly started retreating from their protectorate in Transjordan, they ceded more and more autonomy to the Transjordanian Emirate. On May 25th, 1946 the Hashemite Kingdom of Transjordan gained full independence, and in 1949 the kingdom was officially renamed the Hashemite Kingdom of Jordan, the state with which we are familiar today. The current Jordanian monarchy is only reigning Hashemite dynasty since the Republic of Iraq was established in 1958."

        },
        {
            id: "syria",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Syria",
            description: "Syria’s modern history dates back to the end of World War I and the successes of the Great Arab Revolt when the Arab Kingdom of Syria was established in 1918, ruled by Faisal I, son of Shariff Hussein. The Kingdom did not last long however, as in 1920 the French Mandate for Syria and the Lebanon was installed, in accordance with the Sykes-Picot agreement. In 1936, it looked like the mandate was coming to an end with the Franco-Syrian Treaty of Independence and the election of the first Syrian president Hashim al-Atassi. However, due to the emerging threat of World War II, the French did not ratify the treaty and kept control over Syria. This led Syrian nationalists to enlist the help of British forces, and on April 17th, 1946 the French mandate ended and the Syrian republic gained full independence."
        },
        {
            id: "lebanon",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Lebanon",
            description: "The modern history of Lebanon began under the French mandate for Syria and Lebanon — declared in 1920. The mandate was first known as Greater Lebanon, but in 1926 the Lebanese Republic was declared, with its own constitution and a parliamentary system of government. France maintained a strong hold over Lebanon until World War II, when Syria and Lebanon gained independence from the French. British troops helped free Lebanon from French control, and in 1943 elections were held; the new Lebanese government unilaterally abolished the mandate, creating the Republic of Lebanon as we know it today."
        },
        {
            id: "iraq",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Iraq",
            description: "With the partition of the Ottoman Empire, Britain planned to establish firm control over the Mandate of Mesopotamia. Instead, following a large-scale Iraqi revolt in 1920, in which Iraqis organized mass demonstrations against British mandate plans, a sovereign Hashemite Kingdom of Iraq was established in 1921 under British protection. In 1932, the Kingdom of Iraq was finally granted full independence, but during World War II Britain once again exerted control in Iraq and installed the pro-British King Faisal II, fearing the Iraqi ties to the Axis powers. In 1958, a coup d’état overthrew the Hashemite monarchy and led to the establishment of the Republic of Iraq."
        },
        {
            id: "iran",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Iran",
            description: "Iran is a vast country in Western Asia, bordered by the Caspian Sea, Persian Gulf, and neighbors like Iraq and Afghanistan, known for its diverse landscapes from snow-capped mountains and vast deserts to lush forests and historic cities. Its capital, Tehran, is a bustling metropolis with modern amenities and ancient roots, while sites like the ancient ruins of Persepolis and the beautiful mosques of Isfahan showcase a rich Persian heritage spanning thousands of years, including influences from the Achaemenid Empire and Islamic culture. With a vibrant mix of traditions, delicious cuisine like kebabs and saffron rice, and opportunities for adventure such as skiing or exploring bazaars, Iran offers a deep dive into history and hospitality for culturally curious travelers."

        },
        {
            id: "egypt",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Egypt",
            description: "Fuad I crowned himself king of Egypt after the nominal independence of Egypt from the British Kingdom in 1922. Nevertheless, Britain continued to exert influence over Egypt, given its important tactical position in the Middle East and its control over the Suez Canal. Nationalist sentiment grew in 1951 after Egypt ordered British troops to vacate the Suez Canal, and a year later, King Farouk was deposed by Mohammad Naguib and Gamel Abdul Nasser. In 1953, the Egyptian Republic was officially declared with Naguib as its first president, soon to be followed by Nasser."
        },
        {
            id: "KSA",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Palestine",
            description: "Abdulaziz bin Abdul Rahman al Saud, the first king of modern Saudi Arabia, captured Riyadh in 1902, beginning the current Saudi Arabian Kingdom. Ibn Saud did not take part in the Great Arab Revolt that would eventually result in Hussein Ibn Ali— the head of the Hashemite family—becoming King of Hejaz. In the following years, Ibn Saud conquered increasingly more land, and in 1924 he successfully conquered Hejaz and declared himself the King of Hejaz. In 1932, Ibn Saud united the lands of Najd and Hejaz into the Kingdom of Saudi Arabia."
        },
        {
            id: "turkey",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Turkey",
            description: "Turkey was part of the Ottoman Empire which entered World War I fighting on behalf of the Central Powers against British, French, and Russian forces.After the Allies' victory in 1918, territories of the Ottoman Empire were seized from Turkish control and divided up according to the Treaty of Sèvres in 1920. Catalysed by nationalist Turkish sentiment against the occupying forces of Anatolia, Mustafa Kemal Atatürk and other head officers initiated the Turkish War of Independence, and in 1923 the Republic of Turkey was established with Atatürk as its first president. President Atatürk implemented a number of secularizing reforms that continue to influence Turkey into the modern day."
        },
        {
            id: "qatar",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Qatar",
            description: "Qatar, part of the Arabian Peninsula under nominal Ottoman influence in the late 19th century, became a British protectorate in 1916, indirectly aligning with the Allied Powers during World War I. After the Allies' victory in 1918, Qatar remained under British control without major territorial divisions, but growing nationalist sentiments in the mid-20th century led to its peaceful independence on September 3, 1971, with Sheikh Ahmad bin Ali Al Thani as the first emir. Subsequent leaders, such as Sheikh Hamad bin Khalifa Al Thani, introduced modernization reforms focused on economic diversification and infrastructure, which continue to influence Qatar's global standing today."
        },
        {
            id: "kuwait",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Kuwait",
            description: "Kuwait is a small but prosperous nation on the northern shore of the Persian Gulf, bordering Iraq and Saudi Arabia, characterized by its flat desert terrain, modern skyline, and oil-fueled development. Its capital, Kuwait City, features iconic landmarks like the Kuwait Towers and the Grand Mosque, blending contemporary architecture with a history of pearl diving and trade, while cultural sites such as the Tareq Rajab Museum highlight Arab heritage and artifacts. Known for its sunny beaches, shopping malls, and warm hospitality, Kuwait provides a mix of relaxation, urban exploration, and desert adventures, making it an accessible gateway to the Middle East."
        },
        {
            id: "uae",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "UAE",
            description: "The United Arab Emirates, a federation of seven emirates in the Arabian Peninsula, were established as British protectorates known as the Trucial States in the 19th century, indirectly aligning with the Allied Powers during World War I through their British ties. After the Allies' victory in 1918, the region remained under British control without significant territorial divisions, but rising nationalist sentiments and Britain's decision to withdraw from the Gulf in the 1960s led to the UAE's formation on December 2, 1971, with Sheikh Zayed bin Sultan Al Nahyan as its first president. Under his leadership and subsequent rulers, the UAE implemented ambitious modernization reforms, including economic diversification, infrastructure development, and social advancements, which continue to define its role as a prosperous global hub today."
        },
        {
            id: "oman",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Oman",
            description: "Oman is a beautiful country on the southeastern coast of the Arabian Peninsula, known for its diverse landscapes like rugged mountains, vast deserts, and stunning beaches. Its capital, Muscat, features ancient forts and a mix of traditional and modern life, reflecting the nation's rich history as a key player in ancient trade routes. With warm hospitality and cultural treasures like frankincense, Oman offers a peaceful escape where visitors can explore hidden wadis, spot wildlife such as the Arabian oryx, or enjoy activities like snorkeling in clear waters. This sultanate emphasizes tradition and sustainability, making it a welcoming destination for travelers seeking authentic Arabian experiences."
        },
        {
            id: "yemen",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Yemen",
            description: "Yemen is a historic country on the southwestern tip of the Arabian Peninsula, bordered by Saudi Arabia and Oman, with coastlines along the Red Sea and Arabian Sea. It's known for its dramatic landscapes, including towering mountains, vast deserts, and unique islands like Socotra with its bizarre, endemic plants. The capital, Sana'a, boasts one of the world's oldest cities, featuring ancient mud-brick tower houses and a rich cultural heritage tied to ancient trade routes, coffee origins, and vibrant traditions. Despite its challenges, Yemen offers fascinating historical sites, such as the old city of Shibam and prehistoric ruins, showcasing a blend of Arab, African, and Indian influences, though travelers should be aware of current conditions before visiting."
        },
        {
            id: "bahrain",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Bahrain",
            description: "Bahrain is a small island nation in the Persian Gulf, connected to Saudi Arabia by a bridge, known for its modern skyline and rich history. Its capital, Manama, features a mix of contemporary towers, ancient forts like the Bahrain Fort (a UNESCO site), and bustling souks, reflecting its past as a pearl-diving and trading hub. With sunny beaches, desert landscapes, and cultural attractions such as the National Museum and Formula 1 circuit, Bahrain offers a blend of Arabian heritage and luxury, making it a convenient and vibrant destination for visitors."
        },
        {
            id: "cyprus",
            flag_one: "../assets/images/flag/palestine.webp",
            caption_one: "Cyprus",
            description: "Cyprus is a sunny island in the eastern Mediterranean Sea, south of Turkey, celebrated for its beautiful beaches, rugged mountains, and ancient history. Its capital, Nicosia, is a divided city with a mix of Greek and Turkish influences, featuring medieval walls and charming old towns, while sites like the archaeological ruins of Paphos (a UNESCO World Heritage site) highlight its Greek, Roman, and Byzantine past. From the pine-covered Troodos Mountains to coastal resorts in Limassol and Ayia Napa, Cyprus boasts a Mediterranean lifestyle with delicious cuisine, clear waters for swimming, and a welcoming culture that blends Europe and the Middle East."
        },
    ]

}

export default modernHistory; 