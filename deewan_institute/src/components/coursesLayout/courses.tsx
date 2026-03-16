import { Fragment } from 'react/jsx-runtime';
import styles from '../coursesLayout/course.module.scss';
import 'bootstrap';

interface arabicCourse {
    title: string,
    courses: Array<{
        arabicTitle: string,
        title: string,
        description: string,
        listDescription?: string,
        list?: Array<{
            type: string
        }>
    }>
}

function Courses({ data }: { data: arabicCourse }) {
    return (
        <Fragment>
            {/* The Main Section */}
            <section className={`${styles.courses} pb-5`}>
                <div className={`${styles.title} mt-5 scroll-section`}>
                    <h1>Arabic Courses</h1>
                </div>
                <h5 className="text-black my-5 lh-base scroll-section">Ensure to schedule <a
                    className="text-decoration-none text-bg-warning"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                    target="_blank">Initial Skills Evaluation or Course Placement Consultation</a> for a
                    fee of 10 JDs before
                    purchasing any of our Course Packages. Explore Deewan’s Arabic Courses!</h5>

                {/* First Row */}
                <div className="d-flex flex-row flex-wrap justify-content-between scroll-section">
                    {data.courses.slice(0, 3).map((course, index) => (
                        <div key={index} className={`${styles.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
                            <div className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}>
                                <h2 className="pt-5 mb-0 pb-0 text-center" id={styles.arabCalligraphy}>
                                    {course.arabicTitle}
                                </h2>
                                <h2 className="pt-5 mb-0 pb-0 text-center">
                                    {course.title}
                                </h2>
                            </div>
                            <div className={`${styles.back} d-flex flex-column justify-content-center`}>
                                <p className="mx-5 my-3 ">{course.description}</p>
                                {course.listDescription && (
                                    <p className="mx-5 fw-bold">{course.listDescription}</p>
                                )}
                                {course.list?.map((listData, listIndex) => (
                                    <ul key={listIndex} className="mx-5">
                                        <li>
                                            <span>{listData.type}</span>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Second Row */}
                <div className="d-flex flex-row flex-wrap justify-content-between mt-5 scroll-section">
                    {data.courses.slice(3, 6).map((course, index) => (
                        <div key={index} className={`${styles.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
                            <div className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}>
                                <h2 className="pt-5 mb-0 pb-0  text-center" id={styles.arabCalligraphy}>
                                    {course.arabicTitle}
                                </h2>
                                <h2 className="pt-5 mb-0 pb-0  text-center">
                                    {course.title}
                                </h2>
                            </div>
                            <div className={`${styles.back} d-flex flex-column justify-content-center`}>
                                <p className="mx-5 my-3 text-black">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Third Row */}
                <div className="d-flex flex-row flex-wrap justify-content-between mt-5 scroll-section">
                    {data.courses.slice(6, 9).map((course, index) => (
                        <div key={index} className={`${styles.courseItem} mx-1 col-12 col-md-6 col-lg-4`}>
                            <div className={`${styles.front} d-flex flex-column justify-content-center align-items-center`}>
                                <h2 className="pt-5 mb-0 pb-0  text-center" id={styles.arabCalligraphy}>
                                    {course.arabicTitle}
                                </h2>
                                <h2 className="pt-5 mb-0 pb-0  text-center">
                                    {course.title}
                                </h2>
                            </div>
                            <div className={`${styles.back} d-flex flex-column justify-content-center`}>
                                <p className="mx-5 my-3 ">{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    );
}

export default Courses;