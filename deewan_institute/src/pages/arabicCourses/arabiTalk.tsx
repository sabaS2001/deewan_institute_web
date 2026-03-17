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



function ArabiTalk() {

    useEffect(() => {
        document.title = 'Deewan Institute | Arabi Talk';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Banner */}
            <ShadowBanner data={{
                title: "ArabiTalk",
                backgroundImg: "/assets/images/banner/arabiTalkBG.png",
                rgbColor: "22, 117, 166"
            }} />
            <div className={style.arabiTalk} style={{ '--background-image': `url('/assets/images/background/arabiTalkBG.png')`, } as React.CSSProperties}>
                <main>
                    {/* Title */}
                    <Title data={{
                        subtitle: "Communicate in Arabic with Ease",
                        color: "#0C608B"
                    }} />
                    {/* <!-- About Section --> */}
                    <section className={`${style.info} py-3 my-5 scroll-section`}>
                        <div className="row justify-content-center mx-auto">
                            <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                                <h5 className="featurette-heading mb-2">ArabiTalk</h5>
                                <h1 className="featurette-heading my-3">What is it?</h1>
                                <p className="lead">Are you ready to speak Arabic fluently without the frustration of traditional methods?
                                    At ArabiTalk, we believe the most natural way to learn a language is through real conversations. Our
                                    comprehensive course is designed for learners at every level, from beginners to advanced speakers,
                                    offering immersive, guided sessions that simulate authentic dialogues.</p>
                            </div>
                            {/* <!-- The Building Image --> */}
                            <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                                <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                    src={"../assets/images/others/arabiTalk.png"} data-holder-rendered="true"
                                    style={{ width: '694px', height: '808px' }} />
                            </div>
                        </div>
                    </section>
                    {/* Platforms */}
                    <Platform />
                    {/* Sessions */}
                    <section className={style.sessions}>
                        <div className={`${style.subTitle} my-5`}>
                            <h1 className="py-2 scroll-section slide-in-right ">Sessions</h1>
                        </div>
                        {/* <!-- Two Cards --> */}
                        <div className="row">
                            <div
                                className="col-md-6 d-flex flex-column align-items-center justify-content-center mb-5 scroll-section slide-in-left">
                                <div className="card flex-column text-center justify-content-center" id={style.card}>
                                    <h1 id={style.black}>30 mins</h1>
                                    <hr className="my-2" />
                                    <h1 id={style.yellow}>6 JD</h1>
                                    <hr className="my-2" />
                                    <div className="my-2">
                                        <h4>Flexible Schedule:</h4>
                                        <h4>11:00am - 7:00pm</h4>
                                    </div>
                                    <a className="text-decoration-none text-white my-4"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                                        target="_blank">Book a Session!</a>
                                </div>
                            </div>
                            <div
                                className="col-md-6 d-flex flex-column align-items-center justify-content-center mb-5 scroll-section slide-in-left">
                                <div className="card flex-column text-center justify-content-center" id={style.card}>
                                    <h1 id={style.black}>45 mins</h1>
                                    <hr className="my-2" />
                                    <h1 id={style.yellow}>9 JD</h1>
                                    <hr className="my-2" />
                                    <div className="my-2">
                                        <h4 className="py-1">Flexible Schedule:</h4>
                                        <h4 className="py-1">11:00am - 7:00pm</h4>
                                    </div>
                                    <a className="text-decoration-none text-white my-4"
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                                        target="_blank">Book a Session!</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ArabiTalk; 