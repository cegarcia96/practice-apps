import {React, useState, useEffect} from 'react';
import WordListEntry from './WordListEntry.jsx'

const WordList = ({ glossaryDisplay, setGlossaryData, setGlossaryDisplay, searchText, handleSearch }) => {

  return (
    <div className="word-list">
      <table>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Definition</th>
          </tr>
          {glossaryDisplay.map((word, index) => (
            <WordListEntry key={index} word={word} setGlossaryData={setGlossaryData} setGlossaryDisplay={setGlossaryDisplay} searchText={searchText} handleSearch={handleSearch}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WordList;