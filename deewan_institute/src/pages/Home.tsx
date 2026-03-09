import { useEffect, Fragment } from "react";
import HomeNavBar from "../components/homeNavbar"
import Footer from "../components/footer";
import "../style/home.css"
import 'bootstrap'

function Home() {

   useEffect(() => {
      document.title = 'Deewan Institute | Home';
   }, []);


   return (

      <Fragment>
         {/* Navigation Bar */}
         <HomeNavBar />
         {/* <!-- Carousel --> */}
         <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            {/* <!-- Indicators/dots --> */}
            <div className="carousel-indicators">
               <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
               <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
            </div>

            {/* <!-- The slideshow/carousel --> */}
            <div className="carousel-inner">
               {/* <!-- First Slide --> */}
               <div className="carousel-item active" id="carouselItem1">
                  <div className="container-fluid d-flex align-items-end h-100">
                     <div className="row w-100">
                        <div className="col-md-6 text-center d-flex flex-column align-items-center scroll-section slide-in-left">
                           <img src={"/assets/images/logos/nobgLogo.png"} style={{ width: "70%" }} />
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-start justify-content-center">
                           <div className="d-flex scroll-section slide-in-right" id="firstContainer">
                              <h2 className="text-white">Native Arabic, Global Echoes: Ignite Cultures in Amman's Heart.</h2>
                              <p>
                                 Experience the authentic rhythm of Arabic language and culture through immersive lessons with native
                                 speakers in the vibrant heart of Amman.
                              </p>
                              <a className="btn rounded-pill text-center" href="../pages/about.html">Learn More</a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <!-- Second Slide --> */}
               <div className="carousel-item" id="carouselItem2">
                  <div className="container-fluid d-flex align-items-end h-100">
                     <div className="row w-100">
                        <div
                           className="col-md-6 d-flex flex-column align-items-start justify-content-center scroll-section slide-in-right">
                           {/* <!-- Right column --> */}
                           <div className="d-flex flex-column" id="secondContainer">
                              <div className="text-start">
                                 <h2 className="text-white">Level Up Your Arabic</h2>
                                 <h2 className="text-white">With Our</h2>
                                 <h1>Publications</h1>
                                 <span>Available in: </span>
                                 <ul>
                                    <li>English Level: 1, 2, 3 </li>
                                    <li>Spanish Level: 1</li>
                                    <li>German Level: 1</li>
                                 </ul>
                                 <a className="btn rounded-pill text-center" href="https://a.co/d/aU1XrD1">Order Now</a>
                              </div>
                           </div>
                        </div>
                        <div
                           className="col-md-6 text-center d-flex flex-column align-items-center justify-content-center scroll-section slide-in-left">
                           <img src={"../assets/images/others/comprehensiveBook.png"} style={{ width: "60%" }} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* <!-- Left and right controls/icons --> */}
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
               <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
               <span className="carousel-control-next-icon"></span>
            </button>
         </div>

         {/* <!-- About Us --> */}
         <section className="mt-5 pt-5" id="aboutUs">
            <div className="row featurette align-items-center justify-content-center mx-auto">
               <div className="col-md-4 order-md-2 pr-2 d-flex flex-column gap-2">
                  <h2 className="featurette-heading scroll-section slide-in-left">About Us</h2>
                  <p className="lead scroll-section slide-in-left">Deewan Institute, inspired by the Arabic word "Deewan"—a
                     gathering place for families, royal
                     courts, poetry like Mahmoud Darwish's, thinkers, and travelers—opened in Amman in 2017 to teach global
                     students. Today, it's a vibrant language center, co-working space, and event hub for freelancers and
                     students,
                     hosting cultural evenings and weekends while offering rentable rooms for conferences. Dive into authentic
                     Arabic (Ammiyeh and FusHa) and English with native-speaker classNamees—one-to-one, two-to-one, or groups—and
                     join
                     our community by checking out our courses!</p>
                  <a className="button rounded-pill text-decoration-none scroll-section slide-in-left"
                     href="../pages/arabicCourses.html">Explore Our Courses</a>
               </div>
               <div className="col-md-5 order-md-1 d-flex">
                  <img className="featurette-image img-fluid mx-auto scroll-section slide-in-right"
                     src={"../assets/images/others/location.png"} />
               </div>
            </div>
         </section>

         {/* <!-- Courses Section --> */}
         <section className="scroll-section" id="courses">
            <div className="title mx-auto px-5 scroll-section slide-in-left">
               <h1>Arabic Programs</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p>At Deewan Institute, we proudly offer immersive programs in Arabic (Ammiyeh and FusHa), led by
                  native speakers in vibrant Amman. Check out our diverse course offerings today and discover how our flexible,
                  culturally enriched programs make Arabic mastery accessible and engaging for learners worldwide.</p>
            </div>
            <div className="d-flex flex-row flex-wrap gap-4 justify-content-center scroll-section slide-in-right">
               {/* <!-- First Course --> */}
               <div className="courseItem mx-1 col-12 col-md-6 col-lg-4">
                  <div className="front">
                     <img src={"../assets/images/background/levantine.svg"} />
                     <span>Colloquial Levantine Arabic</span>
                  </div>
                  <div className="back d-flex flex-column justify-content-center">
                     <img src="../assets/images/background/levantine.svg" />
                     <p className="my-3 text-black" id="para">Colloquial Levantine Arabic</p>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="../pages/arabicCourses.html">View Course</a>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                        target="_blank">Join Us!</a>
                  </div>
               </div>
               {/* <!-- Second Course --> */}
               <div className="courseItem mx-1 col-12 col-md-6 col-lg-4">
                  <div className="front">
                     <img src="../assets/images/background/modern.svg" />
                     <span>Modern Standard Arabic (MSA)</span>
                  </div>
                  <div className="back d-flex flex-column justify-content-center">
                     <img src="../assets/images/background/modern.svg" />
                     <p className="my-3 text-black" id="para">Modern Standard Arabic (MSA)</p>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="../pages/arabicCourses.html">View Course</a>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                        target="_blank">Join Us!</a>
                  </div>
               </div>
               {/* <!-- Third Course  --> */}
               <div className="courseItem mx-1 col-12 col-md-6 col-lg-4">
                  <div className="front">
                     <img src="../assets/images/background/hopOnHopOff.svg" />
                     <span>Hop On Hop Off Arabic</span>
                  </div>
                  <div className="back d-flex flex-column justify-content-center">
                     <img src="../assets/images/background/hopOnHopOff.svg" />
                     <p className="my-3 text-black" id="para">Hop On Hop Off Arabic</p>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="../pages/arabicCourses.html">View Course</a>
                     <a className="btn rounded-pill text-decoration-none text-center text-white"
                        href="https://docs.google.com/forms/d/e/1FAIpQLScKQTLvV48wnnLa-MG4VYBXHLXQS-5aP7IrO-8_InTxnRqGIQ/viewform"
                        target="_blank">Join Us!</a>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Foreign Section --> */}
         {/* <section id="foreign">
            <div className="title mx-auto my-1  px-5 scroll-section slide-in-left">
               <h1>Other Languages We Offer</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p>At Deewan Institute, we proudly offer immersive courses in multiple languages, including English, French,
                  Spanish and German, all led by native speakers in vibrant Amman. Discover how our flexible classNamees make
                  multilingual mastery accessible and culturally engaging for learners worldwide.</p>
            </div>
            <div className="d-flex flex-row gap-5 justify-content-center scroll-section" id="foreignGroup">
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
         </section> */}

         {/* <!-- Testimonials Section --> */}
         <section className="testimonials py-3">
            <div className="title mx-auto my-1  px-5 scroll-section slide-in-left">
               <h1>Testimonials</h1>
            </div>
            <div className="mx-auto text-center my-5 scroll-section">
               <p>Deewan Institute has students from all over the world, from many different cultures and backgrounds. They all
                  love learning with us! We have had students from the United States, Australia, United Kingdom, the
                  Netherlands, Italy, Germany, Denmark, Belgium, Austria, France, Canada, Pakistan, Switzerland, Iceland,
                  Ireland, Norway, Sweden, Greece, India, Japan, South Korea, Hong Kong, Singapore and South Africa, among many
                  others.</p>
            </div>
            <div className="container d-flex align-content-center">
               <div className="swiper testimonialsSwiper">
                  <div className="swiper-wrapper">
                     {/* <!-- Testimonial Card 1 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Thanks to my teachers, I loved every className and I always felt supported and
                              motivated! I was a total beginner in Ammiyeh and now after 2 months I feel much more confident and I
                              can get myself around in Jordan. Deewan, you will be missed!"</p>
                           <hr />
                           <h5 className="testimonial-name">Giorgia Gusci Gusciglio</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 2 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Excellent instructors and flexible online classNamees. Highly recommend!"</p>
                           <hr />
                           <h5 className="testimonial-name">Fatima Khan</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 3 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Mohammad and Duaa are outstanding, professional educators. Mohammad's
                              one-to-one lessons in colloquial Jordanian Arabic helped me improve immensely. I recommend their
                              classNamees to anyone who wants to get to know Amman and Jordan the best way - through language!"
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Joel Veldkamp</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 4 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"One of the best things I did in Amman. Not just great teachers but really
                              great people, too. Especially excellent for anyone wanting to speak like a local. Highly recommended."
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Sophie Parker</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 5 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"As a beginner, I really enjoyed my Arabic classNamees at Deewan Institute.
                              With a lot of patience (!!!) and very good pedagogy, Duaa keeps on encouraging you, trying to make you
                              self-confident, teaching you basics in a very attractive and effective way. Smile and good spirit are
                              key elements. I definitely recommend people to take Arabic classNamees at Deewan."
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Nadège Chassaing </h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 6 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Mohammad and Duaa are not only professional educators but also really
                              wonderful people. Mohammad’s Modern Standard Arabic and Colloquial Jordanian Arabic classNamees helped me
                              improve a lot! My one-to-one classNamees with Mohammad left me not only with language skills but also a
                              stronger understanding of local culture. I highly recommend Deewan Institute to anyone interested in
                              learning Arabic and/or culture!"
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Gina Wu</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 7 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"I took Ammiyeh courses at Deewan intensively for a month and they arranged
                              for my housing and several incredible trips to see sites in Jordan. It was my favourite winter break,
                              and my Arabic improved immensely! The teachers at Deewan are experienced, patient, and creative with
                              their lesson plans. We laughed and had so much fun together, by the end I really felt like family. I
                              cannot recommend them highly enough!"
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Emma Slater</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 8 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Duaa and Mohammad are the best Ammiyeh teachers I've had. Their lessons
                              are well-organized, crafted toward your own needs and abilities, and also push you to challenge
                              yourself. Their lessons are also helpful for learning about local culture and linguistic idioms, which
                              are hard to understand without spending extensive time in the country."
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Angela Lin</h5>
                        </div>
                     </div>
                     {/* <!-- Testimonial Card 9 --> */}
                     <div className="swiper-slide my-5">
                        <div className="testimonial-card">
                           <img src="../assets/images/icons/Stars.png" alt="Rating" className="testimonial-img" />
                           <p className="testimonial-quote">"Mohammad and Duaa are a winning team! Within a couple of months of
                              learning in their classNamees, my Arabic speaking skills simply soared. The Ammiyeh course was brilliant
                              for building my confidence, vocabulary and listening comprehension. Besides, the classNamees were always
                              such good fun. Definitely some of my best-spent JOD; really good value for money!"
                           </p>
                           <hr />
                           <h5 className="testimonial-name">Funke Alabi</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* <!-- Contact Us Section --> */}
         <section className="scroll-section contact py-3">
            <div className="row mx-5 justify-content-center">
               <div className="col-8 d-flex flex-column flex-end">
                  <h1>Join Us Today and Start Your Language Journey!</h1>
               </div>
               <div className="col-2 d-flex flex-column justify-items-center justify-content-center">
                  <a href="https://docs.google.com/forms/d/1Z2pxzOqxGTh8X0BePq_iy12bMVq_w5xW-gOD4SLnu2s/viewform?edit_requested=true"
                     className="bg-white text-black text-center" target="_blank">Book With Us!</a>
               </div>
            </div>
         </section>
         {/* Footer */}
         <Footer />
      </Fragment>
   )
}
export default Home;