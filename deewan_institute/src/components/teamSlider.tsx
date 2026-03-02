import 'bootstrap';
import '../style/teamSlider.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';

function TeamSlider() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const teamMembers = [
        { name: "Mohammad", title: "Director & Founder", img: "../src/assets/images/teams/1.jpg" },
        { name: "Ghayda", title: "Arabic Program Administrator", img: "../src/assets/images/teams/16.png" },
        { name: "Raghad", title: "Administrator", img: "../src/assets/images/teams/13.jpg" },
        { name: "Ayah", title: "Program Coordinator", img: "../src/assets/images/teams/17.png" },
        { name: "Nusaiba", title: "Arabic Teacher", img: "../src/assets/images/teams/3.jpg" },
        { name: "Huda", title: "Arabic Teacher", img: "../src/assets/images/teams/4.jpg" },
        { name: "Malak", title: "Arabic Teacher", img: "../src/assets/images/teams/2.jpg" },
        { name: "Raghad", title: "Arabic Teacher", img: "../src/assets/images/teams/12.jpg" },
        { name: "Rania", title: "Arabic Teacher", img: "../src/assets/images/teams/11.jpg" },
        { name: "Tasneem", title: "Arabic Teacher", img: "../src/assets/images/teams/10.jpg" },
        { name: "Noora", title: "Arabic Teacher", img: "../src/assets/images/teams/6.jpg" },
        { name: "Dalia", title: "Arabic Teacher", img: "../src/assets/images/teams/15.jpg" },
        { name: "Mutaz", title: "Arabic Teacher", img: "../src/assets/images/teams/5.jpg" },
        { name: "Deyaa", title: "Facility Manager", img: "../src/assets/images/teams/7.jpg" },
        { name: "Said", title: "Facility Manager", img: "../src/assets/images/teams/8.jpg" },
    ];

    const slidesToShow = 3;
    const totalSlides = teamMembers.length;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + slidesToShow) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - slidesToShow + totalSlides) % totalSlides);
    };

    const getVisibleMembers = () => {
        const members = [];
        for (let i = 0; i < slidesToShow; i++) {
            const index = (currentIndex + i) % totalSlides;
            members.push({ ...teamMembers[index], originalIndex: index });
        }
        return members;
    };




    // const [isMounted, setIsMounted] = useState(false);

    // useEffect(() => {
    //     setIsMounted(true);
    // }, []);

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //             },
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };
    // if (!isMounted) {
    //     return null;
    // }
    return (

        <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
            {/* Navigation Buttons */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
                <button
                    onClick={prevSlide}
                    style={{
                        padding: "10px 20px",
                        fontSize: "20px",
                        cursor: "pointer",
                        background: "#0d6efd",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    ←
                </button>

                {/* Team Members */}
                <div style={{ display: "flex", gap: "30px", justifyContent: "center", flex: "1" }}>
                    {getVisibleMembers().map((member, idx) => (
                        <div
                            key={idx}
                            style={{
                                textAlign: "center",
                                minWidth: "200px"
                            }}
                        >
                            <img
                                src={member.img}
                                alt={member.name}
                                style={{
                                    width: "150px",
                                    height: "150px",
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                    marginBottom: "15px"
                                }}
                            />
                            <h3 style={{ margin: "5px 0" }}>{member.name}</h3>
                            <h5 style={{ margin: "5px 0", color: "#666" }}>{member.title}</h5>
                        </div>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    style={{
                        padding: "10px 20px",
                        fontSize: "20px",
                        cursor: "pointer",
                        background: "#0d6efd",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                    }}
                >
                    →
                </button>
            </div>

            {/* Dots Indicator */}
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "30px" }}>
                {Array.from({ length: Math.ceil(totalSlides / slidesToShow) }).map((_, idx) => (
                    <span
                        key={idx}
                        onClick={() => setCurrentIndex(idx * slidesToShow)}
                        style={{
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: idx === Math.floor(currentIndex / slidesToShow) ? "#0d6efd" : "#ccc",
                            cursor: "pointer",
                            display: "inline-block"
                        }}
                    />
                ))}
            </div>
        </div>


        // <div className='teamSlider'>
        //     <Slider {...settings}>
        //         {/* <!-- 1 Team Member --> */}
        //         <div>
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/1.jpg"} alt="Mohammad" />
        //                 <h3 className="heading text-center mt-4">Mohammad</h3>
        //                 <h5 className="jobTitle text-center">Director & Founder</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 2 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/16.png"} alt="Ghayda" />
        //                 <h3 className="heading text-center mt-4">Ghayda</h3>
        //                 <h5 className="jobTitle text-center">Arabic Program Administrator</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 3 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/13.jpg"} alt="Raghad" />
        //                 <h3 className="heading text-center mt-4">Raghad</h3>
        //                 <h5 className="jobTitle text-center">Administrator</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 4 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/17.png"} alt="Mohammad" />
        //                 <h3 className="heading text-center mt-4">Ayah</h3>
        //                 <h5 className="jobTitle text-center">Program Coordinator</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 5 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/3.jpg"} alt="Ghayda" />
        //                 <h3 className="heading text-center mt-4">Nusaiba</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 6 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/4.jpg"} alt="Raghad" />
        //                 <h3 className="heading text-center mt-4">Huda</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 7 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/2.jpg"} alt="Mohammad" />
        //                 <h3 className="heading text-center mt-4">Malak</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 8 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/12.jpg"} alt="Ghayda" />
        //                 <h3 className="heading text-center mt-4">Raghad</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 9 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/11.jpg"} alt="Raghad" />
        //                 <h3 className="heading text-center mt-4">Rania</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 10 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/10.jpg"} alt="Mohammad" />
        //                 <h3 className="heading text-center mt-4">Tasneem</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 11 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/6.jpg"} alt="Ghayda" />
        //                 <h3 className="heading text-center mt-4">Noora</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 12 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/15.jpg"} alt="Raghad" />
        //                 <h3 className="heading text-center mt-4">Dalia</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 13 Team Member --> */}
        //         <div>
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/5.jpg"} alt="Mohammad" />
        //                 <h3 className="heading text-center mt-4">Mutaz</h3>
        //                 <h5 className="jobTitle text-center">Arabic Teacher</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 14 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/7.jpg"} alt="Ghayda" />
        //                 <h3 className="heading text-center mt-4">Deyaa</h3>
        //                 <h5 className="jobTitle text-center">Facility Manager</h5>
        //             </div>
        //         </div>
        //         {/* <!-- 15 Team Member --> */}
        //         <div >
        //             <div className="d-flex flex-column align-items-center">
        //                 <img src={"../src/assets/images/teams/8.jpg"} alt="Raghad" />
        //                 <h3 className="heading text-center mt-4">Said</h3>
        //                 <h5 className="jobTitle text-center">Facility Manager</h5>
        //             </div>
        //         </div>
        //     </Slider>
        // </div>


    )
}

export default TeamSlider;


