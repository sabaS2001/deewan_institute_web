export interface Episode {
    id: number;
    title: string;
    audioUrl?: string;
}

export interface Season {
    seasonNumber: number | string;
    hostedBy: string;
    episodes: Episode[];
    bookCover: string;
    bookAlt: string;
    reverse: boolean;
    bookLink?: string;
}

export interface SeasonCard {
    season: number | string;
    host: string;
    image: string;
    seasonNumber: number | string;
}

// Season Cards (top row)

export const seasonCards: SeasonCard[] = [
    { season: 1, host: 'Mohammad Ayaseh', image: '/assets/images/podcast/card.png', seasonNumber: 1 },
    { season: 2, host: 'Sara Al-Zyoud',   image: '/assets/images/podcast/card.png', seasonNumber: 2 },
    { season: 3, host: 'Angela Dudley',   image: '/assets/images/podcast/card.png', seasonNumber: 3 },
    { season: 4, host: 'Duha Hamad',      image: '/assets/images/podcast/card.png', seasonNumber: 4 },
    { season: 5, host: 'Raghad Dabbour',  image: '/assets/images/podcast/card.png', seasonNumber: 5 },
];

// Season 1

const season1Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 1',       audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode1.mp3?alt=media&token=c05b88a1-5d79-48f0-9de1-f3d9df0d6e8a' },
    { id: 2,  title: 'Episode 2: My Life in Jordan',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode2.mp3?alt=media&token=59b7b0e8-d147-4017-848c-303ea94e56a9' },
    { id: 3,  title: 'Episode 3: My Story in Arabic',             audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode3.mp3?alt=media&token=cd047026-fe6a-46df-9edc-c16514dd68e7' },
    { id: 4,  title: 'Episode 4: My Studies and Arabic',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode4.mp3?alt=media&token=36585ff2-16ca-41b1-b3d3-db5f70e78ec9' },
    { id: 5,  title: 'Episode 5: Racism',                         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode5.mp3?alt=media&token=186a078c-c12f-4e24-8df8-66567075d007' },
    { id: 6,  title: 'Episode 6: My Routine',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode6.mp3?alt=media&token=9bb26a09-c1aa-46c0-a4bb-dee9ac743abf' },
    { id: 7,  title: 'Episode 7: Having A Dog in Jordan',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode7.mp3?alt=media&token=f2ea5340-77b3-4f33-bf85-06e21c7e3920' },
    { id: 8,  title: 'Episode 8: Cooking Is Not My Thing!',       audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode8.mp3?alt=media&token=e90e9e48-5901-4313-94dc-1225d467768e' },
    { id: 9,  title: 'Episode 9: The Jordanian Heritage',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode9.mp3?alt=media&token=4618f221-2951-41b5-a090-1ed7dc149eeb' },
    { id: 10, title: 'Episode 10: A Latina and Arabic',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode10.mp3?alt=media&token=c25a4df3-f1b5-4860-9d1b-149d27573de1' },
    { id: 11, title: 'Episode 11: Refugees Situation in Europe',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%201%2FEpisode11.mp3?alt=media&token=67cc4bf1-8ae5-4be4-a186-cfdf290915ff' },
];

// Season 2

const season2Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 2',       audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode1.mp3?alt=media&token=b8fa84b3-676e-4c14-b52b-c3bc2767a762' },
    { id: 2,  title: 'Episode 2: How To Be Vegetarian in Jordan', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode2.mp3?alt=media&token=d87a4ca4-db2d-48aa-817b-b7b05ff196ef' },
    { id: 3,  title: 'Episode 3: To Palestine with Love',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode3.mp3?alt=media&token=4efe7b0f-61ae-4403-a4e4-10d6fb0ef513' },
    { id: 4,  title: 'Episode 4: Cross-Continental Conversations', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode4.mp3?alt=media&token=edef57b6-f49c-42fd-9e2f-ebc1bb43796e' },
    { id: 5,  title: 'Episode 5: Fitness Not So First!',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode5.mp3?alt=media&token=b5ab23d8-a2ad-42bd-b196-8e9abbc5810d' },
    { id: 6,  title: 'Episode 6: Ready For Take-Off',             audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode6.mp3?alt=media&token=e4560c37-e990-4a1b-88ca-4dda7e6cb029' },
    { id: 7,  title: 'Episode 7: Culture VS. Culture',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode7.mp3?alt=media&token=c9be9aa0-5bee-4760-9042-7e8fb57097b7' },
    { id: 8,  title: 'Episode 8: Tango',                          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode8.mp3?alt=media&token=10d9bfb9-b54c-438f-9f92-f269fe368708' },
    { id: 9,  title: 'Episode 9: Arabic, Religion, and the Middle East', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode9.mp3?alt=media&token=7eb488ee-7ca9-4ac8-baec-0c045a747d31' },
    { id: 10, title: 'Episode 10: Retired but Not Tired!',        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode10.mp3?alt=media&token=10f17efd-db61-475f-b3ae-2cf8fea588b4' },
    { id: 11, title: 'Episode 11: One Race: Human',               audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%202%2FEpisode11.mp3?alt=media&token=ec44738c-6443-457a-afc3-6428f67788aa' },
];

// Season 3

const season3Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Introduction to Season 3',             audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode1.mp3?alt=media&token=af71d54c-9b12-4a9a-b3c1-a207281d493a' },
    { id: 2,  title: 'Episode 2: The Real Rugby Spirit!',               audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode2.mp3?alt=media&token=dff4619c-c348-4766-b928-51edcba51156' },
    { id: 3,  title: 'Episode 3: Minutes With a Doctor!',               audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode3.mp3?alt=media&token=110b6b86-edbe-4c54-85d5-eaa26a37a8f8' },
    { id: 4,  title: 'Episode 4: Difference is Beautiful!',             audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode4.mp3?alt=media&token=da5353a0-49f3-47a3-a0a8-29f27c6312d5' },
    { id: 5,  title: 'Episode 5: Ramadan Mubarak! Eat Less, Think More!', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode5.mp3?alt=media&token=7a4cc12d-f436-4b2b-85f5-73ad8898d219' },
    { id: 6,  title: 'Episode 6: Bint Battuta!',                        audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode6.mp3?alt=media&token=db651f0c-f63b-490d-b029-26cdc060fc31' },
    { id: 7,  title: 'Episode 7: Bunch of Love - كَمشِة حُب',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode7.mp3?alt=media&token=8733d689-7f77-49a9-8ced-0e788785816f' },
    { id: 8,  title: 'Episode 8: Tatreez-Palestinian Embroidery',       audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode8.mp3?alt=media&token=630cd586-1eda-498b-a910-f84eb1a8cb2e' },
    { id: 9,  title: 'Episode 9: Feels Like Home!',                     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode9.mp3?alt=media&token=e4ea9028-3108-4f87-a715-a68215776c0d' },
    { id: 10, title: 'Episode 10: Pierro, The Teacher and Student!',    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode10.mp3?alt=media&token=66657c75-65b2-4a62-a295-e3ab4ec29032' },
    { id: 11, title: 'Episode 11: Get to Know A Jordanian!',            audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%203%2FEpisode11.mp3?alt=media&token=b868a0ba-e704-45fb-8a4f-6106ef716407' },
];

// Season 4

const season4Episodes: Episode[] = [
    { id: 1, title: 'Episode 1: In the Vegetable Shop',     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode1.mp3?alt=media&token=320d530d-88af-4ad2-a5eb-9fa638fafca5' },
    { id: 2, title: 'Episode 2: Language and Society',      audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode2.mp3?alt=media&token=04030944-e91c-4df5-acf6-9aecfd5ba784' },
    { id: 3, title: 'Episode 3: My Best Friends',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode3.mp3?alt=media&token=a3978daf-7994-4efc-8399-68b560e1f237' },
    { id: 4, title: 'Episode 4: Integration in Arab Societies', audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%204%2FEpisode4.mp3?alt=media&token=a3bd15ad-6e3e-4264-afa7-70c61b79df20' },
];

// Season 5

const season5Episodes: Episode[] = [
    { id: 1,  title: 'Episode 1: Self-Introduction',          audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode1.mp3?alt=media&token=34c3d0f3-a7de-4fa9-bf98-0a100bccdef0' },
    { id: 2,  title: 'Episode 2: Friends and Family',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode2.mp3?alt=media&token=0f0aa50f-c0ec-4853-aa63-4d9e99698c85' },
    { id: 3,  title: 'Episode 3: Daily Routine and Hobbies',  audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode3.mp3?alt=media&token=44954035-f1e5-4096-99a0-3efe39a56c33' },
    { id: 4,  title: 'Episode 4: My Vacation',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode4.mp3?alt=media&token=044ba56a-cc9b-4400-ac66-cb1aae69520a' },
    { id: 5,  title: 'Episode 5: Talking About Work',         audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode5.mp3?alt=media&token=5e926aac-6975-4f3c-96bd-7b1f4a08b5cf' },
    { id: 6,  title: 'Episode 6: House Tours',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode6.mp3?alt=media&token=e0fefeea-5d27-469c-ab36-cfe1e5caf852' },
    { id: 7,  title: 'Episode 7: My Favorite Restaurant',     audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode7.mp3?alt=media&token=0831c8e9-0dcc-4fa5-b98c-7f3a8f317c32' },
    { id: 8,  title: 'Episode 8: My Cat SimSim',              audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode8.mp3?alt=media&token=171024a5-5931-40c9-b1c6-1ee675295673' },
    { id: 9,  title: 'Episode 9: Jabal Al Weibdeh',           audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode9.mp3?alt=media&token=0bf5731b-41ec-4dc8-b5f5-3f809d4cb099' },
    { id: 10, title: 'Episode 10: Friendship',                audioUrl: 'https://firebasestorage.googleapis.com/v0/b/deewanweb.firebasestorage.app/o/season%205%2FEpisode10.mp3?alt=media&token=34eaa230-d1d6-4eff-939d-c2a8f4f43d1b' },
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
        bookLink: '/books/podcasts/season-1',
    
    },
    {
        seasonNumber: 2,
        hostedBy: 'Sara Al-Zyoud',
        episodes: season2Episodes,
        bookCover: '/assets/images/books/podcasts/podcast2.png',
        bookAlt: 'Guide to Deewan Podcast Season 2 book cover',
        reverse: true,
        bookLink: '/books/podcasts/season-2',
    },
    {
        seasonNumber: 3,
        hostedBy: 'Angela Dudley',
        episodes: season3Episodes,
        bookCover: '/assets/images/books/podcasts/podcast3.png',
        bookAlt: 'Guide to Deewan Podcast Season 3 book cover',
        reverse: false,
        bookLink: '/books/podcasts/season-3',
    },
    {
        seasonNumber: 4,
        hostedBy: 'Duha Hamad',
        episodes: season4Episodes,
        bookCover: '/assets/images/books/podcasts/podcast4.png',
        bookAlt: 'Guide to Deewan Podcast Season 4 book cover',
        reverse: true,
        bookLink: '/books/podcasts/season-4',
    },
    {
        seasonNumber: 5,
        hostedBy: 'Raghad Dabbour',
        episodes: season5Episodes,
        bookCover: '/assets/images/books/podcasts/podcast5.png',
        bookAlt: 'Guide to Deewan Podcast Season 5 book cover',
        reverse: false,
        bookLink: '/books/podcasts/season-5',
    },
];