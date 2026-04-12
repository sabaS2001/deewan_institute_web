import {Fragment} from "react"; 
import style from "./foreignCircle.module.scss";

function ForeignCircles(){
    return (
        <Fragment>
            <section id={style.foreign}>
            <div className={`${style.title} mx-auto my-1  px-5 scroll-section slide-in-left`}>
               <h1>Other Languages We Offer</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p>At Deewan Institute, we proudly offer immersive courses in multiple languages, including English, French,
                  Spanish and German, all led by native speakers in vibrant Amman. Discover how our flexible classes make
                  multilingual mastery accessible and culturally engaging for learners worldwide.</p>
            </div>
            <div className="d-flex flex-row gap-5 justify-content-center scroll-section" id={style.foreignGroup}>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" src="../assets/images/others/english.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className="heading">English</h4>
                  <a className="button" href="../pages/englishCourse.html" target="_blank" role="button">View Courses</a>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" src="../assets/images/others/french.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className="heading">French</h4>
                  <a className="button" href="../pages/frenchCourse.html" target="_blank" role="button">View Courses</a>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" src="../assets/images/others/spanish.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className="heading">Spanish</h4>
                  <a className="button" href="../pages/spanishCourse.html" target="_blank" role="button">View Courses</a>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" src="../assets/images/others/germany.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className="heading">German</h4>
                  <a className="button" href="../pages/germanCourse.html" target="_blank" role="button">View Courses</a>
               </div>
            </div>
         </section>
        </Fragment>

    ); 
}

export default ForeignCircles; 