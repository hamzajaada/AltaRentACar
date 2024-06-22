import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ip_server } from '../data';
import Header from './Header';
import Footer from './Footer';
import { FaStar } from 'react-icons/fa';
import siege from '../assets/img/Accesoires/siege.png';
import moteur from '../assets/img/Accesoires/moteur.png';
import station from '../assets/img/Accesoires/station.png';
import trans from '../assets/img/Accesoires/transmission.png';
import door from '../assets/img/Accesoires/door.png';
import air_condition from '../assets/img/Accesoires/air-conditionne.png';
import HeaderAdmin from './admin/HeaderAdmin';


function Update() {
  const models = ['AUDI', 'MERCEDES', 'BMW', 'PORSCHE', 'VW', 'FERRARI', 'LAMBORGHINI', 'LEXUS', 'FORD MUSTANG', 'CHEVROLET CAMARO', 'TOYOTA', 'RENAULT', 'FIAT', 'SMART', 'PEUGEOT', 'MINI COOPER', 'SPECIAL OFFERS', 'TESLA', 'ŠKODA', 'BENTLEY', 'RANGE ROVER', 'HYUNDAI'];
  const categories = ['Mini', 'Economic', 'Standard', 'People Carriers', 'Luxury','SUVs'];
  const moteurs = ['gasoline', 'DIESEL', 'electric'];
  const [radioChoices, setRadioChoices] = useState(['Cd Radio','Desq']);
  const [moteurChoices, setMoteurChoices] = useState(['Cd Radio','Desq']);
  const [styleChoices, setStyleChoices] = useState(['Cd Radio','Desq']);
  const [editingStyles, setEditingStyles] = useState([true]);
  const [editingRadios, setEditingRadios] = useState([true]);
  const [editingMoteurs, setEditingMoteurs] = useState([true]);


  const [showModal,setShowModal] = useState(false);
  const [isManageModalOpen, setManageModalOpen] = useState(false);
  const { carId } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);
  const [styles, setStyles] = useState(['']);
  
  const [radios, setRadios] = useState(['']);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [carPrice, setCarPrice] = useState(123);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    image: null,
    is_active: false,
    air_condition: false,
    radio: false,
    power_steering: false,
    central_locking: '',
    doors: 0,
    moteur: '',
    is_owner_car: true,
    passengers: 0,
    car_model: '',
    is_auto: false,
  });

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await fetch(`${ip_server}/myapp/get_car/${carId}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const carData = await response.json();
        setCar(carData);
         setFormData({
          title: carData.title ,
          category: carData.category ,
          price: carData.price ,
          image: null ,
          is_active: carData.is_active ,
          air_condition: carData.air_condition ,
          radio: carData.radio ,
          power_steering: carData.power_steering ,
          central_locking: carData.central_locking ,
          doors: carData.doors ,
          moteur: carData.moteur ,
          is_owner_car: carData.is_owner_car,
          passengers: carData.passengers ,
          car_model: carData.car_model ,
          is_auto: carData.is_auto 
         });
         console.log("moteur :  "+formData.title);
        
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);

      }
    };

    fetchCar();


    
  }, []);



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };


  const handleImageChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: e.target.files[0],
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
      console.log("key = " + key + " data " + formData[key]);
    }

    try {
      const response = await fetch(`${ip_server}/myapp/update_car/${carId}/`, {
        method: 'POST',
        body: formDataToSend,
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to update car');
      }
    } catch (error) {
      setError(error);
    }
    finally{
      window.location.reload()
    }
  };
    
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error.message}</div>;
  }

  if (!car) {
    return <div className="text-center">No car found</div>;
  }

  return (
    <>
    <HeaderAdmin/>
    <div className="max-w-7xl mx-auto pt-20 bg-white shadow-md rounded-md grid grid-cols-1">
        <div className='grid grid-cols-1 xl:grid-cols-2 w-full '>

        <div className=''>

<div className="w-full">
    <div key={car.id} className="bg-gray-100 p-4 rounded-md shadow-sm hover:shadow-md transition duration-300 relative">
{car.image && (
    <div>
    <img
        src={`${ip_server + car.image}`}
        alt={car.title}
        className="w-full h-full object-cover object-center rounded-md"
    />
    </div>
)}

<div className='pt-1 flex justify-between w-full'>
    <div className='w-full'>
    <div className='flex justify-between align-center w-full'>
        <div className=''>
        <p className='text-[13px] text-slate-500 uppercase'>{car.style}</p>
        </div>
        <div className=' align-center'>
        <div className='flex gap-x-5 align-center justify-between pt-1 '>
            <FaStar className='size-3 xl:size-4 text-customRed ' />
            <FaStar className='size-3 xl:size-4 text-customRed ' />
            <FaStar className='size-3 xl:size-4 text-customRed ' />
            <FaStar className='size-3 xl:size-4 text-customRed ' />
        </div>
        </div>
    </div>
    <h3 className='w-full text-lg uppercase font-medium '>{car.title}</h3>
    <h3 className='text-customRed font-semibold '>{car.price}€</h3>
    </div>
</div>
<div className='flex gap-x-5 xl:gap-x-7 w-max '>
    <div className='flex flex-col items-center'>
    <div>
        <img src={trans} width={17} height={17}alt='' />
    </div>
    <div className='text-xs uppercase'>{car.manuel ? 'Manual' : 'Automatic'}</div>
    </div>
    <div className='flex flex-col items-center'>
    <div>
        <img src={siege} width={17} height={17}alt='' />
    </div>
    <div className='text-xs uppercase'>{car.number_passengers}</div>
    </div>
    <div className='flex flex-col items-center'>
    <div>
        <img src={station} width={17} height={17}alt='' />
    </div>
    <div className='text-xs uppercase'>{car.car_type}</div>
    </div>
    <div className='flex flex-col items-center'>
    <div>
        <img src={door} width={17} height={17}alt='' />
    </div>
    <div className='text-xs uppercase'>{car.doors} Doors</div>
    </div>
    <div className='flex flex-col items-center'>
    <div>
        <img src={air_condition} width={17} height={17}alt='' />
    </div>
    <div className='text-xs uppercase'>{car.air_condition ? 'Yes' : 'No'}</div>
    </div>
</div>


    </div>
</div>
</div>
            
    <div className="p-6">
        <h2 className="text-2xl font-bold">Car Information</h2>
        <div className="grid grid-cols-1">
          
        <form onSubmit={handleSubmit} className="bg-white  shadow-md rounded px-8 pt-6 pb-8 mb-4">
       
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
           Title
         </label>
         <input
           name="title"
           value={formData.title}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="title"
           type="text"
           placeholder="Title"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
           Category
         </label>
         <select
           name="category"
           value={formData.category}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="category"
           required
         >
           <option value="">Select Category</option>
           {categories.map((category) => (
             <option key={category} value={category}>
               {category}
             </option>
           ))}
         </select>
       </div>
       {
        (formData.is_owner_car) ? (<div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="price"
          type="number"
          step="0.01"
          min="0"
          placeholder="Price"
          required
        />
      </div>) : (<></>)
       }
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
           Image
         </label>
         <input
           name="image"
           onChange={handleFileChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="image"
           type="file"
           
         />
       </div>
       <div className="mb-4 grid grid-cols-3 gap-4 xl:gap-2  xl:grid-cols-5">
       <div className="flex flex-col  justify-center ">
         <label className=" text-gray-700  text-center text-sm font-bold">
           Air Condition
         </label>
         <input
           name="air_condition"
           checked={formData.air_condition}
           onChange={handleChange}
           className="mr-2 leading-tight"
           type="checkbox"
         />
       </div>
       <div className="flex flex-col  justify-center ">
         <label className=" text-gray-700  text-center text-sm font-bold">
           Power Steering
         </label>
         <input
           name="power_steering"
           checked={formData.power_steering}
           onChange={handleChange}
           className="mr-2 leading-tight"
           type="checkbox"
         />
       </div>

       <div className="flex flex-col  justify-center ">
         <label className=" text-gray-700  text-center text-sm font-bold">
           Active
         </label>
         <input
           name="is_active"
           checked={formData.is_active}
           onChange={handleChange}
           className="mr-2 leading-tight"
           type="checkbox"
         />
       </div>
        
       <div className="flex flex-col  justify-center ">
         <label className=" text-gray-700  text-center text-sm font-bold">
           Radio
         </label>
         <input
           name="radio"
           checked={formData.radio}
           onChange={handleChange}
           className="mr-2 leading-tight"
           type="checkbox"
         />
       </div>


       <div className="flex flex-col  justify-center ">
         <label className=" text-gray-700  text-center text-sm font-bold">
           Automatic
         </label>
         <input
           name="is_auto"
           checked={formData.is_auto}
           onChange={handleChange}
           className="mr-2 leading-tight"
           type="checkbox"
         />
       </div>


       </div>
     
    
     
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="central_locking">
           Central Locking
         </label>
         <input
           name="central_locking"
           value={formData.central_locking}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="central_locking"
           type="text"
           placeholder="Central Locking"
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doors">
           Doors
         </label>
         <input
          name="doors"
          value={formData.doors}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="doors"
          type="number"
          step="1"
          min="0"
          placeholder="Doors"
          required
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
           Engine
         </label>
         <select
           name="moteur"
           value={formData.moteur}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="moteur"
           required
         >
           <option value="">Select Engine</option>
           {moteurs.map((moteur) => (
             <option key={moteur} value={moteur}>
               {moteur}
             </option>
           ))}
         </select>
       </div>
     
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passengers">
           Passengers
         </label>
         <input
           name="passengers"
           value={formData.passengers}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="passengers"
           type="number"
           step="1"
           min="0"
           placeholder="Passengers"
           required
         />
       </div>
       <div className="mb-4">
         <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="car_model">
           Car Model
         </label>
         <select
           name="car_model"
           value={formData.car_model}
           onChange={handleChange}
           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
           id="car_model"
           required
         >
           <option value="">Select Car Model</option>
           {models.map((model) => (
             <option key={model} value={model}>
               {model}
             </option>
           ))}
         </select>
       </div>
      
       <div className="flex items-center justify-center">
       <button
            className="px-4 py-2 h-[50px] text-white uppercase tracking-[2px] text-sm bg-customRed hover:bg-red-900 rounded-md"
            type="submit"
          >
            Update Car
          </button>
       </div>
     </form>

        
        </div>
            </div>



       


        </div>

     
    </div>

            
                


    <Footer />
    </>
    
  );
  
}

export default Update;
