import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import frenchData from '../../../data/french';
import ForeignLayout from "../../layout/foreignLayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'; 


function French() {

    useEffect(() => {
        document.title = 'French Course';
    }, []);

    useScrollAnimation(); 

    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={frenchData} />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default French