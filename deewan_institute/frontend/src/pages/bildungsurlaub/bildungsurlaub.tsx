import { useState } from "react";
import { useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import { germanStateCards, bildungsurlaubContent } from "../../../data/bildungsurlaub.data"; 
import styles from "./bildungsurlaub.module.scss";
import { FaCircleInfo } from "react-icons/fa6";

const BildungsurlaubPage = () => {
    useEffect(() => {
      document.title = "Bildungsurlaub";
    }, []);
  const [activeLang, setActiveLang] = useState<"en" | "de">("en");

  useScrollAnimation();

  
  const { bodyText, whatIsHeading } = bildungsurlaubContent[activeLang];

  // Helper to make email clickable
  const renderTextWithLink = (text: string) => {
    const email = "arabic@deewaninstitute.com";
    const parts = text.split(email);

    return (
      <>
        {parts[0]}
        <a href={`mailto:${email}`} className={styles.emailLink}>
          {email}
        </a>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={styles.page}>
      <NavBar />

      <main className={styles.main}>
        <div className={`scroll-section ${styles.section} ${styles["section--hero"]}`}>
          <div className={styles.hero}>
            <img
              src="/assets/images/banner/b_banner.png"
              alt="Bildungsurlaub Courses"
              className={styles.heroimage}
              
            />
            <div className={styles.herooverlay}>
              <div className={styles.herobadge}>
                <h1>Bildungsurlaub Courses</h1>
              </div>
            </div>
          </div>
        </div>

        <section className={`scroll-section ${styles.section} ${styles["section--content"]}`}>
          <div className="container-fluid px-1">
            <hr className={styles.dividerTop} />
          </div>
          <div className="container">
            <div className={`${styles.sectionHeader} mb-4`}>
              <span className={styles.sectionHeadersub}>
                Bildungsurlaub Courses
              </span>
              <h2 className={styles.sectionHeadertitle}>
                Take Your Bildungsurlaub in Amman
              </h2>
            </div>

            <div className={styles.contentBlock}>
              <div className={styles.contentBlockleft}>
                <div className={styles.tabs}>
                  <button
                    className={`${styles.tabsbtn} ${activeLang === "en" ? styles["tabsbtn--active"] : styles["tabsbtn--inactive"]}`}
                    onClick={() => setActiveLang("en")}
                    aria-pressed={activeLang === "en"}
                  >
                    English
                  </button>
                  <button
                    className={`${styles.tabsbtn} ${activeLang === "de" ? styles["tabsbtn--active"] : styles["tabsbtn--inactive"]}`}
                    onClick={() => setActiveLang("de")}
                    aria-pressed={activeLang === "de"}
                  >
                    German
                  </button>
                </div>

                <div className={styles.whatIs}>
                  <h3 className={styles.whatIsheading}>{whatIsHeading}</h3>
                  <hr className={styles.whatIsheadingDivider} />
                  <p className={styles.whatIsbody}>
                    {renderTextWithLink(bodyText)}
                  </p>
                </div>
              </div>

              <div className={styles.contentBlockright}>
                <div className={styles.rightPanel}>
                  <img
                    src="/assets/images/others/b_panel.png"
                    alt="Bildungsurlaub session"
                    className={styles.rightPanelimage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid px-0">
          <hr className={styles.divider} />
        </div>

        <section className={`scroll-section ${styles.section} ${styles["section--states"]}`}>
          <div className="container">
            <h2 className={styles.statesSectiontitle}>
              Recognized German States
            </h2>
            <hr className={styles.statesSectiondivider} />

            <div className={styles.statesSectioncards}>
              {germanStateCards.map((card) => (
                <div key={card.id} className={styles.stateCard}>
                  <div className={styles.stateCardlogoWrapper}>
                    {card.logoSrc ? (
                      <img src={card.logoSrc} alt={card.logoAlt} />
                    ) : (
                      <div className={styles.stateCardlogoPlaceholder}>
                        {card.stateName.toUpperCase()}
                      </div>
                    )}
                  </div>

                  <hr className={styles.stateCardseparator} />

                  <div className={styles.stateCardbody}>
                    <p className={styles.stateCardstateName}>
                      {card.stateName}
                    </p>
                    <p className={styles.stateCarddescription}>
                      {card.description}
                    </p>

                    <div className={styles.stateCardbtnWrapper}>
                      <a
                        href={card.viewMoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.stateCardbtn}
                      >
                        <FaCircleInfo className={styles.stateCardbtnIcon} aria-hidden="true" />
                        <span className={styles.stateCardbtnText}>View More</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BildungsurlaubPage;
