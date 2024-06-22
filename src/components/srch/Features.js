import React, { useState } from 'react';
import Select from 'react-select';
import { FaCaretDown } from 'react-icons/fa';

const featureOptions = [
  { value: '2_DOORS', label: '2 DOORS' },
  { value: '2_PASSENGERS', label: '2 PASSENGERS' },
  { value: '3_DOORS', label: '3 DOORS' },
  { value: '4_DOORS', label: '4 DOORS' },
  { value: '4_PASSENGERS', label: '4 PASSENGERS' },
  { value: '5_DOORS', label: '5 DOORS' },
  { value: '5_PASSENGERS', label: '5 PASSENGERS' },
  { value: '7_PASSENGERS', label: '7 PASSENGERS' },
  { value: '8_PASSENGERS', label: '8 PASSENGERS' },
  { value: '9_PASSENGERS', label: '9 PASSENGERS' },
  { value: 'AIR_CONDITION', label: 'AIR CONDITION' },
  { value: 'AUTOMATIC', label: 'AUTOMATIC' },
  { value: 'CABRIOLET', label: 'CABRIOLET' },
  { value: 'DIESEL', label: 'DIESEL' },
  { value: 'ELECTRIC', label: 'ELECTRIC' },
  { value: 'GASOLINE', label: 'GASOLINE' },
  { value: 'HYBRID', label: 'HYBRID' },
  { value: 'MANUAL', label: 'MANUAL' },
];

const Features = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  return (
    <div className="w-full max-w-md mx-auto">
     <div className="text-[15px] uppercase font-bold">Features</div>
     <div className=''>
     <Select
        options={featureOptions}
        isMulti
        value={selectedOptions}
        onChange={handleChange}
        placeholder="Select features..."
        className="react-select-container"
        classNamePrefix="react-select"
        components={{ DropdownIndicator }}
      />
     </div>
     
    </div>
  );
};

const DropdownIndicator = (props) => {
  return (
    <div className="react-select__dropdown-indicator">
      <FaCaretDown className="text-gray-500" />
    </div>
  );
};

export default Features;
