import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import spanishData from '../../../data/spanish';
import ForeignLayout from "./layout";
import 'bootstrap'


function Spanish() {

    useEffect(() => {
        document.title = 'Deewan Institute | Spanish Course';
    }, []);

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