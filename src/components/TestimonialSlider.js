import React from "react";
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { FaQuoteLeft } from "react-icons/fa";
import avatar from "../assets/img/testimonial/avatar1.png";



const TestimonialSlider = () => {
  const testimonials = [
    { avatar: avatar },
    { avatar: avatar },
    { avatar: avatar }
  ];
  const { t } = useTranslation();

  return (
    <div className="container mx-auto">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="h-auto xl:[400px]"
      >
        {testimonials.map((testimonial, index) => {
          const message = t(`testimonials.${index}.message`);
          const name = t(`testimonials.${index}.name`);
          const job = t(`testimonials.${index}.job`);

          return (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="mb-10 flex flex-col justify-center items-center text-center">
                <FaQuoteLeft className="text-7xl text-customRed mb-6" />
                <div className="text-[16px] xl:text-[16px] max-w-[874px] mb-12 font-medium">
                  {message}
                </div>
                <img
                  src={testimonial.avatar}
                  width={64}
                  height={64}
                  alt={name}
                  className="mb-4 rounded-full"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-gray-700">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
