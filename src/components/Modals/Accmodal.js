import React from 'react';

const Accmodal = ({ onCancel, message, accessory }) => {
  
  // Function to calculate the total price with the necessary checks
  const calculateTotalPrice = (acc) => {
    const totalPrice = acc.acc_price * acc.quantity * (acc.is_per_day ? acc.nbr_days : 1);
    if ((acc.acc_name === 'BABY CAR SEAT') && totalPrice > 50) {
      return 50;
    }
    if ((acc.acc_name === 'SPECIAL SEAT FOR NEWBORN') && totalPrice > 60) {
      return 60;
    }
    return totalPrice;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white xl:p-4 rounded shadow-lg">
        <p className="mt-4 text-lg text-center font-bold p-1.5 font-medium 
          uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">
            {message}
        </p>
        <div className='mx-10'> 
          {accessory.length > 0 ? (
            <>
              <div className="grid grid-cols-6 border-b-2 mt-8">
                <div className="col-span-1">
                  <span className="text-xs font-semibold">Name</span>
                </div>
                <div className="col-span-1">
                  <span className="text-xs font-semibold ml-5">Price</span>
                </div>
                <div className="col-span-1 ml-2 xl:ml-5">
                  <span className="text-xs font-semibold">Unit</span>
                </div>
                <div className="col-span-1">
                  <span className="text-xs font-semibold">Quantity</span>
                </div>
                <div className="col-span-1">
                  <span className="text-xs font-semibold">Days</span>
                </div>
                <div className="col-span-1">
                  <span className="text-xs font-semibold">Total</span>
                </div>
              </div>

              {accessory.map((acc, index) => (
                <div key={index} className="grid grid-cols-6 border-b-2 mt-8">
                  <div className="col-span-1">
                    <span className="text-[12px] xl:text-sm font-semibold">{acc.acc_name}</span>
                  </div>
                  <div className="col-span-1 flex justify-between ml-5">
                    <span className="text-xs xl:text-lg h-5 xl:h-auto font-medium uppercase tracking-wider text-black-800 bg-green-200 rounded-lg bg-opacity-50">
                      {acc.acc_price}€
                    </span>
                  </div>
                  <div className="col-span-1 flex justify-between ml-5">
                    <span className="text-[12px] xl:text-sm font-medium underline">{acc.is_per_day ? 'Unit per day' : 'Fixed price'}</span>
                  </div>
                  <div className='col-span-1 ml-5'>
                    <span className="text-customRed text-[12px] xl:text-sm">{acc.quantity}</span> 
                  </div>
                  <div className='col-span-1 ml-3'>
                    <span className="text-customRed text-[12px] xl:text-sm">{acc.nbr_days}</span>
                  </div>
                  <div className='col-span-1'>
                    <span className="text-customRed text-[12px] xl:text-sm">
                      {calculateTotalPrice(acc).toFixed(2)}€
                    </span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className='w-full flex justify-center'>
              <span className='text-red-300 text-center font-bold'>No Accessory selected</span>
            </div>
          )}
        </div>
        <div className="flex justify-center mt-2 mb-2 w-full">
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

export default Accmodal;
