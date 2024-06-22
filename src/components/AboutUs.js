import React, { useContext, useState } from "react";
import { SearchContext } from "../context/search";
import AnimatedText from "./AnimatedText";
import hero_img from "../assets/img/mus.jpg";
import Modal from "react-modal";
import Header from "./Header";
import Footer from "./Footer";
import img_contact from "../assets/img/conatct.png";
import car from "../assets/img/luxcar.png";
import key from "../assets/img/ecocar.png";
import clander from "../assets/img/assitance.png";
import hand from "../assets/img/rente.png";
import hotel from "../assets/img/hotel.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Copyright from "./Copyright";
import Reservationmodal from "./Modals/Reservationmodal";

const AboutUs = () => {
  const { searchActive } = useContext(SearchContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeContent, setActiveContent] = useState("whoAreYou");
  const navigate = useNavigate();
  const slide = {
    img: hero_img,
    text: "Contact Us Now and Book Your Ride!",
    btntext: "Contact Us",
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const { t } = useTranslation();

  const renderContent = () => {
    switch (activeContent) {
      case "whoAreYou":
        return <div>{t("AboutUs.whoAreYou")}</div>;
      case "ourMission":
        return <div>{t("AboutUs.ourMission")}</div>;
      case "ourVision":
        return <div>{t("AboutUs.ourVision")}</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      {/* Section 1 */}
      <section className="h-[100vh] relative" id="home">
        <div className="w-full h-[90%] relative">
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt="Hero Image"
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 lg:p-[0px] px-[20px] pt-[20px]">
            <h1 className="text-white text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-4 mt-[250px]">
              {t("AboutUs.Discover")}
              <br />
              <span className="text-customRed">{t("AboutUs.Alta")}</span>
            </h1>
            <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-6">
              <AnimatedText text={t("AboutUs.text")} />
            </p>
            <button
              onClick={openModal}
              className="px-6 py-3 bg-customRed uppercase text-white tracking-[2px] text-[18px] rounded-lg hover:bg-red-900 transition"
            >
              {t("AboutUs.btntext")}
            </button>
          </div>
        </div>

        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="fixed inset-0 z-50 flex justify-center items-center"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 z-40"
          contentLabel="Reservation Form"
        >
          <Reservationmodal onCancel={closeModal} />
        </Modal>
      </section>
      {/* Section 2 */}
      <div className="grid lg:pl-10 lg:mt-[-35px] mt-[-45px] lg:grid-cols-2 h-auto w-full ">
        <div className="">
          <div className="mx-5 ">
            <p className="text-gray-500 text-[20px] text-center lg:text-left mb-5 font-semibold">
              {t("AboutUs.Since")} 2019
            </p>
            <p className="text-[30px] font-bold uppercase text-center lg:text-left">
              {t("AboutUs.welcome")}
            </p>
            <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
          </div>
          <div>
            <div className="">
              <div className="flex">
                <button
                  className={` ml-5 text-black text-[20px] text-center lg:text-left mb-5 font-semibold ${
                    activeContent === "whoAreYou"
                      ? "border-b-4 border-customRed text-customRed"
                      : ""
                  }`}
                  onClick={() => setActiveContent("whoAreYou")}
                >
                  {t("AboutUs.who")}
                </button>
                <button
                  className={` ml-5 text-black text-[20px] text-center lg:text-left mb-5 font-semibold ${
                    activeContent === "ourMission"
                      ? "border-b-4 border-customRed text-customRed"
                      : ""
                  }`}
                  onClick={() => setActiveContent("ourMission")}
                >
                  {t("AboutUs.mission")}
                </button>
                <button
                  className={` ml-5 text-black text-[20px] text-center lg:text-left mb-5 font-semibold ${
                    activeContent === "ourVision"
                      ? "border-b-4 border-customRed text-customRed"
                      : ""
                  }`}
                  onClick={() => setActiveContent("ourVision")}
                >
                  {t("AboutUs.vision")}
                </button>
              </div>

              {/* Div of content */}
              <div className="mx-5 mb-5 lg:mb-0 text-justify font-medium text-[16px]">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <img src={img_contact} alt="Contact" />
        </div>
      </div>
      {/* Section 3 */}

      <div className="grid lg:grid-cols-2 mb-16 h-auto w-full gap-4 px-10 mt-2 lg:px-60">
        <div className="w-auto h-auto border pl-3 hover:border-customRed lg:flex lg:items-center rounded-xl ">
          <img
            className="mx-auto lg:mx-0 rounded-xl w-24 h-24"
            src={car}
            alt=""
          />
          <div className="py-3 px-5">
            <p className="text-gray-500 text-[20px] text-center lg:text-left font-semibold">
              {t("AboutUs.vehi")}
            </p>
            <p className="font-medium text-[16px] text-center lg:text-left">
              {t("AboutUs.exp")}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto border pl-3 hover:border-customRed lg:flex lg:items-center rounded-xl ">
          <img className="mx-auto lg:mx-0 rounded-xl w-24 h-24" src={key} alt="" />
          <div className="py-3 px-5">
            <p className="text-gray-500 text-[20px] text-center lg:text-left font-semibold">
              {t("AboutUs.echo")}
            </p>
            <p className="font-medium text-[16px] text-center lg:text-left">
              {t("AboutUs.effi")}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto border pl-3 hover:border-customRed lg:flex lg:items-center rounded-xl ">
          <img className="mx-auto lg:mx-0 rounded-xl w-24 h-24" src={hand} />
          <div className="py-3 px-5">
            <p className="text-gray-500 text-[20px] text-center lg:text-left font-semibold">
              Flexible Rentals {t("AboutUs.effi")}
            </p>
            <p className="font-medium text-[16px] text-center lg:text-left ">
              {t("AboutUs.Whether")}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto border pl-3 hover:border-customRed lg:flex lg:items-center rounded-xl ">
          <img className="mx-auto lg:mx-0 rounded-xl w-24 h-24" src={clander} />
          <div className="py-3 px-5">
            <p className="text-gray-500 text-[20px] text-center lg:text-left font-semibold">
              24/7 {t("AboutUs.asst")}
            </p>
            <p className="font-medium text-[16px] text-center lg:text-left">
              {t("AboutUs.Enjoy")}
            </p>
          </div>
        </div>
        <div className="w-auto h-auto border pl-3 hover:border-customRed lg:flex lg:items-center rounded-xl ">
          <img className="mx-auto lg:mx-0 rounded-xl w-24 h-24" src={hotel} />
          <div className="py-3 px-5">
            <p className="text-gray-500 text-[20px] text-center lg:text-left font-semibold">
              {t("AboutUs.acco")}
            </p>
            <p className="font-medium text-[16px] text-center lg:text-left">
              {t("AboutUs.book")}
            </p>
          </div>
        </div>
      </div>

      <Footer />
      <Copyright />
    </>
  );
};

export default AboutUs;
