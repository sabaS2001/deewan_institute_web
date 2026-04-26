import { Fragment } from "react";
import style from "./openhours.module.scss";
import "bootstrap";

interface OpenHoursProps {
  backgroundColor: string;
  color: string;
}

function OpenHours({ data }: { data: OpenHoursProps }) {
  return (
    <Fragment>
      <section
        className={`${style.openingHours} scroll-section py-4 py-md-5`}
        style={
          {
            "--background-color": data.backgroundColor,
            "--color": data.color,
          } as React.CSSProperties
        }
      >
        <div className="container">
          <div className={`${style.title} my-5`}>
            <h2 className={style.sectionTitle}>Opening Hours</h2>
          </div>

          <div className="row flex-wrap justify-content-center align-items-start g-3 mt-2">
            {/* Office Hours */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">Office Hours</h3>
                <ul>
                  <li>Sun - Thurs: 9:00 AM - 20:00 PM</li>
                </ul>
                <span className={style.italic}>
                  Come visit us—we’d love to see you!
                </span>
              </div>
            </div>

            {/* Class Hours */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">Class Hours</h3>
                <ul>
                  <li>Sun - Thurs: 9:00 AM - 20:00 PM</li>
                </ul>
                <span className={style.italic}>
                  For Saturday, please contact us.
                </span>
              </div>
            </div>

            {/* Workspace */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className={style.borderRight}>
                <h3 className="fw-bold">Workspace</h3>
                <ul>
                  <li>Sun - Thurs: 9:00 AM - 20:00 PM</li>
                </ul>
                <span className={style.italic}>
                  It is provided free of charge to Deewan students.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OpenHours;
