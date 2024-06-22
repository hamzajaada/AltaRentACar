import { useContext } from 'react';
import { SearchContext } from '../../context/search';
import DateSelection from './DateSelection';
import Categorys from './Categorys';
import Features from './Features';
import Models from './Models';

export default function Search() {
  const { searchActive } = useContext(SearchContext);

  return (
    <div
      className={`${
        searchActive ? 'bg-white rounded-none xl:h-[90px]' : 'bg-white rounded-[20px] py-5 xl:pr-4 xl:h-auto'
      } hidden xl:block w-full relative shadow-lg`}
    >
      <div className='flex h-full 
          flex-col xl:flex-row items-center px-6 xl:px-0 justify-between space-y-4 xl:space-y-0'>
        <DateSelection />
        <div className="flex flex-col xl:flex-row xl:space-x-4">
          <Categorys />
          <Models />
        </div>
        <div className="flex flex-col xl:flex-row xl:space-x-4 items-center pr-10 ">
          <button 
          className={`${
            searchActive ? 'btn btn-sm btn-accent w-full xl:w-[100px] text-sm' : 'btn btn-sm btn-accent w-full xl:w-[120px] text-sm'
          }`}>
            Search
          </button>
          <button  className={`${
            searchActive ? 'btn btn-lg btn-accent w-full xl:w-[130px] text-sm px-[100px]' : ' px-[100px] btn btn-lg btn-accent w-full xl:w-[140px] text-sm'
          }`}>
            Advanced Search
          </button>
        </div>
        
      </div>
    </div>
  );
}
