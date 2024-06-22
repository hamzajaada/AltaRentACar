import React, { useState , useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import img from "../assets/img/hero/MERCE.jpg";
import siege from "../assets/img/Accesoires/siege.png";
import radio from "../assets/img/Accesoires/radio.png";
import station from "../assets/img/Accesoires/station.png";
import air_condition from "../assets/img/Accesoires/air-conditionne.png";
import door from "../assets/img/Accesoires/door.png";
import { useLocation } from "react-router-dom";
import { ip_server, removeLocalStorages } from "../data";
import { Navigate, useNavigate } from 'react-router-dom';
import Thanks from "./Modals/Thanks";
import { countries } from "../data";
import { useTranslation } from "react-i18next";

const Booking = () => {
  const { t } = useTranslation();
  const location = useLocation(); 
  const [list_acc, setList_Acc] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const { car, selectedAccessories, totalPrice , totalAcc } = location.state || {};
  
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    telephone: "",
    email: "",
    country: "",
    dateOfBirth: "",
    flightNumber: "",
    comments: "",
    termsAccepted: false,
  });


  useEffect(() => {
    console.log("localStorage.getItem('selectReturnOption')" + localStorage.getItem('selectReturnOption'));
      
    if (!localStorage.getItem('selectedPickLocation')){
      navigate('/');
    }
  }, []);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formDataToSend = new FormData();
    
    formDataToSend.append('name',formData.name);
    formDataToSend.append('surname',formData.surname);
    formDataToSend.append('telephone',formData.telephone);
    formDataToSend.append('email',formData.email);
    formDataToSend.append('country',formData.country);
    formDataToSend.append('date_of_birth',formData.dateOfBirth);
    formDataToSend.append('comment',formData.comments ? formData.comments : " ");
    formDataToSend.append('total_acc',totalAcc);
    formDataToSend.append('total_price',totalPrice);
    formDataToSend.append('pickupdate',localStorage.getItem('pickUpDate'));
    formDataToSend.append('hoteldropname',localStorage.getItem('hotelDropName'));
    formDataToSend.append('hotelname',localStorage.getItem('hotelName'));
    formDataToSend.append('selectedPickLocation',localStorage.getItem('selectedPickLocation'));
    if(localStorage.getItem('selectReturnOption') == 'true'){
      formDataToSend.append('selectedReturnLocation',localStorage.getItem('selectedReturnLocation'));
    }
    else{
      formDataToSend.append('selectedReturnLocation','-------');

    }
    formDataToSend.append('dropoffdate',localStorage.getItem('dropOffDate'));
    formDataToSend.append('nbr_days',localStorage.getItem('daysBetween'));
    formDataToSend.append('taille', selectedAccessories.length);
    formDataToSend.append('car_price', localStorage.getItem('car_price'));
    formDataToSend.append('language', localStorage.getItem('language'));
    // Append other fields...
  
    // Append car ID
    formDataToSend.append('car_id', car.id);
  
    // Append accessories
    selectedAccessories.forEach((accessory, index) => {
      formDataToSend.append(`accessories[${index}][acc_name]`, accessory.accessoryName);
      formDataToSend.append(`accessories[${index}][acc_price]`, accessory.accessoryPrice);
      formDataToSend.append(`accessories[${index}][acc_per_day]`, accessory.per_day);
      formDataToSend.append(`accessories[${index}][acc_quantity]`, accessory.accessoryQuantity);
      formDataToSend.append(`accessories[${index}][description]`, accessory.description);
      formDataToSend.append(`accessories[${index}][ac_id]`, accessory.ac_id);
      
      
    });
  
    // Append other fields...
  
    console.log(formDataToSend); // Verify formDataToSend before sending
    
    try {
      const response = await fetch(ip_server + '/myapp/add_book/', {
        method: 'POST',
        body: formDataToSend,
        credentials: 'include'
      });
      console.log("booking");
      const result = await response.json();
      console.log(result);
      console.log("booking");
      
      setLoading(false);
      setModalVisible(true);
      console.log("booking");
      // Handle response...
    } catch (error) {
     

    return (
      <div className="text-red-500 text-center">FATAL ERROR </div>
    );
  
    }

  
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    
    navigate("/");



  };




  return (
    <>
      <Header />
      {/* Booking info */}
      <div className=" w-full pt-28 h-auto  bg-gray-200 grid lg:grid-cols-3">
            <div className=" py-5 ">
              <p className="text-[25px] font-bold  text-center text-customRed">
              {t('pickUpDate')}
              </p>
              <p className="text-[15px] font-semibold  text-center">
              {localStorage.getItem('pickUpDate')} {localStorage.getItem('pickUpHour')}:{localStorage.getItem('pickUpMinute')}
              </p>
              <p className=" text-[15px] font-semibold  text-center">
                {localStorage.getItem('selectedPickLocation')}
              </p>
              {
                localStorage.getItem('hotelName') ?  (
                  <p className=" text-[15px] font-semibold  text-center">
                {t('hotel')}  {localStorage.getItem('hotelName')}
              </p>
                ):(
                  <></>
                )
              }
            </div>
            <div className=" py-10 ">
              <p className="text-[25px] font-bold  text-center"> {t('rr')}</p>
              <p className="text-[25px] font-bold  text-center text-customRed">
                {localStorage.getItem('daysBetween') }{t('days')}
              </p>
            </div>
            <div className=" py-5 ">
              <p className="text-[25px] font-bold  text-center text-customRed">
              {t('dropOffDate')}
              </p>
              <p className="text-[15px] font-semibold  text-center">
              {localStorage.getItem('dropOffDate')} {localStorage.getItem('dropOffHour')}:{localStorage.getItem('dropOffMinute')}
              </p>
              <p className="text-[15px] font-semibold  text-center">
                {localStorage.getItem('storedReturnLocation')}
              </p>
              {
                localStorage.getItem('hotelDropName') ?  (
                  <p className=" text-[15px] font-semibold  text-center">
               {t('hotel')}   {localStorage.getItem('hotelDropName')}
              </p>
                ):(
                  <></>
                )
              }

              </div>
              </div>

      {/* Card Booking */}
      <div className="  xl:rounded-xl  xl:my-5 xl:mx-44 ">
        <div className="rounded-xl     w-full h-auto pt-5 ">
          <p className=" mb-10  text-center text-[35px] font-bold uppercase">{t('hero.slide1.btntext')}</p>
          <div className="  ">
            <div className="  grid lg:grid-cols-2">
              {/* image car */}
              {car.image && (
                       <div className=" mx-auto  ">
                          <img
                            src={`${ip_server + car.image}`}
                            alt={car.title}
                            className=" rounded-[15px]   w-68 h-60" />
                        </div>
                      )}

              {/* info */}
              <div className="mx-5  pt-7">
                <div>
                <div className="w-full border-b-2 ">
                         <p className="text-md xl:text-xl font-bold text-[20px] uppercase ">{car.title}</p>
                     </div>
                  <p className="text-[20px] font-semibold text-gray-500 text-center lg:text-left mt-5  ">
                  {car.style}
                  </p>
                  <p className="text-sm xl:text-lg font-medium text-gray-900 text-center lg:text-left  ">
                    {t('booking')}l
                  </p>
                </div>
                {/* infos */}
                <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 pt-5 xl:pt-10">
                
               
                <div className="flex justify-start  ">
                <div className="">
                    <img src={door} width={30} height={30} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.doors} {t('doors')}
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={radio} width={30} height={30} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.radio ? 'Yes' : 'No'}
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={air_condition} width={30} height={30} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                  {car.air_condition ? 'Yes' : 'No'}
                  </span> 
                </div>




                <div className="flex justify-start">
                <div className="">
                    <img src={door} width={30} height={30} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.is_auto ? 'Automatic' : 'Manuel'} 
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={station} width={30} height={30} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.moteur} 
                  </span> 
                </div>
               
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-3  mt-10">
                <div className="flex justify-start ">
                <span className="text-xs xl:text-base font-medium ">
                  {t('category')}
                </span>
                <span className="ml-5 text-xs xl:text-base font-semibold text-red-600 ">
                  {car.category}
                </span>
                </div>

                <div className="flex justify-start ">
                <span className="text-xs xl:text-base font-medium ">
                {t('models')}
                </span>
                <span className="ml-5 text-xs xl:text-base font-semibold text-red-600 ">
                  {car.car_model}
                </span>
                </div>

            

                <div className="flex justify-start ">
                <span className="text-xs xl:text-base font-medium ">
                {t('passengers')}
                </span>
                <span className="ml-5 text-xs xl:text-base font-semibold text-red-600 ">
                  {car.passengers}
                </span>
                </div>

                


                


              </div>


              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Assurance */}
      <div className="mx-5 xl:mx-40 xl:px-5 mt-5 rounded-md  xl:rounded-xl w-[90%] xl:w-[80%] xl:py-3 h-55   ">
        
         {!(selectedAccessories.length === 0) ?
       ( <div className="w-full border-b-2 ">
          <p className="text-md xl:text-xl font-bold text-[20px] ">{t('acc')}</p>
        </div>)
        : (<></>)}
      

        
        {selectedAccessories.map((accessory, index) => (
                <div key={index} className="grid grid-cols-8 border-b-2 mt-8 items-center">
                  <div className="col-span-2">
                  <span className=" text-xs xl:text-lg font-semibold ">
                  {t(`accs.${accessory.accessoryName.toUpperCase()}`)}
                  </span>
                  </div>

                 <div className="col-span-1 flex justify-between ml-2">

                 <p className="font-semibold text-xs xl:text-lg ">
                 <span class=" text-xs xl:text-lg  font-medium uppercase tracking-wider text-black-800 bg-green-200 rounded-lg bg-opacity-50">
                              {accessory.accessoryPrice}€
                             
                       </span>
  
                    </p>

                 </div>
                    <div className="col-span-2 px-6">
                      <p>
                      <span className=" ml-4 text-xs xl:text-lg  font-medium underline">{accessory.ac_id}   {accessory.per_day == '1' ? t('unit') : ''}</span>
                      </p>
                      </div>              

                  <div className="col-span-2 flex">
                  <p>
                  <span className="text-xs xl:text-lg font-medium uppercase tracking-wider text-black-800 bg-green-200 rounded-lg bg-opacity-50">
                  {accessory.accessoryTotalPrice.toFixed(2)}€
                    </span>  
                    {((accessory.accessoryName === "BABY CAR SEAT" || accessory.accessoryName === "SPECIAL SEAT FOR NEWBORN")
                    &&
                  (localStorage.getItem('BABY_CAR_SEAT_DIFF') > 0 || localStorage.getItem('SPECIAL_SEAT_FOR_NEWBORN') > 0 )
                       ) 
                    
                    ? 
                              (<span className="font-semibold underline text-red-700 text-xs bg-white ml-5  xl:text-lg  uppercase tracking-wider rounded-lg bg-opacity-50">
                                -{
                               (accessory.accessoryName === "BABY CAR SEAT")
                                ? localStorage.getItem('BABY_CAR_SEAT_DIFF')
                              :
                              localStorage.getItem('SPECIAL_SEAT_FOR_NEWBORN')
                              }€
                              </span>)
                               : ''} 
                   </p>
                  </div>

                  <div className="col-span-1 ">
                      <p className="font-semibold text-xs ml-3 xl:text-lg ">
                  <span className=" text-customRed">{accessory.accessoryQuantity}</span>
                    </p>
                  </div>
               
                 </div>
            
              ))}

         <>
         <div className="flex justify-between border-b-2 mt-5  mx-20 xl:mx-60">
                <span className="text-md xl:text-lg  font-bold underline">
                  {t("total")} : 
                </span>
                <span className=" font-medium uppercase p1.5 tracking-wider text-black-800 bg-yellow-200 rounded-lg bg-opacity-50
                text-md xl:text-lg  font-medium underline">
                  {totalPrice.toFixed(2)} €
                </span>
            </div>
            </>

      </div>
      {/* Last section */}
      <div className=" w-full px-2 lg:px-20   xl:px-10 ">
        <div className="min-h-screen   flex items-center justify-center">
          <div className=" bg-gray-100  rounded-xl shadow-2xl lg:px-20      w-full ">
            <h2 className="text-2xl text-center font-bold mt-2 text-gray-800">
              {t('drivers')}
            </h2>
            <div className="mb-3 lg:mx-auto mx-auto mt-3   w-32 h-1 bg-customRed"></div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 xl:gap-x-3 gap-2  xl:gap-5 xl:grid-cols-2 ">
              <div>
                <label className="block font-bold text-gray-700">{t("book.name")} *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700">{t("book.surname")} *</label>
                <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700">{t("book.Telephone")} *</label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-gray-700">{t("book.Email")} *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
              <label className="block font-bold text-gray-700">{t("book.Country")} *</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="" disabled>
                      --- {t("book.Country")} ---
                    </option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
              </div>
              <div>
                <label className="block font-bold text-gray-700">{t("book.DateofBirth")} *</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              {/* <div>
                <label className="block text-gray-700">Flight Number</label>
                <input
                  type="text"
                  name="flightNumber"
                  value={formData.flightNumber}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div> */}
              <div>
                <label className="block font-bold text-gray-700">{t("book.Comments")}</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="xl:flex xl:items-center xl:justify-center xl:col-span-2">
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <label className="text-gray-700 font-bold">
                {t("book.terms")}
                </label>
              </div>
              <div className="xl:col-span-2  xl:flex xl:justify-center">
           <div className="xl:w-[30%] px-20 mb-5">
           <button
               disabled={loading}
        type="submit"
        className="w-full bg-customRed  text-xs xl:text-xs text-white py-5 px-10  font-semibold rounded-md uppercase tracking-[5px] hover:bg-red-900 transition duration-200 flex items-center justify-center"
      >
        {loading ? (
          <>
            <svg
              className="animate-spin h-5 w-5 mr-3"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C6.477 0 0 6.477 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 2.21.896 4.21 2.344 5.657l1.656-1.366z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          t('hero.slide1.btntext')
        )}
      </button>
           </div>
              </div>
            </form>
          </div>
        </div>
        {modalVisible && (
                      <Thanks
                      onCancel={handleModalCancel}
                      message={formData.email}
                    
                    />

                    )}
      </div>



     

      <Footer />
    </>
  );
};

export default Booking;
