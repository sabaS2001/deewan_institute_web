import { useState } from 'react';
import styles from './episodelist.module.scss';

export interface Episode {
    id: number;
    title: string;
    audioUrl?: string;
}

interface EpisodeListProps {
    seasonNumber: number | string;
    hostedBy: string;
    episodes: Episode[];
}

function EpisodeList({ seasonNumber, hostedBy, episodes }: EpisodeListProps) {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(prev => (prev === id ? null : id));
    };

    return (
        <div className={styles.episodeList}>
            <div className={styles.header}>
                <h3 className={styles.seasonTitle}>Season {seasonNumber}</h3>
                <p className={styles.hostedBy}>Hosted By: {hostedBy}</p>
            </div>
            <div className={styles.episodesWrapper}>
                {episodes.map((ep) => (
                    <div key={ep.id} className={styles.episodeItem}>
                        <button
                            className={`${styles.episodeRow} ${openId === ep.id ? styles.open : ''}`}
                            onClick={() => toggle(ep.id)}
                            aria-expanded={openId === ep.id}
                        >
                            <span className={styles.episodeTitle}>{ep.title}</span>
                            <span className={`${styles.chevron} ${openId === ep.id ? styles.chevronOpen : ''}`}>
                                ‹
                            </span>
                        </button>
                        <div className={`${styles.episodeDropdown} ${openId === ep.id ? styles.dropdownOpen : ''}`}>
                            <div className={styles.dropdownInner}>
                                {ep.audioUrl ? (
                                    <audio
                                        controls
                                        className={styles.audioPlayer}
                                        src={ep.audioUrl}
                                        preload="none"
                                    />
                                ) : (
                                    <p className={styles.comingSoon}>Coming soon</p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EpisodeList;