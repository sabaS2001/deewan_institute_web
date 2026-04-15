import { Fragment, useEffect } from "react";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import tripsData from "../../../data/trips.ts";
import BottomBanner from "../../components/bottomBanner/bottomBanner.tsx";
import AccommodationLayoutR from "../../layout/accommodationLayout/accommodationLayoutR.tsx";
import { useScrollAnimation } from "../../../hooks/scrollAnimations.ts";
function Trips() {

  useEffect(() => {
    document.title = "Trips";
  }, []);

  useScrollAnimation();
  
  return (
    <Fragment>
      {/* NavBar */}
      <NavBar />
      {/* Accommodation Layout */}
      <AccommodationLayoutR data={tripsData} />
      {/* BottomBanner */}
      <BottomBanner
        data={{
          mainText: "Travel Smarter, Experience More.",
          buttonText: "Sign Up!",
          primaryColor: "#000000",
          backgroundImg: "../assets/images/banner/tripsBBG.png",
        }}
      />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default Trips;
