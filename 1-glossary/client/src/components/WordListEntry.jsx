import {React, useState, useEffect} from 'react';
import EditForm from './EditForm.jsx';

const WordListEntry = ({ glossaryDisplay, word, setGlossaryData, setGlossaryDisplay, searchText, handleSearch }) => {

  const [editState, setEditState] = useState(false);

  const toggleEditState = () => {
    editState ? setEditState(false) : setEditState(true);
  }

  return (
    <tr>
      <td>{word.word}</td>
      <td>{word.definition}</td>
      <td>{editState ? null : <button onClick={toggleEditState}>Edit/Delete</button>}
      {editState ? <EditForm word={word} toggleEditState={toggleEditState} setGlossaryData={setGlossaryData} setGlossaryDisplay={setGlossaryDisplay} searchText={searchText} handleSearch={handleSearch} /> : null}
      </td>

    </tr>
  )
}

export default WordListEntry;