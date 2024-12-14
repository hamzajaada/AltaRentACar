  import React, { useEffect, useState } from 'react';
  import { Link, Navigate, useNavigate } from 'react-router-dom';
  import Header from './Header';
  import Footer from './Footer';
  import { ip_server } from '../data';
  import { FaStar } from 'react-icons/fa';
  import siege from '../assets/img/Accesoires/siege.png';
  import moteur from '../assets/img/Accesoires/moteur.png';
  import station from '../assets/img/Accesoires/station.png';
  import trans from '../assets/img/Accesoires/transmission.png';
  import door from '../assets/img/Accesoires/door.png';
  import air_condition from '../assets/img/Accesoires/air-conditionne.png';
  import radio from '../assets/img/Accesoires/radio.png';
  import car_keys from '../assets/img/Accesoires/car_keys.png';
import { useTranslation } from 'react-i18next';

  const categories = ['Mini', 'Economic', 'Standard', 'SUVs', 'People Carriers', 'Luxury'];
  const pickLocations = [
    'Tenerife. Aeropuerto Sur (TFS)',
    'Tenerife. Aeropuerto Norte (TFN)',
    'Tenerife. Las Américas',
    'Tenerife. Delivery to the Hotel',
  ];

  const carModels = ['AUDI', 'MERCEDES', 'BMW', 'PORSCHE', 'VW', 'FERRARI', 'LAMBORGHINI', 'LEXUS', 'FORD MUSTANG', 'CHEVROLET CAMARO', 'TOYOTA', 'RENAULT', 'FIAT', 'SMART', 'PEUGEOT', 'MINI COOPER', 'SPECIAL OFFERS', 'TESLA', 'ŠKODA', 'BENTLEY', 'RANGE ROVER', 'HYUNDAI'];
  const numberPassengersOptions = [ 4, 5, 7, 8, 9];
  const numberDoorsOptions = [ 3,5];
  const economicOptions = ['Yes', 'No'];
  // const manuelOptions =  ['Yes', 'No'];
  const carTypeOptions = ['DIESEL', 'electric', 'gasoline'];
  
  function CarsList() {
    const { t } = useTranslation();
    const returnLocations = [
      'Tenerife. Aeropuerto Sur (TFS)',  
      'Tenerife. Aeropuerto Norte (TFN)',
      'Tenerife. Las Américas',
      'Tenerife. Delivery to the Hotel',
    ];
    const [daysBetween, setDaysBetween] = useState(localStorage.getItem('daysBetween'));
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [pickUpDate, setPickUpDate] = useState(localStorage.getItem('pickUpDate'));
    const [pickUpHour, setPickUpHour] = useState(localStorage.getItem('pickUpHour'));
    const [pickUpMinute, setPickUpMinute] = useState(localStorage.getItem('pickUpMinute'));
    const [dropOffDate, setDropOffDate] = useState(localStorage.getItem('dropOffDate'));
    const [dropOffHour, setDropOffHour] = useState(localStorage.getItem('dropOffHour'));
    const [dropOffMinute, setDropOffMinute] = useState(localStorage.getItem('dropOffMinute'));
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [selectedCarModels, setSelectedCarModels] = useState([]);
    const [selectedNumberPassengers, setSelectedNumberPassengers] = useState([]);
    const [selectedNumberDoors, setSelectedNumberDoors] = useState([]);
    const [selectedEconomic, setSelectedEconomic] = useState([]);
    const [selectedManuel, setSelectedManuel] = useState([]);
    const [selectedCarTypes, setSelectedCarTypes] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [clickSearch, setClickSearch] = useState(false);
    const [showCars, setShowCars] = useState(false);
    const hourOptions = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
    const storedPickLocation = localStorage.getItem('selectedPickLocation');
    const storedReturnLocation = localStorage.getItem('selectedReturnLocation');
    const storedPickUpDate = localStorage.getItem('pickUpDate');
    const storedPickUpHour = localStorage.getItem('pickUpHour');
    const storedPickUpMinute = localStorage.getItem('pickUpMinute');
    const storedDropOffDate = localStorage.getItem('dropOffDate');
    const storedDropOffHour = localStorage.getItem('dropOffHour');
    const storedDropOffMinute = localStorage.getItem('dropOffMinute');
    const [selectedPickLocation, setSelectedPickLocation] = useState(storedPickLocation);
    const [selectedReturnLocation, setSelectedReturnLocation] = useState(storedReturnLocation);
    const [dropOffAtDifferentLocation, setDropOffAtDifferentLocation] = useState((localStorage.getItem('selectReturnOption') == 'true') ? true : false);
    const [hotelName, setHotelName] = useState(localStorage.getItem('hotelName'));
    const [hotelDropName, setHotelDropName] = useState(localStorage.getItem('hotelDropName'));
    const [isMobile, setIsMobile] = useState(window.innerWidth < 500);
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const toggleFormVisibility = () => {
      setIsFormVisible(!isFormVisible);
    };

    const navigate = useNavigate();
    

    const fetchCars = async (start_date,start_hour,start_minute,end_date,end_hour,end_minute) => {
      try {
        const formDataToSend = new FormData();
        formDataToSend.append('start_date', start_date);
        formDataToSend.append('end_date', end_date);
        formDataToSend.append('start_hour', start_hour);
        formDataToSend.append('start_minute', start_minute);
        formDataToSend.append('end_hour', end_hour);
        formDataToSend.append('end_minute', end_minute);
        formDataToSend.append('nbr_jour', localStorage.getItem('daysBetween'));
        console.log("fetch" + end_date);
        
        const response = await fetch(`${ip_server}/alta_appli/get_all_cars/`,{
          method: 'POST',
          body: formDataToSend,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const carData = await response.json();
        setCars(carData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);

        
      }
    };


    // useEffect(() => {
    //   console.log("btn "+btnwidth);
    //   handleResize();
      
    // }, []);


    useEffect(() => {
      console.log("dropOffAtDifferentLocation "+dropOffAtDifferentLocation);
      if (localStorage.getItem('selectedPickLocation')){
        fetchCars(`${storedPickUpDate.replace(/-/g, '/')}`,storedPickUpHour , storedPickUpMinute,
        `${storedDropOffDate.replace(/-/g, '/')}`,storedDropOffHour,storedDropOffMinute);
        setShowFilters(true);
        setClickSearch(true);
        if (!isMobile){
          toggleFormVisibility();
        }
        setShowCars(true);
        handleResize();
      }
      else{
        navigate('/');
      }
    }, []);




    const validateDates = () => {
      const currentDate = new Date().toISOString().split('T')[0];
      if (pickUpDate < currentDate) {
        alert('Pick-up date cannot be in the past.' + currentDate);
        return false;
      }
      if (dropOffDate <= pickUpDate) {
        alert('Drop-off date must be after pick-up date.');
        return false;
      }
      return true;
    };




    const handleFilterClick = (setter, value) => {
      console.log('filter' + value);
      setter(prev =>
        prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
      );
    };
    
    const formatDateTime = (date, time) => {
      return `${date.replace(/-/g, '/')} ${time}`;
    };


    const isFilterSelected = (filterArray, value) => filterArray.includes(value);
    

    const filteredCars = cars.filter((car) => {
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(car.category);
      const matchesCarModel = selectedCarModels.length === 0 || selectedCarModels.includes(car.car_model);
      const matchesNumberPassengers = selectedNumberPassengers.length === 0 || selectedNumberPassengers.includes(car.passengers);
      const matchesNumberDoors = selectedNumberDoors.length === 0 || selectedNumberDoors.includes(car.number_doors);
      //const matchesManuel = selectedManuel.length === 0 || selectedManuel.includes((car.is_auto ? 'Yes' : 'No'));
      const matchesCarType = selectedCarTypes.length === 0 || selectedCarTypes.includes(car.moteur);

      return (
        matchesCategory &&
        matchesCarModel &&
        matchesNumberPassengers &&
        matchesNumberDoors &&
        matchesCarType
      );
    });

    if (loading) {
      return (
        <div className="fixed inset-0 flex items-center justify-center">
          <div role="status">
            <svg aria-hidden="true" className="inline w-8 h-8 text-red-300 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
    
    if (error) {
      return
      (   <div className="fixed inset-0 flex items-center justify-center">
          <div role="status">
          <div className="text-red-500 text-center">Error: {error.message}</div>
          </div>
        </div>
        );
    
    }

    const handleModify = () => {
      // setShowFilters(!showFilters);
      setIsMobile(!isMobile);
      console.log("mdofi " + isMobile);

    };
    const calculateDaysBetween = (startDate, endDate) => {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const difference = end - start;
      return Math.ceil(difference / (1000 * 60 * 60 * 24));
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

      if (!validateDates()) {
        return;
      }
      const { days, hours, minutes } = calculateExactDays(pickUpDate, pickUpHour, pickUpMinute, dropOffDate, dropOffHour, dropOffMinute);
      console.log(`Exact duration: ${days} days, ${hours} hours, ${minutes} minutes`);
      localStorage.setItem('selectedPickLocation', selectedPickLocation);
      localStorage.setItem('pickUpDate', pickUpDate);
      localStorage.setItem('pickUpHour', pickUpHour);
      localStorage.setItem('pickUpMinute', pickUpMinute);
      localStorage.setItem('dropOffDate', dropOffDate);
      localStorage.setItem('dropOffHour', dropOffHour);
      localStorage.setItem('dropOffMinute', dropOffMinute);
      localStorage.setItem('daysBetween', days);
      localStorage.setItem('selectReturnOption', dropOffAtDifferentLocation);
      localStorage.setItem('selectedReturnLocation', !dropOffAtDifferentLocation ? selectedPickLocation : selectedReturnLocation);
      localStorage.setItem('hotelDropName', selectedReturnLocation === 'Tenerife. Delivery to the Hotel' ? hotelDropName:'');
      localStorage.setItem('hotelName', selectedPickLocation === 'Tenerife. Delivery to the Hotel' ? hotelName:'');

      setShowFilters(true);
      setClickSearch(true);
      setShowCars(true);

      console.log("search");
      window.location.reload()
      // fetchCars(`${pickUpDate.replace(/-/g, '/')}`,pickUpHour , pickUpMinute,
      //    `${dropOffDate.replace(/-/g, '/')}`,dropOffHour,dropOffMinute);
    };

    return (
      <>
        <Header />
        <div className="max-w-8xl px-2 mx-auto  bg-white shadow-md rounded-md">
        
        {
          showCars ? (
            <div className=" w-full pt-28 h-auto  bg-gray-200 grid lg:grid-cols-3">
            <div className=" py-5 ">
              <p className="text-[25px] font-bold  text-center text-customRed">
              {t('pickUpDate')}
              </p>
              <p className="text-[15px] font-semibold  text-center">
              {pickUpDate} {pickUpHour}:{pickUpMinute}
              </p>
              <p className=" text-[15px] font-semibold  text-center">
                {selectedPickLocation}
              </p>
              {
                localStorage.getItem('hotelName') ?  (
                  <p className=" text-[15px] font-semibold  text-center">
               Hotel:  {localStorage.getItem('hotelName')}
              </p>
                ):(
                  <></>
                )
              }
            </div>
            <div className=" py-10 ">
              <p className="text-[25px] font-bold  text-center"> {t('rr')}</p>
              <p className="text-[25px] font-bold  text-center text-customRed">
                {daysBetween} {t('days')}
              </p>
            </div>
            <div className=" py-5 ">
              <p className="text-[25px] font-bold  text-center text-customRed">
              {t('dropOffDate')}
              </p>
              <p className="text-[15px] font-semibold  text-center">
              {dropOffDate}  {dropOffHour}:{dropOffMinute}
              </p>
              <p className="text-[15px] font-semibold  text-center">
                {storedReturnLocation}
              </p>
              {
                localStorage.getItem('hotelDropName') ?  (
                  <p className=" text-[15px] font-semibold  text-center">
               {t('hotel')} :  {localStorage.getItem('hotelDropName')}
              </p>
                ):(
                  <></>
                )
              }

              </div>
              </div>
            

          ) : (<></>)
        }
      

      {
      (showCars && clickSearch)?
      (<div className="w-full block xl:hidden flex justify-center mt-4">
              <button
                type="button"
                onClick={toggleFormVisibility}
                className={
                `${
                  !showCars
                    ? ''
                    : 'w-auto px-[30%] '}
                  px-4 py-2 h-[50px] text-white uppercase tracking-[2px] text-sm bg-customRed hover:bg-red-900 rounded-md
                
                    `}

        
              >
              {t('modif')}
                
              </button>
            </div>) : (<></>)}


          <div className=
          {
            `${
              !showCars
                ? 'grid grid-cols-1 lg:grid-cols-1'
                : 'grid grid-cols-1 lg:grid-cols-12 '}
                `}
                
          >
            {
              (isFormVisible) ? (
                <form className="col-span-3 mb-6 px-1 h-max bg-gray-100 rounded-sm ">
            {/* <div className='w-full flex align-center justify-center mt-5'>
              <h2 className='text-base text-center font-bold'>
                Advanced Search 
              </h2>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 bg-black-300 mt-10  lx:px-50 ">
              <div className="grid grid-cols-1  gap-4 px-10 lx:px-40">
              <div className= {`${showCars ? '': ' lg:px-60'} flex flex-col justify-between`}>

                  <label className="block text-lg uppercase font-bold w-full text-center ">{t('pickLocation')}</label>
                <div className='flex justify-center'>
                <select
                    value={selectedPickLocation}
                    onChange={(e) => setSelectedPickLocation(e.target.value)}
                    className=
                    {`${showCars ? 'w-full': 'w-full xl:w-1/2'}  p-2 border rounded`}

                  >
                    {pickLocations.map(location => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>



                </div>
                {selectedPickLocation === 'Tenerife. Delivery to the Hotel' && (
              <div className="mt-2">
                <label className="block text-gray-700 text-sm xl:text-md font-bold mb-2" htmlFor="hotel-name">
                {t('hotel')}
                </label>
                <input
                  id="hotel-name"
                  type="text"
                  value={hotelName}
                  onChange={(e) => setHotelName(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                  placeholder={t('enter_ht')}
                />
              </div>
            )}
                
                </div>
                <div className="flex items-center">
          <input
              type="checkbox"
              id="drop-off-at-different-location"
              checked={dropOffAtDifferentLocation}
              onChange={(e) => setDropOffAtDifferentLocation(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="drop-off-at-different-location">{t('difflocation')}</label>
          </div>

          {dropOffAtDifferentLocation && (
                    <div className="mb-3">
                    <label
                      className="block text-gray-700 text-sm xl:text-md font-bold mb-2"
                      htmlFor="pick-location"
                    >
                      {t('returnLocation')}
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
                {t('hotel')}
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



                <div className= {`${showCars ? '': ' lg:px-60'} flex flex-col justify-between`}>
                  <label className=" block text-xs xl:text-sm  uppercase font-bold w-full text-center">{t('pickUpDate')}</label>
                  <div className=" flex align-center justify-center mt-3">

                  
                                  <input
                                    type="date"
                                    value={pickUpDate}
                                    onChange={(e) => setPickUpDate(e.target.value)}
                                    className="border rounded "
                                    
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





                <div className= {`${showCars ? '': ' lg:px-60'} flex flex-col justify-between`}>
                  <label className=" block text-xs xl:text-sm  uppercase font-bold w-full text-center">{t('dropOffDate')}</label>
                  <div className="flex align-center justify-center mt-3">
                  <input
                    type="date"
                    value={dropOffDate}
                    onChange={(e) => setDropOffDate(e.target.value)}
                    className="border rounded"
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
              className=" border rounded ml-5"
            >
              <option value="00">00</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="45">45</option>
            </select>
            </div>
                </div>


            

                <div className="w-full flex justify-center mt-4">
              <button
                type="button"
                onClick={handleSearch}
                className={
                `${
                  !showCars
                    ? ''
                    : 'w-auto px-[30%] '}
                  px-4 py-2 h-[50px] text-white uppercase tracking-[2px] text-sm bg-customRed hover:bg-red-900 rounded-md
                
                    `}

        
              >
                {
                  showFilters ? t('show') : t('search')
                }
              
                
              </button>
            </div>



              </div>
              



              {showFilters && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mt-2">
                    <div>
                      <label className=" block text-xs xl:text-sm  uppercase font-bold">{t('category')}</label>
                      <div className="grid grid-cols-4 xl:grid-cols-5 gap-1 mt-2">
                        {categories.map(category => (
                          <a
                            key={category}
                            onClick={() => handleFilterClick(setSelectedCategories, category)}
                            className={`cursor-pointer text-sm   p-2 text-center border rounded align-middle ${isFilterSelected(selectedCategories, category) ? 'bg-customRed text-white' : 'bg-white text-black'}`}
                          >
                            {category}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-2 mt-2">
                  {/* <div className=''>
                    <label className=" block text-xs xl:text-sm  uppercase font-bold">Manual:</label>
                    <select
                      className="cursor-pointer text-sm  w-15 h-10  text-center border rounded  mt-2"
                      value={selectedManuel}
                      onChange={(e) => setSelectedManuel(e.target.value)}
                    >
                      {manuelOptions.map(option => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div> */}

                    <div className='w-max xl:block'>
                      <label className="block text-xs xl:text-sm uppercase font-bold">{t('about.carTypes')}</label>

                      
                      <div className="grid grid-cols-2  gap-1 xl:gap-2 mt-2">
                        {carTypeOptions.map(type => (
                          <a
                            key={type}
                            onClick={() => handleFilterClick(setSelectedCarTypes, type)}
                            className={`cursor-pointer text-sm  xl:block p-2 text-center border rounded ${isFilterSelected(selectedCarTypes, type) ? 'bg-customRed text-white' : 'bg-white text-black'}`}
                          >
                            {type}
                          </a>
                        ))}
                      </div>
                    </div>


                    <div className='ml-6'>
                      <label className=" block text-xs xl:text-sm  uppercase font-bold">{t('doors')}</label>
                      <div className="grid grid-cols-2 gap-x-2 mt-2">
                        {numberDoorsOptions.map(num => (
                          <a
                            key={num}
                            onClick={() => handleFilterClick(setSelectedNumberDoors, num)}
                            className={`cursor-pointer text-sm  w-10 p-2 text-center border rounded ${isFilterSelected(selectedNumberDoors, num) ? 'bg-customRed text-white' : 'bg-white text-black'}`}
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className=" block text-xs xl:text-sm  uppercase font-bold">{t('passengers')}</label>
                      <div className="grid grid-cols-4 xl:grid-cols-2  gap-2 mt-2">
                        {numberPassengersOptions.map(num => (
                          <a
                            key={num}
                            onClick={() => handleFilterClick(setSelectedNumberPassengers, num)}
                            className={`cursor-pointer text-sm  w-10 p-2 text-center border rounded ${isFilterSelected(selectedNumberPassengers, num) ? 'bg-customRed text-white' : 'bg-white text-black'}`}
                          >
                            {num}
                          </a>
                        ))}
                      </div>
                    </div>



                  </div>




                  <div className="w-full grid grid-cols-1 gap-4 mt-4">
                    <div className="w-full">
                      <label className=" block text-xs xl:text-sm  uppercase font-bold">{t('models')}</label>
                      <div className="w-full grid grid-cols-3 xl:grid-cols-4 gap-2 xl:gap-2 mt-2">
                      {carModels.map(carModel => (
                          <a
                            key={carModel}
                            onClick={() => handleFilterClick(setSelectedCarModels, carModel)}
                            className={`cursor-pointer text-xs w-30 p-2  text-center border rounded align-middle ${isFilterSelected(selectedCarModels, carModel) ? 'bg-customRed text-white' : 'bg-white text-black'}`}
                          >
                            {carModel}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            

          
          </form>)
              : (<></>)
      
            }
        
          {showCars && (
            <>
              {filteredCars.length === 0 ? (
                <p className="text-gray-700 text-center">{t('nocars')}</p>
              ) : (
                <div className="col-span-9 ">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredCars.map((car) => (
                      <div key={car.id} className="bg-gray-100 grid grid-cols-1 p-2 rounded-md shadow-sm hover:shadow-md transition duration-300 relative w-full">
                        {car.image && (
                          <div className='flex flex-col justify-start'>
                            <div className='flex justify-center'>
                            <img
                              src={`${ip_server + car.image}`}
                              alt={car.title}
                              className="rounded-md size-56 w-full"
                            />
                            </div>
                          </div>
                        )}

                    <div className="">
                      <div className="text-[13px] flex justify-center items-center text-slate-500 uppercase">
                        {car.style}
                      </div>
                      <div className='flex flex-col'>
                      <span className="text-lg uppercase font-bold text-center ">{car.title}</span>
                      <span className="text-sm uppercase font-semibold text-center ">{car.category}</span>
                      </div>
                      <div className="flex gap-x-2  justify-center items-center text-yellow-400  ">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <h3 className="text-customRed font-semibold text-center text-[23px] ">
                        {car.price.toFixed(2)} €
                      </h3>
                    </div>



                        <div className=
                        {` flex flex-rows justify-center   w-full 
                         ${car.counter > 3 ? 'gap-x-2' : 'gap-x-5'}`} 
                        >
                          <div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={trans} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{!car.is_auto ? 'Manual' : 'Automatic'}</div>
                          </div>
                          {/* <div className='flex flex-col items-center justify-center '>
                            <div>
                              <img src={siege} width={17} height={17}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.number_passengers}</div>
                          </div> */}
                          
                          {
                            car.moteur ?
                            (<div className='flex flex-col items-center justify-between '>
                            <div>
                              <img src={station} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.moteur}</div>
                          </div>)
                            :
                            (<></>)
                          }
                          

                    
  {
                            car.radio ?
                            (<div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={radio} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>radio</div>
                          </div>)
                            :
                            (<></>)
                          }

  {
                            car.passengers ?
                            (<div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={siege} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.passengers}</div>
                          </div>)
                            :
                            (<></>)
                          }


                          <div className='flex flex-col items-center justify-between'>
                            <div>
                              <img src={door} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.number_doors}</div>
                          </div>

                          <div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={air_condition} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.air_condition ? 'Yes' : 'No'}</div>
                          </div>
                        </div>


                        <div className='flex flex-col  justify-end'>
                        
                        {/* <Link to={`/car/${car.id}`} className='w-full flex justify-center mt-4'> */}
                          <button 
                          onClick={()=>{
                            console.log(car.price.toFixed(2));
                            localStorage.setItem('car_price' , car.price.toFixed(2));
                            navigate('/car/'+car.id);
                          }}
                          className='w-auto px-[30%] h-[50px] mt-2 text-white uppercase tracking-[2px] text-xs xl:text-sm bg-customRed hover:bg-red-900 rounded-md'>
                            {t('sd')}
                          </button>
                        {/* </Link> */}
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              )}
            </>
          )}
          </div>


          
        </div>
       
        <Footer />
      </>
    );
  }

  export default CarsList;
