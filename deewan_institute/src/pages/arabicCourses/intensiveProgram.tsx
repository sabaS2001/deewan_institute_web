import { Fragment, useEffect } from "react";
import NavBar from '../../components/navBar/navbar';
import Footer from '../../components/footer/footer';
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import style from '../arabicCourses/arabic.module.scss';
import '../../style/animation.scss';
import Banner from "../../components/banner/banner";
import Divider from "../../components/divider/divider";
import CurriculumSlider from "../../components/curriculumSlider/curriculumSlider";
import 'bootstrap'


function IntensiveProgram() {

    useEffect(() => {
        document.title = 'Intensive Summer & Fall Program';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Banner */}
            <Banner data={{
                title: "Intensive Summer & Fall Program",
                description: "The Deewan Institute for Languages and Cultural Studies offers an Intensive and Summer Fall Study Abroad Program designed for students eager to deeply immerse themselves in Arabic language and culture. This transformative experience combines rigorous language instruction with hands-on cultural exploration, allowing participants to build fluency in Colloquial Levantine Arabic & Modern Standard Arabic and regional dialects while living in vibrant Arabic-speaking communities.",
                backgroundImg: "../assets/images/banner/intensiveBG.png",
            }} />
            <main className={style.intensive}>
                {/* First Section */}
                <section className={`${style.info} my-5 pt-5`}>
                    <div className="row justify-content-center">
                        <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                            <h1 className={`${style.featuretteHeading} my-5 lh-base scroll-section slide-in-left`}>About the Program</h1>
                            <p className="lead lh-base scroll-section slide-in-left ">
                                The Deewan Institute for Languages and Cultural Studies offers an Intensive Summer & Fall Study
                                Abroad Program for immersive Arabic language and cultural learning. Designed for a supportive
                                environment, it provides intensive instruction from native-speaking teachers, focusing on
                                conversational practice and cultural activities to build real-world skills.
                                Participants also enjoy excursions to iconic Jordanian sites like Petra, Wadi Rum, and the Dead Sea,
                                offering firsthand cultural experiences and language practice. Open to all levels—from beginner to
                                advanced—the program can be customized to individual needs, making it ideal for students seeking to
                                enhance their Arabic proficiency and explore Jordan's rich heritage.
                            </p>
                            <a id={style.checkBtn} className="text-decoration-none rounded-pill scroll-section slide-in-left " href="#programFee">Check Out the Program Fees</a>
                        </div>
                        <div className="col-md-5 d-flex flex-column align-items-start justify-content-center scroll-section slide-in-right">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                src={"../assets/images/others/intensive1.png"} data-holder-rendered="true" />
                        </div>
                    </div>
                </section>
                {/* Divider  */}
                <Divider />
                {/* <!-- Curriculum Section --> */}
                <CurriculumSlider />
                {/* Divider  */}
                <Divider />
                {/* <!-- Special Section --> */}
                <section className={`${style.special} py-3 my-5 scroll-section`}>
                    <div className="row justify-content-center">
                        {/* <!-- The Building Image --> */}
                        <div className="col-md-5 d-flex flex-column align-items-start justify-content-center">
                            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500"
                                src={"../assets/images/others/intensive2.png"} data-holder-rendered="true" />
                        </div>
                        <div className="col-md-4 d-flex flex-column align-items-start justify-content-center">
                            <h5 className="featurette-heading mb-2 scroll-section slide-in-right">Why Us?</h5>
                            <h1 className="featurette-heading my-3 scroll-section slide-in-right">What Makes Deewan So Special?</h1>
                            <p className="lead">Deewan’s Intensive Fall Program focuses on building students’ proficiency in all
                                language skills (reading, listening, writing, and speaking). What makes this program special is:
                            </p>
                            <ul className="lead scroll-section slide-in-right">
                                <li>price competitive</li>
                                <li>covers all levels</li>
                                <li>rich content (Deewan’s own curricula and various other resources)</li>
                                <li>ability to establish relationships with native language partners.</li>
                                <li>professional and experienced staff, offering help and support to students.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default IntensiveProgram; 