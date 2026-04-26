import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import spanishData from '../../../data/spanish';
import ForeignLayout from "../../layout/foreignLayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'


function Spanish() {

    useEffect(() => {
        document.title = 'Spanish Course';
    }, []);

    useScrollAnimation();


    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={spanishData} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )

}

export default Spanish