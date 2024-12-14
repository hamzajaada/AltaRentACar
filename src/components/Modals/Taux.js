import React, { useState } from 'react';
import { ip_server } from '../../data';




  
const Taux = ({ onCancel , taux}) => {
    const [n_taux , setNTaux] = useState(taux);

      
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded shadow-lg bg-green-300 w-[100%] xl:w-[50%]"> 
        <p className="text-lg text-center font-bold p-1.5  
        uppercase tracking-wider text-gray-800  rounded-lg bg-opacity-50">
         Update Taux</p>
         <div className="mb-3  mx-auto  w-20 h-1 bg-customRed"></div>
      

       { taux
        ?
                <div  className="grid grid-cols-1 gap-5  mx-20   ">
                  <div className="grid grid-cols-1 xl:grid-cols-2 w-full border-b-2">
                  <p className=" text-lg font-semibold ">Taux :</p>
                  <input 
                  value={n_taux}
                    className=' rounded'
                    type='number'
                    min={0}
                    step={0.01}
                  onChange={(e)=>{
                    console.log(e.target.value);
                    setNTaux(e.target.value)
                  }}
                  />
                 
                  </div>
       
                </div>

              :
              (<div className='w-full flex justify-center'><span className='text-red-300 text-center font-bold'>
                No taux Information</span></div>)}
       
        <div className='w-full flex justify-center'>
        <div className="flex justify-between  px-20 w-[70%]  mt-5 w-full mb-5">
        <button 
        onClick={async()=>{
          
                try {
                    const formDataToSend = new FormData();
                    formDataToSend.append('taux', n_taux);
                     const response = await fetch(`${ip_server}/alta_appli/update_taux/`, {
                      method: 'POST',
                     body: formDataToSend,
                     credentials: 'include'
                    });
              
                     if (!response.ok) {
                       throw new Error('Failed to update taux');
                     }
            
                  } catch (error) {
                     console.log(error);
                  }
                  finally{
                    window.location.reload();
                  }
              
            
        }}
        className='px-10 py-2 bg-customRed font-bold uppercase text-white tracking-[2px]  xl:text-[17px] text-[17px]  rounded-lg hover:bg-red-900 transition'>
                        Update
                    </button>
          <button 
          onClick={onCancel}
          className='px-10 py-2  bg-yellow-400 font-bold uppercase text-white tracking-[2px]  xl:text-[17px] text-[17px]  rounded-lg  hover:bg-yellow-500 transition'>
          Cancel
                    </button>



        </div>
        </div>
      </div>
    </div>
  );
};

export default Taux;
