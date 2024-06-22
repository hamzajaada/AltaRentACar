import React, { useState } from 'react';
import { Menu, MenuButton, MenuItems } from '@headlessui/react';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { DateRange } from 'react-date-range';
import { addDays, format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

const DateSelection = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection',
    },
  ]);

  return (
    <div>
      <Menu as="div" className="w-full h-full flex flex-col xl:flex-row">
        <div className="relative flex-1">
          <MenuButton
            className="dropdown-btn w-full h-full flex flex-col justify-center items-center xl:items-start xl:pl-8"
          >
            <div className="flex flex-col xl:flex-row items-center xl:gap-x-2 gap-y-2 xl:gap-y-0">
              <FaCalendarAlt className=" text-customRed" />
              <div className="text-[15px] uppercase font-bold">Select Date</div>
              </div>
              <div className='flex items-center gap-x-3 xl:ml-6'>
                <div className='text-[13px] font-medium text-secondary'>
                {format(date[0].startDate, 'dd/MM/yyyy')} </div>
                <FaArrowRightLong className='text-customRed text-[12px]'/>
                <div className='text-[13px] font-medium text-secondary'>
                                    {date[0].endDate ? (
                <div>{format(date[0].endDate, 'dd/MM/yyyy')}</div>
                )
                :(
                <div>{format(date[0].startDate, 'dd/MM/yyyy')}</div>
                    ) }
                </div>
            </div>
          </MenuButton>
          <MenuItems
            className="drodown-menu shadow-lg absolute -top-70 xl:top-[90px] 
            left-1/2 xl:left-0 z-50 transform -translate-x-1/2 xl:-translate-x-0 
            rounded-[10px] overflow-hidden"
          >
            <DateRange
              onChange={(item) => setDate([item.selection])}
              editableDateInputs={true}
              moveRangeOnFirstSelection={false}
              ranges={date}
              rangeColors={['#ed1d24']}
              minDate={addDays(new Date(), 0)}
            />
          </MenuItems>
        </div>
      </Menu>
    </div>
  );
};

export default DateSelection;