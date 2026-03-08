import 'bootstrap';
import '../style/navbar.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-md bg-transparent align-items-center" id="navBar">
            <div className="container-fluid">
                <NavLink className="navbar-brand d-md-none" to="/">
                    <img src={"../assets/images/logos/LogoDeewan.svg"} alt="Deewan Institute Logo" id="mainLogo" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNav">
                    {/* <!-- Left group: Home and Features --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item active" id="nav-item">
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Center: Logo (only on medium+ screens) --> */}
                    <NavLink className="navbar-brand d-none d-md-block" to="/">
                        <img src={"../assets/images/logos/LogoDeewan.svg"} alt="Deewan Institute Logo" id="mainLogo" />
                    </NavLink>
                    {/* <!-- Right group: Pricing and Contact --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id="nav-item">
                                <NavLink className="nav-link" to="">What We Offer</NavLink>
                            </li>
                            <li className="nav-item" id="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar