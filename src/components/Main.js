import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import { ip_server } from "../data";
import { FaStar } from "react-icons/fa";
import station from "../assets/img/Accesoires/station.png";
import radio from "../assets/img/Accesoires/radio.png";
import trans from "../assets/img/Accesoires/transmission.png";
import siege from "../assets/img/Accesoires/siege.png";
import door from "../assets/img/Accesoires/door.png";
import air_condition from "../assets/img/Accesoires/air-conditionne.png";
import pneu from "../assets/img/Accesoires/pneu.png";
import moteur from "../assets/img/Accesoires/moteur.png";
import car_keys from "../assets/img/Accesoires/car_keys.png";
import { data } from "autoprefixer";
import { faL } from "@fortawesome/free-solid-svg-icons";
import Taux from "./Modals/Taux";
import HeaderAdmin from "./admin/HeaderAdmin";

const categories = [
  "Mini",
  "Economic",
  "Standard",
  "SUVs",
  "People Carriers",
  "Luxury",
];
const pickLocations = [
  "Tenerife. Aeropuerto Sur (TFS)",
  "Tenerife. Aeropuerto Norte (TFN)",
  "Tenerife. Las Américas",
  "Tenerife. Delivery to the Hotel",
];

const carModels = [
  "AUDI",
  "MERCEDES",
  "BMW",
  "PORSCHE",
  "VW",
  "FERRARI",
  "LAMBORGHINI",
  "LEXUS",
  "FORD MUSTANG",
  "CHEVROLET CAMARO",
  "TOYOTA",
  "RENAULT",
  "FIAT",
  "SMART",
  "PEUGEOT",
  "MINI COOPER",
  "SPECIAL OFFERS",
  "TESLA",
  "ŠKODA",
  "BENTLEY",
  "RANGE ROVER",
  "HYUNDAI",
];
const numberPassengersOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numberDoorsOptions = [1, 2, 3, 4, 5];
const economicOptions = [true, false];
const manuelOptions = [true, false];
const carTypeOptions = ["DIESEL", "electric", "gasoline"];

