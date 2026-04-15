import { useEffect, Fragment } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historyLayout/historyLayout";
import { palestineHistory } from "../../../data/palestineHistory";




function PalestineHistory() {
    useEffect(() => {
        document.title = 'The Zionist Project in Palestine';
    }, []);


    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={palestineHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PalestineHistory; 