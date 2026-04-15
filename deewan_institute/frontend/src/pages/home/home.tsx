import { useEffect, Fragment } from "react";
import { Link } from "react-router";
import HomeNavBar from "../../components/homeNavBar/homeNavbar";
import Testimonials from "../../components/testimonials/testimonials";
import Footer from "../../components/footer/footer";
import ForeignCircles from "../../components/foreignCircles/foreignCircles";
import Courses from "../../components/courses/courses";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";
import "../../style/animation.scss";
import style from "./home.module.scss";
import "bootstrap";

function Home() {
  useEffect(() => {
    document.title = "Deewan Institute | Home";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      {/* Navigation Bar */}
      <HomeNavBar />
      {/* <!-- Carousel --> */}
      <div
        id="myCarousel"
        className={`carousel slide ${style.myCarousel}`}
        data-bs-ride="carousel"
      >
        {/* <!-- Indicators/dots --> */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
          ></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div className="carousel-inner">
          {/* <!-- First Slide --> */}
          <div className="carousel-item active" id={style.carouselItem1}>
            <div className="container-fluid d-flex align-items-end h-100">
              <div className="row w-100">
                <div className="col-md-6 text-center d-flex flex-column align-items-center scroll-section slide-in-left">
                  <img
                    src={"/assets/images/logos/nobgLogo.png"}
                    style={{ width: "70%" }}
                  />
                </div>
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                  <div
                    className="d-flex scroll-section slide-in-right"
                    id={style.firstContainer}
                  >
                    <h2 className={`text-white ${style.h2}`}>
                      Native Arabic, Global Echoes: Ignite Cultures in Amman's
                      Heart.
                    </h2>
                    <p className={style.para}>
                      Experience the authentic rhythm of Arabic language and
                      culture through immersive lessons with native speakers in
                      the vibrant heart of Amman.
                    </p>
                    <Link
                      className="btn rounded-pill text-center"
                      id={style.a}
                      to="/about"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Second Slide --> */}
          <div className="carousel-item" id={style.carouselItem2}>
            <div className="container-fluid d-flex align-items-end h-100">
              <div className="row w-100">
                <div className="col-md-6 d-flex flex-column align-items-start justify-content-center scroll-section slide-in-right">
                  {/* <!-- Right column --> */}
                  <div
                    className="d-flex flex-column"
                    id={style.secondContainer}
                  >
                    <div className="text-start">
                      <h2 className={`text-white ${style.h2}`}>
                        Level Up Your Arabic
                      </h2>
                      <h2 className={`text-white ${style.h2}`}>With Our</h2>
                      <h1 className={style.h1}>Publications</h1>
                      <span>Available in: </span>
                      <ul>
                        <li>English Level: 1, 2, 3 </li>
                        <li>Spanish Level: 1</li>
                        <li>German Level: 1</li>
                      </ul>
                      <a
                        className="btn rounded-pill text-center"
                        href="https://a.co/d/aU1XrD1"
                      >
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center scroll-section slide-in-left">
                  <img
                    src={"../assets/images/others/comprehensiveBook.png"}
                    style={{ width: "60%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* <!-- About Us --> */}
      <section className="mt-5 pt-5" id={style.aboutUs}>
        <div className="row featurette align-items-center justify-content-center mx-auto">
          <div className="col-md-4 order-md-2 pr-2 d-flex flex-column gap-2">
            <h2
              className={`${style.featuretteHeading} scroll-section slide-in-left`}
            >
              About Us
            </h2>
            <p className="lead scroll-section slide-in-left" id={style.para}>
              Deewan Institute, inspired by the Arabic word "Deewan"—a gathering
              place for families, royal courts, poetry like Mahmoud Darwish's,
              thinkers, and travelers—opened in Amman in 2017 to teach global
              students. Today, it's a vibrant language center, co-working space,
              and event hub for freelancers and students, hosting cultural
              evenings and weekends while offering rentable rooms for
              conferences. Dive into authentic Arabic (Ammiyeh and FusHa) and
              English with native-speaker classes—one-to-one, two-to-one, or
              groups—and join our community by checking out our courses!
            </p>
            <Link
              className="button rounded-pill text-decoration-none scroll-section slide-in-left"
              id={style.button}
              to="/arabic-courses"
            >
              Explore Our Courses
            </Link>
          </div>
          <div className="col-md-5 order-md-1 d-flex">
            <img
              className="featurette-image img-fluid mx-auto scroll-section slide-in-right"
              src={"../assets/images/others/location.png"}
            />
          </div>
        </div>
      </section>

      {/* <!-- Courses Section --> */}
      <Courses />

      {/* <!-- Foreign Section --> */}
      <ForeignCircles />

      {/* <!-- Testimonials Section --> */}
      <Testimonials />

      {/* <!-- Contact Us Section --> */}
      <section className={`scroll-section py-3 ${style.contact}`}>
        <div className="row mx-5 justify-content-center">
          <div className="col-8 d-flex flex-column flex-end">
            <h1>Join Us Today and Start Your Language Journey!</h1>
          </div>
          <div className="col-2 d-flex flex-column justify-items-center justify-content-center">
            <a
              href="https://docs.google.com/forms/d/1Z2pxzOqxGTh8X0BePq_iy12bMVq_w5xW-gOD4SLnu2s/viewform?edit_requested=true"
              className="bg-white text-black text-center"
              target="_blank"
            >
              Book With Us!
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}
export default Home;
