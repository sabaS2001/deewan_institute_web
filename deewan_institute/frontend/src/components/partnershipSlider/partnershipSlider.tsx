import { useEffect } from "react";
import "bootstrap";
import styles from "../partnershipSlider/partnershipSlider.module.scss";

function PartnershipSlider() {
    useEffect(() => {
        const swiper = new (window as any).Swiper(`.mySwiper`, {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
            loopedSlides: 6,
            centeredSlides: false,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            speed: 1500,
            grabCursor: true,
            breakpoints: {
                320: { 
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                480: { 
                    slidesPerView: 2,
                    spaceBetween: 15
                },
                768: { 
                    slidesPerView: 3,
                    spaceBetween: 20
                },
                1024: { 
                    slidesPerView: 4,
                    spaceBetween: 30
                },
                1200: { 
                    slidesPerView: 5,
                    spaceBetween: 40
                },
            },
        });
        return () => swiper.destroy();
    }, []);

    // Partner data array (no need for 60+ duplicates)
    const partners = [
        { name: "The Good Bookshop", url: "https://goodbookshopjo.com/", img: "../assets/images/partnership/thegoodbookshop.png" },
        { name: "Save the Children", url: "https://savethechildren.org.jo/en", img: "../assets/images/partnership/savethechildren.png" },
        { name: "Medecins Sans Frontieres", url: "https://www.msf.org/", img: "../assets/images/partnership/partnership3.png" },
        { name: "Instituto de Cultura Árabe", url: "https://incaco.org/", img: "../assets/images/partnership/partnership4.webp" },
        { name: "Università Ca' Foscari", url: "https://www.unive.it/", img: "../assets/images/partnership/partnership5.webp" },
        { name: "Darna Hostel", url: "https://darnahostel.com/", img: "../assets/images/partnership/darnahostel.png" },
    ];

    return (
        <div className={`${styles.ourclients} container my-4 my-md-5 scroll-section`}>
            <div className={`${styles.clientsWrap}`}>
                <div className="swiper mySwiper">
                    <div className="swiper-wrapper align-items-center justify-content-center">
                        {/* Original 6 partners */}
                        {partners.map((partner, index) => (
                            <div className="swiper-slide" key={index}>
                                <a href={partner.url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                    <img 
                                        className={`${styles.partnerImg}`} 
                                        src={partner.img} 
                                        alt={partner.name} 
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        ))}
                        {/* Duplicate for smooth loop (6 more = 12 total) */}
                        {partners.map((partner, index) => (
                            <div className="swiper-slide" key={`dup-${index}`}>
                                <a href={partner.url} className="text-decoration-none" target="_blank" rel="noopener noreferrer">
                                    <img 
                                        className={`${styles.partnerImg}`} 
                                        src={partner.img} 
                                        alt={partner.name} 
                                        loading="lazy"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PartnershipSlider;
