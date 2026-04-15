import 'bootstrap';
import styles from "./curriculum.module.scss";


function CurriculumSlider() {
    return (
        <section id={styles.curriculum}>
            <div className={`${styles.title} my-5`}>
                <h1 className="py-2 scroll-section slide-in-right">Curriculum</h1>
            </div>

            {/* Carousel */}
            <div id="carousel" className={`carousel slide scroll-section ${styles.myCarousel}`} data-bs-ride="carousel">
                {/* Indicators */}
                <div className={`${styles.carouselIndicators}`}>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">
                    {/* First Slide */}
                    <div className="carousel-item active my-2" data-bs-interval="5000">
                        <p className="lead text-center">The curriculum used in this program is developed by Deewan team and other additional curricula. Based on the students' levels, the curricula used could be:</p>
                        <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
                            <div className="row w-100 h-auto">
                                <div className="col-md-6 text-center d-flex flex-column align-items-center gap-2">
                                    <img src={"../assets/images/books/poster/msa.png"} alt="MSA Book" width="450" height="550" className="img-fluid" />
                                    <div className="my-4 px-2">
                                        <p className={`lead ${styles.dark}`}>The Comprehensive Guide to <br /> Modern Standard Arabic</p>
                                        <p className={`${styles.light} mb-4`}>Beginner Level</p>
                                        <a className={`btn text-decoration-none rounded-pill ${styles.viewMoreBtn}`} href="https://a.co/d/aOpWC9s" target="_blank" rel="noopener noreferrer">
                                            Buy Online
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center d-flex flex-column align-items-center gap-2">
                                    <img src={"../assets/images/books/poster/ammiyeh.png"} alt="Levantine Book" width="450" height="550" className="img-fluid" />
                                    <div className="my-4 px-2">
                                        <p className={`lead ${styles.dark}`}>The Comprehensive Guide to <br /> Levantine Arabic</p>
                                        <p className={`${styles.light} mb-4`}>Beginner, Intermediate, and Advanced Levels</p>
                                        <a className={`btn text-decoration-none rounded-pill ${styles.viewMoreBtn}`}
                                            href="https://a.co/d/2EtcWVi" target="_blank" rel="noopener noreferrer">
                                            Buy Online
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Slide - MOVED INSIDE carousel-inner */}
                    <div className="carousel-item my-2" data-bs-interval="5000">
                        <p className="lead text-center">Additionally, other Deewan resources will be used to improve and enrich students' skills. The resources include the following:</p>
                        <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
                            <div className="row w-100 h-auto justify-content-center">
                                <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center gap-2">
                                    <h2 className={styles.dark}>Guide To Deewan Arabic Podcast</h2>
                                    <h4 className={styles.dark}>Season 1, 2, 3, 5</h4>
                                    <p className={`${styles.light} mb-4`}>Beginner, Intermediate, and Advanced levels</p>
                                    <a className={`btn text-decoration-none rounded-pill ${styles.viewMoreBtn}`}
                                        href="https://deewanarabic.com/podcast" target="_blank" rel="noopener noreferrer">
                                        View More
                                    </a>
                                </div>
                                <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center gap-2">
                                    <div className="row h-auto justify-content-between g-3">
                                        <div className="col-md-6">
                                            <img src={"../assets/images/books/poster/PBSeason1.png"} alt="Podcast S1" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <img src={"../assets/images/books/poster/PBSeason2.png"} alt="Podcast S2" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <img src={"../assets/images/books/poster/PBSeason3.png"} alt="Podcast S3" className="img-fluid" />
                                        </div>
                                        <div className="col-md-6">
                                            <img src={"../assets/images/books/poster/PBSeason5.png"} alt="Podcast S5" className="img-fluid" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Slide - MOVED INSIDE carousel-inner */}
                    <div className="carousel-item my-2" data-bs-interval="5000">
                        <p className="lead text-center">Additionally, other Deewan resources will be used to improve and enrich students' skills. The resources include the following:</p>
                        <div className="container-fluid d-flex align-items-center justify-content-center mt-5">
                            <div className="row w-100 h-auto justify-content-center">
                                <div className="col-md-6 text-center d-flex flex-column align-items-end justify-content-center gap-2">
                                    <img src={"../assets/images/books/poster/idioms.png"} alt="Idioms Book" className="img-fluid" />
                                </div>
                                <div className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center gap-2">
                                    <h2 className={styles.dark}>Everyday Arabic Idioms</h2>
                                    <p className={`${styles.light} mb-4`}>Beginner, Intermediate, and Advanced levels</p>
                                    <a className={`btn text-decoration-none rounded-pill ${styles.viewMoreBtn}`}
                                        href="https://a.co/d/dF58vxT" target="_blank" rel="noopener noreferrer">
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
}

export default CurriculumSlider;