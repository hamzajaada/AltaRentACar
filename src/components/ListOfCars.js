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
import Reservationmodal from './Modals/Reservationmodal';
import { useTranslation } from 'react-i18next';

const categories = ['Mini', 'Economic', 'Standard', 'SUVs', 'People Carriers', 'Luxury'];
const pickLocations = [
  'Tenerife. Aeropuerto Sur (TFS)',
  'Tenerife. Aeropuerto Norte (TFN)',
  'Tenerife. Las Américas',
  'Tenerife. Delivery to the Hotel',
];

const carModels = ['AUDI', 'MERCEDES', 'BMW', 'PORSCHE', 'VW', 'FERRARI', 'LAMBORGHINI', 'LEXUS', 'FORD MUSTANG', 'CHEVROLET CAMARO', 'TOYOTA', 'RENAULT', 'FIAT', 'SMART', 'PEUGEOT', 'MINI COOPER', 'SPECIAL OFFERS', 'TESLA', 'ŠKODA', 'BENTLEY', 'RANGE ROVER', 'HYUNDAI'];
const numberPassengersOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberDoorsOptions = [1, 2, 3, 4, 5];
const economicOptions = ['Yes', 'No'];
const manuelOptions =  ['Yes', 'No'];
const carTypeOptions = ['DIESEL', 'electric', 'gasoline'];

function ListOfCars() {
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
  const [showCars, setShowCars] = useState(true);
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
  const [reservationmodalVisible, setReservationModalVisible] = useState(false); 
  const openModal = () => setReservationModalVisible(true);
  const closeModal = () => {
    setReservationModalVisible(false)};

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
  

  const fetchCars = async () => {
    try {
      
      const response = await fetch(`${ip_server}/alta_appli/admin/get_cars_from_db_actives/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const carData = await response.json();
      console.log("price" + carData.price);
      console.log("carData + "+carData);
      setCars(carData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      
      console.log("data = "+cars);
    }
  };


  // useEffect(() => {
  //   console.log("btn "+btnwidth);
  //   handleResize();
    
  // }, []);


  useEffect(() => {
      fetchCars();
      setShowFilters(true);
      setClickSearch(true);
      if (!isMobile){
        toggleFormVisibility();
      }
      setShowCars(true);
      handleResize();

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
    const matchesManuel = selectedManuel.length === 0 || selectedManuel.includes((car.is_auto ? 'Yes' : 'No'));
    const matchesCarType = selectedCarTypes.length === 0 || selectedCarTypes.includes(car.moteur);

    return (
      matchesCategory &&
      matchesCarModel &&
      matchesNumberPassengers &&
      matchesNumberDoors &&
      matchesManuel &&
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
      <div className="max-w-8xl px-2  mx-auto  bg-white shadow-md rounded-md">
        <div className="grid grid-cols-1">

        {reservationmodalVisible && (
        <Reservationmodal onCancel={closeModal} className="fixed inset-1" />
      )}


        {showCars && (
          <>
            {filteredCars.length === 0 ? (
              <p className="text-gray-700 text-center">{t('no_available')}</p>
            ) : (
              <div className="mt-20">
                <h2 className="text-gray-700 text-center mt-5">{t('ourar')}</h2>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                  </div>



                      <div className=
                      {` flex flex-rows justify-center   w-full pt-2
                       ${car.counter > 3 ? 'gap-x-6' : 'gap-x-6'}`} 
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
                            openModal();
                       
                        }}
                        className='w-auto px-[30%] h-[50px] mt-2 text-white uppercase tracking-[2px] text-xs xl:text-sm bg-customRed hover:bg-red-900 rounded-md'>
                         {t('hero.slide1.btntext')}
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

export default ListOfCars;
