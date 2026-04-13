import { Fragment } from "react/jsx-runtime";
import "bootstrap";
import style from "./youTubeSlider.module.scss";
import { youTubeData } from "../../../data/youTube";

function YouTubeSlider() {
  return (
    <Fragment>
      <section className={style.testimonials}>
        <div
          className={`${style.title} title mt-5 mx-auto align-items-center scroll-section`}
        >
          <span>Our Testimonials</span>
        </div>
        <p className="text-center my-5 scroll-section" id={style.para}>
          Deewan Institute has students from all over the world, from many
          different cultures and backgrounds. They all love learning with us! We
          have had students from the United States, Australia, United Kingdom,
          the Netherlands, Italy, Germany, Denmark, Belgium, Austria, France,
          Canada, Pakistan, Switzerland, Iceland, Ireland, Norway, Sweden,
          Greece, India, Japan, South Korea, Hong Kong, Singapore and South
          Africa, among many others.
        </p>
        <div className="video-player text-center mt-3 scroll-section">
          <iframe
            id="main-video"
            width={1100}
            height={500}
            src="https://www.youtube.com/embed/s4SXlYhwfA8?si=Hoy0pHavDUTipykA"
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div
          className="carousel d-flex flex-row gap-1 align-items-center justify-content-center scroll-section"
          id="carousel"
        >
          {youTubeData.map((data) => (
            <div
              className={`${style.video_option} active`}
              data-video-id={data.id}
            >
              <img src={data.image} alt={data.alt} />
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default YouTubeSlider;
