import React from 'react';
import { useLocation } from 'react-router-dom';
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

function Bock() {
  const location = useLocation();
  console.log(location);
  const { car, selectedAccessories, totalPrice } = location.state || {};

  if (!car) {
    return <div>No car information available</div>;
  }

  return (
    <>
      <Header />
      <div className="p-6 h-auto bg-red-300">
        <h1 className='mt-20 text-center'>
            Book Now !
        </h1>
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
                          <h3 className='text-customRed font-semibold '>{totalPrice}€</h3>
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
                          <div className='text-xs uppercase'>{car.number_doors} Doors</div>
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

        <div>
            <h3>
            Accessories and Extras
            </h3>
            <ul>
            {selectedAccessories.map((accessory, index) => (
              <li key={index}>{accessory}</li>
            ))}
          </ul>

        </div>
               
      
      </div>
      <Footer />
    </>
  );
}

export default Bock;
