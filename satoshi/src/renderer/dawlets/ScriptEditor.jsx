// @flow
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Note as NoteClass } from '../score/models/Note';
import { getScore } from '../redux/interactors/getScore';

const evaluate = (script) => {
  const Note = NoteClass;
  const score = getScore();
  return eval(script);
};

export const ScriptEditor = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
    // console.log('user input: ', evaluate(event.target.value));
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
