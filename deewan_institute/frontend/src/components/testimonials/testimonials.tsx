import { useEffect, Fragment } from "react";
import styles from "../testimonials/testimonials.module.scss";
import 'bootstrap'



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
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
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
                <div className={`${styles.title} mx-auto my-1  px-5 scroll-section slide-in-left`}>
                    <h1 className={styles.h1}>Testimonials</h1>
                </div>
                <div className="mx-auto text-center my-4 scroll-section">
                    <p className={styles.p}>Deewan Institute has students from all over the world, from many different cultures and backgrounds. They all
                        love learning with us! We have had students from the United States, Australia, United Kingdom, the
                        Netherlands, Italy, Germany, Denmark, Belgium, Austria, France, Canada, Pakistan, Switzerland, Iceland,
                        Ireland, Norway, Sweden, Greece, India, Japan, South Korea, Hong Kong, Singapore and South Africa, among many
                        others.</p>
                </div>
                <div className="container d-flex align-content-center ">
                    <div className={`swiper ${styles.testimonialsSwiper}`}>
                        <div className="swiper-wrapper">
                            {/* <!-- Testimonial Card 1 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Thanks to my teachers, I loved every className and I always felt supported and
                                        motivated! I was a total beginner in Ammiyeh and now after 2 months I feel much more confident and I
                                        can get myself around in Jordan. Deewan, you will be missed!"</p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Giorgia Gusci Gusciglio</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 2 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Excellent instructors and flexible online classNamees. Highly recommend!"</p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Fatima Khan</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 3 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Mohammad and Duaa are outstanding, professional educators. Mohammad's
                                        one-to-one lessons in colloquial Jordanian Arabic helped me improve immensely. I recommend their
                                        classNamees to anyone who wants to get to know Amman and Jordan the best way - through language!"
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Joel Veldkamp</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 4 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"One of the best things I did in Amman. Not just great teachers but really
                                        great people, too. Especially excellent for anyone wanting to speak like a local. Highly recommended."
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Sophie Parker</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 5 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"As a beginner, I really enjoyed my Arabic classNamees at Deewan Institute.
                                        With a lot of patience (!!!) and very good pedagogy, Duaa keeps on encouraging you, trying to make you
                                        self-confident, teaching you basics in a very attractive and effective way. Smile and good spirit are
                                        key elements. I definitely recommend people to take Arabic classNamees at Deewan."
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Nadège Chassaing </h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 6 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Mohammad and Duaa are not only professional educators but also really
                                        wonderful people. Mohammad’s Modern Standard Arabic and Colloquial Jordanian Arabic classNamees helped me
                                        improve a lot! My one-to-one classNamees with Mohammad left me not only with language skills but also a
                                        stronger understanding of local culture. I highly recommend Deewan Institute to anyone interested in
                                        learning Arabic and/or culture!"
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Gina Wu</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 7 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"I took Ammiyeh courses at Deewan intensively for a month and they arranged
                                        for my housing and several incredible trips to see sites in Jordan. It was my favourite winter break,
                                        and my Arabic improved immensely! The teachers at Deewan are experienced, patient, and creative with
                                        their lesson plans. We laughed and had so much fun together, by the end I really felt like family. I
                                        cannot recommend them highly enough!"
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Emma Slater</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 8 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Duaa and Mohammad are the best Ammiyeh teachers I've had. Their lessons
                                        are well-organized, crafted toward your own needs and abilities, and also push you to challenge
                                        yourself. Their lessons are also helpful for learning about local culture and linguistic idioms, which
                                        are hard to understand without spending extensive time in the country."
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Angela Lin</h5>
                                </div>
                            </div>
                            {/* <!-- Testimonial Card 9 --> */}
                            <div className="swiper-slide my-3">
                                <div className={styles.testimonialCard}>
                                    <img src={"/assets/images/others/stars.png"} alt="Rating" className={styles.testimonialImg} />
                                    <p className={styles.testimonialQuote}>"Mohammad and Duaa are a winning team! Within a couple of months of
                                        learning in their classNamees, my Arabic speaking skills simply soared. The Ammiyeh course was brilliant
                                        for building my confidence, vocabulary and listening comprehension. Besides, the classNamees were always
                                        such good fun. Definitely some of my best-spent JOD; really good value for money!"
                                    </p>
                                    <hr />
                                    <h5 className={styles.testimonialName}>Funke Alabi</h5>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
export default Testimonials;