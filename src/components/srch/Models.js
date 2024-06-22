import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { FaCaretDown } from 'react-icons/fa';
const carModelOptions = [
  { value: 'AUDI', label: 'AUDI' },
  { value: 'MERCEDES', label: 'MERCEDES' },
  { value: 'BMW', label: 'BMW' },
  { value: 'MASERATI', label: 'MASERATI' },
  { value: 'PORSCHE', label: 'PORSCHE' },
  { value: 'VW', label: 'VW' },
  { value: 'FERRARI', label: 'FERRARI' },
  { value: 'LAMBORGHINI', label: 'LAMBORGHINI' },
  { value: 'LEXUS', label: 'LEXUS' },
  { value: 'FORD MUSTANG', label: 'FORD MUSTANG' },
  { value: 'CHEVROLET CAMARO', label: 'CHEVROLET CAMARO' },
  { value: 'TOYOTA', label: 'TOYOTA' },
  { value: 'RENAULT', label: 'RENAULT' },
  { value: 'FIAT', label: 'FIAT' },
  { value: 'SMART', label: 'SMART' },
  { value: 'PEUGEOT', label: 'PEUGEOT' },
  { value: 'SPECIAL OFFERS', label: 'SPECIAL OFFERS' },
  { value: 'TESLA', label: 'TESLA' },
  { value: 'ŠKODA', label: 'ŠKODA' },
  { value: 'BENTLEY', label: 'BENTLEY' },
  { value: 'RANGE ROVER', label: 'RANGE ROVER' },
  { value: 'HYUNDAI', label: 'HYUNDAI' },
];

const Models = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="">
      <div className="text-[15px] uppercase font-bold">Cars Models</div>
      <Select
        options={carModelOptions}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Select categories..."
        className="react-select-container w-[300px] text-[9px]"
        classNamePrefix="react-select"
        components={{ DropdownIndicator, MultiValue }}
      />
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <FaCaretDown className="text-gray-500" />
    </components.DropdownIndicator>
  );
};

const MultiValue = (props) => {
  return (
    <components.MultiValue {...props}>
      <span>{props.data.label}</span>
    </components.MultiValue>
  );
};

export default Models;
