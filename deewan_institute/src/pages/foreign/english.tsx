import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import englishData from '../../../data/english';
import ForeignLayout from "./layout";
import 'bootstrap'


function English() {

    useEffect(() => {
        document.title = 'Deewan Institute | English Course';
    }, []);

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