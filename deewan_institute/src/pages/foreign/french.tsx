import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import frenchData from '../../../data/french';
import ForeignLayout from "./layout";
import 'bootstrap'


function French() {

    useEffect(() => {
        document.title = 'Deewan Institute | French Course';
    }, []);

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