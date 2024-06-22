import React from "react";
import { useTranslation } from "react-i18next";

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <div className="lg:px-14 lg:mb-10 lg:mt-[-60px]  mt-[-30px] grid lg:grid-cols-3 gap-3 h-auto w-full">
      {/* Title */}
      <div className="lg:h-auto flex mx-5  items-center">
        <div>
          <p className="text-[16px] font-bold text-gray-600 lg:text-left md:text-center text-center">
            {t('welcome.title')}
          </p>
          <p className="text-[25px] uppercase font-bold md:text-center text-center">
            {t('welcome.subtitle')}
          </p>
          <div className="mt-5 mx-auto w-40 h-1 bg-customRed"></div>
        </div>
      </div>
      {/* Text 1 */}
      <div className="lg:h-auto  flex justify-center   px-5">
        <div>
          <p className="text-[16px] font-semibold text-gray-700 text-justify">
            {t('welcome.text1')}
          </p>
        </div>
      </div>
      {/* Text 2 */}
      <div className="lg:h-auto  flex justify-center   px-5">
        <div>
          <p className="text-[16px] font-semibold text-gray-700 text-justify">
            {t('welcome.text2')}
          </p>
          <p className="text-[20px] mt-5 font-bold text-gray-800 text-center">
            {t('welcome.footerTitle')}
          </p>
          <p className="text-[14px] font-semibold text-gray-900 text-center">
            {t('welcome.footerSubtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
