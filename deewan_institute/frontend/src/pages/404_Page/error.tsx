import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/navBar/navbar";
import Footer from "../../components/footer/footer";
import "bootstrap";
import style from "./error.module.scss";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Fragment>
      {/* Navigation Bar */}
      <NavBar />
      {/* 404 Content */}
      <section className="d-flex flex-column align-items-center justify-content-center text-center mx-auto" id={style.errorPage} >
        <img id={style.image} className="mx-auto" src={"/assets/images/others/404.png"} />  
        <h5>Ooops 404!</h5>
        <h1 className={style.h1}>We cannot find the page you're looking for!</h1>
        <p className={`text-muted ${style.para}`}>The page you are looking for does not exist.</p>
        <button
          className="btn mt-2"
          id={style.button}
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </section>
      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default NotFound;