import "bootstrap";
import styles from "../navbar/navbar.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink, useLocation } from "react-router-dom";
import { useShop } from "../../context/ShopContext";
import { useState } from "react";

// Routes where shop icons should appear
const SHOP_ROUTES = ["/publications", "/wishlist", "/cart"];

function NavBar() {
  const { wishlistCount, cartCount } = useShop();
  const { pathname } = useLocation();

  // Show icons on exact matches AND any sub-route of /publications
  const showShopIcons =
    SHOP_ROUTES.some((route) => pathname === route) ||
    pathname.startsWith("/publications/");

  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  return (
    <>
      {/* ── Navbar ── */}
      <nav className={`navbar navbar-expand-md`} id={styles.navBar}>
        <div className="container">

          {/* ── Mobile Header (hidden on desktop) ── */}
          <div
            className={`d-flex d-md-none justify-content-between align-items-center w-100 ${styles.mobileHeader}`}
          >
            <NavLink className="navbar-brand mb-0" to="/">
              <img
                src="/assets/images/logos/horizontalLogo.png"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            <button
              className={`navbar-toggler ${styles.toggler}`}
              onClick={() => setIsOverlayOpen(true)}
            >
              <span className="navbar-toggler-icon" />
            </button>
          </div>

          {/* ── Desktop Menu (hidden on mobile) ── */}
          <div className="collapse navbar-collapse d-none d-md-flex justify-content-center align-items-center">
            {/* Left Group */}
            <div className={`${styles.border} p-2`}>
              <ul className="navbar-nav" id={styles.navbarNav}>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/about">
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Center Logo */}
            <NavLink className="navbar-brand" to="/">
              <img
                src="/assets/images/logos/nobgLogo.webp"
                alt="Deewan Institute Logo"
                id={styles.mainLogo}
              />
            </NavLink>

            {/* Right Group */}
            <div className={`${styles.border} p-2`}>
              <ul className="navbar-nav" id={styles.navbarNav}>
                <li className="nav-item" id={styles.navitem}>
                  <button
                    className={`nav-link btn btn-link ${styles.navitem}`}
                    onClick={() => setIsOverlayOpen(true)}
                  >
                    What We Offer
                  </button>
                </li>
                <li className="nav-item" id={styles.navitem}>
                  <NavLink className="nav-link" to="/contact">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Shop Icons (conditional) ── */}
        {showShopIcons && (
          <div
            className={`d-flex align-items-center gap-2 mx-2 ${styles.shopIcons}`}
          >
            {/* Wishlist */}
            <NavLink
              className="position-relative"
              to="/wishlist"
              aria-label="Wishlist"
            >
              <img
                src="/assets/images/icons/heart_brown.webp"
                alt="Wishlist"
                id={styles.wishlistIcon}
              />
              {wishlistCount > 0 && (
                <span className={styles.badge}>{wishlistCount}</span>
              )}
            </NavLink>

            {/* Cart */}
            <NavLink
              className="position-relative"
              to="/cart"
              aria-label="Cart"
            >
              <img
                src="/assets/images/icons/cart_brown.webp"
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

      {/* ── Backdrop (mobile only) ── */}
      <div
        className={`${styles.backdrop} ${isOverlayOpen ? styles.backdropOpen : ""}`}
        onClick={() => setIsOverlayOpen(false)}
      />

      {/* ── Full Screen Overlay (desktop) / Drawer (mobile) ── */}
      <div
        className={`${styles.overlay} ${isOverlayOpen ? styles.overlayOpen : ""}`}
      >
        <div className={styles.overlayInner}>
          {/* Close Button */}
          <button
            className={styles.closeBtn}
            onClick={() => setIsOverlayOpen(false)}
          >
            ✕
          </button>

          {/* Logo */}
          <NavLink to="/" onClick={() => setIsOverlayOpen(false)}>
            <img
              src="/assets/images/logos/nobgLogo.webp"
              alt="Deewan Institute Logo"
              className={styles.overlayLogo}
            />
          </NavLink>

          {/* ── Links ── */}
          <div className={styles.overlayLinks}>
            {/* Mobile Links */}
            <div className={`d-md-none ${styles.mobileLinks}`}>
              <NavLink
                to="/"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Contact Us
              </NavLink>
              <div className={styles.divider} />
            </div>

            {/* Courses Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>
                Arabic Language and Culture
              </h3>
              <NavLink
                to="/arabic-courses"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabic Courses
              </NavLink>
              <NavLink
                to="/calculator"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabic Calculator Price
              </NavLink>
              <NavLink
                to="/arabic-courses/arabi-talk"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Arabi Talk
              </NavLink>
              <NavLink
                to="/arabic-courses/intensive-program"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Intensive Summer and Fall Program
              </NavLink>
              <NavLink
                to="/bildungsurlaub"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Bildungsurlaub Courses
              </NavLink>
              <NavLink
                to="/cultureEvents"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Culture Events
              </NavLink>
            </div>

            {/* History Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Middle Eastern Studies</h3>
              <NavLink
                to="/middle-eastern-studies/history-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                History of the Middle East
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/modern-history-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Modern History of the Middle East
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/the-zionist-project-in-palestine"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                The Zionist Project in Palestine
              </NavLink>
              <NavLink
                to="/middle-eastern-studies/people-of-the-middle-east"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                People of the Middle East
              </NavLink>
            </div>

            {/* Deewan Library Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Deewan Library</h3>
              <NavLink
                to="/publications"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Publications
              </NavLink>
              <NavLink
                to="/podcasts"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Podcasts
              </NavLink>
            </div>

            {/* Accommodation Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Accommodation</h3>
              <NavLink
                to="/accommodation-and-student-services/visa"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Trips
              </NavLink>
              <NavLink
                to="/accommodation-and-student-services/trips"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Visa
              </NavLink>
            </div>

            {/* Foreign Language Column */}
            <div className={styles.overlayColumn}>
              <h3 className={styles.overlayTitle}>Foreign Languages</h3>
              <NavLink
                to="/foreign-languages/french-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                French
              </NavLink>
              <NavLink
                to="/foreign-languages/german-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                German
              </NavLink>
              <NavLink
                to="/foreign-languages/spanish-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                Spanish
              </NavLink>
              <NavLink
                to="/foreign-languages/english-course"
                className={styles.overlayLink}
                onClick={() => setIsOverlayOpen(false)}
              >
                English
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;