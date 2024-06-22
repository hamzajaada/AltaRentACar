import React from 'react';
import { useTranslation } from 'react-i18next';

import assurance from '../assets/img/assurance.png';
import Aeroport from '../assets/img/aeroport.png';
import siege from '../assets/img/enfant.png';
import conducteur from '../assets/img/conducteur-de-taxi.png';
import km from '../assets/img/kilometrage.png';
import age from '../assets/img/age1.png';

const Condition = () => {
  const { t } = useTranslation();

  return (
    <>
      <p className="text-center text-[35px] uppercase font-bold mt-10">{t('ourConditions')}</p>
      <div className="mt-5 mx-auto w-40 h-1 bg-customRed mb-3"></div>

      <div className="grid lg:grid-cols-2 mb-16 h-autp w-full gap-4 px-10 mt-2 lg:px-60 ">
        <div className="px-5 py-5 w-auto h-auto lg:items-center border hover:border-customRed lg:flex rounded-xl">
          <img className="mx-auto lg:mx-0 rounded-xl w-16 h-16" src={assurance} alt="Assurance" />
          <div className="ml-3">
            <p className="text-gray-500 text-[20px] text-center lg:text-left uppercase font-semibold">{t('comprehensiveInsurance')}</p>
            <p className="font-medium text-[16px] text-center lg:text-left">{t('comprehensiveInsuranceDesc')}</p>
          </div>
        </div>

        <div className="px-5 py-5 w-auto h-auto lg:items-center border hover:border-customRed lg:flex rounded-xl">
          <img className="mx-auto lg:mx-0 rounded-xl w-16 h-16" src={siege} alt="Child Seat" />
          <div className="ml-3">
            <p className="text-gray-500 text-[20px] text-center lg:text-left uppercase font-semibold">{t('freeChildSeat')}</p>
            <p className="font-medium text-[16px] text-center lg:text-left">{t('freeChildSeatDesc')}</p>
          </div>
        </div>

        {/* Repeat for other items */}
      </div>
    </>
  );
}

export default Condition;
