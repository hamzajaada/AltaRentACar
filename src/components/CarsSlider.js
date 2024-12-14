import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import axios from "axios";
import { ip_server } from "../data";
import siege from "../assets/img/Accesoires/siege.png";
import moteur from "../assets/img/Accesoires/moteur.png";
import station from "../assets/img/Accesoires/station.png";
import trans from "../assets/img/Accesoires/transmission.png";
import car_keys from "../assets/img/Accesoires/car_keys.png";
import radio from "../assets/img/Accesoires/radio.png";
import door from "../assets/img/Accesoires/door.png";
import air_condition from "../assets/img/Accesoires/air-conditionne.png";

import { Link } from "react-router-dom";
import Reservationmodal from "./Modals/Reservationmodal";
import { useTranslation } from "react-i18next";

import clime from "../assets/img/Cars/clime.png";

const CarsSlider = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [reservationmodalVisible, setReservationModalVisible] = useState(false);

  const handleReservationModalCancel = () => {
    setReservationModalVisible(false);
  };

  const fetchCars = async () => {
    try {
      const response = await fetch(
        `${ip_server}/alta_appli/admin/get_cars_from_db_actives/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const carData = await response.json();
      console.log("price" + carData.price);
      console.log("carData + " + carData);
      setData(carData);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("data = ");
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div className="h-auto mx-auto mt-10   ">
      {reservationmodalVisible && (
        <Reservationmodal
          onCancel={handleReservationModalCancel}
          className="fixed inset-1"
        />
      )}

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1260: { slidesPerView: 3, spaceBetween: 32 },
        }}
      >
        {data && data.length > 0 ? (
          data.map((car, index) => (
            <SwiperSlide key={index}>
              <div
                key={car.id}
                className="  bg-slate-100 shadow-xl  grid grid-cols-1 p-2 rounded-md  hover:shadow-md transition duration-300 relative w-full"
              >
                {car.image && (
                  <div className="flex flex-col justify-start">
                    <div className="flex justify-center">
                      <img
                        src={`${ip_server + car.image}`}
                        alt={car.title}
                        className="rounded-md size-56 w-full"
                      />
                    </div>
                  </div>
                )}

                <div className=" ">
                  <div className="text-[13px] flex justify-center items-center text-slate-500 uppercase">
                    {car.style}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg uppercase font-bold text-center ">
                      {car.title}
                    </span>
                    <span className="text-sm uppercase font-semibold text-center ">
                      {car.category}
                    </span>
                  </div>
                  <div className="flex gap-x-2  justify-center items-center text-yellow-400  ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h3 className="text-customRed font-semibold text-center text-[23px] ">
                    {car.price} €
                  </h3>
                </div>

                <div
                  className={` flex flex-rows  mb-3 justify-center gap-x-4  w-full 
                         ${car.counter > 2 ? "xl:gap-x-7" : "xl:gap-x-7"}`}
                >
                  <div className="flex flex-col items-center justify-between  ">
                    <div>
                      <img src={trans} width={20} height={20} alt="" />
                    </div>
                    <div className="text-xs font-semibold uppercase w-max ">
                      {!car.is_auto ? "Manual" : "Automatic"}
                    </div>
                  </div>
                  {/* <div className='flex flex-col items-center justify-center '>
                            <div>
                              <img src={siege} width={17} height={17}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.number_passengers}</div>
                          </div> */}

                  {car.moteur ? (
                    <div className="flex flex-col items-center justify-between ">
                      <div>
                        <img src={station} width={20} height={20} alt="" />
                      </div>
                      <div className="text-xs font-semibold  uppercase w-max">
                        {car.moteur}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  {/* {
                            car.radio ?
                            (<div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={radio} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs font-semibold  uppercase w-max'>{t("radio")}</div>
                          </div>)
                            :
                            (<></>)
                          } */}

                  {
                    <div className="flex flex-col items-center justify-between  ">
                      <div>
                        <img src={siege} width={20} height={20} alt="" />
                      </div>
                      <div className="text-xs uppercase w-max">
                        {car.passengers} undefined
                      </div>
                    </div>
                  
                  }

                  <div className="flex flex-col items-center justify-between">
                    <div>
                      <img src={door} width={25} height={25} alt="" />
                    </div>
                    <div className="text-xs font-semibold  mt-2 uppercase w-max">
                      {car.number_doors}
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-between  ">
                    <div>
                      <img src={clime} width={25} height={25} alt="" />
                    </div>
                    <div className="text-xs font-semibold mt-2  uppercase w-max">
                      {car.air_condition ? t("yes") : t("no")}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col  justify-end mt-2">
                  {/* <Link to={`/car/${car.id}`} className='w-full flex justify-center mt-4'> */}
                  <button
                    onClick={() => {
                      console.log(car.price);
                      localStorage.setItem("car_price", car.price);
                      setReservationModalVisible(true);
                      //navigate('/car/'+car.id);
                    }}
                    className="w-auto px-[30%] font-semibold h-[50px] text-white uppercase tracking-[2px] text-xs xl:text-sm bg-customRed hover:bg-red-900 rounded-md"
                  >
                    {t("sd")}
                  </button>
                  {/* </Link> */}
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <p className="text-center text-lg">{t("no_available")}</p>
        )}
      </Swiper>
    </div>
  );
};

export default CarsSlider;
