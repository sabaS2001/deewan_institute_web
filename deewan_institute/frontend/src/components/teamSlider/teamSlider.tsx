import { useEffect, Fragment } from "react";
import styles from "../teamSlider/teamSlider.module.scss";

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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 15
                },
                576: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 25
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
            },
        });
        return () => swiper.destroy();
    }, []);

    // Team members data array
    const teamMembers = [
        { name: "Mohammad", title: "Director & Founder", img: "../assets/images/teams/1.jpg" },
        { name: "Ghayda", title: "Arabic Program Administrator", img: "../assets/images/teams/16.png" },
        { name: "Raghad", title: "Administrator", img: "../assets/images/teams/13.jpg" },
        { name: "Ayah", title: "Program Coordinator", img: "../assets/images/teams/17.png" },
        { name: "Nusaiba", title: "Arabic Teacher", img: "../assets/images/teams/3.jpg" },
        { name: "Huda", title: "Arabic Teacher", img: "../assets/images/teams/4.jpg" },
        { name: "Malak", title: "Arabic Teacher", img: "../assets/images/teams/2.jpg" },
        { name: "Raghad", title: "Arabic Teacher", img: "../assets/images/teams/12.jpg" },
        { name: "Rania", title: "Arabic Teacher", img: "../assets/images/teams/11.jpg" },
        { name: "Tasneem", title: "Arabic Teacher", img: "../assets/images/teams/10.jpg" },
        { name: "Noora", title: "Arabic Teacher", img: "../assets/images/teams/6.jpg" },
        { name: "Dalia", title: "Arabic Teacher", img: "../assets/images/teams/15.jpg" },
        { name: "Mutaz", title: "Arabic Teacher", img: "../assets/images/teams/5.jpg" },
        { name: "Deyaa", title: "Facility Manager", img: "../assets/images/teams/7.jpg" },
        { name: "Said", title: "Facility Manager", img: "/assets/images/teams/8.jpg" },
    ];

    return (
        <Fragment>
            <div className="container d-flex align-content-center my-4 my-md-5">
                <div className={`swiper ${styles.teamSwiper}`}>
                    <div className="swiper-wrapper">
                        {/* Original team members */}
                        {teamMembers.map((member, index) => (
                            <div className="swiper-slide" id={styles.swiperSlide} key={index}>
                                <div className="d-flex flex-column align-items-center">
                                    <img 
                                        id={styles.teacherImg} 
                                        src={member.img} 
                                        alt={member.name} 
                                        loading="lazy"
                                    />
                                    <h3 className={`${styles.heading} text-center mt-4`}>{member.name}</h3>
                                    <h5 className={`${styles.jobTitle} text-center`}>{member.title}</h5>
                                </div>
                            </div>
                        ))}
                        {/* Duplicate for smooth loop */}
                        {teamMembers.map((member, index) => (
                            <div className="swiper-slide" id={styles.swiperSlide} key={`dup-${index}`}>
                                <div className="d-flex flex-column align-items-center">
                                    <img 
                                        id={styles.teacherImg} 
                                        src={member.img} 
                                        alt={member.name} 
                                        loading="lazy"
                                    />
                                    <h3 className={`${styles.heading} text-center mt-4`}>{member.name}</h3>
                                    <h5 className={`${styles.jobTitle} text-center`}>{member.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Navigation arrows - Always visible on mobile */}
                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default TeamSwiper;
