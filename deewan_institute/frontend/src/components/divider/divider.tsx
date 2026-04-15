import styles from "./divider.module.scss";
import "bootstrap";

function Divider() {
    return (
        <hr className={`${styles.featuretteDivider}  mx-auto scroll-section`} />
    )
}
export default Divider;