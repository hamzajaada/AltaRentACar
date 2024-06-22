import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";

const Reservationmodal = ({onCancel }) => {
    const hourOptions = Array.from({ length: 10 }, (_, i) => i.toString().padStart(2, '0'));
    const pickLocations = [
      'Tenerife. Aeropuerto Sur (TFS)',
      'Tenerife. Aeropuerto Norte (TFN)',
      'Tenerife. Las Américas',
      'Tenerife. Delivery to the Hotel',
    ];
    
    const returnLocations = [
      'Tenerife. Aeropuerto Sur (TFS)',
      'Tenerife. Aeropuerto Norte (TFN)',
      'Tenerife. Las Américas',
      'Tenerife. Delivery to the Hotel',  
    ];

  const [pickUpDate, setPickUpDate] = useState(new Date().toISOString().split('T')[0]);
  const [pickUpHour, setPickUpHour] = useState('00');
  const [pickUpMinute, setPickUpMinute] = useState('00');
  const [dropOffDate, setDropOffDate] = useState(() => {
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + 10);
    return nextDay.toISOString().split('T')[0];
  });
  const [dropOffHour, setDropOffHour] = useState('00');
  const [dropOffMinute, setDropOffMinute] = useState('00');
  const [selectedPickLocation, setSelectedPickLocation] = useState(pickLocations[0]);
  const [selectedReturnLocation, setSelectedReturnLocation] = useState(returnLocations[0]);
  const navigate = useNavigate();
  const [dropOffAtDifferentLocation, setDropOffAtDifferentLocation] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const [hotelName, setHotelName] = useState('');
  const [hotelDropName, setHotelDropName] = useState('');

  const validateDates = () => {
    const currentDate = new Date().toISOString().split('T')[0];
    if (pickUpDate < currentDate) {
      alert('Pick-up date cannot be in the past.' + currentDate);
      return false;
    }
    if (dropOffDate < pickUpDate) {
      alert('Drop-off date must be after pick-up date.' + dropOffDate + ' ' + pickUpDate);
      return false;
    } 
    return true;
  };

  const calculateExactDays = (pickUpDate, pickUpHour, pickUpMinute, dropOffDate, dropOffHour, dropOffMinute) => {
    const pickUp = new Date(`${pickUpDate}T${pickUpHour}:${pickUpMinute}:00`);
    const dropOff = new Date(`${dropOffDate}T${dropOffHour}:${dropOffMinute}:00`);
    const differenceInMilliseconds = dropOff - pickUp;
    
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const days = Math.floor(differenceInMilliseconds / millisecondsPerDay);
    const remainingMilliseconds = differenceInMilliseconds % millisecondsPerDay;
    
    
    const hours = Math.floor(remainingMilliseconds / (60 * 60 * 1000));
    const minutes = Math.floor((remainingMilliseconds % (60 * 60 * 1000)) / (60 * 1000));

    return { days, hours, minutes };
  };

  const handleSearch = () => {
    console.log("search"); 
    if (!validateDates()) {
      return;
    }


    const { days, hours, minutes } = calculateExactDays(pickUpDate, pickUpHour, pickUpMinute, dropOffDate, dropOffHour, dropOffMinute);
    console.log(`Exact duration: ${days} days, ${hours} hours, ${minutes} minutes`);
    localStorage.setItem('selectedPickLocation', selectedPickLocation);
    localStorage.setItem('selectedReturnLocation', !dropOffAtDifferentLocation ? selectedPickLocation : selectedReturnLocation);
    localStorage.setItem('pickUpDate', pickUpDate);  
    localStorage.setItem('pickUpHour', pickUpHour);
    localStorage.setItem('pickUpMinute', pickUpMinute);
    localStorage.setItem('dropOffDate', dropOffDate);
    localStorage.setItem('dropOffHour', dropOffHour);
    localStorage.setItem('dropOffMinute', dropOffMinute);
    localStorage.setItem('daysBetween', days);
    localStorage.setItem('selectReturnOption', dropOffAtDifferentLocation);
    localStorage.setItem('hotelDropName', hotelDropName);
    localStorage.setItem('hotelName', hotelName);
    
    console.log("search");
    navigate("/cars");
    // fetchCars(`${pickUpDate.replace(/-/g, '/')}`,pickUpHour , pickUpMinute,
    //    `${dropOffDate.replace(/-/g, '/')}`,dropOffHour,dropOffMinute);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };
  const { t } = useTranslation();
  
    return (
      <div className='fixed inset-0 z-50 flex justify-center items-center
      bg-[#000000b8]
      '>
    <div className="  p-8 rounded-lg w-full max-w-lg mx-2 z-50
    bg-white
    
">
    <h2 className="text-xl text-black  text-center xl:text-2xl font-bold mb-4">Reservation Form</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm xl:text-md font-bold mb-2"
          htmlFor="pick-location"
        >
          {t("pickLocation")}
        </label>
        <select
          id="pick-location"
          value={selectedPickLocation}
          onChange={(e) => setSelectedPickLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        >
          {pickLocations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>

        {selectedPickLocation === 'Tenerife. Delivery to the Hotel' && (
              <div className="mt-2">
                <label className="block text-gray-700 text-sm xl:text-md font-bold mb-2" htmlFor="hotel-name">
                  {t('ht')}
                </label>
                <input
                  id="hotel-name"
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={t("enter_ht")}
                />
              </div>
            )}


      </div>


      <div className="mb-4">
      <div className="flex items-center">
      <input
          type="checkbox"
          id="drop-off-at-different-location"
          checked={dropOffAtDifferentLocation}
          onChange={(e) => setDropOffAtDifferentLocation(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="drop-off-at-different-location " className='text-black'>{t("difflocation")}</label>
      </div>

            {dropOffAtDifferentLocation && (
                <div className="mb- mt-2">
                <label
                  className="block text-gray-700 text-sm xl:text-md font-bold mb-2"
                  htmlFor="pick-location"
                >
                   {t("returnLocation")}
                </label>
                <select
                  id="return-location"
                  value={selectedReturnLocation}
                  onChange={(e) => setSelectedReturnLocation(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                >
                  {returnLocations.map((location) => (
                    <option key={location} value={location}>
                      {location}
                    </option>
                  ))}
                </select>

                {selectedReturnLocation === 'Tenerife. Delivery to the Hotel' && (
              <div className="mt-2">
                <label className="block text-gray-700 text-sm xl:text-md font-bold mb-2" htmlFor="hotel-name">
                  Hotel Name
                </label>
                <input
                  id="hotel-name"
                  type="text"
                  value={hotelDropName}
                  onChange={(e) => setHotelDropName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={t('enter_ht')}
                />
              </div>
            )}


              </div>
  )}

      </div>



      <div className="mb-4 grid grid-cols-1 ">
        <div className="w-full">
        <label
          className="block text-black text-sm font-bold text-center"
          htmlFor="pick-up-date"
          
        >
           {t("pickUpDate")}
        </label>
      
        </div>
       
       
        <div className="mt-2 flex w-full justify-center px-2 xl:px-10">

        <input
          id="pick-up-date"
          type="date"
          min={today}
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setPickUpDate(e.target.value)}
          defaultValue={pickUpDate}
        />
       

        <select
            value={pickUpHour}
            onChange={(e) => setPickUpHour(e.target.value)}
            className="border rounded ml-5"
          >
            {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select
            value={pickUpMinute}
            onChange={(e) => setPickUpMinute(e.target.value)}
            className="border rounded ml-5"
          >
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
      
        
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1">
        <div className="w-full">
        <label
          className="block text-black text-sm font-bold text-center"
          htmlFor="pick-up-date"
        >
           {t("dropOffDate")}
        </label>
      
        </div>
       
       
        <div className="mt-2 flex w-full justify-center px-2 xl:px-10">

        <input
          id="pick-up-date"
          type="date"
          min={today}
          className="w-full px-3 py-2 border rounded"
          onChange={(e) => setDropOffDate(e.target.value)}
          defaultValue={dropOffDate}
        />
       

        <select
            value={dropOffHour}
            onChange={(e) => setDropOffHour(e.target.value)}
            className="border rounded ml-5"
          >
            {hourOptions.map((hour) => (
              <option key={hour} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select
            value={dropOffMinute}
            onChange={(e) => setDropOffMinute(e.target.value)}
            className="border rounded ml-5"
          >
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
      
        
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-500 text-white rounded mr-2"
        >
           {t("cancel")}
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-customRed text-white rounded"
        >
          {t("search")}
        </button>
      </div>
    </form>
  </div>
      </div>

  );
};

export default Reservationmodal;
