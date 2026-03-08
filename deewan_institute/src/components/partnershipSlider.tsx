import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap";
import "../style/about.scss";
import "../style/partnershipSlider.scss";
import Slider from "react-slick";

// ✅ Add TypeScript interfaces
interface Partner {
    href: string;
    alt: string;
    img: string;
}

interface SliderSettings {
    dots: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    autoplaySpeed: number;
    pauseOnHover: boolean;
    pauseOnFocus: boolean;
    responsive: Array<{
        breakpoint: number;
        settings: {
            slidesToShow: number;
            slidesToScroll: number;
        };
    }>;
}

function PartnershipSlider() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settings: SliderSettings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    if (!isClient) {
        return <div style={{ height: "300px", background: "#f5f5f5" }}>Loading...</div>;
    }

    const books: Partner[] = [
        { href: "https://goodbookshopjo.com/", alt: "The Good Bookshop", img: "/assets/images/partnership/thegoodbookshop.png" },
        { href: "https://savethechildren.org.jo/en", alt: "Save the Children", img: "/assets/images/partnership/savethechildren.png" },
        { href: "https://www.msf.org/", alt: "medecins sans frontieres", img: "/assets/images/partnership/partnership3.png" },
        { href: "https://incaco.org/", alt: "instituto de cultura árabe de colombia", img: "/assets/images/partnership/partnership4.webp" },
        { href: "https://www.unive.it/", alt: "università ca' foscari venezia", img: "/assets/images/partnership/partnership5.webp" },
        { href: "https://darnahostel.com/", alt: "Darna Hostel", img: "/assets/images/partnership/darnahostel.png" },
    ];

    return (
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
            <Slider
                {...settings}
                aria-label="Partnership carousel"
                accessibility={true}
            >
                {books.map((bookItem, index) => (
                    <div key={index}>
                        <div className="d-flex flex-column align-items-center">
                            <a
                                href={bookItem.href}
                                className="text-decoration-none"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src={bookItem.img}
                                    alt={bookItem.alt}
                                />
                            </a>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default PartnershipSlider;