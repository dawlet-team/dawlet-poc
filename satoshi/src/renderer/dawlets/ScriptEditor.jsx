// @flow
import React from 'react';
import TextField from '@material-ui/core/TextField';
import getFromContainer from '../core/getFromContainer';
import { Score } from '../score/Score';
import { Note as NoteClass } from '../score/models/Note';

const evaluate = (script) => {
  const Note = NoteClass;
  const score = getFromContainer(Score);
  return eval(script);
};

export const ScriptEditor = () => {
  const handleChange = event => {
    console.log('user input: ', evaluate(event.target.value));
  };
  return (
    <div className="dawlet">
      <h1>Script Editor</h1>
      <TextField
        id="outlined-multiline-static"
        multiline
        rows="6"
        defaultValue="Code here!"
        variant="outlined"
        fullWidth={true}
        onChange={handleChange}
      />
    </div>
  );
};
