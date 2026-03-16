import { Fragment } from "react/jsx-runtime";
import styles from "./banner.module.scss";
import "bootstrap";

interface BannerTitle {
    title: string,
    description: string,
    backgroundImg: string,
}

function Banner({ data }: { data: BannerTitle }) {
    return (
        <Fragment>
            <section className={`${styles.banner} d-flex align-items-center`} style={{ '--background-image': `url(${data.backgroundImg})`, } as React.CSSProperties}>
                <div className="px-4 text-center d-flex flex-column align-items-center">
                    <h1 className="display-5 fw-bold text-white my-4">{data.title}</h1>
                    <div className="col-lg-10 mx-auto">
                        <p className="lead mb-4 text-center text-white">{data.description}</p>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}


export default Banner; 