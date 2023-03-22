'use client';

import { usStatesList } from '@components/models/usStatesList';
import { useState } from 'react';

const FilingStatusDropdown = () => {
  const [selectedState, setSelectedState] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

export default FilingStatusDropdown;
