'use client';

import { usStatesList } from '@components/lib/usStatesList';
import { useState } from 'react';

const StateDropdown = () => {
  const [selectedState, setSelectedState] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  };

  return (
    <>
      <p>Select a State:</p>
      <select value={selectedState} onChange={handleChange}>
        <option value=''></option>
        {usStatesList.map((usState) => (
          <option key={usState} value={usState}>
            {usState}
          </option>
        ))}
      </select>
    </>
  );
};

export default StateDropdown;
