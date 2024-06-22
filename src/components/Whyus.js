import React from "react";
import { useTranslation } from 'react-i18next';
import {} from "framer-motion";
import img from "../assets/img/Cars/BM.webp";

import { MdHandshake, MdKey, MdTrendingUp } from "react-icons/md";

const Whyus = () => {
  const { t } = useTranslation();

  return (
    <section className="  flex items-center mt-10  bg-gray-100 py-5 " id="why">
      <div className="container mx-auto">
        <h2 className="text-[30px] font-bold uppercase text-center">
          {t('excellence')}
        </h2>
        <div className="mt-5 mx-auto  w-40 h-1 bg-customRed mb-3"></div>
        <p className="text-center">
          {t('excellenceDesc')}
        </p>
        {/* Car image */}
        <div className=" md:flex justify-center mb-6 xl:mb-2">
          <img src={img} width={560} height={220} />
        </div>
        {/* Grid items */}
        <div
          className="  flex flex-wrap justify-center xl:grid xl:grid-cols-3
            gap-y-4 xl:gap-y-0 xl:gap-x-3"
        >
          {/* Item1 */}
          <div
            className="flex flex-col items-center text-center  
                 xl:max-w-none p-2 xl:p-0"
          >
            <MdKey className=" text-[30px] text-customRed mb-4" />
            <h3 className="h3">{t('rentTitle')}</h3>
            <p className="hidden xl:flex">
              {t('rentDesc')}
            </p>
          </div>
          {/* Item2 */}
          <div
            className="flex flex-col items-center text-center  
                 xl:max-w-none p-2 xl:p-0"
          >
            <MdTrendingUp className=" text-[30px] text-customRed mb-4" />
            <h3 className="h3">{t('vehiclesTitle')}</h3>
            <p className="hidden xl:flex">
              {t('vehiclesDesc')}
            </p>
          </div>
          {/* Item3 */}
          <div
            className="flex flex-col items-center text-center  
                 xl:max-w-none p-2 xl:p-0"
          >
            <MdHandshake className=" text-[30px] text-customRed mb-4" />
            <h3 className="h3">{t('servicesTitle')}</h3>
            <p className="hidden xl:flex">
              {t('servicesDesc')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;
