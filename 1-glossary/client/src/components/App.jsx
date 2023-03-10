import {React, useState, useEffect} from 'react';
import AddWord from "./AddWord.jsx"
import Search from "./Search.jsx"
import WordList from "./WordList.jsx"
const axios = require('axios');

const App = () => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [glossaryDisplay, setGlossaryDisplay] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSearch = (searchText, data) => {
    setGlossaryDisplay(data.filter((wordObject) => {
      return wordObject.word.includes(searchText.toLowerCase());
    }))
  }

  // Retrieve word list on first load
  useEffect(() => {
    axios.get('/words')
    .then(entries => {
      setGlossaryData(entries.data)
      setGlossaryDisplay(entries.data)
    })
    .catch('Could not retrieve words');
  }, []);

  return (
    <div>
      <h2>Glossary</h2>
      <AddWord setGlossaryData={setGlossaryData} setGlossaryDisplay={setGlossaryDisplay} searchText={searchText} handleSearch={handleSearch}/>
      <Search  searchText={searchText} setSearchText={setSearchText} handleSearch={handleSearch} glossaryData={glossaryData} />
      <WordList glossaryDisplay={glossaryDisplay} setGlossaryData={setGlossaryData} setGlossaryDisplay={setGlossaryDisplay} searchText={searchText} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;