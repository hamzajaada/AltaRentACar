import React from "react";
import Brands from "./Brands";
import CarSlider from "./CarsSlider";
import { t } from "i18next";
import { useTranslation } from "react-i18next";

const Cars = () => {
  const { t } = useTranslation();
  return (
    <section
      className="h-auto mt-[30px] lg:mt-[0px]  flex items-center md:mt-[-40px]    "
      id="cars"
    >
      <div className="container mx-auto">
        <p className="text-[26px] uppercase text-center font-bold lg:ml-[30px]">
          {" "}
          <span className=" text-customRed">{t("most")} </span>{t("popular")}
        </p>
        <div className="mt-5 mx-auto w-40 h-1 bg-customRed"></div>
        <div>
          <CarSlider />
        </div>
      </div>
    </section>
  );
};

export default Cars;
