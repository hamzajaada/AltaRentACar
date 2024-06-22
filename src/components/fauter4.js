import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import img3 from "../assets/img/Fauter/Way.jpg";
import Reservationmodal from "./Modals/Reservationmodal";
import i18n from "../i18n";

const Faute4 = () => {
  const [reservationmodalVisible, setReservationModalVisible] = useState(false);
  const { t } = useTranslation();

  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => setReservationModalVisible(false);

  return (
    <div className="relative h-auto w-screen mt-[0%]">
      {reservationmodalVisible && (
        <Reservationmodal
          onCancel={closeModal}
          className="fixed inset-1"
        />
      )}

      {/* Image */}
      <img className="w-screen h-96 object-cover" src={img3} alt="Car rental" />
      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="p-6 rounded-md">
          <p className="bg-black bg-opacity-25 p-4 rounded-md text-white text-center text-[20px] font-bold">
            {t("AltaRentalText")}
          </p>
          <div className="mt-4 flex justify-center">
            <div className="flex gap-4">
              <button
                onClick={openModal}
                className="w-48 h-10 bg-customRed uppercase text-white tracking-[2px] text-[15px] rounded-lg hover:bg-red-900 transition"
              >
                {t("makeReservation")}
              </button>
              <button
                onClick={openModal}
                className="w-48 h-auto bg-customRed uppercase text-white tracking-[2px] text-[15px] rounded-lg hover:bg-red-900 transition"
              >
                {t("seeAllCars")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faute4;
