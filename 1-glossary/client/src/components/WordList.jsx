import {React, useState, useEffect} from 'react';

const WordList = ({ glossaryDisplay }) => {
  return (
    <div className="word-list">
      <table>
        <tbody>
          <tr>
            <th>Word</th>
            <th>Definition</th>
          </tr>
          {glossaryDisplay.map((word, index) => {
            return (
              <tr key={index}>
                <td>{word.word}</td>
                <td>{word.definition}</td>
                <td><button>Edit/delete</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WordList;