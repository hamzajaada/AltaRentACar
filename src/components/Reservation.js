import React, { useState , useEffect } from 'react';
import { ip_server } from '../data';
import BookTable from './BookTable';
import HeaderAdmin from './admin/HeaderAdmin';

const Reservation = () => {
    const [bookData , setBookData] = useState([]); 
    useEffect(() => {
        const fetchCar = async () => {
          try {
            const response = await fetch(`${ip_server}/myapp/get_all_bookings/`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const carData = await response.json();
            console.log(carData);
            setBookData(carData);
            console.log("book " + bookData);

          } catch (error) {
            console.log("error");
          } finally {
            console.log("finnaly");
          }
        };
    
        fetchCar();
    
      }, []);


  return (
    <>
        <HeaderAdmin />
        <div className="">
        <BookTable bookData={bookData}  />
  </div>
    </>
   
  );
};

export default Reservation;
