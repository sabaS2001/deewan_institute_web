import "bootstrap";
import styles from "./jobaccordin.module.scss";
import { useState } from "react";
import { jobData } from "../../../data/jobData";

function JobAccordin() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const handleAccordionToggle = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center scroll-section slide-in-left">
      <div className={`w-100 ${styles.jobVacancies}`}>
        <h1 className={`text-center mb-4 ${styles.heading}`}>
          Join Our Team <br /> at Deewan
        </h1>
        <p className={`mb-5 lead ${styles.intro}`}>
          Discover exciting opportunities at Deewan. Situated in the heart of
          Jabal Al-Weibdeh, Amman's cultural district, we host dynamic
          multi-cultural events and teach Arabic studies to students from around
          the world. Founded by teachers from diverse backgrounds, we seek
          passionate professionals to join our mission of celebrating Arabic
          language and culture. Explore our current openings below and submit
          your application!
        </p>

        <div className="accordion">
          {jobData.map((job) => (
            <div className="accordion-item" key={job.id}>
              <h2 className="accordion-header">
                <button
                  className={`accordion-button ${openItem === job.id ? "" : "collapsed"} ${styles.bold}`}
                  type="button"
                  onClick={() => handleAccordionToggle(job.id)}
                  aria-expanded={openItem === job.id}
                >
                  {job.title}
                </button>
              </h2>

              {openItem === job.id && (
                <div className="accordion-collapse collapse show">
                  <div className="accordion-body">
                    <div className={`${styles.description} mb-3`}>
                      <span className={styles.bold}>Job Description:</span>
                      <p className={styles.textBlock}>{job.description}</p>
                    </div>

                    <div className={`${styles.requirements} mb-3`}>
                      <span className={styles.bold}>Requirements:</span>
                      <p className={styles.textBlock}>{job.requirements}</p>
                    </div>

                    <div className={styles.details}>
                      <span className={styles.bold}>Location:</span> {job.location}
                      <br />
                      <span className={styles.bold}>Type:</span> {job.type}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobAccordin;