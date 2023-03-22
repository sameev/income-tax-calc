'use client';

import { filingStatusList } from '@components/models/filingStatusList';
import { useState } from 'react';

const FilingStatusDropdown = () => {
  const [filingStatus, setFilingStatus] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilingStatus(event.target.value);
  };

  return (
    <>
      <p>Select a Filing Option:</p>
      <select value={filingStatus} onChange={handleChange}>
        <option value=''></option>
        {filingStatusList.map((filingStatus) => (
          <option key={filingStatus} value={filingStatus}>
            {filingStatus}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilingStatusDropdown;
