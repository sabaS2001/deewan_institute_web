import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './cart.module.scss';
import { useShop } from '../context/ShopContext';
import NavBar from '../components/navBar/navbar';
import Footer from '../components/footer/footer';

function Cart() {
    const { cart, updateQuantity, removeFromCart, totalPrice } = useShop();
    const navigate = useNavigate();
    const DELEVERY_FEE = 3;

    return (
        <Fragment>
            <NavBar />
            <section className={`${styles.cart} py-3 mt-2 mb-5`}>
                <div className={styles.title}>
                    <h2>Your Cart</h2>
                </div>
                

                {cart.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>Your cart is currently empty.</p>
                        <button className={styles.browseBtn} onClick={() => navigate('/publications')}>
                            Browse Publications
                        </button>
                    </div>
                ) : (
                    <>
                    
                        {cart.map((item) => (
                            <div key={item.id} className="row justify-content-center align-items-center py-4">
                                <div className="col-md-3 d-flex justify-content-center align-items-center">
                                    <img src={item.image} alt={item.imageAlt} className={styles.bookCover} />
                                </div>
                                

                                <div className={styles.verticalLine}></div>

                                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                                    <h4 className={styles.bookTitle}>{item.title}</h4>
                                    {item.subtitle && <h4 className={styles.bookTitle}>{item.subtitle}</h4>}
                                    <div className={`d-flex flex-row justify-content-center align-items-center mt-3 ${styles.counter}`}>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, -1)}>
                                            <img src="/assets/images/icons/minus.svg" alt="Minus" />
                                        </button>
                                        <p className={styles.quantity}>{item.quantity}</p>
                                        <button className={styles.qtyBtn} onClick={() => updateQuantity(item.id, 1)}>
                                            <img src="/assets/images/icons/plus.svg" alt="Plus" />
                                        </button>
                                    </div>
                                </div>
                                

                                <div className={styles.verticalLine}></div>

                                <div className="col-md-2 d-flex justify-content-center align-items-center">
                                    <p className={styles.price}>{item.price} JD</p>
                                    <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>✕</button>
                                </div>
                                                        <hr className={styles.divider} />

                            </div>
                        ))}

                        {/* <hr className={styles.divider} /> */}

                        <div className={`d-flex mx-auto flex-column align-items-end ${styles.cartTotal}`}>
                            <div className={styles.totalInfo}>
                                <div className="d-flex flex-row justify-content-between">
                                    <span className={styles.bold}>Subtotal:</span>
                                    <p className={styles.leadText}>{totalPrice} JD</p>
                                </div>
                                <div className="d-flex flex-row justify-content-between w-100">
                                    <span className={styles.bold}>Delivery:</span>
                                    <p className={styles.leadText}>{DELEVERY_FEE} JD</p>
                                </div>
                                <hr className={styles.divider} />
                                <div className="d-flex flex-row justify-content-between w-100">
                                    <span className={styles.bold}>Total Cost:</span>
                                    <p className={styles.leadText}>{totalPrice + DELEVERY_FEE} JD</p>
                                </div>
                                <button 
                                className={styles.checkoutBtn} 
                                onClick={() => navigate('/checkout')}
                            >
                                Checkout
                            </button>
                            </div>
                        </div>
                    </>
                )}
            </section>
            <Footer />
        </Fragment>
    );
}

export default Cart;
