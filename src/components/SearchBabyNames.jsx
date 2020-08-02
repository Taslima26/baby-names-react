import React, {useState, useEffect} from 'react';
import data from '../Data/BabyNamesData.json';
import FetchBabyNames from './FetchBabyNames';

const SearchBabyNames = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = data.filter((baby) =>
      baby.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </form>
      <FetchBabyNames babyNames={searchResults} />
    </div>
  );
};

export default SearchBabyNames;
