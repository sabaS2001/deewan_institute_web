import 'bootstrap';
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./checkout.module.scss";
import { useShop } from "../context/ShopContext";
import NavBar from "../components/navBar/navbar";
import Footer from "../components/footer/footer";

type PaymentMethod = "cash" | "cliq" | "paypal" | "";

function Checkout() {
  const { cart, totalPrice } = useShop();
  const navigate = useNavigate();

  const DELIVERY_FEE = 3;

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up order submission
  };

  return (
    <Fragment>
      <NavBar />

      {/* ── Page Title ── */}
      <section className={`${styles.pageTitle} text-center scroll-section`}>
        <h1>CheckOut Page</h1>
        <hr className={styles.titleDivider} />
      </section>

      {/* ── Main Grid ── */}
      <section className={`${styles.checkoutGrid} scroll-section`}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-4 justify-content-center">

            {/* ── LEFT COLUMN ── */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">

              {/* Checkout As Guest */}
              <div className={styles.card}>
                <div className={`d-flex justify-content-between align-items-start ${styles.cardHeader}`}>
                  <h2 className={styles.cardTitle}>Checkout As Guest:</h2>
                  <button className={styles.signInBtn} type="button">
                    Sign In
                  </button>
                </div>
                <hr className={styles.cardDivider} />
                <p className={styles.cardHint}>
                  Sign in to track your order and save your information for faster delivery.
                </p>
              </div>

              {/* Shipping Details */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Shipping Details:</h2>
                <hr className={styles.cardDivider} />

                <div
                  className={`${styles.shippingForm} mt-3`}
                  id="shippingForm"
                  onSubmit={handleSubmit as any}
                >
                  {/* First Name / Last Name */}
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="firstName" className={styles.fieldLabel}>
                        First Name:
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={styles.fieldInput}
                        autoComplete="given-name"
                      />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className={styles.fieldLabel}>
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={styles.fieldInput}
                        autoComplete="family-name"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-3">
                    <label htmlFor="address" className={styles.fieldLabel}>
                      Address:
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      className={styles.fieldInput}
                      autoComplete="street-address"
                    />
                  </div>

                  {/* Region */}
                  <div className="mb-3">
                    <label htmlFor="region" className={styles.fieldLabel}>
                      Region:
                    </label>
                    <input
                      type="text"
                      id="region"
                      name="region"
                      className={styles.fieldInput}
                      autoComplete="address-level1"
                    />
                  </div>

                  {/* Country */}
                  <div className="mb-1">
                    <label htmlFor="country" className={styles.fieldLabel}>
                      Country:
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className={styles.fieldInput}
                      defaultValue="Jordan"
                      autoComplete="country-name"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Payment Method:</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.paymentOptions} mt-3`}>
                  {(["cash", "cliq", "paypal"] as PaymentMethod[]).map((method) => (
                    <label
                      key={method}
                      className={`${styles.paymentOption} ${paymentMethod === method ? styles.paymentOptionSelected : ""}`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        id={method}
                        value={method}
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                        className={styles.radioInput}
                      />
                      <span className={styles.radioCircle} />
                      <span className={styles.paymentLabel}>
                        {method === "cash" && "Cash"}
                        {method === "cliq" && "Cliq"}
                        {method === "paypal" && "PayPal"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT COLUMN ── */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">

              {/* Order Summary */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Order Summary:</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.orderItems} mt-3`}>
                  {cart.length === 0 ? (
                    <p className={styles.emptyCart}>Your cart is empty.</p>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className={`d-flex align-items-center gap-3 ${styles.orderItem}`}
                      >
                        <img
                          src={item.image}
                          alt={item.imageAlt}
                          className={styles.orderItemImg}
                        />
                        <p className={styles.orderItemTitle}>
                          {item.title}
                          {item.subtitle && ` ${item.subtitle}`}
                        </p>
                        <span className={styles.orderItemQty}>{item.quantity}</span>
                        <span className={styles.orderItemPrice}>
                          {(item.price || 0) * item.quantity} JOD
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Order Subtotal */}
              <div className={styles.card}>
                <h2 className={`${styles.cardTitle} ${styles.cardTitleSm}`}>
                  Order Subtotal:
                </h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.subtotalRows} mt-3`}>
                  <div className={`d-flex justify-content-between ${styles.subtotalRow}`}>
                    <span className={styles.subtotalLabel}>Subtotal:</span>
                    <span className={styles.subtotalValue}>{totalPrice} JD</span>
                  </div>
                  <div className={`d-flex justify-content-between ${styles.subtotalRow}`}>
                    <span className={styles.subtotalLabel}>Delivery:</span>
                    <span className={styles.subtotalValue}>{DELIVERY_FEE} JD</span>
                  </div>

                  <hr className={styles.subtotalInnerDivider} />

                  <div className={`d-flex justify-content-between ${styles.subtotalRow}`}>
                    <span className={`${styles.subtotalLabel} ${styles.totalLabel}`}>
                      Total:
                    </span>
                    <span className={`${styles.subtotalValue} ${styles.totalValue}`}>
                      {totalPrice + DELIVERY_FEE} JD
                    </span>
                  </div>
                </div>

                {/* Place Order */}
                <button
                  type="submit"
                  form="shippingForm"
                  className={`${styles.placeOrderBtn} w-100 mt-4`}
                  onClick={handleSubmit}
                >
                  Place Order &nbsp;→
                </button>

                {/* Continue Shopping */}
                <button
                  type="button"
                  className={`${styles.continueBtn} w-100 mt-3`}
                  onClick={() => navigate("/publications")}
                >
                  ← &nbsp;Continue Shopping
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Checkout;