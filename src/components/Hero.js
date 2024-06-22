"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { useTranslation } from "react-i18next";
import { SearchContext } from "../context/search";
import AnimatedText from "./AnimatedText";
import img1 from "../assets/img/Cars/image1.webp";
import img2 from "../assets/img/Cars/image2.webp";
import img3 from "../assets/img/Cars/image3.webp";
import img4 from "../assets/img/Cars/image4.webp";
import hero_img from "../assets/img/hero/M.jpg";
import Modal from "react-modal";
import { removeLocalStorages } from "../data";
import Reservationmodal from "./Modals/Reservationmodal";

const Hero = () => {
  const { t } = useTranslation();

  const [reservationmodalVisible, setReservationModalVisible] = useState(false); 
  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => setReservationModalVisible(false);

  useEffect(() => {
    if (localStorage.getItem('pickUpDate')) {
      removeLocalStorages();
    }    
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const title = t("hero.title");
  const title_b = t("hero.title_b");
  const slides = [
    {
      img: img1,
      text: t("hero.slide1.text"),
      btntext: t("hero.slide1.btntext"),
    },
    {
      img: img2,
      text: t("hero.slide2.text"),
      btntext: t("hero.slide2.btntext"),
    },
    {
      img: img3,
      text: t("hero.slide3.text"),
      btntext: t("hero.slide3.btntext"),
    },
    {
      img: img4,
      text: t("hero.slide4.text"),
      btntext: t("hero.slide4.btntext"),
    },
    {
      img: hero_img,
      text: t("hero.slide4.text"), // Assuming this slide shares the same text as slide 4
      btntext: t("hero.slide4.btntext"),
    },
  ];

  return (
    <section className="h-[100vh] relative" id="home">
      {reservationmodalVisible && (
        <Reservationmodal onCancel={closeModal} className="fixed inset-1" />
      )}

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[90%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            <img
              src={slide.img}
              className="w-full h-full object-cover"
              alt={`Hero Image ${index + 1}`}
            />
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 lg:p-[0px] px-[20px] pt-[20px]">
              <h1 className="text-white text-3xl text-center md:text-4xl lg:text-5xl font-bold mb-4 mt-[250px]">
                {title}{" "}
                <span className="text-customRed">{title_b}</span>
              </h1>
              <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-6">
                <AnimatedText text={slide.text} />
              </p>
              <button
                onClick={openModal}
                className="px-6 py-3 bg-customRed uppercase text-white tracking-[2px] text-[18px] rounded-lg hover:bg-red-900 transition"
              >
                {slide.btntext}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
