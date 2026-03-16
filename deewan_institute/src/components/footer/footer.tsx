import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "../Footer/footer.module.scss";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        //  <!-- Footer -->
        <footer className={`${styles.footer} py-3`}>
            <div className={styles.footerLogo}>
                <NavLink className="text-decoration-none" to="/">
                    <img className="my-3"
                        src={"../assets/images/logos/LogoDeewan.svg"} alt="Deewan Institute Logo" width="150" />

                </NavLink>
            </div>
            <p className="text-center text-body-secondary pt-2">Copyrights © 2026 Deewan Institute. All rights reserved.</p>
            <ul className="nav justify-content-center align-items-center">
                <li className="nav-item">
                    <a href="https://www.facebook.com/profile.php?id=61579964781468" target="_blank"
                        className="nav-link px-2 text-body-secondary">
                        <img src="../assets/images/icons/facebook.png" width="30" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.instagram.com/deewan_arabic_institute/" target="_blank"
                        className="nav-link px-2 text-body-secondary">
                        <img src="../assets/images/icons/instagram.png" width="30" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.youtube.com/@deewaninstituteforlanguage9174" target="_blank"
                        className="nav-link px-2 text-body-secondary">
                        <img src="../assets/images/icons/youtube.png" width="30" />
                    </a>
                </li>
                <li className="nav-item">
                    <a href="https://www.linkedin.com/company/deewaninstitute/" target="_blank"
                        className="nav-link px-2 text-body-secondary">
                        <img src="../assets/images/icons/linkedin.png" width="30" />
                    </a>
                </li>
            </ul>

        </footer>
    )
}

export default Footer