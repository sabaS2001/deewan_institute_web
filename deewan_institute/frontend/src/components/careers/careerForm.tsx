import { useState, useRef, useCallback } from "react";
import styles from "./careerForm.module.scss";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  position: string;
  cv: File | null;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  position?: string;
  cv?: string;
}

type Status = "idle" | "submitting" | "success" | "error";

function CareerForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    position: "",
    cv: null,
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (submitted) setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const acceptFile = useCallback(
    (file: File | null | undefined) => {
      if (!file) return;
      if (file.type !== "application/pdf") {
        setFormErrors((prev) => ({ ...prev, cv: "Only PDF files are allowed." }));
        return;
      }
      setFormData((prev) => ({ ...prev, cv: file }));
      if (submitted) setFormErrors((prev) => ({ ...prev, cv: "" }));
    },
    [submitted]
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    acceptFile(e.target.files?.[0]);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    acceptFile(e.dataTransfer.files?.[0]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required.";
    else if (formData.firstName.trim().length < 2)
      errors.firstName = "Must be at least 2 characters.";

    if (!formData.lastName.trim()) errors.lastName = "Last name is required.";
    else if (formData.lastName.trim().length < 2)
      errors.lastName = "Must be at least 2 characters.";

    if (!formData.email.trim()) errors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Please enter a valid email address.";

    if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone number is required.";
    else if (!/^\+?[\d\s\-()]{7,15}$/.test(formData.phoneNumber))
      errors.phoneNumber = "Please enter a valid phone number.";

    if (!formData.position.trim()) errors.position = "Position is required.";

    if (!formData.cv) errors.cv = "Please upload your CV.";
    else if (formData.cv.type !== "application/pdf")
      errors.cv = "Only PDF files are allowed.";

    return errors;
  };

  const fieldClass = (field: keyof FormErrors) => {
    if (!submitted) return styles.input;
    return `${styles.input} ${formErrors[field] ? styles.input_error : styles.input_valid}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setStatus("idle");

    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    try {
      setStatus("submitting");

      const data = new FormData();
      data.append("firstName", formData.firstName);
      data.append("lastName", formData.lastName);
      data.append("email", formData.email);
      data.append("phoneNumber", formData.phoneNumber);
      data.append("position", formData.position);
      if (formData.cv) data.append("cv", formData.cv);

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/career`, {
        method: "POST",
        body: data,
      });

      if (!response.ok) throw new Error("Failed to send");

      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        position: "",
        cv: null,
      });
      setSubmitted(false);
      setFormErrors({});
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="col-12 col-lg-6 scroll-section slide-in-right">
      <div className={styles.card}>

        <div className={styles.card_header}>
          <h2 className={styles.card_title}>Apply Now</h2>
          <p className={styles.card_subtitle}>
            Fill out the form and we'll be in touch.
          </p>
        </div>

        {status === "submitting" && (
          <div className={`${styles.banner} ${styles.banner_info}`}>
            <span className={styles.spinner} />
            Sending your application…
          </div>
        )}
        {status === "success" && (
          <div className={`${styles.banner} ${styles.banner_success}`}>
            <span className={styles.banner_icon}>✓</span>
            Application sent! We'll get back to you soon.
          </div>
        )}
        {status === "error" && (
          <div className={`${styles.banner} ${styles.banner_error}`}>
            <span className={styles.banner_icon}>!</span>
            Something went wrong. Please try again.
          </div>
        )}

        <form noValidate onSubmit={handleSubmit} className={styles.form}>

          <div className={styles.row_two}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="firstName">
                First Name <span className={styles.required}>*</span>
              </label>
              <input
                className={fieldClass("firstName")}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                autoComplete="given-name"
                placeholder="Mohammad"
              />
              {submitted && formErrors.firstName && (
                <span className={styles.error_msg}>{formErrors.firstName}</span>
              )}
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="lastName">
                Last Name <span className={styles.required}>*</span>
              </label>
              <input
                className={fieldClass("lastName")}
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                autoComplete="family-name"
                placeholder="Omar"
              />
              {submitted && formErrors.lastName && (
                <span className={styles.error_msg}>{formErrors.lastName}</span>
              )}
            </div>
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="email">
              Email <span className={styles.required}>*</span>
            </label>
            <input
              className={fieldClass("email")}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              placeholder="you@example.com"
            />
            {submitted && formErrors.email && (
              <span className={styles.error_msg}>{formErrors.email}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="phoneNumber">
              Phone Number <span className={styles.required}>*</span>
            </label>
            <input
              className={fieldClass("phoneNumber")}
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              autoComplete="tel"
              placeholder="+962 79 000 0000"
            />
            {submitted && formErrors.phoneNumber && (
              <span className={styles.error_msg}>{formErrors.phoneNumber}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="position">
              Position <span className={styles.required}>*</span>
            </label>
            <input
              className={fieldClass("position")}
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              autoComplete="organization-title"
              placeholder="e.g. Arabic Language Instructor"
            />
            {submitted && formErrors.position && (
              <span className={styles.error_msg}>{formErrors.position}</span>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>
              CV / Resume <span className={styles.required}>*</span>
              <span className={styles.label_hint}> — PDF only</span>
            </label>

            {formData.cv ? (
              <div className={styles.file_preview}>
                <span className={styles.file_icon}>📄</span>
                <span className={styles.file_name}>{formData.cv.name}</span>
                <span className={styles.file_size}>
                  ({(formData.cv.size / 1024).toFixed(0)} KB)
                </span>
                <button
                  type="button"
                  className={styles.file_remove}
                  onClick={removeFile}
                  aria-label="Remove file"
                >
                  ✕
                </button>
              </div>
            ) : (
              <div
                className={`${styles.dropzone} ${isDragging ? styles.dropzone_active : ""} ${submitted && formErrors.cv ? styles.dropzone_error : ""}`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && fileInputRef.current?.click()}
                aria-label="Upload CV"
              >
                <span className={styles.dropzone_icon}>⬆</span>
                <p className={styles.dropzone_text}>
                  Drag & drop your PDF here, or{" "}
                  <span className={styles.dropzone_link}>browse</span>
                </p>
                <p className={styles.dropzone_hint}>PDF up to 10 MB</p>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,application/pdf"
              onChange={handleFileChange}
              className={styles.hidden_input}
              aria-hidden="true"
              tabIndex={-1}
            />

            {submitted && formErrors.cv && (
              <span className={styles.error_msg}>{formErrors.cv}</span>
            )}
          </div>

          <button
            type="submit"
            className={styles.submit_btn}
            disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span className={styles.spinner} />
                Submitting…
              </>
            ) : (
              "Submit Application"
            )}
          </button>

        </form>
      </div>
    </div>
  );
}

export default CareerForm;