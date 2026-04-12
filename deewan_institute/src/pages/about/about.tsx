import { Fragment, useEffect } from 'react';
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import TeamSlider from '../../components/teamSlider/teamSlider'
import PartnershipSlider from '../../components/partnershipSlider/partnershipSlider';
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import '../about/about.scss';
import 'bootstrap';

function About() {

    useEffect(() => {
        document.title = 'About Us';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            <main className="aboutpage">
                {/* // < !--Banner Image-- > */}
                <section className="banner d-flex align-items-center justify-content-center">
                    <div className="px-4 text-center d-flex flex-column align-items-center justify-content-center">
                        <h1 className="display-5 fw-bold text-white my-4">About Deewan Institute</h1>
                        <div className="col-lg-10 mx-auto">
                            <p className="lead mb-4 text-center text-white">Deewan Institute: Your premier gateway to mastering Arabic
                                through immersive, interactive online courses designed to cater to learners of all proficiency
                                levels—from complete beginners to advanced speakers—regardless of their location worldwide. Our
                                expertly crafted curriculum blends modern pedagogy with cultural insights, featuring live virtual
                                classrooms, personalized feedback from native instructors, multimedia resources like videos and
                                audio lessons, and flexible scheduling to fit busy lifestyles.</p>
                        </div>
                    </div>
                </section>
                {/* // <!--About Section-- > */}
                <section className="about py-3 my-5 scroll-section">
                    <div className="row justify-content-center">
                        <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                            <h5 className="featurette-heading mb-2">Who Are We?</h5>
                            <h1 className="featurette-heading my-3">Deewan Institute for Languages & Cultural Studies</h1>
                            <p className="lead">At Deewan Institute, we believe that language is the bridge to understanding cultures
                                and connecting people across borders. Our immersive approach goes beyond traditional classrooms,
                                integrating real-life scenarios into every lesson to help students not only master Arabic but also
                                gain confidence in practical communication. Whether you're a beginner exploring the nuances of FusHa
                                or an advanced learner refining conversational skills in Ammiyeh, our expert instructors tailor
                                experiences to your goals.</p>
                        </div>
                        {/* <!-- The Building Image --> */}
                        <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                src={"/assets/images/others/aboutImage1.png"} data-holder-rendered="true"
                                style={{ width: "600px", height: "700px" }} />
                        </div>
                    </div>
                </section>
                {/* // <!--Partnership Section-- > */}
                <section className="partnerships d-flex flex-column align-items-center justify-content-center">
                    <div className="title mt-5 d-flex flex-column align-items-center scroll-section">
                        <span>Partnerships</span>
                        <hr className="featurette-divider" />
                    </div>
                    <p className="lead text-center my-4 scroll-section">
                        Deewan Institute proudly collaborates with leading educational platforms, cultural organizations, and local
                        businesses to enhance our offerings. Working together to provide innovative learning experiences and vibrant
                        community events.
                    </p>
                    <PartnershipSlider />
                </section>
                {/* <!--Divider --> */}
                <hr className="featurette-divider mx-auto my-4 scroll-section" />
                {/* <!-- Values Section --> */}
                <section className="values scroll-section">
                    <div className="title mt-5 mx-auto align-items-center">
                        <span>Our Values</span>
                    </div>
                    <div className="row my-5 py-5">
                        {/* <!-- First Value --> */}
                        <div className="col-lg-4 d-flex flex-column align-items-center gap-4">
                            <img src={"/assets/images/icons/firstValue.png"} />
                            <h4 className="heading text-center lh-base">Community and <br /> Inclusivity</h4>
                        </div>
                        {/* <!-- Second Value --> */}
                        <div className="col-lg-4 d-flex flex-column align-items-center gap-4">
                            <img src={"/assets/images/icons/secondValue.png"} />
                            <h4 className="heading text-center lh-base">Excellence in <br /> Education</h4>
                        </div>
                        {/* <!-- Third Value --> */}
                        <div className="col-lg-4 d-flex flex-column align-items-center gap-4">
                            <img src={"/assets/images/icons/thirdValue.png"} />
                            <h4 className="heading text-center lh-base">Innovation and <br /> Creativity</h4>
                        </div>
                    </div>
                </section>
                {/* <!-- Divider --> */}
                <hr className="featurette-divider mx-auto my-2 scroll-section" />
                {/* <!-- Team Section --> */}
                <section className="team scroll-section">
                    <div className="title mt-5 mx-auto align-items-center">
                        <span>Meet Our Team</span>
                    </div>
                    <TeamSlider />
                </section>
                {/* <!-- Approach  Section --> */}
                <section className="approach my-5 scroll-section">
                    <div className="row justify-content-center">
                        {/* <!-- The Building Image --> */}
                        <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                src={"/assets/images/others/aboutImage2.png"} data-holder-rendered="true"
                                style={{ width: "650px", height: "800px" }} />
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                            <h1 className="featurette-heading my-3">Our Teaching Approach</h1>
                            <p className="lead">
                                At Deewan Institute, we specialize in teaching Arabic to non-native speakers, covering
                                both FusHa (classNameical Arabic) and Ammiyeh (Levantine Colloquial Arabic). Our philosophy focuses on
                                identifying each student's unique learning style to create personalized study plans, emphasizing
                                conversational proficiency while developing all skills—reading, writing, and listening. Rooted in
                                integrating classNameical, GPA (Growing Participator Approach), and immersive cultural methods (like
                                music, cooking, and real-life scenarios), our vision is supported by our custom curriculum,
                                textbooks, digital platform, Arabic podcast with transcripts, and YouTube channel for a
                                comprehensive learning experience.
                            </p>
                        </div>
                    </div>
                </section>
                {/* <!-- Testimonials --> */}
                <section className="testimonials">
                    <div className="title mt-5 mx-auto align-items-center scroll-section">
                        <span>Our Testimonials</span>
                    </div>
                    <p className="text-center my-5 scroll-section">
                        Deewan Institute has students from all over the world, from many different cultures and backgrounds. They
                        all love learning with us! We have had students from the United States, Australia, United Kingdom, the
                        Netherlands, Italy, Germany, Denmark, Belgium, Austria, France, Canada, Pakistan, Switzerland, Iceland,
                        Ireland, Norway, Sweden, Greece, India, Japan, South Korea, Hong Kong, Singapore and South Africa, among
                        many others.
                    </p>
                    <div className="video-player text-center  mt-3 scroll-section">
                        <iframe
                            id="main-video"
                            width={1100}
                            height={500}
                            src={"https://www.youtube.com/embed/s4SXlYhwfA8?si=Hoy0pHavDUTipykA"}
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                    <div className="carousel d-flex flex-row gap-1 align-items-center justify-content-center scroll-section"
                        id="carousel">
                        {/* <!-- Add more .video-option divs as needed --> */}
                        <div className="video-option active" data-video-id="s4SXlYhwfA8?">
                            <img src={"https://img.youtube.com/vi/s4SXlYhwfA8/hqdefault.jpg"} alt="Video 1" />
                        </div>
                        <div className="video-option" data-video-id="yFkwGmZTik4">
                            <img src={"https://img.youtube.com/vi/yFkwGmZTik4/hqdefault.jpg"} alt="Video 1" />
                        </div>
                        <div className="video-option" data-video-id="X99wGFMDw-8?">
                            <img src={"https://img.youtube.com/vi/X99wGFMDw-8/hqdefault.jpg"} alt="Video 2" />
                        </div>
                        <div className="video-option" data-video-id="QkMKvkacUIw?">
                            <img src={"https://img.youtube.com/vi/QkMKvkacUIw/hqdefault.jpg"} alt="Video 3" />
                        </div>
                        <div className="video-option" data-video-id="W1ZBn4qUDq0">
                            <img src={"https://img.youtube.com/vi/W1ZBn4qUDq0/hqdefault.jpg"} alt="Video 4" />
                        </div>
                        <div className="video-option" data-video-id="MDM2sl25fh8">
                            <img src={"https://img.youtube.com/vi/MDM2sl25fh8/hqdefault.jpg"} alt="Video 5" />
                        </div>
                        <div className="video-option" data-video-id="mJWVDsJ-0_s">
                            <img src={"https://img.youtube.com/vi/mJWVDsJ-0_s/hqdefault.jpg"} alt="Video 6" />
                        </div>
                        <div className="video-option" data-video-id="yDqvCWrYdbo?">
                            <img src={"https://img.youtube.com/vi/yDqvCWrYdbo/hqdefault.jpg"} alt="Video 7" />
                        </div>
                        <div className="video-option" data-video-id="WBqSpPczbes?">
                            <img src={"https://img.youtube.com/vi/WBqSpPczbes/hqdefault.jpg"} alt="Video 8" />
                        </div>
                    </div>
                </section>
            </main>
            {/* <!-- Footer --> */}
            <Footer />
        </Fragment>
    )
}

export default About