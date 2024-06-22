import React from "react";
import { useTranslation } from 'react-i18next';
import img from "../assets/img/testimonial/DALL·E 2024-05-28 13.43.25 - A professional and inviting banner for a car rental website without any text. The design features three icons_ 1. A wide range of vehicles icon. 2. .webp";
import icon from "../assets/img/Fauter/verifier.png";

const Fauter2 = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:px-14 grid lg:grid-cols-2 mt-2 mb-5" id="fauter2">
      {/* Div 2 */}
      <div className="my-auto lg:mt-0 h-auto md:mt-0 lg:mr-24">
        {/* text */}
        <div className="pb-5 px-7 lg:ml-0 h-auto">
          <p className="text-gray-500 md:text-center text-center lg:text-left lg:mt-5 mb-3 lg:mb-0">
            {t('fauter2.whyChooseUs')}
          </p>
          <p className="text-black uppercase md:text-center text-center mb-5 lg:text-left text-[20px] lg:text-[20px] font-bold">
            {t('fauter2.reasonToBook')}
          </p>
          <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
          <p className="md:text-center font-medium text-[16px] lg:text-left text-justify">
            {t('fauter2.description')}
          </p>
        </div>
        {/* info */}
        <div className="relative lg:ml-0 md:flex md:justify-evenly h-32 grid grid-cols-2">
          {/* info 1 */}
          <div className="lg:absolute grid gap-2 lg:left-6 mx-auto">
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.diverseFleet')}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.competitivePricing')}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.convenientLocations')}
              </p>
            </div>
          </div>
          {/* info 2 */}
          <div className="lg:absolute lg:left-64 grid grid-rows-3 gap-2 mx-auto">
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.exceptionalService')}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.flexibleOptions')}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="font-medium text-[16px]">
                <span className="font-bold text-customRed"> -</span> {t('fauter2.commitmentToSafety')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* image Div 1 */}
      <div className="mt-20 lg:mt-0 md:mx-auto mx-auto lg:w-auto lg:mr-24 lg:mx-0 my-auto flex">
        <img src={img} alt="" className="lg:w-[100%] w-96 h-96 rounded-[20px] lg:ml-10" />
      </div>
    </div>
  );
};

export default Fauter2;
