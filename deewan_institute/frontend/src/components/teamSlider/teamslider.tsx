import { useEffect, Fragment } from "react";
import styles from "../teamslider/teamslider.module.scss";
import { teamData } from "../../../data/team";

function TeamSwiper() {
  useEffect(() => {
    const swiper = new (window as any).Swiper(`.${styles.teamSwiper}`, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      speed: 1000,

      navigation: {
        nextEl: `.${styles.swiperButtonNext}`,
        prevEl: `.${styles.swiperButtonPrev}`,
        disabledClass: "swiper-button-disabled",
      },
      breakpoints: {
        320: { slidesPerView: 1, spaceBetween: 15 },
        576: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 25 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
        1200: { slidesPerView: 3, spaceBetween: 40 },
      },
    });
    return () => swiper.destroy(true, true);
  }, []);

 

return (
    <Fragment>
        <div className="container position-relative my-4 my-md-5 px-3 px-md-0">
            <div className={`swiper ${styles.teamSwiper}`}>
                <div className="swiper-wrapper">
                    {/* Your slides - NO DUPLICATION needed */}
                    {teamData.team.map((member, index) => (
                        <div className="swiper-slide" key={index}>
                            <div className="d-flex flex-column align-items-center h-100">
                                <img
                                    className={styles.teacherImg}
                                    src={member.img}
                                    alt={member.name}
                                    loading="lazy"
                                />
                                <h3 className={`${styles.heading} text-center mt-4 mb-0`}>{member.name}</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>{member.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={`${styles.swiperButtonPrev} swiper-button-prev`}></div>
            <div className={`${styles.swiperButtonNext} swiper-button-next`}></div>
        </div>
    </Fragment>
);
}

export default TeamSwiper;
