import React from "react";
import { useTranslation } from "react-i18next";
import img from "../assets/img/cta/Erm.png";
import google from "../assets/img/cta/google.png";

const Cta = () => {
  const { t } = useTranslation();

  return (
    <section className="lg:px-14 h-auto grid lg:grid-cols-2" id="Cta">
      {/* Text */}
      <div className="h-auto my-auto w-auto mx-auto lg:ml-10">
        <div>
          <h2 className="text-[30px] font-bold uppercase text-center lg:text-left mt-5">
            {t("bookYourCar")}
          </h2>
          <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
          <p className="text-center lg:mx-0 mx-3 lg:text-justify">
            {t("bookYourCarDesc")}
          </p>
          {/* Button */}
        </div>
      </div>
      {/* Image */}
      <div className="mx-auto h-auto">
        <img src={img} alt="" className="mx-auto w-[280px]" />
      </div>
    </section>
  );
};

export default Cta;
