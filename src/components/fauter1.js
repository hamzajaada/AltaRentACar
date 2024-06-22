import React from "react";
import { useTranslation } from 'react-i18next';
import calendrie from "../assets/img/Fauter/calendrier.png";
import car from "../assets/img/Fauter/car.png";
import key from "../assets/img/Fauter/key.png";
import "../index.css";

const Fauter1 = () => {
  const { t } = useTranslation();

  return (
    <div className="grid lg:grid-cols-4 gap-3 py-5 bg-gray-100 w-full lg:mt-0" id="fauter1">
      {/* titre */}
      <div className="lg:col-span-1 w-96 h-auto mx-auto lg:pl-8 my-auto">
        <div>
          <p className="text-customRed text-[20px] text-center lg:text-left mb-5 font-semibold">
            {t('fauter1.howToRent')}
          </p>
          <p className="text-[30px] font-bold uppercase text-center lg:text-left">
            {t('fauter1.experience')}
          </p>
          <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed"></div>
        </div>
      </div>
      {/* element */}
      <div className="lg:col-span-3 grid lg:grid-cols-3 md:grid-cols-2 gap-10 bg-gray-100 h-auto w-auto">
        {/* 01 */}
        <div className="parent-div mx-auto w-80 h-96 bg-white relative">
          <div className="pt-8 px-5">
            <p className="text-[50px] font-bold">
              0<span className="text-customRed">1</span>
            </p>
            <div className="flex justify-center items-center">
              <img src={key} width={70} height={70} alt="" />
            </div>
            <p className="text-[30px] py-6 font-semibold">
              {t('fauter1.step1.title')}
            </p>
            <p className="text-[20px] font-medium m">
              {t('fauter1.step1.description')}
            </p>
          </div>
          <div className="w-40 h-2 absolute bottom-0 bg-customRed hover-target"></div>
        </div>
        {/* 02 */}
        <div className="parent-div mx-auto w-80 h-96 bg-white relative">
          <div className="pt-8 px-5">
            <p className="text-[50px] font-bold">
              0<span className="text-customRed">2</span>
            </p>
            <div className="flex justify-center items-center">
              <img src={calendrie} width={70} height={70} alt="" />
            </div>
            <p className="text-[30px] py-10 font-semibold">
              {t('fauter1.step2.title')}
            </p>
            <p className="text-[20px] font-medium m">
              {t('fauter1.step2.description')}
            </p>
          </div>
          <div className="w-40 h-2 absolute bottom-0 bg-customRed hover-target"></div>
        </div>
        {/* 03 */}
        <div className="parent-div mx-auto w-80 h-96 md:col-span-2 lg:col-span-1 bg-white relative">
          <div className="pt-8 px-5">
            <p className="text-[50px] font-bold">
              0<span className="text-customRed">3</span>
            </p>
            <div className="flex justify-center items-center">
              <img src={car} width={70} height={70} alt="" />
            </div>
            <p className="text-[30px] py-6 font-semibold">
              {t('fauter1.step3.title')}
            </p>
            <p className="text-[20px] font-medium m">
              {t('fauter1.step3.description')}
            </p>
          </div>
          <div className="w-40 h-2 absolute bottom-0 bg-customRed hover-target"></div>
        </div>
      </div>
    </div>
  );
};

export default Fauter1;
