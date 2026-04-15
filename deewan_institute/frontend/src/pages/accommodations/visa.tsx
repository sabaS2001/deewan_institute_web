import { Fragment, useEffect } from "react";
import AccommodationLayout from "../../layout/accommodationLayout/accommodationLayout.tsx";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import visaData from "../../../data/visa.ts";
import BottomBanner from "../../components/bottomBanner/bottomBanner.tsx";
import { useScrollAnimation } from "../../../hooks/scrollAnimations.ts";

function Visa() {
  useEffect(() => {
    document.title = "Visa Application";
  }, []);

  useScrollAnimation();

  return (
    <Fragment>
      {/* NavBar */}
      <NavBar />
      {/* Accommodation Layout */}
      <AccommodationLayout data={visaData} />
      {/* BottomBanner */}
      <BottomBanner
        data={{
          mainText: "Unlock a Stress-Free Stay in Jordan.",
          buttonText: "Sign Up!",
          primaryColor: "#000000",
          backgroundImg: "../assets/images/banner/visaBBG.svg",
        }}
      />
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default Visa;
