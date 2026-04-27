import { Fragment, useEffect } from "react";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer"
import Courses from "../../layout/courseslayout/courses";
import courseData from "../../../data/arabicCourses"
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import "bootstrap"

function ArabicCourses() {

    useEffect(() => {
        document.title = 'Arabic Courses';
    }, []);

    useScrollAnimation();


    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Banner */}
            <Banner data={{
                title: "Arabic Courses",
                description: "Check out all our Arabic courses at Deewan Institute, tailored for every learner's needs in the vibrant city of Amman. From the foundational courses to building essential vocabulary and grammar, to honing conversation and cultural nuances. Explore these options today and find the one that sparks your language journey!",
                backgroundImg: "../assets/images/banner/arabicCbanner.jpg",
            }} />
            {/* Main Layout */}
            <Courses data={courseData} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ArabicCourses; 