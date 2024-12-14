import React, { useState } from 'react';
import { ip_server } from '../data';
import { Navigate, useNavigate } from 'react-router-dom';

const models = ['AUDI', 'MERCEDES', 'BMW', 'PORSCHE', 'VW', 'FERRARI', 'LAMBORGHINI', 'LEXUS', 'FORD MUSTANG', 'CHEVROLET CAMARO', 'TOYOTA', 'RENAULT', 'FIAT', 'SMART', 'PEUGEOT', 'MINI COOPER', 'SPECIAL OFFERS', 'TESLA', 'ŠKODA', 'BENTLEY', 'RANGE ROVER', 'HYUNDAI'];
const categories = ['Mini', 'Economic', 'Standard', 'People Carriers', 'Luxury','SUVs'];
const moteurs = ['gasoline', 'DIESEL', 'electric'];

const AddCarForm = () => {
  const navigate = useNavigate();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
      console.log("key = " + key + " data " + formData[key]);
    }
    console.log(data.moteur);
    try {
    const response = await fetch(`${ip_server}/alta_appli/add_car/`, {
      method: 'POST',
      body: data,
      credentials: 'include'
    });
 
    const result = await response.json();
    console.log(result);
   
    }
    catch (error) {
      console.log(error);
    }
    finally{
      navigate("/cars");
    }

  };

  return (
    <div className="max-w-xl mx-auto mt-10 text-center" >
      <h1 className="text-2xl font-bold mb-4">Add a New Car</h1>
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
        <div className="mb-4">
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
        </div>
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
            required
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
            Add New Car
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCarForm;
