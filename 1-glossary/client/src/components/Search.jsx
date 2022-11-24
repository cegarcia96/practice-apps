import {React, useState, useEffect} from 'react';

const Search = ({ searchText, setSearchText, handleSearch, glossaryData }) => {

  return (
    <div className="search-div">
      <input
      type="text"
      placeholder="search..."
      onChange={(event) => setSearchText(event.target.value)}>
      </input><button onClick={() => handleSearch(searchText, glossaryData)}className="search-button">Search!</button>
    </div>
  )
}

export default Search;