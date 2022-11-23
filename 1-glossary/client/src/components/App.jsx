import {React, useState, useEffect} from 'react';
import AddWord from "./AddWord.jsx"
import Search from "./Search.jsx"
import WordList from "./WordList.jsx"
const axios = require('axios');

const App = () => {
  const [glossaryData, setGlossaryData] = useState([]);
  const [glossaryDisplay, setGlossaryDisplay] = useState([]);
  const [filteredGlossary, setFilteredGlossary] = useState([]);

  // Retrive word list on first load
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
      <AddWord setGlossaryData={setGlossaryData} setGlossaryDisplay={setGlossaryDisplay}/>
      <Search  glossaryData={glossaryData} setGlossaryDisplay={setGlossaryDisplay}/>
      <WordList glossaryDisplay={glossaryDisplay} />
    </div>
  );
}

export default App;