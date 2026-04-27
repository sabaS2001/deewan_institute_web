import EpisodeList from './episodelist';
import type { Episode } from './episodelist';
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
            
            {/* Background Season Number (Like CultureEvents eventIndex) */}
            <span className={`${styles.seasonNumber} ${reverse ? styles.seasonNumberLeft : styles.seasonNumberRight}`}>
                {seasonNumber}
            </span>

            <div className={`row align-items-center justify-content-center g-4 ${styles.innerRow}`}>

                {/* Book Column */}
                <div className={`col-12 col-lg-5 d-flex justify-content-center ${styles.bookCol} ${reverse ? 'order-lg-2' : 'order-lg-1'}`}>
                    <div className={styles.bookWrapper}>
                        {/* Alternating Shadow based on reverse prop */}
                        {reverse ? (
                            <div className={`${styles.bookShadow} ${styles.bookShadowReverse}`}></div>
                        ) : (
                            <div className={styles.bookShadow}></div>
                        )}
                        
                        <img
                            src={bookCoverImage}
                            alt={bookCoverAlt}
                            className={styles.bookCover}
                        />
                    </div>
                </div>

                {/* Content Column */}
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
