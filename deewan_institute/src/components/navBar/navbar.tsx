import 'bootstrap';
import styles from '../navBar/navbar.module.scss';
import { NavLink } from 'react-router-dom';
import {useShop} from '../../context/ShopContext';

function NavBar() {
    const { wishlistCount } = useShop();
    return (
        <nav className="navbar navbar-expand-md bg-transparent align-items-center" id={styles.navBar}>
            <div className="container-fluid">
                <NavLink className="navbar-brand d-md-none" to="/">
                    <img src={"/assets/images/logos/LogoDeewan.svg"} alt="Deewan Institute Logo" id={styles.mainLogo} />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id={styles.navbarNav}>
                    {/* <!-- Left group: Home and Features --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id={styles.navitem}>
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item active" id={styles.navitem}>
                                <NavLink className="nav-link" to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- Center: Logo (only on medium+ screens) --> */}
                    <NavLink className="navbar-brand d-none d-md-block" to="/">
                        <img src={"/assets/images/logos/LogoDeewan.svg"} alt="Deewan Institute Logo" id={styles.mainLogo} />
                    </NavLink>
                    {/* <!-- Right group: Pricing and Contact --> */}
                    <div className="p-2">
                        <ul className="navbar-nav">
                            <li className="nav-item" id={styles.navitem}>
                                <NavLink className="nav-link" to="">What We Offer</NavLink>
                            </li>
                            <li className="nav-item" id={styles.navitem}>
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <NavLink className="mx-2 position-relative" to="/wishlist">
                <img id="wishlistIcon" src="/assets/images/icons/heart_brown.png" alt="User Wishlist" />
                {wishlistCount > 0 && (
                    <span style={{
                        position: 'absolute',
                        top: '-6px',
                        right: '-6px',
                        background: '#472211', // Your primary brown color
                        color: 'white',
                        borderRadius: '50%',
                        width: '18px',
                        height: '18px',
                        fontSize: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontFamily: 'Merriweather-Regular',
                    }}>
                        {wishlistCount}
                    </span>
                )}
            </NavLink>
        </nav>
        
    )
}

export default NavBar