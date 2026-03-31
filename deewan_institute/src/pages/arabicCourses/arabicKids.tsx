import { Fragment, useEffect } from "react";
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import ShadowBanner from '../../components/shadowBanner/shadowBanner';
import Platform from "../../components/platform/platform";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import style from '../arabicCourses/arabic.module.scss';
import '../../style/animation.scss';
import 'bootstrap'
import BottomBanner from "../../components/bottomBanner/bottomBanner";



function ArabicKids() {

    useEffect(() => {
        document.title = 'Deewan Institute | Arabic For Kids';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Banner */}
            <ShadowBanner data={{
                title: "Arabic For Kids",
                backgroundImg: "/assets/images/banner/kidsBG.png",
                rgbColor: "166,10,31"
            }} />
            {/* About Section */}
            <div className={style.arabicKids} style={{ '--background-image': `url('/assets/images/background/arabiTalkBG.png')`, } as React.CSSProperties}>
                <main>
                    {/* Title */}
                    <Title data={{
                        subtitle: "Learn Arabic Playfully!",
                        color: "#A60A1F"
                    }} />
                    {/* <!-- About Section --> */}
                    <section className={`${style.info} py-3 my-5 scroll-section`}>
                        <div className="row justify-content-center mx-auto">
                            {/* <!-- The Building Image --> */}
                            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                    src={"../assets/images/others/arabicForKids.png"} data-holder-rendered="true"
                                    style={{ width: '694px', height: '890px' }} />
                            </div>
                            {/* Text */}
                            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                                <h5 className="featurette-heading mb-2">Arabic For Kids</h5>
                                <h1 className="featurette-heading my-3">What is it?</h1>
                                <p className="lead">Whether your child is just starting or wants to improve, this program builds a strong
                                    foundation in Arabic in a way that feels natural, exciting, and rewarding. The Arabic for Kids
                                    offers private classes (one-to-one or small groups) designed especially for
                                    young learners.
                                </p>
                                <p className="lead">
                                    We teach both Modern Standard Arabic (MSA) or Colloquial Arabic with a focus on building the four
                                    essential skills:
                                    <ul className="lead">
                                        <li className="lead"> Reading</li>
                                        <li className="lead"> Writing</li>
                                        <li className="lead"> Speaking</li>
                                        <li className="lead"> Listening</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </section>
                    {/* Approach Section */}
                    <section className={style.approach}>
                        <div className={`${style.subTitle} my-5`}>
                            <h1 className="py-2 scroll-section slide-in-right ">Seamless Platforms for Every Format</h1>
                        </div>
                        <div className="row justify-content-evenly text-center mx-auto my-5 py-5 scroll-section slide-in-left">
                            <div className="col-3" id={style.itemBox}>
                                <img src={"../assets/images/others/approach1.png"} alt="Arabic for Kids" />
                                <h2 className="py-4">Play & Learn</h2>
                            </div>
                            <div className="col-3" id={style.itemBox}>
                                <img src={"../assets/images/others/approach2.png"} alt="Stories That Inspire Imagination" />
                                <h2 className="py-4">Stories That Inspire Imagination</h2>
                            </div>
                            <div className="col-3" id={style.itemBox}>
                                <img src={"../assets/images/others/approach3.png"} alt="Interactive Visual Learning" />
                                <h2 className="py-4">Interactive Visual Learning</h2>
                            </div>
                        </div>
                    </section>
                    {/* Platforms Section */}
                    <Platform data={{ color: "#A60A1F" }} />
                    {/* Bottom Banner */}
                    <BottomBanner
                        data={{
                            mainText: "Enroll Your Child in Arabic Today!",
                            buttonText: "Enroll Now!",
                            primaryColor: "#A60A1F",
                            backgroundImg: "../assets/images/banner/kidsBBG.png",
                        }}
                    />
                </main>
            </div>
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ArabicKids; 