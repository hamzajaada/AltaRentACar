import React, { useContext, useState } from "react";
import { SearchContext } from "../context/search";
import AnimatedText from "./AnimatedText";
import hero_img from "../assets/img/amg.jpg";
import Modal from "react-modal";
import Header from './Header';
import Footer from './Footer';
import img_contact from '../assets/img/conatct.png';
import gps from '../assets/img/gps.png';
import tele from '../assets/img/tele.png';
import date from '../assets/img/date.png';
import key from '../assets/img/key.png';
import clander from '../assets/img/clandrie.png';
import hand from '../assets/img/shek.png';
import { useTranslation } from "react-i18next";
import Copyright from "./Copyright";
import Reservationmodal from "./Modals/Reservationmodal";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Gérer la soumission du formulaire ici
    };
 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const slide = {
        img: hero_img,
        text: "Contact Us Now and Book Your Ride!",
        btntext: "Contact Us",
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const { t } = useTranslation();
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
                        {t('AboutUs.Discover')} <br/>
                            <span className="text-customRed">
                            {t('AboutUs.Elite')}
                            </span>
                        </h1>
                        <p className="text-white text-center text-lg md:text-xl lg:text-2xl mb-6">
                            <AnimatedText text= {t('AboutUs.text')}/>
                        </p>
                        <button
                            onClick={openModal}
                            className="px-6 py-3 bg-customRed uppercase text-white tracking-[2px] text-[18px] rounded-lg hover:bg-red-900 transition"
                        >
                            {t('AboutUs.btntext')}
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
            <div className="w-full bg-gray-100 lg:p-16 h-auto lg:mt-[-75px] mt-[-75px] mb-5  grid gap-3 lg:grid-cols-2">
                <div className="  border-r-4 border-customRed">
                <div className="mx-5 ">
                        <p className="text-gray-500 text-[20px] text-center lg:text-left mb-5 font-semibold"> {t('AboutUs.Since')} 2019</p>
                        <p  className="text-[30px] font-bold uppercase text-center lg:text-left"> {t('AboutUs.Touch')}</p>
                        <div className="mt-5 mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
                        <p className=" text-justify font-medium text-[16px]">{t('AboutUs.write')}</p>
                    {/* links */}
                    <div className="mt-5">
                        <div className=" my-5 flex  items-center  " >
                            <img className=" w-5 h-5" src={gps}/>
                            <p className=" ml-5 text-justify font-medium text-[15px]">Avenida Ernesto Sarti, royal park 1, oficina 8 Torviscas bajo, Costa Adeje, 38660 Santa Cruz de Tenerife</p>
                        </div>
                        <div className=" my-5 flex  items-center  " >
                            <img className=" w-5 h-5" src={tele}/>
                            <p className=" ml-5 text-justify font-medium text-[15px]">+34656628232</p>
                        </div>
                       
                        <div className=" my-5 flex  items-center  " >
                            <img className=" w-5 h-5" src={date}/>
                           <div>
                           <p className=" ml-5 text-justify font-medium text-[15px]">Mon-Fri: 9:00 - 18:00</p>
                           <p className=" ml-5 text-justify font-medium text-[15px]">Sat: 9:00-14:00</p>
                           </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="b p-5 flex flex-col justify-between">
                    <h2 className="text-[30px] font-bold uppercase text-center lg:text-left mb-5"> {t('AboutUs.btntext')}</h2>
                    <div className=" mx-auto lg:mx-0 w-40 h-1 bg-customRed mb-3"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="name"
                            >
                                Name:
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="w-full px-3 py-2 border rounded"
                                placeholder={t('AboutUs.name')}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="email"
                            >
                                Email:
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="w-full px-3 py-2 border rounded"
                                placeholder={t('AboutUs.email')}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="subject"
                            >
                                Subject:
                            </label>
                            <input
                                id="subject"
                                type="text"
                                className="w-full px-3 py-2 border rounded"
                                placeholder={t('AboutUs.subj')}
                            />
                        </div>
                        <div className="mb-4">
                            <label
                                className="block text-gray-700 text-sm font-bold mb-2"
                                htmlFor="message"
                            >
                                Message:
                            </label>
                            <textarea
                                id="message"
                                className="w-full px-3 py-2 border rounded"
                                placeholder={t('AboutUs.msg')}
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            
                            <button
                                type="submit"
                                className="px-10 py-2 font-semibold bg-customRed text-white rounded"
                            >
                                  {t('send')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <Copyright/>
        </>
    );
}

export default Contact;
