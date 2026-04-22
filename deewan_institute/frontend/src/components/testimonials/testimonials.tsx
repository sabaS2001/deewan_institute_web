import { useEffect, Fragment } from "react";
import styles from "../testimonials/testimonials.module.scss";
import "bootstrap";

function Testimonials() {
  useEffect(() => {
    // Access global Swiper variable provided by the CDN script
    const swiper = new (window as any).Swiper(`.${styles.testimonialsSwiper}`, {
      loop: true,
      grabCursor: true,
      autoplay: {
        delay: 2000, // Time in milliseconds between slides (2 seconds)
        disableOnInteraction: false, // Keeps autoplay running after a user swipes
        pauseOnMouseEnter: true, // Pauses autoplay when the user hovers over it
      },
      slidesPerView: 1,
      spaceBetween: 100,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });
    return () => swiper.destroy();
  }, []);

  return (
    <Fragment>
      {/* <!-- Testimonials Section --> */}
      <section className={`${styles.testimonials} py-3`}>
        <div
          className={`${styles.title} mx-auto my-1  px-5 scroll-section slide-in-left`}
        >
          <h1 className={styles.h1}>Testimonials</h1>
        </div>
        <div className="mx-auto text-center my-4 scroll-section">
          <p className={styles.p}>
            Deewan Institute has students from all over the world, from many
            different cultures and backgrounds. They all love learning with us!
            We have had students from the United States, Australia, United
            Kingdom, the Netherlands, Italy, Germany, Denmark, Belgium, Austria,
            France, Canada, Pakistan, Switzerland, Iceland, Ireland, Norway,
            Sweden, Greece, India, Japan, South Korea, Hong Kong, Singapore and
            South Africa, among many others.
          </p>
        </div>
        <div className="container d-flex align-content-center ">
          <div className={`swiper ${styles.testimonialsSwiper}`}>
            <div className="swiper-wrapper">
              {/* <!-- Testimonial Card 1 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I had just a couple of weeks in Amman and wanted to make
                    the most of my time by improving my Arabic, so I reached out
                    to Deewan. It began with a placement test, followed by
                    reviewing a tailored program made for me. From there we
                    jumped straight into lessons with my teachers, Noora and
                    Malak who were both amazing."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Azmad</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 2 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "The Deewan Institute is a professional and friendly place
                    to learn Arabic. In my case it was a bit difficult at the
                    beginning to adjust at my level since I learned some Arabic
                    before. During my two weeks, my teachers encouraged me to
                    speak every day through questionings and games. You need to
                    buy a book there, which has a lot of exercises, texts and
                    audio material. I can recommend this school for everyone who
                    wants to learn in a very structured and still personal way."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Malou Butters</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 3 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I highly highly recommend Deewan Institute! I spent 4 weeks
                    studying Ammiyeh with the teacher Dalya. She was an
                    incredible teacher and I improved a lot. We covered
                    speaking, listening, reading and writing. Moreover, Deewan
                    has its own learning materials (books, podcast etc.) which
                    are of high quality and very structured."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Sibel K</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 4 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I really enjoyed my time at Deewan. The teachers are so
                    lovely and helpful, the learning material is great, and
                    overall the environment is welcoming and supportive. Admin
                    were also really accommodating in terms of scheduling. I
                    genuinely learned a lot during my time here and hope to come
                    back soon again. Warmest recommendations to anyone looking
                    to learn/improve their Arabic or to take any of the other
                    classes they offer."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Julie Dahl</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 5 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I spent 5 weeks at Deewan for an intensive language course,
                    and I wish I had done it earlier in my life. The overall
                    team was helpful and welcoming, and they made my experience
                    unique. The teachers are committed and full of energy, and
                    the vibe is always really nice (in fact I was happy to spend
                    time there just studying on my own and chatting with whoever
                    was around). I will consider taking more classes there in
                    the future, even online, and I will always recommend it in
                    case you're planning to study Arabic in Amman."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Isacco Cividini </h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 6 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I attended a few classes at Deewan while I was in Amman,
                    and I was very happy with the experience. All the teachers
                    were professional, well-prepared, and engaging. I enjoyed my
                    classes with each of them and noticed improvements very
                    quickly. After the classes, I also spent time in their
                    co-working space, which is a very comfortable and productive
                    place to work from. I definitely recommend this school and I
                    would love to go back."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Alessandra Bonerba</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 7 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "Perfect place for Arabic learning in Amman! Great teachers
                    with Deewan’s own textbook have helped me make great strides
                    in my Arabic. Cecile's superb help in facilitating admin
                    processes smoothly and Malak's attentive and proactive
                    teaching — Deewan comes highly recommended!"
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Hyunji Kim</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 8 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I highly recommend Deewan Institute for learning and
                    practicing Arabic! The teachers are excellent, and I really
                    appreciate that Deewan has its own textbook and audio
                    recordings, which make it easy to review and practice
                    outside of class. It’s a great place to improve your Arabic
                    in a supportive and engaging environment."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Samira Bavand</h5>
                </div>
              </div>
              {/* <!-- Testimonial Card 9 --> */}
              <div className="swiper-slide my-3">
                <div className={styles.testimonialCard}>
                  <img
                    src={"/assets/images/others/stars.svg"}
                    alt="Rating"
                    className={styles.testimonialImg}
                  />
                  <p className={styles.testimonialQuote}>
                    "I did a month-long course at Deewan. There's a lot of focus
                    on speaking in Arabic - which was great. The staff are
                    really friendly and flexible with schedules. Overall a very
                    rewarding experience."
                  </p>
                  <hr />
                  <h5 className={styles.testimonialName}>Roshan Sam</h5>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
export default Testimonials;
