import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import germanData from '../../../data/german';
import ForeignLayout from "../../layout/foreignLayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'


function German() {

    useEffect(() => {
        document.title = 'German Course';
    }, []);

    useScrollAnimation();

    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={germanData} />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default German