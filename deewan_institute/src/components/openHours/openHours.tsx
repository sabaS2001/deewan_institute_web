import { Fragment } from "react";
import style from "./openHours.module.scss"; 
import "bootstrap";


interface OpenHoursProps {
  backgroundColor?: string;
}

function OpenHours() {
  return (
    <Fragment>
      <section className={`${style.openingHours} scroll-section`}>
        <div className={`${style.title} my-5`}>
          <h2>Opening Hours</h2>
        </div>
        <div className="row flex-wrap justify-content-center align-items-center mt-2">
          <div className={`col-6 col-lg-4 ${style.borderRight}`}>
            <h3 className={`${style.bold}`}>Office Hours</h3>
            <ul>
              <li>Sun - Wed: 9:30 AM - 18:30 PM</li>
              <li>Thursday: 10:30 AM - 18:30 PM</li>
            </ul>
          </div>
          <div className={`col-6 col-lg-4 ${style.borderRight}`}>
            <h3 className={`${style.bold}`}>Class Hours</h3>
            <ul>
              <li>Sun - Thurs: 10:30 AM - 20:00 PM</li>
              <span className={style.italic}>For Saturday, please contact us.</span>
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h3 className={`${style.bold}`}>Workspace</h3>
            <ul>
              <li>Sun - Thurs: 10:30 AM - 20:00 PM</li>
              <span className={style.italic}>
                It is provided free of charge to Deewan students.
              </span>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OpenHours;