import { Fragment, useEffect } from "react";
import "bootstrap";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import CurriculumSlider from "../../components/curriculumSlider/curriculumSlider";
import Banner from "../../components/banner/banner";
import Divider from "../../components/divider/divider";
import OpenHours from "../../components/openHours/openHours";
import Schedule from "../../components/scheduleTable/schedule";
import style from "../arabicCourses/arabic.module.scss";
import "../../style/animation.scss";

function IntensiveProgram() {
  useEffect(() => {
    document.title = "Intensive Summer & Fall Program";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      <NavBar />
      <Banner
        data={{
          title: "Intensive Summer & Fall Program",
          description:
            "The Deewan Institute for Languages and Cultural Studies offers an Intensive and Summer Fall Study Abroad Program designed for students eager to deeply immerse themselves in Arabic language and culture.",
          backgroundImg: "../assets/images/banner/intensiveBG.png",
        }}
      />
      <main className={style.intensive}>
        {/* First Section */}
        <section className={`${style.info} my-5 pt-5`}>
          <div className="row justify-content-center align-items-center">
            {/* Text Column */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-1 order-md-1 mb-4 mb-md-0">
              <h1
                className={`${style.featuretteHeading} my-5 lh-base scroll-section slide-in-left`}
              >
                About the Program
              </h1>
              <p className="lead lh-base scroll-section slide-in-left">
                The Deewan Institute for Languages and Cultural Studies offers
                an Intensive Summer & Fall Study Abroad Program for immersive
                Arabic language and cultural learning. Designed for a supportive
                environment, it provides intensive instruction from
                native-speaking teachers, focusing on conversational practice
                and cultural activities to build real-world skills.
              </p>
              <a
                id={style.checkBtn}
                className="text-decoration-none rounded-pill scroll-section slide-in-left mt-4"
                href="#programFee"
              >
                Check Out the Program Fees
              </a>
            </div>
            {/* Image Column*/}
            <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center scroll-section slide-in-right order-2 order-md-2">
              <img
                className="img-fluid"
                alt="Intensive Program"
                src={"../assets/images/others/intensive1.png"}
              />
            </div>
          </div>
        </section>

        <Divider />
        <CurriculumSlider />
        <Divider />

        {/* Special Section */}
        <section className={`${style.special} py-3 my-5 scroll-section`}>
          <div className="row justify-content-center align-items-center">
            {/* Image Column */}
            <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center mb-4 mb-md-0 order-1 order-md-1">
              <img
                className="img-fluid"
                alt="Deewan Building"
                src={"../assets/images/others/intensive2.png"}
              />
            </div>
            {/* Text Column */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-2 order-md-2">
              <h5 className="featurette-heading mb-2 scroll-section slide-in-right">
                Why Us?
              </h5>
              <h1 className="featurette-heading my-3 scroll-section slide-in-right">
                What Makes Deewan So Special?
              </h1>
              <p className="lead">
                Deewan's Intensive Fall Program focuses on building students'
                proficiency in all language skills.
              </p>
              <ul className="lead scroll-section slide-in-right">
                <li>Price competitive</li>
                <li>Covers all levels</li>
                <li>Rich content & resources</li>
                <li>Native language partners</li>
                <li>Professional staff support</li>
              </ul>
            </div>
          </div>
        </section>

        <OpenHours data={{ backgroundColor: "#8f6e43", color: "#ffffff" }} />

        {/* Program Fees Section */}
        <section className={`${style.programFee} py-4 mt-4`}>
          <div className={style.title}>
            <h1 className="py-2 scroll-section slide-in-left">Program Fees</h1>
          </div>
          <Schedule
            data={{
              subtitle: "4 Weeks Course",
              iconImage: "../assets/images/icons/one.png",
              oneTotalPrice: "800 JD",
              groupTotalPrice: "880 JD",
              oneHours: "80 hours",
              groupHours: "80 hours",
            }}
          />
          <Schedule
            data={{
              subtitle: "8 Weeks Course",
              iconImage: "../assets/images/icons/two.png",
              oneTotalPrice: "1600 JD",
              groupTotalPrice: "1760 JD",
              oneHours: "160 hours",
              groupHours: "160 hours",
            }}
          />
        </section>
      </main>
      <Footer />
    </Fragment>
  );
}

export default IntensiveProgram;
