import { Fragment } from "react/jsx-runtime";
import styles from "../shadowBanner/shadowBanner.module.scss";
import "bootstrap";

interface BannerProps {
    title: string,
    rgbColor: string,
    backgroundImg: string,
}

function ShadowBanner({ data }: { data: BannerProps }) {
    return (
        <Fragment>
            <section 
                className={`${styles.banner} d-flex align-items-center justify-content-center`} 
                style={{ 
                    '--banner-image': `url(${data.backgroundImg})`, 
                    '--primary-color-rgb': data.rgbColor 
                } as React.CSSProperties}
            >
                <div className="container text-center d-flex flex-column align-items-center justify-content-center">
                    <div className={styles.para}>
                        <h1 className="display-5 text-white my-3 my-md-4">{data.title}</h1>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default ShadowBanner;
