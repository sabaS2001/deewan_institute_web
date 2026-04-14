import EpisodeList from '../podcastBlocks/episodelist';
import type { Episode } from '../podcastBlocks/episodelist';
import styles from './podcastseasonblock.module.scss';

interface PodcastSeasonBlockProps {
    seasonNumber: number | string;
    hostedBy: string;
    episodes: Episode[];
    bookCoverImage: string;
    bookCoverAlt: string;
    reverse?: boolean;
}

function PodcastSeasonBlock({
    seasonNumber,
    hostedBy,
    episodes,
    bookCoverImage,
    bookCoverAlt,
    reverse = false,
}: PodcastSeasonBlockProps) {
    return (
        <div className={`${styles.seasonBlock} ${reverse ? styles.reverse : ''}`}>
            <div className={`row align-items-center justify-content-center g-4 ${styles.innerRow}`}>

                <div className={`col-12 col-lg-5 d-flex justify-content-center ${styles.bookCol} ${reverse ? 'order-lg-2' : 'order-lg-1'}`}>
                    <div className={styles.bookWrapper}>
                        <div className={styles.bookShadow}></div>
                        <img
                            src={bookCoverImage}
                            alt={bookCoverAlt}
                            className={styles.bookCover}
                        />
                    </div>
                </div>

                <div className={`col-12 col-lg-5 ${reverse ? 'order-lg-1' : 'order-lg-2'}`}>
                    <EpisodeList
                        seasonNumber={seasonNumber}
                        hostedBy={hostedBy}
                        episodes={episodes}
                    />
                </div>
            </div>
        </div>
    );
}

export default PodcastSeasonBlock;