import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historyLayout/historyLayout";
import { oldHistory } from "../../../data/oldHistory";




function OldME() {
    useEffect(() => {
        document.title = 'History of the Middle East';
    }, []);


    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={oldHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default OldME; 