import React from "react";
import { useTranslation } from 'react-i18next';
import img1 from "../assets/img/aerop.webp";
import img2 from "../assets/img/Hotet1.webp";

const Fauter3 = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:px-16 lg:pr-0 grid lg:grid-cols-2 h-auto my-10">
      {/* P1 */}
      <div className="0 py-5">
        {/* text */}
        <div className="mb-5 lg:pr-24">
          <p className="font-bold text-[20px] uppercase mb-[10px] lg:text-left text-center">
            {t('fauter3.airportServiceTitle')}
          </p>
          <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
          <p className="text-[15px] my-5 lg:my-0 lg:mx-0 mx-5 mb-5 text-justify">
            {t('fauter3.airportServiceDescription')}
          </p>
        </div>
        {/* image */}
        <div className="mx-auto lg:ml-0 w-full flex justify-center">
          <div>
            <img
              src={img1}
              className="rounded-md lg:w-[87%] w-auto h-auto block"
              alt="Airport Service"
            />
          </div>
        </div>
      </div>
      {/* P2 */}
      <div className="lg:mt-7">
        {/* image */}
        <div className="mx-auto lg:ml-[35px] w-full flex justify-center">
          <div>
            <img
              src={img2}
              className="hidden lg:block rounded-md lg:w-[87%] w-auto h-auto block"
              alt="Hotel Service"
            />
          </div>
        </div>

        {/* text */}
        <div className="py-5 mb-5 lg:pl-10 lg:pr-12">
          <p className="font-bold text-[20px] uppercase mb-[10px] lg:text-left text-center">
            {t('fauter3.hotelServiceTitle')}
          </p>
          <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
          <p className="text-[15px] my-5 lg:my-0 lg:mx-0 mx-5 mb-5 text-justify">
            {t('fauter3.hotelServiceDescription')}
          </p>
        </div>
        {/* image phone */}
        <div className="mx-auto w-full flex justify-center">
          <div>
            <img
              src={img2}
              className="lg:hidden block rounded-md w-auto h-auto block"
              alt="Hotel Service"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fauter3;
