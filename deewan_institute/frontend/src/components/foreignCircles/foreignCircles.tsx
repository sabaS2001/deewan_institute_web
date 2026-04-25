import {Fragment} from "react"; 
import style from "./foreignCircle.module.scss";
import { NavLink } from "react-router-dom"; 

function ForeignCircles(){
    return (
        <Fragment>
            <section className={style.foreign}>
            <div className={`${style.title} mx-auto my-1  px-5 scroll-section slide-in-left`}>
               <h1 className={style.h1}> Other Languages We Offer</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p id={style.para}>At Deewan Institute, we proudly offer immersive courses in multiple languages, including English, French,
                  Spanish and German, all led by native speakers in vibrant Amman. Discover how our flexible classes make
                  multilingual mastery accessible and culturally engaging for learners worldwide.</p>
            </div>
            <div className="d-flex flex-row gap-5 justify-content-center scroll-section" id={style.foreignGroup}>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/english.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>English</h4>
                  <NavLink className={style.button} to="/foreign-languages/english-course" target="_blank" role="button">View Courses</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/french.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>French</h4>
                  <NavLink className={style.button} to="/foreign-languages/french-course" target="_blank" role="button">View Courses</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/spanish.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>Spanish</h4>
                  <NavLink className={style.button} to="/foreign-languages/spanish-course" target="_blank" role="button">View Courses</NavLink>
               </div>
               <div className="d-flex flex-column gap-4 align-items-center">
                  <img className="rounded-circle" id={style.image} src="/assets/images/others/germany.png" alt="Generic placeholder image"
                     width="300" height="300" />
                  <h4 className={style.heading}>German</h4>
                  <NavLink className={style.button} to="/foreign-languages/german-course" target="_blank" role="button">View Courses</NavLink>
               </div>
            </div>
         </section>
        </Fragment>

    ); 
}

export default ForeignCircles; 