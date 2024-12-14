import React, { useState } from 'react';
import { ip_server } from '../data';
import Confirm from './Modals/Confirm';
import Accmodal from './Modals/Accmodal';
import ClientModal from './Modals/ClientModal';
import Carmodal from './Modals/Carmodal';
import Pricemodal from './Modals/Pricemodal';

const BookTable = ({ bookData }) => {
  const [filter, setFilter] = useState('all');
  const [modalVisible, setModalVisible] = useState(false);
  const [accmodalVisible, setAccModalVisible] = useState(false);
  const [currentBooking, setCurrentBooking] = useState(null);
  const [clientmodalVisible, setClientModalVisible] = useState(false);
  const [carmodalVisible, setCarModalVisible] = useState(false);
  const [priceodalVisible, setPriceModalVisible] = useState(false);
  const [actionType, setActionType] = useState(null);
  const [car, setCar] = useState(null);
  const [price, setPrice] = useState(null);
  const [accessory, setAccessory] = useState([]);
  const [client, setClient] = useState(null);
  const [startDate, setStartDate] = useState(new Date().toISOString().split('T')[0]);
  const [endDate, setEndDate] = useState(new Date().toISOString().split('T')[0]);

  const handleSubmit = async (id_book, is_confirmed, is_canceled) => {
    const formDataToSend = new FormData();
    if (is_confirmed) {
      formDataToSend.append('is_confirmed', is_confirmed);
    } else {
      formDataToSend.append('is_canceled', is_canceled);
    }

    try {
      const response = await fetch(`${ip_server}/alta_appli/update_book/${id_book}/`, {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();
    } catch (error) {
      console.log('error');
    } finally {
      window.location.reload();
    }
  };

  const display_state = (is_canceled, is_confirmed) => {
    if (is_canceled) {
      return 'canceled';
    } else if (is_confirmed) {
      return 'confirmed';
    } else {
      return 'waiting';
    }
  };

  const handleConfirm = (id_book) => {
    setCurrentBooking(id_book);
    setActionType('confirm');
    setModalVisible(true);
  };

  const handleCancel = (id_book) => {
    setCurrentBooking(id_book);
    setActionType('cancel');
    setModalVisible(true);
  };

  const handleModalConfirm = () => {
    if (actionType === 'confirm') {
      handleSubmit(currentBooking, true, false);
    } else if (actionType === 'cancel') {
      handleSubmit(currentBooking, false, true);
    }
    setModalVisible(false);
  };

  const handleAccModalCancel = () => {
    setAccModalVisible(false);
  };

  const handleClientModalCancel = () => {
    setClientModalVisible(false);
  };

  const handleCarModalCancel = () => {
    setCarModalVisible(false);
  };


  const handlePriceModalCancel = () => {
    setPriceModalVisible(false);
  };


  const handleShowClientInfo = (id_client) => {
    handleAccModalCancel();
  };

  const handleShowAccInfo = (id_acc) => {
    const fetchAccs = async () => {
      try {
        const response = await fetch(`${ip_server}/alta_appli/get_acc/${id_acc}/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const carData = await response.json();
        setAccessory(carData);
      } catch (error) {
        console.log("error" + error);
      }
    };

    fetchAccs();
    setAccModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  }; 

  const filteredData = bookData.filter((book) => {

    const createdDate = new Date(book.date_created);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;

    // Normalize dates to UTC for accurate comparison
    const normalizeDate = (date) => {
      if (!date) return null;
      return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    };


    console.log("new Date(book.date_created) " + new Date(book.date_created) );
    console.log("new Date(startDate) " + new Date(startDate) );
    const isWithinDateRange = (!start || normalizeDate(createdDate) >= normalizeDate(start)) &&
                              (!end || normalizeDate(createdDate) <= normalizeDate(end));
    if (filter === 'confirmed') return book.is_confirmed && isWithinDateRange;
    if (filter === 'canceled') return book.is_canceled && isWithinDateRange;
    if (filter === 'waiting') return !book.is_canceled && !book.is_confirmed && isWithinDateRange;
    return isWithinDateRange;
  });

  return (
    <div className="p-5 bg-gray-100">
      <h1 className="text-xl mt-20 text-center">Our Bookings</h1>
      <div className="mb-4">
        <button
          className={`mr-2 p-2 rounded ${filter === 'all' ? 'bg-customRed text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`mr-2 p-2 rounded ${filter === 'waiting' ? 'bg-customRed text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('waiting')}
        >
          Waiting
        </button>
        <button
          className={`mr-2 p-2 rounded ${filter === 'confirmed' ? 'bg-customRed text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('confirmed')} 
        >
          Confirmed
        </button>
        <button
          className={`p-2 rounded ${filter === 'canceled' ? 'bg-customRed text-white' : 'bg-gray-200'}`}
          onClick={() => setFilter('canceled')}
        >
          Canceled
        </button>
      </div>
      <div className="mb-4 grid grid-cols-1 xl:grid-cols-3 gap-4 ">
        <div>
        <label className="">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="p-2 ml-10 rounded bg-gray-200"
        />
        </div>
       <div>
       <label className="">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="p-2 ml-12 rounded bg-gray-200"
        />
       </div>
       
        <div className=''>
          <span className='font-bold text-[20px]'> 
            Result :
          </span>
          <span className='ml-12 p-1.5 text-[20px] font-medium uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50 '>
            {filteredData.length}
          </span>
        </div>

      </div>
      <div className="overflow-auto rounded-lg shadow  md:block">
        <table className="w-full">
          <thead className="bg-gray-50 border-b-2 border-gray-200">
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">ID</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">ACCESSORIES AND EXTRAS</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Date Demande</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Pickup Date</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">DropOFF Date</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Pickup Location</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Pickup Hotel</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">DrpOff Location</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">DrpOff Hotel</th>
              <th className="w-15 p-3 text-sm font-semibold tracking-wide text-left">Total Price</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Days</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Client Name</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Car Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Comment</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
              <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
          {  (filteredData.length) ?
            ( filteredData.map((book, index) => (
              <tr key={index} className="bg-white">
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span className="font-bold text-blue-500 hover:underline">
                    {book.id_booking}
                  </span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <button onClick={() => handleShowAccInfo(book.id)}>
                    {book.ass_price}€
                  </button>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.date_created}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.pickupdate}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.dropoffdate}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.location}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.hotelname}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.selected_return_location}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.hoteldropname}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                <button
                    className='underline text-sm xl:text-md'
                    onClick={() => {
                      setPrice({
                        'total_price': 		book.total_price,
                        'car_price': 		book.car_price,
                        'taux': 	book.taux_buy * 100,
                        'profit': 	book.profit,
                        'accessory_price': 		book.ass_price,
                      });
                      setPriceModalVisible(true);
                    }}
                  >
                    {book.total_price}€
                  </button>
                 </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.nbr_days}</td>
                <td>
                  <button
                    className='underline text-sm xl:text-md'
                    onClick={() => {
                      setClient({
                        'name': book.client_name,
                        'client_surname': book.client_surname,
                        'client_telephone': book.client_telephone,
                        'client_email': book.client_email,
                        'country': book.country,
                        'client_date_of_birth': book.client_date_of_birth
                      });
                      setClientModalVisible(true);
                    }}
                  >
                    {book.client_name}
                  </button>
                </td>
                <td className="p-3 text-sm text-gray-700 text-center whitespace-nowrap">
                  
                <button
                    className='underline text-sm xl:text-md'
                    onClick={() => {
                      setCar({
                        'category': 		book.car_style,
                        'image': 		book.image,
                        'number_doors': 	book.number_doors,
                        'air_condition': 	book.air_condition,
                        'radio': 		book.radio,
                        'moteur': 		book.moteur,
                        'is_active': 		book.is_active,
                        'power_steering': 	book.power_steering,
                        'passengers': 		book.passengers,
                        'car_model': 		book.car_model,
                        'is_auto': 		book.is_auto,
                        'counter': 		book.counter,
                      });
                      setCarModalVisible(true);
                    }}
                  >
                    {book.car_name}
                  </button></td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{book.comment}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  <span>{display_state(book.is_canceled, book.is_confirmed)}</span>
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                  {!book.is_canceled && !book.is_confirmed ? (
                    <>
                      <button onClick={() => handleCancel(book.id)}>
                        <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 hover:bg-yellow-200 rounded-lg bg-opacity-50">
                          Cancel
                        </span>
                      </button>
                      <button onClick={() => handleConfirm(book.id)}>
                        <span className="p-1.5 text-xs font-medium uppercase text-yellow-800 text-green-800 bg-green-200 hover:bg-green-300 rounded-lg bg-opacity-50">
                          Confirm
                        </span>
                      </button>
                    </>
                  ) : (
                    <span className='text-gray'>-----</span>
                  )}
                </td>
              </tr>
            )))
            :
            (<>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
           

            </td>
            <td>
            <div className='flex items-center justify-center w-full'>
              
              <span className='text-xs xl:text-lg w-max font-medium uppercase tracking-wider text-black-800 bg-green-200 rounded-lg bg-opacity-50'>
              no data found
              </span>
               </div>

            </td>
        
            <td>
         
            </td>

            <td></td>
            <td></td>
            <td></td>

            <td></td>
            <td></td>
            
            </>)}

          </tbody>
        </table>
      </div>
      {modalVisible && (
        <Confirm
          onConfirm={handleModalConfirm}
          onCancel={handleModalCancel}
          message={`Are you sure you want to ${actionType} this booking?`}
        />
      )}
      {accmodalVisible && ( 
        <Accmodal
          onCancel={handleAccModalCancel}
          message={`Show All Accessorys`}
          accessory={accessory}
        />
      )}
      {clientmodalVisible && (
        <ClientModal
          onCancel={handleClientModalCancel}
          message={`Show Client`}
          client={client}
        />
      )}


{priceodalVisible && (
        <Pricemodal
          onCancel={handlePriceModalCancel}
          message={`Show Prices`}
          price={price}
        />
      )}



{carmodalVisible && (
        <Carmodal
          onCancel={handleCarModalCancel}
          message={`Show Car`}
          car={car}
        />
      )}


    </div>
  );
};

export default BookTable;
