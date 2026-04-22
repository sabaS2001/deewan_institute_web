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
      <div id={style.hours}>
        <div className="d-flex flex-column flex-md-row align-items-center scroll-section slide-in-left">
          <img 
            src={data.iconImage} 
            alt="Icon" 
            className="mb-3 mb-md-0" 
            style={{ maxWidth: '50px', height: 'auto' }} 
          />
          <h2 className={`${style.subtitle} mx-md-5 my-auto mb-3 mb-md-0`}>{data.subtitle}</h2>
        </div>
        <p className={`lead m-3 text-center scroll-section ${style.para}`}>
          This course is exclusively for university language immersion groups or
          groups of friends at the same proficiency level.
        </p>
        <h4 className={`text-center scroll-section ${style.h4}`}>
          Levels: Beginner, Intermediate, or Advanced
        </h4>
        
        {/* Desktop Table - Hidden on Mobile */}
        <div className="table-responsive my-4 d-none d-md-block">
          <table
            className="table table-bordered my-3"
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
                  <ul className="lead mb-0">
                    <li>4 hours per day - 5 days per week</li>
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
                  <p className="lead mb-1">10 JD per hour</p>
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
                    For each week, there will be group course:
                  </span>
                  <ul className="lead mb-0">
                    <li>4 hours per day - 5 days per week</li>
                    <li>
                      20 hours per week
                      <span style={{ color: "red" }}>( Total : {data.groupHours} )</span>
                    </li>
                  </ul>
                </td>
                <td
                  className="text-center"
                  style={{ paddingBlock: "2%", verticalAlign: "middle" }}
                >
                  <p className="lead mb-1">11 JD per hour</p>
                  <span className="lead" style={{ color: "red" }}>
                    Total : {data.groupTotalPrice}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile Cards - Visible Only on Mobile */}
        <div className="my-4 d-md-none">
          {/* One-to-One Card */}
          <div className={`${style.mobileCard} mb-4 scroll-section`}>
            <h3 className={`${style.mobileCardTitle} text-center mb-3`}>One-to-One Course</h3>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Schedule:</span>
              <span className={style.mobileCardValue}>4 hours/day - 5 days/week</span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Weekly Hours:</span>
              <span className={style.mobileCardValue}>20 hours <span style={{ color: "red" }}>(Total: {data.oneHours})</span></span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Rate:</span>
              <span className={style.mobileCardValue}>10 JD per hour</span>
            </div>
            <div className={`${style.mobileCardTotal} text-center mt-3`}>
              <span>Total: <span style={{ color: "red", fontWeight: "bold" }}>{data.oneTotalPrice}</span></span>
            </div>
          </div>

          {/* Group Card */}
          <div className={`${style.mobileCard} mb-4 scroll-section`}>
            <h3 className={`${style.mobileCardTitle} text-center mb-3`}>Group Course</h3>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Schedule:</span>
              <span className={style.mobileCardValue}>4 hours/day - 5 days/week</span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Weekly Hours:</span>
              <span className={style.mobileCardValue}>20 hours <span style={{ color: "red" }}>(Total: {data.groupHours})</span></span>
            </div>
            <div className={`${style.mobileCardRow} mb-3`}>
              <span className={style.mobileCardLabel}>Rate:</span>
              <span className={style.mobileCardValue}>11 JD per hour</span>
            </div>
            <div className={`${style.mobileCardTotal} text-center mt-3`}>
              <span>Total: <span style={{ color: "red", fontWeight: "bold" }}>{data.groupTotalPrice}</span></span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Schedule;
