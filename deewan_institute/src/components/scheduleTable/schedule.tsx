import { Fragment } from "react";
import style from './schedule.module.scss';

interface ScheduleProps {
    subtitle: string,
    iconImage: string, 
    oneTotalPrice: string, 
    groupTotalPrice: string, 
    oneHours: string, 
    groupHours: string,
}

function Schedule({data}: {data: ScheduleProps}) {
  return (
    <Fragment>
      {/* <!-- Program Fees Section --> */}
      <div id={style.hours}>
        <div className="d-flex flex-row align-items-center scroll-section slide-in-left ">
          <img src={data.iconImage} alt="Icon" />
          <h2 className={`${style.subtitle} mx-5 my-auto`}>{data.subtitle}</h2>
        </div>
        <p className={`lead m-5 text-center scroll-section ${style.para}`}>
          This course is exclusively for university language immersion groups or
          groups of friends at the same proficiency level.
        </p>
        <h4 className={`text-center scroll-section ${style.h4}`}>
          Levels: Beginner, Intermediate, or Advanced
        </h4>
        <table
          className="table table-bordered my-5 scroll-section visible "
          id={style.table}
        >
          <thead>
            <tr>
              <th
                className="text-center"
                colSpan={2}
                id={style.header}
                style={{ verticalAlign: "middle", paddingBlock: "2%" }}
              >
                One-to-One Course
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border justify-content-center" id={style.border}>
              <td
                className="lh-base d-flex flex-column align-items-center"
                scope="row"
                style={{ paddingBlock: "2%", verticalAlign: "middle" }}
              >
                <span className="lead">
                  For each week, there will be one-to-one course:
                </span>
                <ul className="lead">
                  <li>4 hours per day - 5 days per week </li>
                  <li>
                    20 hours per week
                    <span style={{ color: "red" }}>( Total : {data.oneHours} )</span>
                  </li>
                </ul>
              </td>
              <td
                className="text-center"
                style={{ paddingBlock: "2%", verticalAlign: "middle" }}
              >
                <p className="lead">10 JD per hour</p>
                <span className="lead" style={{ color: "red" }}>
                  Total : {data.oneTotalPrice}
                </span>
              </td>
            </tr>
            <tr>
              <th
                className="text-center"
                colSpan={2}
                id={style.header}
                style={{ verticalAlign: "middle", paddingBlock: "2%" }}
              >
                Group Course
              </th>
            </tr>
            <tr className="border" id={style.border}>
              <td
                className="lh-base d-flex flex-column align-items-center"
                scope="row"
                style={{ paddingBlock: "2%", verticalAlign: "middle" }}
              >
                <span className="lead">
                  For each week, there will be one-to-one course:
                </span>
                <ul className="lead">
                  <li>4 hours per day - 5 days per week </li>
                  <li>
                    20 hours per week
                    <span style={{ color: "red" }}>( Total : {data.groupHours} hours )</span>
                  </li>
                </ul>
              </td>
              <td
                className="text-center"
                style={{ paddingBlock: "2%", verticalAlign: "middle" }}
              >
                <p className="lead">11 JD per hour</p>
                <span className="lead" style={{ color: "red" }}>
                  Total : {data.groupTotalPrice}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  );
}

export default Schedule;
