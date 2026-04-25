import { useState } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import { germanStateCards } from "../../../data/bildungsurlaub.data";
import styles from "./bildungsurlaub.module.scss";
import { FaCircleInfo } from "react-icons/fa6";

const BODY_TEXT_EN = `Bildungsurlaub (educational leave) is a legal entitlement in Germany that allows employees to take paid leave from work to participate in officially recognized educational programs.

The exact regulations vary by state, but in general, employees are entitled to several days per year for further education, provided the course is approved by the relevant state authority.

The Deewan Institute for Languages and Cultural Studies is officially recognized in Berlin and Lower Saxony to offer Bildungsurlaub programs. Our courses meet the required legal and quality standards in these states.

This means:
- Employees in Berlin and Lower Saxony can apply for paid educational leave to attend our courses.
- Our programs comply with official requirements regarding content, structure, and teaching hours.
- Participants receive all necessary documentation to submit to their employer.

Bildungsurlaub provides professionals with the opportunity to improve their language skills and intercultural competence while continuing to receive their salary.

For further information, please contact us at arabic@deewaninstitute.com.`;

const BODY_TEXT_DE = `Bildungsurlaub ist ein gesetzlicher Anspruch in Deutschland, der Arbeitnehmerinnen und Arbeitnehmern erlaubt, bezahlten Urlaub für anerkannte Bildungsmaßnahmen zu nehmen.

Die genauen Regelungen variieren je nach Bundesland. Im Allgemeinen haben Beschäftigte Anspruch auf mehrere Tage pro Jahr, sofern der Kurs von der zuständigen Landesbehörde anerkannt ist.

Das Deewan-Institut für Sprachen und Kulturwissenschaften ist in Berlin und Niedersachsen offiziell anerkannt. Unsere Kurse erfüllen die gesetzlichen Qualitäts- und Inhaltsstandards.

Das bedeutet:
- Beschäftigte in Berlin und Niedersachsen können Bildungsurlaub für unsere Kurse beantragen.
- Unsere Programme entsprechen den offiziellen Anforderungen an Inhalt, Struktur und Unterrichtsstunden.
- Teilnehmende erhalten alle notwendigen Unterlagen für ihren Arbeitgeber.

Für weitere Informationen wenden Sie sich bitte an arabic@deewaninstitute.com.`;

const BildungsurlaubPage = () => {
  const [activeLang, setActiveLang] = useState<"en" | "de">("en");

  useScrollAnimation();

  const bodyText = activeLang === "en" ? BODY_TEXT_EN : BODY_TEXT_DE;
  const whatIsHeading =
    activeLang === "en" ? "What is Bildungsurlaub?" : "Was ist Bildungsurlaub?";

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
        <div
          className={`scroll-section ${styles.section} ${styles["section--hero"]}`}
        >
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

        <section
          className={`scroll-section ${styles.section} ${styles["section--content"]}`}
        >
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

              {/* This container now holds the "shadow" and the panel */}
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

        <section
          className={`scroll-section ${styles.section} ${styles["section--states"]}`}
        >
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
                        <FaCircleInfo
                          className={styles.stateCardbtnIcon}
                          aria-hidden="true"
                        />
                        <span className={styles.stateCardbtnText}>
                          View More
                        </span>
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
