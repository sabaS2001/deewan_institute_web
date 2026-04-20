import "bootstrap";
import { Fragment } from "react";
import styles from "./cultureEvents.module.scss";
import "../../style/animation.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import { events, SIGNUP_LINK } from "../../../data/cultureEvents.data";
import type { EventMeta } from "../../../data/cultureEvents.data";

function EventMetaBlock({ meta }: { meta: EventMeta }) {
  return (
    <div className={styles.eventMeta}>
      <p>
        <strong>Time:</strong> {meta.time}
      </p>
      {meta.oneToOne && (
        <p>
          <strong>One-to-One:</strong> {meta.oneToOne}
        </p>
      )}
      {meta.group && (
        <p>
          <strong>Group Session:</strong> {meta.group}
        </p>
      )}
      {meta.cost && (
        <p>
          <strong>Cost:</strong> {meta.cost}
        </p>
      )}
    </div>
  );
}

function CultureEvents() {
  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />

      {/* ── Banner ── */}
      <section className={`${styles.banner} scroll-section`}>
        <div className={styles.bannerContent}>
          <span className={styles.bannerEyebrow}>Deewan Institute</span>
          <h1>
            Experience Culture.
            <br />
            Connect Through Language.
            <br />
            Learn Together.
          </h1>
          <div className={styles.bannerRule} />
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={`${styles.intro} scroll-section`}>
        <div className="row justify-content-center align-items-center g-5">
          <div className="col-md-4 d-flex flex-column">
            <span className={styles.introLabel}>Cultural Events</span>
            <p className="lead">
              At Deewan Institute, we invite students and guests to experience
              the richness of Palestinian and Arab culture through engaging
              daily events in our spacious workspace. Each activity offers a
              relaxed and welcoming way to learn, connect, and celebrate culture
              together.
            </p>
          </div>
          <div className="col-md-5 d-flex justify-content-center">
            <img
              className={styles.introImg}
              src="/assets/images/others/culture1.svg"
              alt="Cultural Events at Deewan"
            />
          </div>
        </div>
      </section>

      {/* ── Living Cultural Space ── */}
      <section className={`${styles.livingSpace} scroll-section`}>
        <div className="row justify-content-center align-items-center g-5">
          <div className="col-md-5 d-flex justify-content-center order-md-1 order-2">
            <img
              className={styles.livingImg}
              src="/assets/images/others/culture9.svg"
              alt="A Living Cultural Space"
            />
          </div>
          <div className="col-md-4 order-md-2 order-1">
            <span className={styles.livingLabel}>Our Philosophy</span>
            <h2>A Living Cultural Space</h2>
            <p className={`${styles.livingText} mt-4`}>
              Our cultural events are designed to go beyond the classroom.
              Through hands-on activities, creative workshops, and social
              gatherings, participants explore language, traditions, and
              contemporary culture in an interactive and friendly environment.
              From artistic expression to shared meals and meaningful
              conversations, every event encourages cultural exchange and
              community building.
            </p>
          </div>
        </div>
      </section>

      {/* ── Event Sections ── */}
      {events.map((event, i) => (
        <Fragment key={event.index}>
          <hr className={`${styles.divider} scroll-section`} />
          <section
            className={`${styles.eventSection} ${event.altBg ? styles.altBg : ""} scroll-section`}
          >
            <span
              className={`${styles.eventIndex} ${i % 2 !== 0 ? styles.eventIndexRight : ""}`}
            >
              {event.index}
            </span>

            <div className="row justify-content-center align-items-center g-4 g-md-5">
              {/* Text column */}
              <div
                className={`col-md-4 d-flex flex-column ${event.imageLeft ? "order-md-2" : "order-md-1"} order-2`}
              >
                <span
                  className={`${styles.eventLabel} ${styles[event.accentKey]}`}
                >
                  {event.label}
                </span>
                <h2
                  className={`${styles.eventTitle} ${styles[event.accentKey]}`}
                >
                  {event.title}
                </h2>
                <p className={styles.eventBody}>{event.body}</p>
                <EventMetaBlock meta={event.meta} />
                <div>
                  <a
                    href={SIGNUP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className={`${styles.signUpBtn} ${styles[event.btnKey]} ${styles[event.accentKey]}`}
                  >
                    Sign Up
                  </a>
                </div>
              </div>

              {/* Image column */}
              <div
                className={`col-md-6 d-flex justify-content-center ${event.imageLeft ? "order-md-1" : "order-md-2"} order-1`}
              >
                <img
                  className={styles.eventImg}
                  src={event.image}
                  alt={event.imageAlt}
                />
              </div>
            </div>
          </section>
        </Fragment>
      ))}

      <hr className={`${styles.divider} mb-0`} />
      <Footer />
    </Fragment>
  );
}

export default CultureEvents;
