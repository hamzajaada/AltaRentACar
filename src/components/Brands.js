import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { useTranslation } from "react-i18next";

const Brands = () => {
  const { t } = useTranslation();
  const logos = [
    "https://svglogos.net/wp-content/uploads/ford-8.svg",
    "https://svglogos.net/wp-content/uploads/mercedes-benz.svg",
    "https://svglogos.net/wp-content/uploads/toyota-1.svg",
    "https://svglogos.net/wp-content/uploads/volkswagen-3.svg",
    "https://svglogos.net/wp-content/uploads/audi-14.svg",
    "https://svglogos.net/wp-content/uploads/hyundai-motor-company-2.svg",
    "https://svglogos.net/wp-content/uploads/bmw-m-series-1.svg",
    "https://svglogos.net/wp-content/uploads/nissan-6.svg",
    "https://svglogos.net/wp-content/uploads/BMW-Mini.svg",
    "https://svglogos.net/wp-content/uploads/BMW-logo-logo-vector.svg",
  ];

  return (
    <section className="mt-0 lg:mt-0 flex flex-col justify-center" id="brands">
      <div className="container mx-auto mb-8">
        <p className="text-center text-[35px] uppercase font-bold mt-10">{t("partners")} </p>
        <div className="mt-5 mx-auto  w-40 h-1 bg-customRed mb-3"></div>
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="h-[200px]"
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={logo}
                className="w-[100px] h-[100px]"
                alt={`Logo ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
