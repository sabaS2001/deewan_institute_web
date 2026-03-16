import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import germanData from '../../../data/german';
import ForeignLayout from "./layout";
import 'bootstrap'


function German() {

    useEffect(() => {
        document.title = 'Deewan Institute | German Course';
    }, []);

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