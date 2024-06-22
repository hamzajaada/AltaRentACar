import React, { useState } from 'react';
import Select, { components } from 'react-select';
import { FaCaretDown } from 'react-icons/fa';

const categoryOptions = [
  { value: 'Mini', label: 'Mini' },
  { value: 'Economic', label: 'Economic' },
  { value: 'Standard', label: 'Standard' },
  { value: 'SUVs', label: 'SUVs' },
  { value: 'People Carriers', label: 'People Carriers' },
  { value: 'Luxury', label: 'Luxury' },
];

const Categorys = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="">
      <div className="text-[15px] uppercase font-bold">Category</div>
      <Select
        options={categoryOptions}
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

export default Categorys;
