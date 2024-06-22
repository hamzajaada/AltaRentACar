"use client";
import { useContext, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";
import logo from "../assets/img/header/logofinal.png";
import { BiMenuAltRight, BiX } from "react-icons/bi";
import { SearchContext } from "../context/search";
import SearchMobile from "./srch/SearchMobile";
import Reservationmodal from "./Modals/Reservationmodal";
import { data_header } from "../data";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import ukFlag from '../assets/img/Accesoires/ukFlagpng.png'; // adjust the path as necessary
import esFlag from '../assets/img/Accesoires/esFlag.png';
import rusFlag from '../assets/img/Accesoires/russie.png';

const Header = () => {
  const [active,setActive] = useState(false);
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language',lng);
    setActive(!active);
  };


  const dataHeader = {
    'home': t('header.home'),
    'cars': t('header.car'),
    'about': t('header.about'),
    'contact': t('header.contact')
  };

  const { setSearchActive } = useContext(SearchContext);
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const desktopMode = useMediaQuery({
    query: "(min-width: 1300px)",
  });

  useEffect(() => {
    if(localStorage.getItem('language')){
      changeLanguage(localStorage.getItem('language'));
    }
    else{
      localStorage.setItem('language',"en");
    }
  });


  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 450) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener("scroll", handelScroll);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  });
  console.log(header);
  const [reservationmodalVisible, setReservationModalVisible] = useState(false); 
  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => setReservationModalVisible(false);

  return (
    <header
      className={`${
        header ? "bg-white shadow-md py-2" : "bg-white shadow-none py-4"
      }
      fixed w-full max-w-[100%] mx-auto z-20 transition-all duration-300`}
    >
      {reservationmodalVisible && (
  <Reservationmodal
    onCancel={closeModal}
    className="fixed inset-1"

      />
    )}

      <div
        className="  
        flex flex-col xl:flex-row lg:items-center lg:justify-between xl:items-center xl:justify-between "
      >
        {/* Image */}
        <div className="   lg:ml-14 flex items-center justify-between px-4">
          <a
            href="/"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            <img width={150} height={64} src={logo} alt="Logo" />
          </a>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <BiX className="text-4xl" />
            ) : (
              <BiMenuAltRight className="text-4xl" />
            )}
          </div>
        </div>
        {/* nav */}
        <nav
          className={`${
            nav ? "max-h-max  py-8 px-4 xl:py-0 xl:px-0" : "max-h-0 xl:max-h-max"
          }
                      flex flex-col gap-y-6 overflow-hidden font-bold
                      xl:font-medium xl:flex-row xl:m-max xl:gap-x-8 xl:h-max xl:bg-transparent
                      xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase
                      text-sm xl:text-[15px] xl:normal-case`}
        >
          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            {dataHeader.home}
          </a>


          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/list_cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            {dataHeader.cars}
          </a>


          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/About"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
           {dataHeader.about}
          </a>

          <div className="lg:hidden ">
                <div className="grid grid-cols-1 gap-3">

                <div>
                      <button
                              onClick={() => changeLanguage('en')}
                            className="text-sm "
                            >
                              <img src={ukFlag} alt="English" className="h-8 w-8 xl:h-6 xl:w-6"/>
                            
                            </button>
                </div>


                    <div className="">
                    <button
                        onClick={() => changeLanguage('es')}
                        className="text-sm"
                      >
                        <img src={esFlag} alt="Spanish" className="h-8 w-8 xl:h-6 xl:w-6"/>
                      
                      </button>
                    </div>

                    <div className="">
                    <button
                        onClick={() => changeLanguage('rus')}
                        className="text-sm"
                      >
                        <img src={rusFlag} alt="russie" className="h-8 w-8 xl:h-5 xl:w-6"/>
                      
                      </button>
                    </div>


                </div>
          </div>


          {/* <Link
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why us
          </Link> */}

          {/* <Link
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            to="testimonials"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link> */}

          <a
            className="cursor-pointer text-[17px] font-semibold  HoverColor"
            href="/Contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
             {dataHeader.contact}
          </a>
         
         
            <button 
           onClick={openModal}
           className="xl:hidden px-3 mx-20 py-3 bg-customRed uppercase text-white tracking-[2px] text-[14px] rounded-lg hover:bg-red-900 transition">
            {t("header.h_title")}
          </button>
         

          <SearchMobile />
        </nav>
        {/* button */}
        <div className="flex flex-start items-center">
         
         <div className="hidden   lg:block ">
         <button 
           onClick={openModal}
           className="px-3 py-3 bg-customRed uppercase text-white tracking-[2px] text-[14px] rounded-lg hover:bg-red-900 transition">
            {t("header.h_title")}
          </button>
         </div>

          <div className="hidden   lg:block ">
                <div className="grid grid-cols-1 xl:grid-cols-3 px-2 pt-1">

<div>
<button
        onClick={() => changeLanguage('en')}
      className="text-sm "
      >
        <img src={ukFlag} alt="English" className="h-8 w-8 xl:h-6 xl:w-6"/>
      
      </button>
</div>


    <div className="xl:ml-2">
    <button
        onClick={() => changeLanguage('es')}
        className="text-sm"
      >
        <img src={esFlag} alt="Spanish" className="h-8 w-8 xl:h-6 xl:w-6"/>
      
      </button>
    </div>

    <div className="xl:ml-4">
    <button
        onClick={() => changeLanguage('rus')}
        className="text-sm"
      >
        <img src={rusFlag} alt="russie" className="h-8 w-8 xl:h-5 xl:w-6"/>
      
      </button>
    </div>


                </div>
          </div>

         
        </div>

        

  
      </div>
     
    </header>
  );
};

export default Header;
