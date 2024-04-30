import React, { useState, useEffect } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CountryCodes from './CountryCodes';

const RegionSelector = () => {
  const [region, setRegion] = useState(() => {
    const storedRegion = sessionStorage.getItem('region');
    return storedRegion || 'US';
  });

  sessionStorage.setItem('region', region);

  useEffect(() => {
    sessionStorage.setItem('region', region);
  }, [region]);

  const handleInputChange = (event) => {
    setRegion(event.target.value);
  };
  
  return (
    <div>
      <OverlayTrigger
        placement={'left'}
        overlay={<Tooltip>Select Region</Tooltip>}
      >
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
      </OverlayTrigger>
    </div>
  );
};

export default RegionSelector;