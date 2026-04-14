import { Fragment, useEffect } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import TeamSlider from "../../components/teamSlider/teamSlider";
import PartnershipSlider from "../../components/partnershipSlider/partnershipSlider";
import Divider from "../../components/divider/divider";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import "../../style/animation.scss";
import "bootstrap";
import style from "./about.module.scss";
import YouTubeSlider from "../../components/youTubeSlider/youTubeSlider";

function About() {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <main className={`${style.aboutpage}`}>
        {/* Banner Image */}
        <section
          className={`${style.banner} d-flex align-items-center justify-content-center`}
        >
          <div className="px-4 text-center d-flex flex-column align-items-center justify-content-center">
            <h1 className="display-5 fw-bold text-white my-4">
              About Deewan Institute
            </h1>
            <div className="col-lg-10 mx-auto">
              <p className={`lead mb-4 text-center text-white ${style.para}`}>
                Deewan Institute: Your premier gateway to mastering Arabic
                through immersive, interactive online courses designed to cater
                to learners of all proficiency levels—from complete beginners to
                advanced speakers—regardless of their location worldwide. Our
                expertly crafted curriculum blends modern pedagogy with cultural
                insights, featuring live virtual classrooms, personalized
                feedback from native instructors, multimedia resources like
                videos and audio lessons, and flexible scheduling to fit busy
                lifestyles.
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className={`${style.about} py-3 my-5 scroll-section`}>
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
              <h5 className={`${style.h5} featurette-heading mb-2`}>
                Who Are We?
              </h5>
              <h1 className={`${style.h1} featurette-heading my-3`}>
                Deewan Institute for Languages & Cultural Studies
              </h1>
              <p className={`${style.para} lead`}>
                At Deewan Institute, we believe that language is the bridge to
                understanding cultures and connecting people across borders. Our
                immersive approach goes beyond traditional classrooms,
                integrating real-life scenarios into every lesson to help
                students not only master Arabic but also gain confidence in
                practical communication. Whether you're a beginner exploring the
                nuances of FusHa or an advanced learner refining conversational
                skills in Ammiyeh, our expert instructors tailor experiences to
                your goals.
              </p>
            </div>
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
              <img
                id={style.images}
                className="featurette-image img-fluid mx-auto"
                src="/assets/images/others/aboutImage1.png"
                alt="Deewan Institute Building"
                style={{ width: "600px", height: "700px" }}
              />
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section
          className={`${style.partnerships} d-flex flex-column align-items-center justify-content-center`}
        >
          <div
            className={`${style.title} title mt-5 d-flex flex-column align-items-center scroll-section`}
          >
            <span>Partnerships</span>
            <hr className={`${style.featuretteDivider}`} />
          </div>
          <p className={`${style.para} lead text-center my-4 scroll-section`}>
            Deewan Institute proudly collaborates with leading educational
            platforms, cultural organizations, and local businesses to enhance
            our offerings. Working together to provide innovative learning
            experiences and vibrant community events.
          </p>
          <PartnershipSlider />
        </section>

        {/* Divider */}
        <Divider />

        {/* Values Section */}
        <section className={`${style.values} scroll-section`}>
          <div className={`${style.title} mt-5 mx-auto align-items-center`}>
            <span>Our Values</span>
          </div>
          <div id={style.row} className="row my-5 py-5">
            <div className="col-lg-4 d-flex flex-column align-items-center gap-4" id={style.value}>
              <img
                id={style.image}
                src="/assets/images/icons/firstValue.png"
                alt="Community and Inclusivity"
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                Community and <br /> Inclusivity
              </h4>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center gap-4" id={style.value}>
              <img
                id={style.image}
                src="/assets/images/icons/secondValue.png"
                alt="Excellence in Education"
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                Excellence in <br /> Education
              </h4>
            </div>
            <div className="col-lg-4 d-flex flex-column align-items-center gap-4" id={style.value}>
              <img
                id={style.image}
                src="/assets/images/icons/thirdValue.png"
                alt="Innovation and Creativity"
              />
              <h4 className={`${style.heading} text-center lh-base`}>
                Innovation and <br /> Creativity
              </h4>
            </div>
          </div>
        </section>

        {/* Divider */}
        <Divider />

        {/* Team Section */}
        <section className={`${style.team} scroll-section`}>
          <div className={`${style.title} mt-5 mx-auto align-items-center`}>
            <span>Meet Our Team</span>
          </div>
          <TeamSlider />
        </section>

        {/* Approach Section */}
        <section className={`${style.approach} my-5 scroll-section`}>
          <div className="row justify-content-center">
            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
              <img
                className="featurette-image img-fluid mx-auto"
                src="/assets/images/others/aboutImage2.png"
                alt="Teaching Approach"
                style={{ width: "650px", height: "800px" }}
              />
            </div>
            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
              <h1
                className={`${style.featuretteHeading} featurette-heading my-3`}
              >
                Our Teaching Approach
              </h1>
              <p className={`${style.para} lead`}>
                At Deewan Institute, we specialize in teaching Arabic to
                non-native speakers, covering both FusHa (Classical Arabic) and
                Ammiyeh (Levantine Colloquial Arabic). Our philosophy focuses on
                identifying each student's unique learning style to create
                personalized study plans, emphasizing conversational proficiency
                while developing all skills—reading, writing, and listening.
                Rooted in integrating classical, GPA (Growing Participator
                Approach), and immersive cultural methods (like music, cooking,
                and real-life scenarios), our vision is supported by our custom
                curriculum, textbooks, digital platform, Arabic podcast with
                transcripts, and YouTube channel for a comprehensive learning
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <YouTubeSlider />
      </main>
      <Footer />
    </Fragment>
  );
}

export default About;
