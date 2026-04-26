import "bootstrap";
import { Fragment, useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "bootstrap";
import styles from "./checkout.module.scss";
import { useShop } from "./shopcontext";
import NavBar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

type PaymentMethod = "cash" | "cliq" | "paypal" | "";

function Checkout() {
  const { cart, totalPrice } = useShop();
  const navigate = useNavigate();

  const DELIVERY_FEE = 3;
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("");
  const [validated, setValidated] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cart.length === 0) {
      navigate("/404", { replace: true });
    }
  }, [cart, navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity() || !paymentMethod) {
      setValidated(true);
      if (!paymentMethod) alert("Please select a payment method.");
      return;
    }

    // ✅ Collect form data
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.get("firstName"),
          lastName: formData.get("lastName"),
          email: formData.get("email"),
          address: formData.get("address"),
          region: formData.get("region"),
          paymentMethod, // ✅ cash | cliq | paypal
          cart, // ✅ from useShop()
          totalPrice, // ✅ from useShop()
        }),
      });

      if (response.ok) {
        // ✅ Show success modal
        const modalEl = modalRef.current;
        if (modalEl) {
          const modal = new Modal(modalEl, { backdrop: "static" });
          modal.show();
          setTimeout(() => {
            modal.hide();
            navigate("/publications");
          }, 3500);
        }
      } else {
        alert("Failed to place order. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <Fragment>
      <NavBar />

      {/* ── Success Modal ── */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.successModal}`}>
            <div className="modal-body text-center py-5 px-4">
              <div className={styles.checkCircle}>
                <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                  <circle
                    cx="26"
                    cy="26"
                    r="25"
                    className={styles.checkCirclePath}
                  />
                  <path d="M14 27 l8 8 l16-16" className={styles.checkMark} />
                </svg>
              </div>
              <h3 className={`${styles.successTitle} mt-4`}>Order Placed!</h3>
              <p className={styles.successText}>
                Your order has been checked out successfully!
                <br />
                Please check your email for confirmation.
              </p>
              <p className={styles.successRedirect}>Redirecting you shortly…</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Page Title ── */}
      <section className={`${styles.pageTitle} text-center`}>
        <h1>CheckOut Page</h1>
        <hr className={styles.titleDivider} />
      </section>

      {/* ── Main Grid ── */}
      <section className={styles.checkoutGrid}>
        <div className="container-fluid px-4 px-md-5">
          <div className="row g-4 justify-content-center">
            {/* ── LEFT COLUMN ── */}
            <div className="col-12 col-lg-5 d-flex flex-column gap-4">
              {/* Checkout As Guest */}
              <div className={styles.card}>
                <div
                  className={`d-flex justify-content-between align-items-start ${styles.cardHeader}`}
                >
                  <h2 className={styles.cardTitle}>Checkout As Guest:</h2>
                  <button className={styles.signInBtn} type="button">
                    Sign In
                  </button>
                </div>
                <hr className={styles.cardDivider} />
                <p className={styles.cardHint}>
                  Sign in to track your order and save your information for
                  faster delivery.
                </p>
              </div>

              {/* Shipping Details — now a real <form> */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Shipping Details:</h2>
                <hr className={styles.cardDivider} />

                <form
                  id="shippingForm"
                  className={`${styles.shippingForm} mt-3 ${validated ? "was-validated" : ""}`}
                  noValidate
                  onSubmit={handleSubmit}
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
                        className={`${styles.fieldInput} form-control`}
                        required
                        autoComplete="given-name"
                      />
                      <div className="invalid-feedback">Required.</div>
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className={styles.fieldLabel}>
                        Last Name:
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`${styles.fieldInput} form-control`}
                        required
                        autoComplete="family-name"
                      />
                      <div className="invalid-feedback">Required.</div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label htmlFor="email" className={styles.fieldLabel}>
                      Email:
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`${styles.fieldInput} form-control`}
                      required
                      autoComplete="email"
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email address.
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
                      className={`${styles.fieldInput} form-control`}
                      required
                      autoComplete="street-address"
                    />
                    <div className="invalid-feedback">
                      Please enter your address.
                    </div>
                  </div>

                  {/* Region */}
                  <div className="mb-3">
                    <label htmlFor="region" className={styles.fieldLabel}>
                      Region:
                    </label>
                    <select
                      id="region"
                      name="region"
                      className={`${styles.fieldInput} form-select`}
                      required
                      autoComplete="address-level1"
                    >
                      <option value="">Select Region</option>
                      <option>Amman</option>
                      <option>Irbid</option>
                      <option>Zarqa</option>
                      <option>Aqaba</option>
                      <option>Mafraq</option>
                      <option>Balqa</option>
                      <option>Karak</option>
                      <option>Tafilah</option>
                      <option>Maan</option>
                      <option>Ajloun</option>
                      <option>Madaba</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a region.
                    </div>
                  </div>

                  {/* Country */}
                  <div className="mb-3">
                    <label htmlFor="country" className={styles.fieldLabel}>
                      Country:
                    </label>
                    <input
                      type="text"
                      id="country"
                      className={`${styles.fieldInput} bg-light form-control`}
                      value="Jordan"
                      disabled
                      readOnly
                      tabIndex={-1}
                      autoComplete="country-name"
                    />
                  </div>
                </form>
              </div>

              {/* Payment Method */}
              <div className={styles.card}>
                <h2 className={styles.cardTitle}>Payment Method:</h2>
                <hr className={styles.cardDivider} />

                <div className={`${styles.paymentOptions} mt-3`}>
                  {(["cash", "cliq", "paypal"] as PaymentMethod[]).map(
                    (method) => (
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
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN — unchanged except the Place Order button */}
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
                        className={`d-flex align-items-center justify-content-between gap-3 ${styles.orderItem}`}
                      >
                        {/* LEFT: Image + Title */}
                        <div className="d-flex align-items-center gap-3 flex-grow-2">
                          <img
                            src={item.image}
                            alt={item.imageAlt}
                            className={styles.orderItemImg}
                          />
                          <p
                            className={`${styles.orderItemTitle} mb-0 text-wrap flex-grow-1`}
                          >
                            {item.title}
                            {item.subtitle && ` ${item.subtitle}`}
                          </p>
                        </div>

                        {/* MIDDLE: Quantity
                        <span className={styles.orderItemQty}>
                          {item.quantity}
                        </span> */}

                        {/* RIGHT: Price */}
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
                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span className={styles.subtotalLabel}>Subtotal:</span>
                    <span className={styles.subtotalValue}>
                      {totalPrice} JD
                    </span>
                  </div>
                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span className={styles.subtotalLabel}>Delivery:</span>
                    <span className={styles.subtotalValue}>
                      {DELIVERY_FEE} JD
                    </span>
                  </div>

                  <hr className={styles.subtotalInnerDivider} />

                  <div
                    className={`d-flex justify-content-between ${styles.subtotalRow}`}
                  >
                    <span
                      className={`${styles.subtotalLabel} ${styles.totalLabel}`}
                    >
                      Total:
                    </span>
                    <span
                      className={`${styles.subtotalValue} ${styles.totalValue}`}
                    >
                      {totalPrice + DELIVERY_FEE} JD
                    </span>
                  </div>
                </div>
              </div>
              {/* Place Order */}
              <button
                type="submit"
                form="shippingForm"
                className={`${styles.placeOrderBtn} w-100 mt-4`}
                disabled={cart.length === 0}
              >
                Place Order &nbsp;→
              </button>

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
      </section>
      <Footer />
    </Fragment>
  );
}
export default Checkout;
