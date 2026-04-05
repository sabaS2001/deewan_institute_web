import { Fragment } from "react";
import style from "./openHours.module.scss";
import "bootstrap";

interface OpenHoursProps {
  backgroundColor: string, 
  color:string, 
}

function OpenHours({ data }: { data: OpenHoursProps }) {
  return (
    <Fragment>
      <section
        className={`${style.openingHours} scroll-section py-3`}
        style={
          {
            "--background-color": `${data.backgroundColor}`,
            "--color": `${data.color}`,
          } as React.CSSProperties
        }
      >
        <div className={`${style.title} py-2 my-2`}>
          <h1>Opening Hours</h1>
        </div>
        <div className="row flex-wrap justify-content-center align-items-center mt-4">
          <div className={`col-6 col-lg-4 ${style.borderRight}`}>
            <h3 className={`${style.bold}`}>Office Hours</h3>
            <ul>
              <li className="lead">Sun - Wed: 9:30 AM - 18:30 PM</li>
              <li className="lead">Thursday: 10:30 AM - 18:30 PM</li>
            </ul>
          </div>
          <div className={`col-6 col-lg-4  ${style.borderRight}`}>
            <h3 className={`${style.bold}`}>Class Hours</h3>
            <ul>
              <li className="lead">Sun - Thurs: 10:30 AM - 20:00 PM</li>
              <span className={`${style.italic} lead`}>
                For Saturday, please contact us.
              </span>
            </ul>
          </div>
          <div className="col-6 col-lg-4">
            <h3 className={`${style.bold}`}>Workspace</h3>
            <ul>
              <li className="lead">Sun - Thurs: 10:30 AM - 20:00 PM</li>
              <li className={style.italic}>
                It is provided free of charge to Deewan students.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default OpenHours;
