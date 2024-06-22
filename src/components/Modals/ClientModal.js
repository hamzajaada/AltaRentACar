import React from 'react';

const ClientModal = ({ onCancel, message , client}) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg bg-green-300 w-[90%] xl:w-[50%]">
      <p className="mt-4 text-lg text-center font-bold p-1.5 font-medium 
        uppercase tracking-wider text-gray-800 bg-yellow-200 rounded-lg bg-opacity-50">
          {message}</p> 
      

       { client
        ?
                <div  className="grid grid-cols-1 gap-5 border-b-2 mx-10 xl:mx-20 mt-3   ">
                  <div className="grid grid-cols-2 xl:grid-cols-2 w-full border-b-2">
                  <span className=" text-xs font-semibold ">Name :</span>
                  <span className=" text-xs font-semibold ">{client.name}</span>
                  </div>


                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2 ">
                  <span className=" text-xs font-semibold ">SurName :</span>
                  <span className=" text-xs font-semibold ">{client.client_surname}</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-xs font-semibold ">Telephone :</span>
                  <span className=" text-xs font-semibold ">{client.client_telephone}</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-xs font-semibold ">country :</span>
                  <span className=" text-xs font-semibold ">{client.country}</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-xs font-semibold ">Date Of Birthday :</span>
                  <span className=" text-xs font-semibold ">{client.client_date_of_birth}</span>
                  </div>

                  <div className="grid grid-cols-2 xl:grid-cols-2 border-b-2">
                  <span className=" text-xs font-semibold ">Email :</span>
                  <span className=" text-xs font-semibold ">{client.client_email}</span>
                  </div>

               

                </div>

              :
              (<div className='w-full flex justify-center'><span className='text-red-300 text-center font-bold'>
                No Client Information</span></div>)}
       
        <div className="flex justify-center  mt-2 mb-2 w-full">
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

export default ClientModal;
