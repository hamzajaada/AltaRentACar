"use client";
import React from 'react';
import HourSelection from './HourSelection';
import DateSelection from './DateSelection';
import { Button } from 'react-scroll';
import Categorys from './Categorys';

const SearchMobile = () => {
    return (
        <div className='xl:hidden font-medium'>
            <div className='container mx-auto'>
                <div className='flex flex-col gap-y-4'>
                   
                    {/* <DateSelection /> */}
                    {/* <div className="flex px-10 items-center">
                    <Categorys />
        
                    </div> */}
                    <div className="flex  space-x-4 items-center">
          {/* <button 
          className='btn btn-sm btn-accent w-full xl:w-[100px] text-sm'
          >
            Search
          </button>
          <button  className='btn btn-lg btn-accent w-full xl:w-[130px] text-sm'
          >
            Advanced Search
          </button> */}
        </div>
                </div>
            </div>
            
        </div>
    );
}

export default SearchMobile;
