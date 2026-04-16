import { Fragment } from "react";
import style from "./openHours.module.scss";
import "bootstrap";

interface OpenHoursProps {
  backgroundColor: string, 
  color: string, 
}

function OpenHours({ data }: { data: OpenHoursProps }) {
  return (
    <Fragment>
      <section
        className={`${style.openingHours} scroll-section py-4 py-md-5`}
        style={
          {
            "--background-color": `${data.backgroundColor}`,
            "--color": `${data.color}`,
          } as React.CSSProperties
        }
      >
        <div className="container">
          <div className={`${style.title} py-2 my-3 my-md-4`}>
            <h1>Opening Hours</h1>
          </div>
          <div className="row flex-wrap justify-content-center align-items-stretch mt-4 mt-md-5 g-4">
            <div className={`col-12 col-md-6 col-lg-4 ${style.borderRight}`}>
              <h3 className={`${style.bold}`}>Office Hours</h3>
              <ul className="list-unstyled">
                <li className="lead">Sun - Wed: 9:30 AM - 6:30 PM</li>
                <li className="lead">Thursday: 10:30 AM - 6:30 PM</li>
              </ul>
            </div>
            <div className={`col-12 col-md-6 col-lg-4 ${style.borderRight}`}>
              <h3 className={`${style.bold}`}>Class Hours</h3>
              <ul className="list-unstyled">
                <li className="lead">Sun - Thurs: 10:30 AM - 8:00 PM</li>
                <span className={`${style.italic} lead`}>
                  For Saturday, please contact us.
                </span>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <h3 className={`${style.bold}`}>Workspace</h3>
              <ul className="list-unstyled">
                <li className="lead">Sun - Thurs: 10:30 AM - 8:00 PM</li>
                <li className={style.italic}>
                  It is provided free of charge to Deewan students.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OpenHours;
