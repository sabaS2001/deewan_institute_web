import {Link} from "react-router"; 
import "bootstrap"; 
import style from "./courses.module.scss"
function Courses() {
  return (
    <section className="scroll-section" id={style.courses}>
      <div
        className={`${style.title} mx-auto px-5 scroll-section slide-in-left`}
      >
        <h1>Arabic Programs</h1>
      </div>
      <div className="mx-auto text-center my-5 scroll-section" id={style.para}>
        <p>
          At Deewan Institute, we proudly offer immersive programs in Arabic
          (Ammiyeh and FusHa), led by native speakers in vibrant Amman. Check
          out our diverse course offerings today and discover how our flexible,
          culturally enriched programs make Arabic mastery accessible and
          engaging for learners worldwide.
        </p>
      </div>
      <div className="d-flex flex-row flex-wrap gap-1 justify-content-center scroll-section slide-in-right" id={style.coursesContainer}>
        {/* <!-- First Course --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/levantine.svg"}
            />
            <span>Colloquial Levantine Arabic</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/levantine.svg"}
            />
            <p className="my-3" id={style.para}>
              Colloquial Levantine Arabic
            </p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              View Course
            </Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              Join Us!
            </a>
          </div>
        </div>
        {/* <!-- Second Course --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/modern.svg"}
            />
            <span>Modern Standard Arabic (MSA)</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/modern.svg"}
            />
            <p className="my-3" id={style.para}>
              Modern Standard Arabic (MSA)
            </p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              View Course
            </Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              Join Us!
            </a>
          </div>
        </div>
        {/* <!-- Third Course  --> */}
        <div className={`${style.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
          <div className={style.front}>
            <img
              id={style.image}
              src={"../assets/images/background/hopOnHopOff.svg"}
            />
            <span>Hop On Hop Off Arabic</span>
          </div>
          <div
            className={`${style.back} d-flex flex-column justify-content-center`}
          >
            <img
              id={style.image}
              src={"../assets/images/background/hopOnHopOff.svg"}
            />
            <p className="my-3" id={style.para}>
              Hop On Hop Off Arabic
            </p>
            <Link
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              to="/arabic-courses"
            >
              View Course
            </Link>
            <a
              id={style.btn}
              className="btn rounded-pill text-decoration-none text-center text-white"
              href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
              target="_blank"
            >
              Join Us!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
