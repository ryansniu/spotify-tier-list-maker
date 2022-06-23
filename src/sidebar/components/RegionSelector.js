import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import CountryCodes from './CountryCodes';

const RegionSelector = (props) => {
  const [region, setRegion] = useState(sessionStorage.getItem('region') === null ? "US" : sessionStorage.getItem('region'));
  sessionStorage.setItem('region', region);

  const handleInputChange = (event) => {
    const region = event.target.value;
    sessionStorage.setItem('region', region);
    setRegion(region);
  };
  
  return (
    <div>
      <Form.Select
        id="region-selector"
        aria-label="Spotify Region Selector"
        size="sm"
        value={region}
        onChange={handleInputChange}
      >
        {CountryCodes.map((cc) => {
            return (<option className="region-selector-option" key ={cc} value={cc}>{cc}</option>);
        })}
      </Form.Select>
    </div>
  );
};

export default RegionSelector;