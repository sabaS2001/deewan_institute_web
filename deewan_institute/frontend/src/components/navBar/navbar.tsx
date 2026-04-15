import 'bootstrap';
import styles from '../navBar/navbar.module.scss';
import { NavLink, useLocation } from 'react-router-dom';
import { useShop } from '../../context/ShopContext';

// Routes where shop icons should appear
const SHOP_ROUTES = ['/publications', '/wishlist', '/cart'];

function NavBar() {
    const { wishlistCount, cartCount } = useShop();
    const { pathname } = useLocation();

    // Show icons on exact matches AND any sub-route of /publications
    const showShopIcons =
        SHOP_ROUTES.some((route) => pathname === route) ||
        pathname.startsWith('/publications/');

    return (
        <nav className="navbar navbar-expand-md bg-transparent align-items-center" id={styles.navBar}>
            <div className="container-fluid">
                <NavLink className="navbar-brand d-md-none" to="/">
                    <img src="/assets/images/logos/LogoDeewan.svg" alt="Deewan Institute Logo" id={styles.mainLogo} />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse d-flex justify-content-center align-items-center" id={styles.navbarNav}>
                    {/* Left group */}
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

                    {/* Center logo */}
                    <NavLink className="navbar-brand d-none d-md-block" to="/">
                        <img src="/assets/images/logos/LogoDeewan.svg" alt="Deewan Institute Logo" id={styles.mainLogo} />
                    </NavLink>

                    {/* Right group */}
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

            {/* Shop icons — conditional */}
            {showShopIcons && (
                <div className={`d-flex align-items-center gap-2 mx-2 ${styles.shopIcons}`}>

                    {/* Wishlist */}
                    <NavLink className="position-relative" to="/wishlist" aria-label="Wishlist">
                        <img
                            src="/assets/images/icons/heart_brown.png"
                            alt="Wishlist"
                            id={styles.wishlistIcon}
                        />
                        {wishlistCount > 0 && (
                            <span className={styles.badge}>{wishlistCount}</span>
                        )}
                    </NavLink>

                    {/* Cart */}
                    <NavLink className="position-relative" to="/cart" aria-label="Cart">
                        <img
                            src="/assets/images/icons/cart_brown.png"
                            alt="Cart"
                            id={styles.cartIcon}
                        />
                        {cartCount > 0 && (
                            <span className={styles.badge}>{cartCount}</span>
                        )}
                    </NavLink>

                </div>
            )}
        </nav>
    );
}

export default NavBar;