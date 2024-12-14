import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ip_server } from '../data';
import HeaderAdmin from './admin/HeaderAdmin';
import { Link, useNavigate } from 'react-router-dom';
const ListAcc = () => {
  const [accessories, setAccessories] = useState([]);
  const navigate = useNavigate();
  const fetchAccessories = async () => {
    try {
      const response = await fetch(`${ip_server}/alta_appli/get_all_accessorys/`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setAccessories(data);
    } catch (error) {
      console.log("Error: " + error);
    }
  };

  useEffect(() => {
    fetchAccessories();
  }, []);

  const handleChange = (e, id) => {
    const { name, value, type, checked } = e.target;
    setAccessories((prevAccessories) =>
      prevAccessories.map((accessory) =>
        accessory.id === id ? { ...accessory, [name]: type === 'checkbox' ? checked : value } : accessory
      )
    );
  };

  const handleSelectChange = (e, id) => {
    const { name, value } = e.target;
    setAccessories((prevAccessories) =>
      prevAccessories.map((accessory) =>
        accessory.id === id ? { ...accessory, [name]: value === "Yes" } : accessory
      )
    );
  };

  const handleSubmit = async (e, accessory) => {
    e.preventDefault();
    try {
        const formDataToSend = new FormData();
        formDataToSend.append('name', accessory.name);
        formDataToSend.append('is_per_day', accessory.is_per_day);
        formDataToSend.append('price', accessory.price);
        formDataToSend.append('description', accessory.description);
        formDataToSend.append('is_multiple', accessory.is_multiple);
        formDataToSend.append('nbr_choices', accessory.nbr_choices);


    const response = await fetch(`${ip_server}/alta_appli/update_acc/${accessory.id}/`, {
        method: 'POST',
        body: formDataToSend,
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to update car');
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      window.location.reload()
    }


  };

  return (
    <>
         <HeaderAdmin /> 
    <div className="max-w-8xl px-2 mx-auto pt-20 bg-white shadow-md rounded-md">
      <div className='w-full flex justify-center mt-5  '>
      <button 
                onClick={()=>{
                  console.log("add new acc ");
                  navigate("/admin/acc/add");
                }}
                className=' 
                 font-bold text-sm uppercase bg-red-200  hover:bg-red-300'>
                      New Accessory</button>
      </div>
    
      <table className="min-w-full bg-white border border-gray-200 mt-10">
        <thead>
          <tr>
            <th className="px-4 text-xs xl:text-lg break-words text-left">Name</th>
            <th className="px-4 w-15 text-xs xl:text-lg break-words text-left">Per Day</th>
            <th className="px-4 W-10 text-xs xl:text-lg break-words text-left">Price</th>
            <th className="px-4 text-xs xl:text-lg break-words text-left">Description</th>
            <th className="px-4 text-xs xl:text-lg break-words text-left">Multiple</th>
            <th className="px-4 w-7 text-center text-xs xl:text-lg break-words text-left">Choices</th>
            <th className="px-4 text-xs xl:text-lg break-words text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {accessories.map(accessory => (
            <tr key={accessory.id}>
              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <input
                  type="text"
                  name="name"
                  value={accessory.name}
                  onChange={(e) => handleChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                />
              </td>
              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <select
                  name="is_per_day"
                  value={accessory.is_per_day ? "Yes" : "No"}
                  onChange={(e) => handleSelectChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>
              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <input
                  type="number"
                  name="price"
                  step="0.01"
                  value={accessory.price}
                  onChange={(e) => handleChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                />
              </td>
              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <input
                  type="text"
                  name="description"
                  value={accessory.description}
                  onChange={(e) => handleChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                />
              </td>
              



              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <select
                  name="is_multiple"
                  value={accessory.is_multiple ? "Yes" : "No"}
                  onChange={(e) => handleSelectChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </td>

              
              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <input
                  type="number"
                  name="nbr_choices"
                  value={accessory.nbr_choices}
                  onChange={(e) => handleChange(e, accessory.id)}
                  className="w-full px-3 py-2 border rounded"
                  min={0}
                />
              </td>


              <td className="px-4 text-xs xl:text-lg break-words text-left">
                <button
                  onClick={(e) => handleSubmit(e, accessory)}
                  className="px-2 py-1 h-[30px] text-white uppercase tracking-[2px] text-xs bg-customRed hover:bg-red-900 rounded-md"
                >
                  Save
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>

  );
};

export default ListAcc;
