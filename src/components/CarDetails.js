import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ip_server } from "../data";
import Header from "./Header";
import Footer from "./Footer";
import { FaStar } from "react-icons/fa";
import siege from "../assets/img/Accesoires/siege.png";
import moteur from "../assets/img/Accesoires/moteur.png";
import station from "../assets/img/Accesoires/station.png";
import trans from "../assets/img/Accesoires/transmission.png";
import radio from "../assets/img/Accesoires/radio.png";
import door from "../assets/img/Accesoires/door.png";
import air_condition from "../assets/img/Accesoires/air-conditionne.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function CarDetails() {
  const { t } = useTranslation();
  const [selectedValues, setSelectedValues] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalAcc, setTotalAcc] = useState(0);
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [acc , setAcc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    title: "",
    style: "",
    price: "",
    image: null,
  });

  const handleCheckboxChange = (event, accessoryName, accessoryPrice, per_day , description , ac_id) => {
    const isChecked = event.target.checked;
    let quantity = 0;
    
    if (event.target.value !== 'on') {
      quantity = event.target.value;
    } else {
      quantity = isChecked ? 1 : 0;
    }
    console.log("quantity " + quantity);
    
    setSelectedValues(prevValues => {
      const index = prevValues.findIndex(item => item.ac_id === ac_id); 
      let newValues;
      
      if (index !== -1) {
        newValues = [...prevValues];
        newValues[index].accessoryQuantity = quantity;
      } else {
        newValues = [...prevValues, { accessoryName, accessoryPrice, accessoryTotalPrice: accessoryPrice,
          accessoryQuantity: quantity, description : description , per_day ,ac_id}];
      }
      
      // Remove items with accessoryQuantity 0
      newValues = newValues.filter(item => item.accessoryQuantity > 0);
      
      // Calculate the new total price
      let total = parseFloat(localStorage.getItem('car_price'));
      console.log("total " + total);
      let total_acc = 0;
      const nbr_days = localStorage.getItem('daysBetween');
      console.log("nbr_days " + nbr_days);
      console.log("item.per_day " + per_day); 
      
      newValues.forEach(item => {
        let itemTotalPrice = parseFloat(item.accessoryPrice) * item.accessoryQuantity * (item.per_day ? nbr_days : 1);
        // Check for "BABY CAR SEAT" and apply the maxim um price limit
        if (item.accessoryName === "BABY CAR SEAT") {
          const maxPrice = 50;
          if (itemTotalPrice > maxPrice) {
            const difference = itemTotalPrice - maxPrice;
            itemTotalPrice = maxPrice;
            localStorage.setItem('BABY_CAR_SEAT_DIFF', difference);
          } else {
            localStorage.setItem('BABY_CAR_SEAT_DIFF', 0);
          }
        }
        if (item.accessoryName === "SPECIAL SEAT FOR NEWBORN") {
          const maxPrice = 60;
          if (itemTotalPrice > maxPrice) {
            const difference = itemTotalPrice - maxPrice;
            itemTotalPrice = maxPrice;
            localStorage.setItem('SPECIAL_SEAT_FOR_NEWBORN', difference);
          } else {
            localStorage.setItem('SPECIAL_SEAT_FOR_NEWBORN', 0);
          }
        }

        item.accessoryTotalPrice = itemTotalPrice;
        total_acc += itemTotalPrice;
        console.log("accessoryName " + item.accessoryName);
        console.log("total_acc " + total_acc);
        console.log("accessoryQuantity " + item.accessoryQuantity);
      });
      
      total += total_acc;
      console.log("total " + total);
      
      setTotalAcc(total_acc);
      setTotalPrice(total);
      
      return newValues;
    });
  };
  



  const fetchCar = async () => {
    try {
      const response = await fetch(`${ip_server}/alta_appli/get_car/${carId}/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const carData = await response.json();
      setCar(carData);
      //console.log("price" + carData.price);
      setTotalPrice(parseFloat(localStorage.getItem('car_price')));

      setFormData({
        title: carData.title,
        style: carData.style,
        price: carData.price,
        image: carData.image,
      });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchAccessorys = async () => {
    try {
      const response = await fetch(`${ip_server}/alta_appli/get_all_accessorys/`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const carDataAcc = await response.json();
      console.log("acc" + carDataAcc);
      setAcc(carDataAcc);
    
    } catch (error) {
      setError(error);
    } 
  };


  useEffect(() => {

      if (!localStorage.getItem('selectedPickLocation')){
        navigate('/');
      }
      else{
        fetchCar();
        fetchAccessorys();
      }

   
  }, []);






  const handleBookCar = () => {
    console.log("handle");
    navigate("/booking", {
      state: {
        car,
        selectedAccessories: selectedValues,
        totalPrice: totalPrice,
        totalAcc : totalAcc,
      },
    });
    // window.location.reload();
  };

  

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
    return (
      <div className="text-red-500 text-center">Error: {error.message}</div>
    );
  }

  if (!car) {
    return <div className="text-center">No car found</div>;
  }

  return (
    <>
      <Header />
      <div className="px-5 xl:px-10 mx-auto pt-20 bg-white grid grid-cols-1">
        <div className="grid grid-cols-1 xl:grid-cols-2  w-full ">
            {/* Immage */}
            <div className="flex pt-10">
            <div className=" mx-auto  ">
                  <img
                    src={`${ip_server + car.image}`}
                    alt={car.title}
                    width={60}
                    className="w-full h-5/6 object-cover object-center "
                  />-
                </div>
            </div>
            {/* detail car */}
            <div className="flex flex-col pt-10 xl:px-5">
                {/* tite + price */}
                <div className="grid grid-cols-3 w-full">
                        <div className="col-span-2 flex flex-col justify-start">
                        <h1 className="text-md xl:text-[25px] font-bold ">{car.title}</h1>
                      <div className="flex gap-x-5 align-center">
                          <FaStar className="size-3 xl:size-4 text-customRed " />
                          <FaStar className="size-3 xl:size-4 text-customRed " />
                          <FaStar className="size-3 xl:size-4 text-customRed " />
                          <FaStar className="size-3 xl:size-4 text-customRed " />
                      </div>
                        </div>
                        <div className="col-span-1  flex items-center justify-center ">
                        <h2 className="text-customRed text-[30px] xl:text-40 font-bold ">{totalPrice.toFixed(2)} €</h2>
                        </div>
                </div>
              {/* icons */}
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-8 pt-5 xl:pt-10">
                
               
                <div className="flex justify-start  ">
                <div className="">
                    <img src={door} width={25} height={25} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.doors} {t("doors")}
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={radio} width={25} height={25} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.radio ? 'Yes' : 'No'}
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={air_condition} width={25} height={25} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                  {car.air_condition ? 'Yes' : 'No'}
                  </span> 
                </div>




                <div className="flex justify-start">
                <div className="">
                    <img src={door} width={25} height={25} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.is_auto ? 'Automatic' : 'Manuel'} 
                  </span> 
                </div>

                <div className="flex justify-start ">
                <div className="">
                    <img src={station} width={25} height={25} alt="" />
                  </div>
                  <span className="text-xs font-bold  uppercase ml-5">
                    {car.moteur} 
                  </span> 
                </div>
               
              </div>

              <div className="grid grid-cols-2 xl:grid-cols-3 gap-x-3 mt-5">
                <div className="flex justify-start ">
                <span className="text-sm xl:text-base font-medium ">
                {t('category')}
                </span>
                <span className="ml-5 text-sm xl:text-base font-semibold text-red-600 ">
                  {car.category}
                </span>
                </div>

                <div className="flex justify-start ">
                <span className="text-sm xl:text-base font-medium ">
                {t('models')}
                </span>
                <span className="ml-5 text-sm xl:text-base font-semibold text-red-600 ">
                  {car.car_model}
                </span>
                </div>

              

                <div className="flex justify-start ">
                <span className="text-sm xl:text-base font-medium ">
                {t('passengers')}
                </span>
                <span className="ml-5 text-sm xl:text-base font-semibold text-red-600 ">
                  {car.passengers}
                </span>
                </div>


              </div>
            </div>
        </div>
{/* test ayoub */}



        {/* table avvesoires */}
       <div className="w-full mt-5">
       <h2 class="text-2xl font-bold  text-center">{t('acc')}</h2>
       <div class="p-1 w-full  grid grid-cols-1 xl:grid-cols-2 gap-2">
  <div class="mb-8">
    <span class="block text-lg font-bold mb-2 uppercase text-center bg-red-300 text-orange-900   rounded-lg bg-opacity-80 ">{t('unit')}</span>
    <table class="min-w-full bg-white border border-gray-200">
  <thead>
    <tr class="bg-gray-200">
      <th class="px-4  text-xs xl:text-lg   text-center">{t('ass')}</th>
      <th class="px-4  py-2 text-xs xl:text-lg  text-center">{t('avant')}</th>
      <th class="px-6  py-2 text-xs xl:text-lg  text-center">{t('price')}</th>
      <th class="px-4    py-2 text-xs xl:text-lg  text-center">{t('select')}</th>
    </tr>
  </thead>
  <tbody>
  {
  acc.filter((ac) => ac.is_per_day === true).map((ac) => (
              <tr class="border-t" key={ac.id}>
              <td class="px-2 py-2 text-center">
                <span class="text-xs xl:text-lg  font-semibold underline ">
                {t(`accs.${ac.name.toUpperCase()}`)}
                </span>
              </td>
              <td class="px-4 text-xs xl:text-lg  break-words  text-left">
                {ac.description}
              </td>
              <td class="px-2 py-2">
                <span class=" text-xs xl:text-lg font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  {ac.price} €
                  </span>
              </td>
          {/* check  multiple*/}
          <td class="px-4 py-2">
          {
              ac.is_multiple ? (
                <>
                            <select class="form-select mt-1 block w-full  text-xs xl:text-lg border border-gray-300 rounded-lg"
                          onChange={(e) => handleCheckboxChange(e, ac.name, ac.price , ac.is_per_day , ac.description, ac.id)}
                    >
                      {Array.from({ length: ac.nbr_choices + 1 }, (_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                      ))}
                    </select>
                </>
              )
              :
              (
             
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out" 
                    onChange={(e) => handleCheckboxChange(e, ac.name, ac.price , ac.is_per_day , ac.description , ac.id)}
                    />
            
            )
             }
            </td>
         

             


            </tr>

    ))
    
  }
    
   
  </tbody>
</table>

     
  </div>
  
  <div class="mb-8">
  <span class="block text-lg font-bold mb-2 uppercase text-center bg-red-300 text-orange-900  rounded-lg bg-opacity-80 ">{t("fixed")}</span>
  <table class="min-w-full bg-white border border-gray-200">
  <thead>
    <tr class="bg-gray-200">
      <th class="px-4  text-xs xl:text-lg   text-center">{t('ass')}</th>
      <th class="px-4  py-2 text-xs xl:text-lg  text-center">{t('avant')}!</th>
      <th class="px-6  py-2 text-xs xl:text-lg  text-center">{t('price')}</th>
      <th class="px-4    py-2 text-xs xl:text-lg  text-center">{t('select')}</th>
    </tr>
  </thead>
  <tbody>

     {
  acc.filter((ac) => ac.is_per_day === false).map((ac) => (
              <tr class="border-t" key={ac.id}>
              <td class="px-2 py-2 text-center">
                <span class="text-xs xl:text-lg  font-semibold underline ">
                {t(`accs.${ac.name.toUpperCase()}`)}
                </span>
              </td>
              <td class="px-4 text-xs xl:text-lg  break-words  text-left">
                {(ac.name.toUpperCase() == "ADDITIONAL DRIVER" || ac.name.toUpperCase() == "NIGHT TIME DELIVERY") 
                ?
                (
                  ac.description.includes("after") ?
                 `${t('after').toUpperCase()} 20:00`  

                  
                  :
                    t('accs_description')
                  

                 ) : ac.description }
              </td>
              <td class="px-2 py-2">
                <span class=" text-xs xl:text-lg font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                {ac.price} €
                  </span>
              </td>
          {/* check  multiple*/}
          <td class="px-4 py-2">
          {
              ac.is_multiple ? (
                <>
                            <select class="form-select mt-1 block w-full  text-xs xl:text-lg border border-gray-300 rounded-lg"
                       onChange={(e) => handleCheckboxChange(e, ac.name, ac.price , ac.is_per_day , ac.description , ac.id)}
                    >
                     
                      {Array.from({ length: ac.nbr_choices + 1 }, (_, i) => (
                              <option key={i} value={i}>
                                {i}
                              </option>
                      ))}
                    </select>
                </>
              )
              :
              (
             
                    <input type="checkbox" class="form-checkbox h-4 w-4 text-green-600 transition duration-150 ease-in-out" 
                    onChange={(e) => handleCheckboxChange(e, ac.name, ac.price , ac.is_per_day , ac.description , ac.id)}
                    />
            
            )
             }
            </td>
         

             


            </tr>

    ))
    
  }
    

    
   
  </tbody>
</table>

  
  </div>

          </div>

       </div>

       <div className="fixed bottom-0 left-0 xl:hidden w-full bg-white p-4 flex justify-between items-center">
            <div className=""><span className="font-semibold  text-md ">{t('total')} : </span> <span className="text-[20px] text-orange-700 text-md font-bold">{totalPrice.toFixed(2)} $</span></div>
            <button  onClick={handleBookCar} className="px-3 py-3  bg-customRed uppercase text-white tracking-[2px] text-[9px] rounded-lg hover:bg-red-900 transition">{t('hero.slide1.btntext')}</button>
      </div>

      
<div className="w-full  hidden xl:block mb-10">
<div className="flex justify-center items-center w-[100%]  ">
            <div className="">
              <span className="font-bold text-[20px] ">{t('total')} : </span> 
              <span className="text-bold text-orange-700 text-[20px] font-bold">{totalPrice.toFixed(2)} €</span>
            </div>
            
            <div className="pl-20">
            <button  onClick={handleBookCar} className="px-10 py-2 bg-customRed uppercase font-bold text-white tracking-[2px] text-xs rounded-lg hover:bg-red-900 transition">{t('hero.slide1.btntext')}</button>
            </div>
      </div>
</div>
      

       
      </div>
      <Footer />
    </>
  );
}

export default CarDetails;
