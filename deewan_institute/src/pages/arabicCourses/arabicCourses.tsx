import { Fragment } from "react/jsx-runtime";
import Banner from "../../components/banner/banner";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer"
import Courses from "../../components/coursesLayout/courses";
import courseData from "../../../data/arabicCourses"
import "bootstrap"

function ArabicCourses() {
    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Banner */}
            <Banner data={{
                title: "Arabic Courses",
                description: "Check out all our Arabic courses at Deewan Institute, tailored for every learner's needs in the vibrant city of Amman. From the foundational courses to building essential vocabulary and grammar, to honing conversation and cultural nuances. Explore these options today and find the one that sparks your language journey!",
                backgroundImg: "../assets/images/banner/arabicCourses.svg",
            }} />
            {/* Main Layout */}
            <Courses data={courseData}/>
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default ArabicCourses; 