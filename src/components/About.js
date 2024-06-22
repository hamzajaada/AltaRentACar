import React, { useState } from "react";
import {
  MdOutlineDirectionsCar,
  MdLocationOn,
  MdAttachMoney,
  MdCreditCard
} from "react-icons/md";
import { useTranslation } from 'react-i18next';
import { useInView } from "react-intersection-observer"; 
import img from "../assets/img/Cars/image4.webp";
import Reservationmodal from "./Modals/Reservationmodal";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [reservationmodalVisible, setReservationModalVisible] = useState(false); 
  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => setReservationModalVisible(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className="lg:px-14 grid grid-cols-1 lg:grid-cols-2 mt-0 mx-auto lg:py-5 md:mb-14"
      ref={ref}
    >
      {reservationmodalVisible && ( 
        <Reservationmodal
          onCancel={closeModal}
          className="fixed inset-1"
        />
      )}

      <div className="mt-3 mb-5 lg:mb-0 lg:mt-0 mx-auto">
        <div>
          <h2 className="lg:font-bold text-[25px] uppercase text-center md:text-center">
            {t('about.title')}
          </h2>
          <div className="mt-5 mx-auto w-40 h-1 bg-customRed mb-6"></div>
          <p className="mb-5 px-6 font-medium text-justify">
            {t('about.description')}
          </p>
        </div>
        <div className="flex justify-evenly mb-12 md:mx-auto lg:mr-0">
          <div className="flex flex-col items-center">
            <MdOutlineDirectionsCar className="text-5xl text-customRed" />
            <div className="uppercase text-[13px] font-semibold text-gray-500">
              {t('about.carTypes')}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <MdLocationOn className="text-5xl text-customRed" />
            <div className="uppercase text-[13px] font-semibold text-gray-500">
              {t('about.localisation')}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <MdAttachMoney className="text-5xl text-customRed" />
            <div className="uppercase text-[13px] font-semibold text-gray-500">
              {t('about.bestPrice')}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <MdCreditCard className="text-5xl text-customRed" />
            <div className="uppercase text-[13px] font-semibold text-gray-500">
              {t('about.payOnline')}
            </div>
          </div>
        </div>
        <div className="text-center lg:mr-26">
          <button  
            onClick={ ()=>{
             
              navigate("/list_cars")
            }
          }
            className="mx-auto uppercase w-auto tracking-[2px] text-[13px] px-[100px] font-medium h-[50px] text-white bg-customRed hover:bg-red-900 rounded-[10px]"
          >
            {t('about.seeAllCars')}
          </button>
        </div>
      </div>
      <div className="mx-auto my-auto">
        <img
          className="rounded-[20px]"
          src={img}
          width={600}
          height={448}
          alt="Car"
        />
      </div>
    </div>
  );
};

export default About;
