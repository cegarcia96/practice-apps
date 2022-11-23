import {React, useState, useEffect} from 'react';
const axios = require('axios');

const AddWord = ({ setGlossaryData, setGlossaryDisplay }) => {

  const [addForm, setAddForm] = useState({
    word: '',
    definition: ''
  });

  const handleAdd = (event) => {
    event.preventDefault();
    axios.post('/words', {word: addForm.word, definition: addForm.definition})
    .then(() => {
      return axios.get('/words')
    })
    .then((response) => {
      setGlossaryData(response.data);
      setGlossaryDisplay(response.data);
    })
    .catch(error => {
      console.log(error);
    })
    setAddForm({...addForm, word: '', definition: ''});
  }

  return (
    <div className="add-word-div">
      <h3>Add a word!</h3>
      <form onSubmit={(event) => handleAdd(event)}>
        <label>
          Word:
          <input type="text" value={addForm.word} onChange={(event) => {setAddForm({...addForm, word: event.target.value})}}></input>
        </label>
        <label>
          Definition:
          <input type="text" value={addForm.definition} onChange={(event) => {setAddForm({...addForm, definition: event.target.value})}}></input>
        </label>
        <input type="submit" value="Submit" onClick={(event) => handleAdd(event)}></input>
      </form>
    </div>
  )
}

export default AddWord;