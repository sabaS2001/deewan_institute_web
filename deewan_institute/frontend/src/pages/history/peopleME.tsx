import { useEffect, Fragment } from "react";
import NavBar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import HistoryLayout from "../../layout/historyLayout/historyLayout";
import { peopleHistory } from "../../../data/peopleHistory";




function PeopleOfME() {
    useEffect(() => {
        document.title = 'People of the Middle East';
    }, []);

    return (
        <Fragment>
            {/* NavBar */}
            <NavBar />
            {/* Main Layout */}
            <HistoryLayout data={peopleHistory} />
            {/* Footer */}
            <Footer />
        </Fragment>
    )
}

export default PeopleOfME; 