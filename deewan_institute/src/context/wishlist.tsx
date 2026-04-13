import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./wishlist.module.scss";
import { useShop } from "../context/ShopContext"; 
import { useScrollAnimation } from "../../hooks/scrollAnimations";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";

function Wishlist() {
  useScrollAnimation();

  const { wishlist, removeFromWishlist, addToCart } = useShop();
  const navigate = useNavigate();

  const handleCardClick = (item: any) => {
    const route =
      item.type === "podcast"
        ? `/publications/podcast/${item.id}`
        : `/publications/book/${item.id}`;
    navigate(route);
  };

  return (
    <Fragment>
      <NavBar />
      <section className={`${styles.wishlist} py-3 mt-2 mb-5`}>
        {/* ── Title ── */}
        <div className={styles.titleWrapper}>
          <h2>Wishlist</h2>
        </div>

        {/* ── Empty state ── */}
        {wishlist.length === 0 ? (
          <div className={styles.emptyState}>
            <span className={styles.emptyIcon}>♡</span>
            <p>Your wishlist is empty.</p>
            <button
              className={styles.browseBtn}
              onClick={() => navigate("/publications")}
            >
              Browse Publications
            </button>
          </div>
        ) : (
          <div className={`${styles.list} scroll-section`}>
            <div className="row justify-content-start">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                >
                  <div className={styles.bookCard}>
                    {/* Cover — click navigates to detail */}
                    <img
                      src={item.image}
                      className={styles.bookCover}
                      alt={item.imageAlt}
                      onClick={() => handleCardClick(item)}
                    />

                    <div className={styles.bookDetails}>
                      <p
                        className={styles.bookTitle}
                        onClick={() => handleCardClick(item)}
                      >
                        {item.title}
                        {item.subtitle && (
                          <>
                            <br />
                            <span className={styles.bookSubtitle}>
                              {item.subtitle}
                            </span>
                          </>
                        )}
                      </p>

                      <div className={styles.bookActions}>

                        <button
                          onClick={() => addToCart(item)}
                          className={`${styles.iconBtn} ${styles.cart}`}
                          aria-label="Add to cart"
                          style={{ border: 'none', cursor: 'pointer', background: 'none' }}
                        >
                          <img src="/assets/images/icons/cart_brown.png" alt="cart" />
                        </button>

                        {/* Remove from wishlist */}
                        <button
                          className={styles.removeBtn}
                          onClick={() => removeFromWishlist(item.id)}
                          aria-label="Remove from wishlist"
                          title="Remove"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      <Footer />
    </Fragment>
  );
}

export default Wishlist;
