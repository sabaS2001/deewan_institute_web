import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import englishData from '../../../data/english';
import ForeignLayout from "../../layout/foreignLayout/layout";
import { useScrollAnimation } from '../../../hooks/scrollAnimations';
import '../../style/animation.scss';
import 'bootstrap'


function English() {

    useEffect(() => {
        document.title = 'English Course';
    }, []);
    
    useScrollAnimation();

    return (
        <Fragment>
            {/* Navbar */}
            <NavBar />
            {/* Main Layout */}
            <ForeignLayout data={englishData} />
            {/* Footer */}
            <Footer />
        </Fragment>

    )

}

export default English