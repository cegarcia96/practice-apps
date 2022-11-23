import {React, useState, useEffect} from 'react';

const Search = ({ glossaryData, setGlossaryDisplay }) => {

  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    setGlossaryDisplay(glossaryData.filter((wordObject) => {
      return wordObject.word.includes(searchText.toLowerCase());
    }))
  }

  return (
    <div className="search-div">
      <input
      type="text"
      placeholder="search..."
      onChange={(event) => setSearchText(event.target.value)}>
      </input><button onClick={handleSearch}className="search-button">Search!</button>
    </div>
  )
}

export default Search;