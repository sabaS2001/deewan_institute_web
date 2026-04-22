import { Fragment } from 'react';
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import PodcastSeasonBlock from '../../components/podcastBlocks/podcastseasonblock';
import styles from './podcasts.module.scss';
import { seasons, seasonCards } from '../../../data/podcasts.data';

function Podcasts() {
    return (
        <Fragment>
            <NavBar />

            {/*  Hero Banner  */}
            <section className={styles.heroBanner}>
                <div className={styles.heroContent}>
                    <img
                        src="/assets/images/podcast/podcast-logo.png"
                        alt="Deewan Podcast"
                        className={styles.bannerLogo}
                    />
                    {/* <h2 className={styles.heroTitle}>ARABIC PODCAST</h2> */}
                </div>
                <img src="/assets/images/podcast/wave-left.svg" alt="" className={styles.waveLeft} />
                <img src="/assets/images/podcast/wave-right.svg" alt="" className={styles.waveRight} />
            </section>

            {/*  Season Cards Row */}
            <section className={styles.seasonCardsSection}>
                <div className="container">
                    <div className="row justify-content-center g-4">
                        {seasonCards.map((card) => (
                            <div key={card.season} className="col-6 col-md-2 d-flex justify-content-center">
                                <div className={styles.seasonCard}>
                                    <div className={styles.seasonCardImg}>
                                        <img src={card.image} alt={`Season ${card.season}`} />
                                    </div>
                                    <div className={styles.cardTextContent}>
                                        <p className={styles.seasonCardLabel}>Season {card.season}</p>
                                        <p className={styles.seasonCardHost}>Hosted by:<br />{card.host}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/*Main Content & Illustration*/}
            <section className={styles.mainContentSection}>
                <div className="container">
                    <div className="row align-items-center">
                        
                        {/* Left Side: Writing Space */}
                        <div className="col-md-6">
                            <div className={styles.textContent}>
                                <h3 className={styles.contentSubtitle}>Deewan Arabic Podcasts</h3>
                                <h1 className={styles.contentTitle}>
                                    Learn Levantine Arabic Through Real Conversations
                                </h1>
                                <p>
                                    This podcast is intended for Levantine colloquial Arabic learners at all levels who wish to increase their vocabulary and Arabic understanding while also honing their speaking and listening abilities.
                                </p>
                                <p>
                                    The Deewan team conducts interviews with Arabic students and residents of Amman and the Levant region for these podcast episodes in order to discuss various subjects that are relevant to Arabic language learners as well as the individual experiences of those they speak with.
                                </p>
                                <p>
                                    Every season of our podcast is accompanied by a book, which we consider to be an essential component of our approach to teaching languages. The podcast book, the first of its kind, includes written assignments related to each episode's audio content as well as a glossary of words from each episode.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Illustration */}
                        <div className="col-md-6">
                            <div className={styles.illustrationWrapper}>
                                <img
                                    src="/assets/images/podcast/podcast-01.png"
                                    alt="Podcast illustration"
                                    className={styles.mainIllustration}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/*Season Blocks*/}
            <main className={styles.seasonsMain}>
                <div className="container">
                    {seasons.map((s, i) => (
                        <Fragment key={s.seasonNumber}>
                            <PodcastSeasonBlock
                                seasonNumber={s.seasonNumber}
                                hostedBy={s.hostedBy}
                                episodes={s.episodes}
                                bookCoverImage={s.bookCover}
                                bookCoverAlt={s.bookAlt}
                                reverse={s.reverse}
                            />
                            {i < seasons.length - 1 && <hr className={styles.divider} />}
                        </Fragment>
                    ))}
                </div>
            </main>

            <Footer />
        </Fragment>
    );
}

export default Podcasts;
