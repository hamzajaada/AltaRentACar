import React from 'react';
import { ip_server } from '../../data';
import { FaStar } from 'react-icons/fa';
import siege from '../../assets/img/Accesoires/siege.png';
import moteur from '../../assets/img/Accesoires/moteur.png';
import station from '../../assets/img/Accesoires/station.png';
import trans from '../../assets/img/Accesoires/transmission.png'; 
import door from '../../assets/img/Accesoires/door.png';
import air_condition from '../../assets/img/Accesoires/air-conditionne.png';
import radio from '../../assets/img/Accesoires/radio.png';
import car_keys from '../../assets/img/Accesoires/car_keys.png';
const Carmodal = ({ onCancel, message , car}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg bg-green-300 w-[100%] xl:w-[40%]  ">
        <p className="mt-4 text-lg text-center font-bold p-1.5 font-medium 
        uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">
          {message}</p>
      

       { car
        ?
        <div key={car.id} className="bg-gray-100 grid grid-cols-1 p-2 rounded-md shadow-sm hover:shadow-md transition duration-300 relative w-full px-10 xl:px-20">
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
        {` flex flex-rows justify-center   w-full mt-5
         ${car.counter >= 4 ? 'gap-x-2 xl:gap-x-2' : 'gapx-4 xl:gap-x-5'}`} 
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


      
      </div>

              :
              (<div className='w-full flex justify-center'><span className='text-red-300 text-center font-bold'>
                No Client Information</span></div>)}
       
        <div className="flex justify-center  mt-2 mb-2  w-full">
          <button
            className="px-2 py-1 h-[30px] text-white uppercase tracking-[2px] text-xs bg-customRed hover:bg-red-900 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button> 

        </div>
      </div>
    </div>
  );
};

export default Carmodal;
