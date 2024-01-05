import React, { useState } from 'react';
import { InputGroup, Form } from 'react-bootstrap';

// country code regex
const CC_REGEX = /^[a-z]{2}$/i;

// offset between uppercase ascii and regional indicator symbols
const OFFSET = 127397;

const countryCodetoFlag = (cc) => {
  if (!CC_REGEX.test(cc)) {
    const type = typeof cc;
    throw new TypeError(
      `cc argument must be an ISO 3166-1 alpha-2 string, but got '${
        type === 'string' ? cc : type
      }' instead.`,
    );
  }

  const codePoints = [...cc.toUpperCase()].map(c => c.codePointAt() + OFFSET);
  return String.fromCodePoint(...codePoints);
}

// the code above is derived from https://github.com/thekelvinliu/country-code-emoji/blob/main/src/index.js

const SearchForm = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [flag, setFlag] = useState(sessionStorage.getItem('region') !== null ? countryCodetoFlag(sessionStorage.getItem('region')) : '🌐');

  const handleInputChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchTerm.trim() !== '') {
      setFlag(countryCodetoFlag(sessionStorage.getItem('region')));
      sessionStorage.setItem('regionLocked', sessionStorage.getItem('region'));
      props.handleSearch(searchTerm);
    }
  };
  
  return (
    <div>
      <Form onSubmit={handleSearch}>
        <InputGroup>
          <Form.Control
            type="search"
            name="searchTerm"
            value={searchTerm}
            placeholder="Search here!"
            onChange={handleInputChange}
            autoComplete="off"
          />
          <InputGroup.Text id="search-flag">{flag}</InputGroup.Text>
        </InputGroup>
      </Form>
    </div>
  );
};

export default SearchForm;