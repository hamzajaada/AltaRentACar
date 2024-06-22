import React from 'react';

const Pricemodal = ({ onCancel, message , price}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg bg-green-300  px-10  w-[90%] xl:w-[50%]">
      <p className="mt-4 text-lg text-center font-bold p-1.5 font-medium 
        uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">
          {message}</p> 
      

       { price
        ?
                <div  className="grid grid-cols-1 gap-5 border-b-2 xl:mx-20 mt-3   ">
                  <div className="grid grid-cols-2 xl:grid-cols-2 w-full border-b-2">
                  <span className=" text-sm font-semibold ">Total Price :</span>
                  <span className=" text-sm font-semibold ">{price.total_price}€</span>
                  </div>


                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2 ">
                  <span className=" text-sm font-semibold ">Car Price :</span>
                  <span className=" text-sm font-semibold ">{price.car_price}€</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-sm font-semibold ">Taux :</span>
                  <span className=" text-sm font-semibold ">{price.taux}%</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-sm font-semibold ">Profit :</span>
                  <span className=" text-sm font-semibold w-[40px]  text-gray-800 bg-green-300 rounded-sm bg-opacity-50">{parseFloat(price.profit).toFixed(2)}€</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-sm font-semibold ">Accessorys :</span>
                  <span className=" text-sm font-semibold ">{price.accessory_price}€</span>
                  </div>

           

               

                </div>

              :
              (<div className='w-full flex justify-center'><span className='text-red-300 text-center font-bold'>
                No price Information</span></div>)}
       
        <div className="flex justify-center  mt-2 mb-2 w-full">
        <button
            className="px-2 py-1 h-[30px] text-white uppercase tracking-[2px] text-xs xl:text-sm bg-customRed hover:bg-red-900 rounded-md"
            onClick={onCancel}
          >
            Cancel
          </button>

        </div>
      </div>
    </div>
  );
};

export default Pricemodal;
