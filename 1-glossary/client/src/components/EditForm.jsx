import {React, useState, useEffect} from 'react';
const axios = require('axios');

const EditForm = ({ word, toggleEditState, setGlossaryData, setGlossaryDisplay, searchText, handleSearch }) => {

  const [newDefinition, setNewDefinition] = useState('');

  const handleUpdate = (event) => {
    event.preventDefault();
    toggleEditState();
    if (newDefinition.length < 1) {
      return;
    }
    axios.patch('/words', { word, newDefinition
    })
    .then(() => {
      return axios.get('/words')
    })
    .then ((response) => {
      setGlossaryData(response.data);
      handleSearch(searchText, response.data)
    })
    .catch((error => {
      console.log(error);
    }))
  }

  const handleDelete = (event) => {
    event.preventDefault();
    toggleEditState();
    axios({
      method: 'delete',
      url: '/words',
      data: word
    })
    .then(() => {
      return axios.get('/words')
    })
    .then ((response) => {
      setGlossaryData(response.data);
      handleSearch(searchText, response.data)
    })
    .catch((error => {
      console.log(error);
    }))
  }

  return (
    <form>
      <label>
        Update Definition:
        <input type="text" value={newDefinition} onChange={(event) => setNewDefinition(event.target.value)}></input>
      </label>
      <input type="submit" value="Update Definition" onClick={(event) => handleUpdate(event)}></input>
      <input type="submit" value="Delete Word?" onClick={(event) => handleDelete(event)}></input>
    </form>
  )
}

export default EditForm;