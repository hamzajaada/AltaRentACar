import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/img/header/logo.png";
import fb from "../assets/img/Fauter/instagram.png";
import ins from "../assets/img/Fauter/facebook.png";
import Reservationmodal from "./Modals/Reservationmodal";

const Footer = () => {
  const { t } = useTranslation();
  const [reservationmodalVisible, setReservationModalVisible] = useState(false);
  
  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => setReservationModalVisible(false);

  return (
    <div className="grid bg-black lg:px-5 h-auto lg:grid-cols-4  pb-14 pt-5 border-t-2 gap-2 ">
      {/* text&Image */}
      {reservationmodalVisible && (
        <Reservationmodal onCancel={closeModal} className="fixed inset-1" />
      )}
      <div className="text-center lg:text-left lg:mt-5 lg:mr-5 lg:px-5 ">
        <img src={logo} width={150} className=" mx-auto" alt="" />
        <p className="font-medium mt-5  lg:text-center text-white text-[16px]">{t('bookCarOfDreams')}</p>
        {/* <div className="mx-auto lg:mx-0 mt-5 w-24 h-auto flex justify-evenly ">
          <img src={ins} className="w-5" />
          <img src={fb} className="w-5" />
        </div> */}
      </div>
      {/* links */}
      <div className="text-center   lg:text-left ">
        
        <p className="text-[25px] font-semibold text-gray-200 lg:mt-5 uppercase ">{t('QUICKLINKS')}</p>
        <div className="mb-3 lg:mx-0 mx-auto mt-3 w-20 h-1 bg-customRed"></div>
        <a href="/" className="hover:text-customRed mt-[15px] text-[20px] font-medium lg:mt-8 my-2  text-white  ">
          {t('home')}
        </a> <br/>
        <a  href="/list_cars" className="hover:text-customRed text-[20px] font-medium text-white  my-2  ">{t('cars')}</a>
        <br/>
        <a href="/About" className="hover:text-customRed text-[20px] font-medium text-white  my-2  ">{t('Aboutus')}</a>
        <br/>
        <a href="/Contact" className="hover:text-customRed text-[20px] font-medium text-white my-2   ">{t('Contactus')}</a>
        {/* <a  href="/cokies" className="hover:text-customRed text-[16px] font-medium text-white  ">{t('cookies')}</a>
        <br/>
        <a href="/Termes" className="hover:text-customRed text-[16px] font-medium text-white  ">{t('termes')}</a>
        <br/>
        <a href="/data-protection" className="hover:text-customRed text-[16px] font-medium text-white  ">{t('dataprotection')}</a>
        <br/>
        <a href="/legal-notice" className="hover:text-customRed text-[16px] font-medium text-white  ">{t('legalnotice')}</a> */}
      </div>
      <div className="text-center  lg:text-left ">
        <p className="text-[25px] font-semibold text-gray-200 lg:mt-5 uppercase  ">{t('explore')}</p>
        <div className="mb-3 lg:mx-0 mx-auto mt-3 w-20 h-1 bg-customRed"></div>
        <p className="hover:text-customRed mt-[15px] uppercase text-[20px] font-medium lg:mt-5 text-white  ">
          {t('bookCar')}
        </p>
        <div className="mb-3 lg:mx-0 mx-auto mt-3  w-12  h-1 bg-customRed"></div>
        <div className="mx-auto lg:mx-0   flex  justify-evenly my-3 lg:my-0 w-24 h-auto ">
          <img src={ins} className="w-5 mt-2" />
          <img src={fb} className="w-5 mt-2" />
        </div>
        <p className="hover:text-customRed mt-[15px] uppercase text-[20px] font-medium lg:mt-5 text-white ">{t('legal')}</p>
        <div className="mb-3 lg:mx-0 mx-auto mt-3  w-8  h-1 bg-customRed"></div>

        <a href="/cokies" className="hover:text-customRed text-[20px] font-medium text-white my-2   ">{t('cookies')}</a>
        <br/>
        <a  href="/Termes" className="hover:text-customRed text-[20px] font-medium text-white my-2   ">{t('termes')}</a>
        <br/>
        <a href="/data-protection" className="hover:text-customRed text-[20px] font-medium text-white my-2   ">{t('dataprotection')}</a>
        <br/>
        <a href="/legal-notice" className="hover:text-customRed text-[20px] font-medium text-white my-2   ">{t('legalnotice')}</a>
      </div> 
      {/* form */}
      <div className="text-center   lg:text-left ">
        <p className="text-[25px] font-semibold text-gray-200 lg:mt-5 uppercase  ">{t('ContactTitle')}</p>
        <div className="mb-3 lg:mx-0 mx-auto mt-3 w-20 h-1 bg-customRed"></div>
        
       
        <p className=" text-[20px] font-medium text-white my-2  lg:mt-8 ">{t('Phone')} : +34 123 456 789 .</p>
        <p className=" text-[20px] font-medium text-white my-2  ">{t('Email')}</p>

        <p className=" text-[20px] font-medium text-white my-2   ">{t('Address')} : <span className="text-[16px]">Avenida Ernesto Sarti, royal park 1, oficina 8 Torviscas bajo, Costa Adeje, 38660 Santa Cruz de Tenerife.</span> </p>

      </div>
    </div>
  );
};

export default Footer;
