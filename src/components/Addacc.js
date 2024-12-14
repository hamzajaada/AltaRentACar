import React, { useState } from 'react';
import { ip_server } from '../data';
import { Navigate, useNavigate } from 'react-router-dom';
import HeaderAdmin from './admin/HeaderAdmin';

const Addacc = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    is_per_day: false,
    price: '',
    description: '',
    is_multiple: false,
    nbr_choices: 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
      console.log("key = " + key + " data " + formData[key]);
    }
    try {
        const response = await fetch(`${ip_server}/alta_appli/add_acc/`, {
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
          navigate("/admin/list_acc");
        }
  };

  return (
    <>
      <HeaderAdmin /> 
      <div className='w-full  flex flex-col  items-center justify-center '>
        <span className='text-lg font-semibold mt-20'>
            Add New Accessory 
        </span>
    <form 
    className='w-[50%]'
    onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mt-20" htmlFor="name">
          Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4 flex ">
        <label className="block text-gray-700 text-sm font-bold " htmlFor="is_per_day">
          Per Day:
        </label>
        <input
          id="is_per_day"
          name="is_per_day"
          type="checkbox"
          checked={formData.is_per_day}
          onChange={handleChange}
          className="ml-5"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price:
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="0.01"
          min={0}
          value={formData.price}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
          Description:
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={formData.description}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      <div className="mb-4 flex">
        <label className="block text-gray-700 text-sm font-bold " htmlFor="is_multiple">
          Multiple:
        </label>
        <input
          id="is_multiple"
          name="is_multiple"
          type="checkbox"
          checked={formData.is_multiple}
          onChange={handleChange}
          className="ml-5"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nbr_choices">
          Number of Choices:
        </label>
        <input
          id="nbr_choices"
          name="nbr_choices"
          type="number"
          value={formData.nbr_choices}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          
        />
      </div>

      <div className="flex justify-end">
      <button
            className="px-4 py-2 h-[50px] text-white uppercase tracking-[2px] text-sm bg-customRed hover:bg-red-900 rounded-md"
            type="submit"
          >
            Add New Accessory
          </button>
      </div>
    </form>
    </div>

    </>

  );
};

export default Addacc;
