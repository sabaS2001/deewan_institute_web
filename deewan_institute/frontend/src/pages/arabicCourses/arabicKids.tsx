import { Fragment, useEffect } from "react";
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import Title from '../../components/title/title';
import ShadowBanner from '../../components/shadowBanner/shadowBanner';
import Platform from "../../components/platform/platform";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import style from '../arabicCourses/arabic.module.scss';
import '../../style/animation.scss';
import 'bootstrap';
import BottomBanner from "../../components/bottomBanner/bottomBanner";

function ArabicKids() {
    useEffect(() => {
        document.title = 'Arabic For Kids';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            
            {/* Banner */}
            <ShadowBanner 
                data={{
                    title: "Arabic For Kids",
                    backgroundImg: "/assets/images/banner/kidsBG.png",
                    rgbColor: "166,10,31"
                }} 
            />
            
            {/* About Section */}
            <div className={style.arabicKids}>
                <main>
                    {/* Title */}
                    <Title 
                        data={{
                            subtitle: "Learn Arabic Playfully!",
                            color: "#A60A1F"
                        }} 
                    />
                    
                    {/* About Section */}
                    <section className={`${style.info} py-3 my-4 my-md-5 scroll-section`}>
                        <div className="container">
                            <div className="row justify-content-center align-items-center g-4 g-md-5">
                                {/* Image - Order 1 on mobile, Order 1 on desktop */}
                                <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center order-1 order-md-1">
                                    <img 
                                        className="img-fluid" 
                                        alt="Arabic For Kids"
                                        src={"../assets/images/others/arabicForKids.png"} 
                                        style={{ maxWidth: '400px', width: '100%', height: 'auto' }} 
                                    />
                                </div>
                                {/* Text - Order 2 on mobile, Order 2 on desktop */}
                                <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center order-2 order-md-2">
                                    <h5 className="featurette-heading mb-2">Arabic For Kids</h5>
                                    <h1 className="featurette-heading my-3">What is it?</h1>
                                    <p className="lead">
                                        Whether your child is just starting or wants to improve, this program builds a strong
                                        foundation in Arabic in a way that feels natural, exciting, and rewarding. The Arabic for Kids
                                        offers private classes (one-to-one or small groups) designed especially for young learners.
                                    </p>
                                    <p className="lead">
                                        We teach both Modern Standard Arabic (MSA) or Colloquial Arabic with a focus on building the four
                                        essential skills:
                                    </p>
                                    <ul className="lead">
                                        <li>Reading</li>
                                        <li>Writing</li>
                                        <li>Speaking</li>
                                        <li>Listening</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    {/* Approach Section */}
                    <section className={style.approach}>
                        <div className={`${style.subTitle} my-4 my-md-5`}>
                            <h1 className="py-2 scroll-section slide-in-right">Seamless Platforms for Every Format</h1>
                        </div>
                        <div className="container">
                            <div className="row justify-content-center text-center mx-auto my-4 my-md-5 py-4 py-md-5 scroll-section slide-in-left g-4">
                                {/* Item 1 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach1.png"} 
                                            alt="Play & Learn" 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">Play & Learn</h2>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach2.png"} 
                                            alt="Stories That Inspire Imagination" 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">Stories That Inspire Imagination</h2>
                                    </div>
                                </div>
                                {/* Item 3 */}
                                <div className="col-12 col-sm-6 col-md-4">
                                    <div id={style.itemBox}>
                                        <img 
                                            src={"../assets/images/others/approach3.png"} 
                                            alt="Interactive Visual Learning" 
                                            className="img-fluid"
                                            style={{ maxWidth: '200px', width: '100%', height: 'auto' }}
                                        />
                                        <h2 className="py-3 py-md-4">Interactive Visual Learning</h2>
                                    </div>
                                </div>
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
    );
}

export default ArabicKids;
