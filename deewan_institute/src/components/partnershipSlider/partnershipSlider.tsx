import { useEffect } from "react";
import "bootstrap";
import styles from "../partnershipSlider/partnershipSlider.module.scss"



function PartnershipSlider() {

    useEffect(() => {
        // Access global Swiper variable provided by the CDN script
        const swiper = new (window as any).Swiper(`.mySwiper`, {
            slidesPerView: 1,
            spaceBetween: 5,
            loop: true,
            loopedSlides: 6,  // Explicitly loop all 6 slides
            centeredSlides: true,  // Centers slides for better loop feel
            autoplay: {
                delay: 3000,  // Slower for smoother transitions
                disableOnInteraction: false,
            },
            speed: 1500,  // Slower animation
            grabCursor: true,
            breakpoints: {
                1024: { slidesPerView: 3 },
                768: { slidesPerView: 1 },
                480: { slidesPerView: 1 },
            },
        });
        return () => swiper.destroy();
    }, []);

    return (
        <div className={`${styles.ourclients} container my-5 scroll-section`}>
            <div className={`${styles.clientsWrap}`}>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper align-items-center justify-content-center">
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://goodbookshopjo.com/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/thegoodbookshop.png"} alt="The Good Bookshop" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://savethechildren.org.jo/en" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/savethechildren.png"} alt="Save the Children" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.msf.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership3.png"} alt="medecins sans frontieres" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://incaco.org/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership4.webp"}
                                    alt="instituto de cultura árabe de colombia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a href="https://www.unive.it/" className="text-decoration-none" target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/partnership5.webp"}
                                    alt="università ca' foscari venezia" />
                            </a>
                        </div>
                        <div className="swiper-slide">
                            <a className="text-decoration-none" href="https://darnahostel.com/ " target="_blank">
                                <img className={`${styles.partnerImg}`} src={"../assets/images/partnership/darnahostel.png"} alt="Darna Hostel" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default PartnershipSlider;