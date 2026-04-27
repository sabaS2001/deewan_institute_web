import { Fragment } from "react";
import "bootstrap";
import style from "./accommodation.module.scss";
import { useScrollAnimation } from "../../../hooks/scrollAnimations";

interface AccommodationLayoutProps {
  title: string;
  image: string;
  subtitle: string;
  header: string;
  description: string;
  listDescription?: string;
  subheader_one?: string;
  subheader_two?: string;
  subDescription_one?: string;
  subDescription_two?: string;
  list?: string[];
  fee: string;
}

function AccommodationLayout({ data }: { data: AccommodationLayoutProps }) {
  useScrollAnimation();

  return (
    <Fragment>
      {/* <!-- Title --> */}
      <section
        className={`${style.banner} d-flex flex-column py-2 mt-5 align-items-center justify-content-center`}
      >
        <h5 className={style.h5}>Accommodation & Student Services</h5>
        <h1 className={`${style.h1} py-2`}>{data.title}</h1>
      </section>
      {/* <!-- Information Section --> */}
      <section className={`my-5 scroll-section ${style.info} `}>
        <div className="row justify-content-center">
          {/* <!-- The Building Image --> */}
          <div className="col-12 col-md-5 mb-4 mb-md-0 d-flex flex-column align-items-start justify-content-center">
            <img
              className="featurette-image img-fluid mx-auto"
              data-src="holder.js/500x500/auto"
              alt={data.title}
              src={data.image}
              data-holder-rendered="true"
            />
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-start justify-content-center">
            {" "}
            <h5 className="featurette-heading mb-3">{data.subtitle}</h5>
            <h1 className="featurette-heading">{data.header}</h1>
            <p className="lead">{data.description}</p>
            <p className={`lead ${style.bold}`}>{data.listDescription}</p>
            {/* List Items */}
            {data.listDescription &&
              data.list &&
              data.list?.map((item, index) => (
                <ul className="lead">
                  <li key={index}>{item}</li>
                </ul>
              ))}
            {/* Non-list Items */}
            {data.subheader_one &&
              data.subDescription_one &&
              data.subheader_two &&
              data.subDescription_two && (
                <>
                  <p className={`lead ${style.ultraBold}`}>
                    {data.subheader_one}
                  </p>
                  <p className="lead">{data.subDescription_one}</p>
                  <p className={`lead ${style.bold}`}>Service fee: 10 JOD</p>
                  <p className={`lead ${style.ultraBold}`}>
                    {data.subheader_two}
                  </p>
                  <p className="lead">{data.subDescription_two}</p>
                  <p className={`lead ${style.bold}`}>
                    Cost: Depends on destination and selected options
                  </p>
                </>
              )}
            <p className={`lead mt-2 ${style.ultraBold}`}>
              Service Fee: {data.fee}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default AccommodationLayout;
