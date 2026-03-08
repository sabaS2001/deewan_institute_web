import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap";
import "../style/about.css";
import "../style/teamSlider.css";
import Slider from "react-slick";

function TeamSwiper() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
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
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1112,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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

    const teamMembers = [
        { name: "Mohammad", title: "Director & Founder", img: "/assets/images/teams/1.jpg" },
        { name: "Ghayda", title: "Arabic Program Administrator", img: "/assets/images/teams/16.png" },
        { name: "Raghad", title: "Administrator", img: "/assets/images/teams/13.jpg" },
        { name: "Ayah", title: "Program Coordinator", img: "/assets/images/teams/17.png" },
        { name: "Nusaiba", title: "Arabic Teacher", img: "/assets/images/teams/3.jpg" },
        { name: "Huda", title: "Arabic Teacher", img: "/assets/images/teams/4.jpg" },
        { name: "Malak", title: "Arabic Teacher", img: "/assets/images/teams/2.jpg" },
        { name: "Raghad", title: "Arabic Teacher", img: "/assets/images/teams/12.jpg" },
        { name: "Rania", title: "Arabic Teacher", img: "/assets/images/teams/11.jpg" },
        { name: "Tasneem", title: "Arabic Teacher", img: "/assets/images/teams/10.jpg" },
        { name: "Noora", title: "Arabic Teacher", img: "/assets/images/teams/6.jpg" },
        { name: "Dalia", title: "Arabic Teacher", img: "/assets/images/teams/15.jpg" },
        { name: "Mutaz", title: "Arabic Teacher", img: "/assets/images/teams/5.jpg" },
        { name: "Deyaa", title: "Facility Manager", img: "/assets/images/teams/7.jpg" },
        { name: "Said", title: "Facility Manager", img: "/assets/images/teams/8.jpg" },
    ];

    return (
        <div style={{ width: "100%", maxWidth: "1100px", margin: "0 auto", padding: "20px", overflow: "hidden" }}>
            <Slider
                {...settings}
                aria-label="Team members carousel"
                accessibility={true}
            >
                {teamMembers.map((member, index) => (
                    <div key={index}>
                        <div className="d-flex flex-column align-items-center">
                            <img
                                className="team-member-img"
                                src={member.img}
                            />
                            <h3 className="heading text-center mt-4">{member.name}</h3>
                            <h5 className="jobTitle text-center">{member.title}</h5>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default TeamSwiper;