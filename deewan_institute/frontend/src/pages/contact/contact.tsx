import { Fragment, useState, useEffect, useCallback, useRef } from "react";
import {Modal} from "bootstrap";
import "bootstrap";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import styles from "./contact.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);
  const [modalType, setModalType] = useState<"success" | "error">("success");

  useEffect(() => {
    document.title = "Deewan Institute | Contact Us";
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    [],
  );

  // ✅ Helper to show modal
  const showModal = (type: "success" | "error") => {
    setModalType(type);
    const modalEl = modalRef.current;
    if (modalEl) {
      const modal = new Modal(modalEl, { backdrop: "static" });
      modal.show();
    }
  };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName: formData.fullName,
            email: formData.email,
            phoneNumber: formData.phone,
            message: formData.message,
          }),
        });

        if (response.ok) {
          // ✅ Show success modal instead of alert
          showModal("success");
          setFormData({ fullName: "", email: "", phone: "", message: "" });
        } else {
          // ✅ Show error modal instead of alert
          showModal("error");
        }
      } catch (error) {
        console.error("Error:", error);
        // ✅ Show error modal instead of alert
        showModal("error");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData],
  );
  return (
    <Fragment>
      <NavBar />

      {/* ── Contact Modal ── */}
      <div
        className="modal fade"
        ref={modalRef}
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className={`modal-content ${styles.contactModal}`}>
            <div className="modal-body text-center py-5 px-4">
              {/* Success State */}
              {modalType === "success" && (
                <>
                  <div className={styles.checkCircle}>
                    <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        className={styles.checkCirclePath}
                      />
                      <path
                        d="M14 27 l8 8 l16-16"
                        className={styles.checkMark}
                      />
                    </svg>
                  </div>
                  <h3 className={`${styles.successTitle} mt-4`}>
                    Message Sent!
                  </h3>
                  <p className={styles.successText}>
                    Thank you for reaching out.
                    <br />
                    Our team will get back to you shortly.
                  </p>
                </>
              )}

              {/* Error State */}
              {modalType === "error" && (
                <>
                  <div className={styles.errorCircle}>
                    <svg viewBox="0 0 52 52" className={styles.checkSvg}>
                      <circle
                        cx="26"
                        cy="26"
                        r="25"
                        className={styles.errorCirclePath}
                      />
                      <path
                        d="M16 16 l20 20 M36 16 l-20 20"
                        className={styles.errorMark}
                      />
                    </svg>
                  </div>
                  <h3 className={`${styles.errorTitle} mt-4`}>
                    Something Went Wrong!
                  </h3>
                  <p className={styles.successText}>
                    Failed to send your message.
                    <br />
                    Please try again or contact us directly.
                  </p>
                </>
              )}

              {/* Close Button */}
              <button
                className={`btn mt-3 ${styles.modalCloseBtn}`}
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <main className={`contactpage ${styles.contactPage}`}>
        {/* Banner Image */}
        <section
          className={`banner d-flex align-items-center ${styles.banner}`}
        >
          <div className="px-4 text-center d-flex flex-column align-items-center">
            <h1 className="display-5 fw-bold text-white my-4">Contact Us</h1>
            <div className="col-lg-10 mx-auto">
              <p className="lead mb-4 text-center text-white">
                Have questions, need clarification, or ready to book an
                appointment? At Deewan Institute, our team is here to help you
                start your language journey in vibrant Amman. Reach out today
                via email, phone, or our online form—we look forward to
                connecting and tailoring the perfect program for you!
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className={`form scroll-section ${styles.form}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>Fill Out the Form</h2>
          </div>
          <div
            className={`border border-black p-5 ${styles.messageForm}`}
            id="messageForm"
          >
            {/* ✅ Removed ref={formRef} since we no longer need it for emailjs */}
            <form onSubmit={handleSubmit} className="row">
              <div className="col-md-5">
                <div className="mb-3 d-flex flex-column">
                  <label
                    htmlFor="FullNameText"
                    className="form-label text-white"
                  >
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="FullNameText"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter Your Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="Email" className="form-label text-white">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="Email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex flex-column">
                  <label htmlFor="PhoneNum" className="form-label text-white">
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    id="PhoneNum"
                    name="phone"
                    className="form-control"
                    placeholder="Enter Your Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="mb-3 d-flex flex-column">
                  <label
                    htmlFor="FullMessageText"
                    className="form-label text-white"
                  >
                    Message:
                  </label>
                  <textarea
                    id="FullMessageText"
                    name="message"
                    className="form-control"
                    placeholder="Enter Your Message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3 d-flex justify-content-end">
                  <button
                    type="submit"
                    className={`py-2 btn btn-primary ${styles.submitBtn}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Submit Your Message"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>

        {/* Rest of your sections stay exactly the same */}
        {/* Information Section */}
        <section className={`information scroll-section ${styles.information}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>Contact Information</h2>
          </div>

          <div className="d-flex flex-column col-lg-10 mx-auto">
            <p className={`lead text-start ${styles.para}`}>
              Please contact Deewan Institute using the email below for
              inquiries regarding Arabic classes, cultural activities, student
              accommodation, internships, or business opportunities. Our team in
              Amman is available to assist you promptly.
            </p>

            <div className="d-flex justify-content-center my-5">
              <div
                className={styles.contactBox}
                style={{ justifyContent: "center", textAlign: "center" }}
              >
                <img src="/assets/images/icons/mail.svg" alt="Email" />
                <a href="mailto:arabic@deewaninstitute.com">
                  arabic@deewaninstitute.com
                </a>
              </div>
            </div>

            <p className={`lead text-start ${styles.para}`}>
              For detailed consultations or to schedule your program, please
              reach out to our Coordinator at Deewan Institute via the emails
              and phone number below.
            </p>

            <div className="row justify-content-center mt-4">
              <div className="col-md-6 d-flex flex-column">
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/mail.svg" alt="Email" />
                  <a href="mailto:management@deewaninstitute.com">
                    management@deewaninstitute.com
                  </a>
                </div>
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/mail.svg" alt="Email" />
                  <a href="mailto:publicrelations.deewan@gmail.com">
                    publicrelations.deewan@gmail.com
                  </a>
                </div>
              </div>
              <div className="col-md-6 d-flex flex-column">
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/phone.svg" alt="Phone" />
                  <a href="tel:+962778928188">+962 7 7892 8188</a>
                </div>
                <div className={styles.contactBox}>
                  <img src="/assets/images/icons/whatsapp.svg" alt="WhatsApp" />
                  <a
                    href="https://wa.me/962778928188"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: +962 7 7892 8188
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Opening Hours - stays the same */}
        <section
          className={`openingHours scroll-section ${styles.openingHours}`}
        >
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>Opening Hours</h2>
          </div>
          <div className="row flex-wrap justify-content-center align-items-start g-3 mt-2">
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">Office Hours</h3>
                <ul>
                  <li>Sun - Wed: 9:30 AM - 18:30 PM</li>
                  <li>Thursday: 10:30 AM - 18:30 PM</li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">Class Hours</h3>
                <ul>
                  <li>Sun - Thurs: 10:30 AM - 20:00 PM</li>
                </ul>
                <span className={styles.italic}>
                  For Saturday, please contact us.
                </span>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className={styles.borderRight}>
                <h3 className="fw-bold">Workspace</h3>
                <ul>
                  <li>Sun - Thurs: 10:30 AM - 20:00 PM</li>
                </ul>
                <span className={styles.italic}>
                  It is provided free of charge to Deewan students.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Location - stays the same */}
        <section className={`location scroll-section ${styles.location}`}>
          <div className="title my-5">
            <h2 className={styles.sectionTitle}>Our Location</h2>
          </div>
          <div className="d-flex flex-column col-lg-10 mx-auto">
            <p className={`lead text-start ${styles.para}`}>
              Deewan Institute is a 3-minute walk from Paris Circle in Weibdeh.
              Al - Baouneyah St. 14, Amman 11191. 2nd floor.
            </p>
            <div className="locationMaps">
              <div className="ratio ratio-16x9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.1510040729036!2d35.92346077611702!3d31.95679987401723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f8f0272092b%3A0x96d119fcca1fbf4c!2sDeewan%20Institute%20for%20Languages%20and%20Cultural%20Studies!5e0!3m2!1sen!2sjo!4v1761462171667!5m2!1sen!2sjo"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </Fragment>
  );
}

export default Contact;
