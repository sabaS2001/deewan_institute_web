import { Fragment, useEffect } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./careers.module.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import JobAccordin from "../../components/careers/jobaccordin";
import CareerForm from "../../components/careers/careerform";

function Career() {
  console.log("API URL:", import.meta.env.VITE_API_URL); // Should show: http://localhost:5000

  useEffect(() => {
    document.title = "Careers | Deewan Institute";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <main className={styles.career_page}>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.hero__bg} />
          <div className={styles.hero__overlay} />

          <div className={styles.hero__content}>
            <div className={styles.hero__eyebrow}>We're Hiring</div>
            <h1 className={styles.hero__title}>
              Shape the Future of Arabic Education
            </h1>
            <p className={styles.hero__sub}>
              Join a team dedicated to preserving language, culture, and connection.
            </p>
            <div className={styles.hero__line} />
          </div>
        </section>

        {/* Two-column layout */}
        <section className={`${styles.content_section} mx-auto`}>
          <div className="row mx-0 justify-content-center align-items-start g-5">
            <JobAccordin />
            <CareerForm />
          </div>
        </section>

      </main>
      <Footer />
    </Fragment>
  );
}

export default Career;