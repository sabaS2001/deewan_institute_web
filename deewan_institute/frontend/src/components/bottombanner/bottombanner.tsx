import { Fragment } from "react/jsx-runtime";
import styles from "../bottombanner/bottombanner.module.scss";
import "bootstrap";

interface BBProps {
    mainText: string,
    buttonText: string,
    primaryColor: string,
    backgroundImg: string,
}

function BottomBanner({ data }: { data: BBProps }) {
    return (
        <Fragment>
            <div 
                className={`${styles.bottomBanner} mb-0 py-5 mt-5`} 
                style={{ 
                    '--background-image': `url(${data.backgroundImg})`, 
                    '--color': `${data.primaryColor}` 
                } as React.CSSProperties}
            >
                <div className="container text-center d-flex flex-column flex-md-row align-items-center justify-content-center">
                    <h2 className="display-5 text-white my-3 my-md-4">{data.mainText}</h2>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                        className="text-decoration-none rounded-pill text-center text-white" 
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {data.buttonText}
                    </a>
                </div>
            </div>
        </Fragment>
    )
}

export default BottomBanner;