function Main() {
  const navigate = useNavigate();
  const [daysBetween, setDaysBetween] = useState(0);
  const [activeFilter, setActiveFilter] = useState(false);
  const [is_all, setIs_All] = useState(true);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pickUpDate, setPickUpDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [pickUpHour, setPickUpHour] = useState("00");
  const [pickUpMinute, setPickUpMinute] = useState("00");
  const [dropOffDate, setDropOffDate] = useState("");
  const [dropOffHour, setDropOffHour] = useState("00");
  const [dropOffMinute, setDropOffMinute] = useState("00");
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
  const [modalVisible, setModalVisible] = useState(false);
  const [taux, setTaux] = useState(0);
  const hourOptions = Array.from({ length: 24 }, (_, i) =>
    i.toString().padStart(2, "0")
  );

  const fetchCars = async () => {
    try {
      const response = await fetch(
        `${ip_server}/myapp/admin/get_cars_from_db/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const carData = await response.json();
      console.log("price" + carData.price);
      console.log("carData + " + carData);
      setCars(carData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);

      console.log("data = " + cars);
    }
  };

  const fetchTaux = async () => {
    try {
      const response = await fetch(`${ip_server}/myapp/get_taux/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const carData = await response.json();
      console.log("price" + carData.price);
      console.log("carData + " + carData);
      setTaux(carData.taux);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchCars();
    fetchTaux();
    setShowCars(true);
  }, []);

  const validateDates = () => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (pickUpDate < currentDate) {
      alert("Pick-up date cannot be in the past." + currentDate);
      return false;
    }
    if (dropOffDate <= pickUpDate) {
      alert("Drop-off date must be after pick-up date.");
      return false;
    }
    return true;
  };

  const handleModalCancel = () => {
    setModalVisible(false);
    //window.location.reload();
  };

  const handleActivation = async (is_active, carId) => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("is_active", is_active);
      const response = await fetch(
        `${ip_server}/myapp/activation_car/${carId}/`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update car");
      }
    } catch (error) {
      setError(error);
    } finally {
      window.location.reload();
    }
  };

  const handleFilterClick = (setter, value) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const formatDateTime = (date, time) => {
    return `${date.replace(/-/g, "/")} ${time}`;
  };

  const isFilterSelected = (filterArray, value) => filterArray.includes(value);
  const [selectedPickLocation, setSelectedPickLocation] = useState(
    pickLocations[0]
  );

  const filteredCars = cars.filter((car) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(car.category);
    const matchesCarModel =
      selectedCarModels.length === 0 || selectedCarModels.includes(car.style);
    const matchesNumberPassengers =
      selectedNumberPassengers.length === 0 ||
      selectedNumberPassengers.includes(car.number_passengers);
    const matchesNumberDoors =
      selectedNumberDoors.length === 0 ||
      selectedNumberDoors.includes(car.number_doors);
    const matchesEconomic =
      selectedEconomic.length === 0 ||
      selectedEconomic.includes(car.economic.toString());
    const matchesManuel =
      selectedManuel.length === 0 ||
      selectedManuel.includes(car.manuel.toString());
    const matchesCarType =
      selectedCarTypes.length === 0 || selectedCarTypes.includes(car.car_type);

    return (
      matchesCategory &&
      matchesCarModel &&
      matchesNumberPassengers &&
      matchesNumberDoors &&
      matchesEconomic &&
      matchesManuel &&
      matchesCarType
    );
  });

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div role="status">
          <svg
            aria-hidden="true"
            className="inline w-8 h-8 text-red-300 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  }

  const handleModify = () => {
    setShowFilters(!showFilters);
  };
  const calculateDaysBetween = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const difference = end - start;
    return Math.ceil(difference / (1000 * 60 * 60 * 24));
  };

  const handleSearch = () => {
    if (!validateDates()) {
      return;
    }

    setDaysBetween(calculateDaysBetween(pickUpDate, dropOffDate));
    setShowFilters(true);
    setClickSearch(true);
    setShowCars(true);

    fetchCars(
      `${pickUpDate.replace(/-/g, "/")}`,
      pickUpHour,
      pickUpMinute,
      `${dropOffDate.replace(/-/g, "/")}`,
      dropOffHour,
      dropOffMinute
    );
  };
  const handleChange = (e) => {
    const type_filter = e.target.value;
    if (type_filter == "is_active") {
      console.log(type_filter);
      setIs_All(false);
      setActiveFilter(true);
    } else {
      if (type_filter == "is_not_active") {
        console.log(type_filter);
        setIs_All(false);
        setActiveFilter(false);
      } else {
        console.log("all");
        setIs_All(true);
      }
    }
  };
  return (
    <>
      <HeaderAdmin />
      <div className="max-w-8xl px-2 mx-auto pt-10   shadow-md rounded-md">
        <div
          className={`${
            !showCars
              ? "grid grid-cols-1 lg:grid-cols-1"
              : "grid grid-cols-1 lg:grid-cols-1 "
          }
              pt-10
              `}
        >
          {showCars && (
            <div className="mt-2">
              <div className="w-full bg-gray-200 pb-10  h-auto lg:pt-5 grid lg:px-10 grid-cols-2 lg:grid-cols-8 gap-5 lg:gap-5 ">
                <div className=" flex justify-center ">
                  <div className="flex items-center w-auto  rounded-xl bg-red-500  justify-center">
                    <select
                      name="filter"
                      onChange={handleChange}
                      className="w-full p-2   rounded-lg  px-10  lg:px-0 bg-transparent  tracking-[2px] text-black  font-bold  cursor-pointer focus:outline-none focus:ring-0 focus:border-red-700 transition duration-150 ease-in-out"
                    >
                      <option value="" disabled className="text-gray-500">
                        Filter
                      </option>
                      <option value="all" className="text-black font-semibold ">
                        All
                      </option>
                      <option
                        value="is_active"
                        className="text-black font-semibold "
                      >
                        Actives
                      </option>
                      <option
                        value="is_not_active"
                        className="text-black font-semibold "
                      >
                        Not Actives
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="  flex justify-center  items-center 
                 font-medium uppercase text-black-800  bg-yellow-300  rounded-lg bg-opacity-90
                "
                >
                  <span className="font-semibold">Totals :</span> <br />
                  <span className="font-semibold ml-2">{cars.length}</span>
                </div>

                <div
                  className=" py-3 lg:py-0  flex justify-center  items-center 
                 font-medium uppercase text-white-800  bg-green-200  rounded-lg bg-opacity-80"
                >
                  <span className="font-semibold">Actives :</span> <br />
                  <span className="font-semibold ml-2">
                    {cars.filter((car) => car.is_active).length}
                  </span>
                </div>

                <div
                  className=" flex justify-center  items-center 
                 font-medium uppercase text-black-800  bg-orange-200  w-auto rounded-lg bg-opacity-80"
                >
                  <span className="font-semibold">Not Actives :</span>
                  <span className="font-semibold ml-2">
                    {cars.filter((car) => !car.is_active).length}
                  </span>
                </div>

                <button
                  onClick={() => {
                    console.log("add new car ");
                    navigate("/admin/car/add");
                  }}
                  className=" 
                col-span-1 font-bold text-sm uppercase py-3 lg:py-0   rounded-lg bg-blue-200 hover:bg-blue-300"
                >
                  New Car
                </button>

                <button
                  onClick={() => {
                    console.log("add new acc ");
                    navigate("/admin/list_acc");
                  }}
                  className=" 
                col-span-1 font-bold text-sm uppercase bg-orange-400 rounded-lg hover:bg-orange-500"
                >
                  All Accessorys
                </button>
                <div className=" w-56  items-center   ml-20 mt-5 xl:ml-5">
                  <div className="flex justify-center">
                    <span className="text-lg font-semibold ">Taux :</span>
                    <span className=" text-green-700 font-semibold ml-5">
                      {taux * 100} %
                    </span>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setTaux(taux);
                        setModalVisible(true);
                      }}
                      className="  w-full bg-customRed  text-xs xl:text-[14px] text-white py-3 px-5  font-semibold rounded-md uppercase tracking-[5px] hover:bg-red-900 transition duration-200 flex items-center justify-center"
                    >
                      Update Taux
                    </button>
                  </div>
                </div>
              </div>

              {cars.length === 0 ? (
                <p className="text-gray-700 text-center">No cars available.</p>
              ) : (
                <div className="mt-20 ml-1">
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
                    {is_all
                      ? cars.map((car) => (
                          <div
                            key={car.id}
                            className="bg-gray-100 grid grid-cols-1 p-2 rounded-md shadow-sm hover:shadow-md transition duration-300 relative w-full"
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

                            <div className="">
                              <div className="text-[13px] flex justify-center items-center text-slate-500 uppercase">
                                {car.style}
                              </div>
                              <h3 className="text-lg uppercase font-bold text-center mt-5 ">
                                {car.title}
                              </h3>
                              <h3 className="text-sm text-gray text-center">
                                {car.category}
                              </h3>
                              <div className="flex gap-x-2  justify-center items-center text-yellow-400  ">
                                <FaStar size={15} />
                                <FaStar size={15} />
                                <FaStar size={15} />
                                <FaStar size={15} />
                                <FaStar size={15} />
                              </div>
                              <div className="flex justify-between  mx-2">
                                <h3 className="text-[15px]">Basic Price</h3>
                                <h3 className=" 'text-[15px] text-customRed font-semibold text-center  ">
                                  {car.price} €
                                </h3>
                              </div>

                              <div className="flex justify-between  mx-2">
                                <h3 className="text-[15px]">Updated Price</h3>
                                <h3 className=" 'text-[15px] text-customRed font-semibold text-center  ">
                                  {car.price_with_taux.toFixed(2)} €
                                </h3>
                              </div>
                            </div>

                            {/* <div className=
                        {` flex flex-rows justify-center gap-x-4  w-full 
                         ${car.counter > 2 ? 'xl:gap-x-2' : 'xl:gap-x-5'}`} 
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
                          </div> 
                          
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
                            !car.power_steering ?
                            (<div className='flex flex-col items-center  justify-between'>
                            <div>
                              <img src={moteur} width={20} height={20}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max '>power steering</div>
                          </div>)
                            :
                            (<></>)
                          }

                        {
                            car.central_locking ?
                            (<div className='flex flex-col items-center justify-between  '>
                            <div>
                              <img src={car_keys} width={23} height={23}alt='' />
                            </div>
                            <div className='text-xs uppercase w-max'>{car.central_locking}</div>
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
                        </div> */}

                            <div className="grid grid-cols-2 gap-2 mt-3">
                              <div className="">
                                <Link
                                  to={`/admin/update/${car.id}`}
                                  className=" flex justify-center "
                                >
                                  <button className="text-md bg-yellow-500 text-black font-bold py-1 px-3 rounded hover:bg-yellow-400 transition duration-300">
                                    Update
                                  </button>
                                </Link>
                              </div>

                              <div className="">
                                <button
                                  onClick={() => {
                                    handleActivation(!car.is_active, car.id);
                                  }}
                                  className={`${
                                    !car.is_active
                                      ? "bg-green-500 hover:bg-green-600"
                                      : "bg-red-500 hover:bg-red-600"
                                  } text-white font-bold py-1 px-3 rounded  transition duration-300`}
                                >
                                  {!car.is_active ? "Activated" : "DeActivated"}
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      : cars
                          .filter((car) => car.is_active === activeFilter)
                          .map((car) => (
                            <div
                              key={car.id}
                              className="bg-gray-100 grid grid-cols-1 p-2 rounded-md shadow-sm hover:shadow-md transition duration-300 relative w-full"
                            >
                              {car.image && (
                                <div className="flex flex-col justify-start">
                                  <div className="flex justify-center">
                                    <img
                                      src={`${ip_server + car.image}`}
                                      alt={car.title}
                                      className="rounded-md   w-full"
                                    />
                                  </div>
                                </div>
                              )}

                              <div className="">
                                <div className="text-[13px] flex justify-center items-center text-slate-500 uppercase">
                                  {car.style}
                                </div>
                                <h3 className="text-lg uppercase font-bold text-center ">
                                  {car.title}
                                </h3>
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

                              {/* 
                      <div className='flex flex-rows justify-center gap-x-5 xl:gap-x-6 w-full '>
                        <div className='flex flex-col items-center justify-between  '>
                          <div>
                            <img src={trans} width={10} height={10}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{!car.manuel ? 'Manual' : 'Automatic'}</div>
                        </div>
                        {/* <div className='flex flex-col items-center justify-center '>
                          <div>
                            <img src={siege} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{car.number_passengers}</div>
                        </div> *
                        
                        {
                          car.car_type ?
                          (<div className='flex flex-col items-center justify-between '>
                          <div>
                            <img src={station} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{car.car_type}</div>
                        </div>)
                          :
                          (<></>)
                        }
                        
                        {
                          !car.power_steering ?
                          (<div className='flex flex-col items-center  justify-between'>
                          <div>
                            <img src={pneu} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>power streeing</div>
                        </div>)
                          :
                          (<></>)
                        }

                      {
                          car.central_locking ?
                          (<div className='flex flex-col items-center justify-between  '>
                          <div>
                            <img src={car_keys} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{car.central_locking}</div>
                        </div>)
                          :
                          (<></>)
                        }


                        <div className='flex flex-col  justify-start'>
                          <div>
                            <img src={door} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{car.doors}</div>
                        </div>
                        <div className='flex flex-col items-center justify-between  '>
                          <div>
                            <img src={air_condition} width={17} height={17}alt='' />
                          </div>
                          <div className='text-xs uppercase'>{car.air_condition ? 'Yes' : 'No'}</div>
                        </div>
                      </div> */}

                              <div className="grid grid-cols-2 gap-3">
                                <div className="">
                                  <Link
                                    to={`/admin/update/${car.id}`}
                                    className=" flex justify-center "
                                  >
                                    <button className="text-md bg-yellow-500 text-black font-bold py-1 px-3 rounded hover:bg-yellow-400 transition duration-300">
                                      Update
                                    </button>
                                  </Link>
                                </div>

                                <div className="">
                                  <button
                                    onClick={() => {
                                      handleActivation(!car.is_active, car.id);
                                    }}
                                    className={`${
                                      !car.is_active
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-red-500 hover:bg-red-600"
                                    } text-white font-bold py-1 px-3 rounded  transition duration-300`}
                                  >
                                    {!car.is_active
                                      ? "Activated"
                                      : "DeActivated"}
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {modalVisible && <Taux onCancel={handleModalCancel} taux={taux} />}
      </div>
      <Footer />
    </>
  );
}

export default Main;
