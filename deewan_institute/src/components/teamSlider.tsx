import { useRef, useState } from "react";

function TeamSwiper() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
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

    const slidesPerView = 3;
    const totalSlides = teamMembers.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % (totalSlides - slidesPerView + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + (totalSlides - slidesPerView + 1)) % (totalSlides - slidesPerView + 1));
    };

    return (
        <div className="team-slider-container">
            <button className="slider-arrow prev" onClick={prevSlide}>←</button>
            <div className="team-slider-track" ref={trackRef}>
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member-slide">
                        <div className="team-member-content">
                            <img
                                className="team-member-img"
                                src={member.img}
                                alt={member.name}
                            />
                            <h3 className="heading text-center mt-4">{member.name}</h3>
                            <h5 className="jobTitle text-center">{member.title}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-arrow next" onClick={nextSlide}>→</button>
        </div>
    );
}

export default TeamSwiper;