import { useEffect, Fragment } from "react";
import styles from "../teamSlider/teamSlider.module.scss";

function TeamSwiper() {

    useEffect(() => {
        // Access global Swiper variable provided by the CDN script
        const swiper = new (window as any).Swiper(`.${styles.teamSwiper}`, {
            slidesPerView: 1,       // Default: 1 slide on mobile
            spaceBetween: 10,       // Space between slides
            loop: true,             // Infinite loop
            autoplay: {
                delay: 3000,          // Auto-slide every 3s (optional; remove if not wanted)
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            },
            speed: 1000,            // Animation speed
            navigation: {           // Enable arrows
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {          // Responsive: Show more slides on larger screens
                768: {                // Tablet+
                    slidesPerView: 1
                },
                1024: {               // Desktop+
                    slidesPerView: 3,
                },
            },
        });
        return () => swiper.destroy();
    }, []);


    return (

        <Fragment>
            <div className="container d-flex align-content-center my-5">
                <div className={`swiper ${styles.teamSwiper}`}>
                    <div className="swiper-wrapper">
                        {/* <!-- 1 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                <img id={`${styles.teacherImg}`} src={"../assets/images/teams/1.jpg"} alt="Mohammad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Mohammad</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Director & Founder</h5>
                            </div>
                        </div>
                        {/* <!-- 2 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                <img id={`${styles.teacherImg}`} src={"../assets/images/teams/16.png"} alt="Ghayda" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Ghayda</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Program Administrator</h5>
                            </div>
                        </div>
                        {/* <!-- 3 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                <img id={`${styles.teacherImg}`} src={"../assets/images/teams/13.jpg"} alt="Raghad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Raghad</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Administrator</h5>
                            </div>
                        </div>
                        {/* <!-- 4 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={styles.teacherImg} src={"../assets/images/teams/17.png"} alt="Mohammad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Ayah</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Program Coordinator</h5>
                            </div>
                        </div>
                        {/* <!-- 5 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/3.jpg"} alt="Ghayda" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Nusaiba</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 6 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide} >
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/4.jpg"} alt="Raghad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Huda</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 7 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/2.jpg"} alt="Mohammad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Malak</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 8 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={styles.teacherImg} src={"../assets/images/teams/12.jpg"} alt="Ghayda" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Raghad</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 9 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/11.jpg"} alt="Raghad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Rania</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 10 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/10.jpg"} alt="Mohammad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Tasneem</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 11 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/6.jpg"} alt="Ghayda" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Noora</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 12 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                <img id={`${styles.teacherImg}`} src={"../assets/images/teams/15.jpg"} alt="Raghad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Dalia</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 13 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/5.jpg"} alt="Mohammad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Mutaz</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Arabic Teacher</h5>
                            </div>
                        </div>
                        {/* <!-- 14 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"../assets/images/teams/7.jpg"} alt="Ghayda" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Deyaa</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Facility Manager</h5>
                            </div>
                        </div>
                        {/* <!-- 15 Team Member --> */}
                        <div className="swiper-slide" id={styles.swiperSlide}>
                            <div className="d-flex flex-column align-items-center">
                                < img id={`${styles.teacherImg}`} src={"/assets/images/teams/8.jpg"} alt="Raghad" />
                                <h3 className={`${styles.heading} text-center mt-4`}>Said</h3>
                                <h5 className={`${styles.jobTitle} text-center`}>Facility Manager</h5>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Navigation arrows --> */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>

            </div>

        </Fragment>
    )
}

export default TeamSwiper;