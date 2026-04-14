export interface Episode {
    id: number;
    title: string;
    description?: string;
    link?: string;
}

export interface Season {
    seasonNumber: number | string;
    hostedBy: string;
    episodes: Episode[];
    bookCover: string;
    bookAlt: string;
    reverse: boolean;
}

export interface SeasonCard {
    season: number | string;
    host: string;
    image: string;
}

//Season Cards (top row) 

export const seasonCards: SeasonCard[] = [
    { season: 1, host: 'Mohammad Ayaseh', image: '/assets/images/podcast/card.png' },
    { season: 2, host: 'Sara Al-Zyoud',   image: '/assets/images/podcast/card.png' },
    { season: 3, host: 'Angela Dudley',   image: '/assets/images/podcast/card.png' },
    { season: 5, host: 'Raghad Dabbour',  image: '/assets/images/podcast/card.png' },
];

// Season 1 

const season1Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 1',        description: 'An introduction to the first season of the Deewan podcast.' },
    { id: 2,  title: 'Episode 2: My Life in Jordan',               description: 'A personal story about living and experiencing life in Jordan.' },
    { id: 3,  title: 'Episode 3: My Story in Arabic',              description: 'Sharing a personal journey through the Arabic language.' },
    { id: 4,  title: 'Episode 4: Racism',                          description: 'A candid conversation about racism and its impact.' },
    { id: 5,  title: 'Episode 5: My Routine as A Mom',             description: 'Daily routines and challenges of motherhood in the Arab world.' },
    { id: 6,  title: 'Episode 6: Having A Dog in Jordan',          description: 'The unique experience of having a dog as a pet in Jordan.' },
    { id: 7,  title: 'Episode 7: Cooking Is Not My Thing.',        description: 'A humorous take on cooking and food culture.' },
    { id: 8,  title: 'Episode 8: The Jordanian Heritage.',         description: 'Exploring the rich cultural heritage of Jordan.' },
    { id: 9,  title: 'Episode 9: A Latina and Arabic.',            description: 'The intersection of Latin American and Arabic cultures.' },
    { id: 10, title: 'Episode 10: Refugees Situation in Europe.',  description: 'A discussion on the refugee crisis and its human stories.' },
];

// Season 2 

const season2Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 2',        description: 'An introduction to the second season of the Deewan podcast.' },
    { id: 2,  title: 'Episode 2: My Life in Jordan',               description: 'A personal story about living and experiencing life in Jordan.' },
    { id: 3,  title: 'Episode 3: My Story in Arabic',              description: 'Sharing a personal journey through the Arabic language.' },
    { id: 4,  title: 'Episode 4: Racism',                          description: 'A candid conversation about racism and its impact.' },
    { id: 5,  title: 'Episode 5: My Routine as A Mom',             description: 'Daily routines and challenges of motherhood in the Arab world.' },
    { id: 6,  title: 'Episode 6: Having A Dog in Jordan',          description: 'The unique experience of having a dog as a pet in Jordan.' },
    { id: 7,  title: 'Episode 7: Cooking Is Not My Thing.',        description: 'A humorous take on cooking and food culture.' },
    { id: 8,  title: 'Episode 8: The Jordanian Heritage.',         description: 'Exploring the rich cultural heritage of Jordan.' },
    { id: 9,  title: 'Episode 9: A Latina and Arabic.',            description: 'The intersection of Latin American and Arabic cultures.' },
    { id: 10, title: 'Episode 10: Refugees Situation in Europe.',  description: 'A discussion on the refugee crisis and its human stories.' },
];

// Season 3 
const season3Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 3',        description: 'An introduction to the third season of the Deewan podcast.' },
    { id: 2,  title: 'Episode 2: My Life in Jordan',               description: 'A personal story about living and experiencing life in Jordan.' },
    { id: 3,  title: 'Episode 3: My Story in Arabic',              description: 'Sharing a personal journey through the Arabic language.' },
    { id: 4,  title: 'Episode 4: Racism',                          description: 'A candid conversation about racism and its impact.' },
    { id: 5,  title: 'Episode 5: My Routine as A Mom',             description: 'Daily routines and challenges of motherhood in the Arab world.' },
    { id: 6,  title: 'Episode 6: Having A Dog in Jordan',          description: 'The unique experience of having a dog as a pet in Jordan.' },
    { id: 7,  title: 'Episode 7: Cooking Is Not My Thing.',        description: 'A humorous take on cooking and food culture.' },
    { id: 8,  title: 'Episode 8: The Jordanian Heritage.',         description: 'Exploring the rich cultural heritage of Jordan.' },
    { id: 9,  title: 'Episode 9: A Latina and Arabic.',            description: 'The intersection of Latin American and Arabic cultures.' },
    { id: 10, title: 'Episode 10: Refugees Situation in Europe.',  description: 'A discussion on the refugee crisis and its human stories.' },
];

// Season 5 

const season5Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 5',        description: 'An introduction to the fifth season of the Deewan podcast.' },
    { id: 2,  title: 'Episode 2: My Life in Jordan',               description: 'A personal story about living and experiencing life in Jordan.' },
    { id: 3,  title: 'Episode 3: My Story in Arabic',              description: 'Sharing a personal journey through the Arabic language.' },
    { id: 4,  title: 'Episode 4: Racism',                          description: 'A candid conversation about racism and its impact.' },
    { id: 5,  title: 'Episode 5: My Routine as A Mom',             description: 'Daily routines and challenges of motherhood in the Arab world.' },
    { id: 6,  title: 'Episode 6: Having A Dog in Jordan',          description: 'The unique experience of having a dog as a pet in Jordan.' },
    { id: 7,  title: 'Episode 7: Cooking Is Not My Thing.',        description: 'A humorous take on cooking and food culture.' },
    { id: 8,  title: 'Episode 8: The Jordanian Heritage.',         description: 'Exploring the rich cultural heritage of Jordan.' },
    { id: 9,  title: 'Episode 9: A Latina and Arabic.',            description: 'The intersection of Latin American and Arabic cultures.' },
    { id: 10, title: 'Episode 10: Refugees Situation in Europe.',  description: 'A discussion on the refugee crisis and its human stories.' },
];

// Seasons array

export const seasons: Season[] = [
    {
        seasonNumber: 1,
        hostedBy: 'Mohammad K. Ayaseh',
        episodes: season1Episodes,
        bookCover: '/assets/images/books/podcasts/podcast1.png',
        bookAlt: 'Guide to Deewan Podcast Season 1 book cover',
        reverse: false,
    },
    {
        seasonNumber: 2,
        hostedBy: 'Sara Al-Zyoud',
        episodes: season2Episodes,
        bookCover: '/assets/images/books/podcasts/podcast2.png',
        bookAlt: 'Guide to Deewan Podcast Season 2 book cover',
        reverse: true,
    },
    {
        seasonNumber: 3,
        hostedBy: 'Angela Dudley',
        episodes: season3Episodes,
        bookCover: '/assets/images/books/podcasts/podcast3.png',
        bookAlt: 'Guide to Deewan Podcast Season 3 book cover',
        reverse: false,
    },
    {
        seasonNumber: 5,
        hostedBy: 'Raghad Dabbour',
        episodes: season5Episodes,
        bookCover: '/assets/images/books/podcasts/podcast4.png',
        bookAlt: 'Guide to Deewan Podcast Season 5 book cover',
        reverse: true,
    },
];