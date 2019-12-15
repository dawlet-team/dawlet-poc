import React from 'react';
import * as Tone from "tone";

const notes = ["C4",  "C4", null,  "D#4",  "E4", null, "E#4", "G4", "G#4", "A4", "A#4" ];
const App = (props) => {
  const { synth } = props;
  const play = () => {
    const loop = new Tone.Sequence(function(time, note){
      console.log(time, note)
      if (note) {
        synth.triggerAttackRelease(note, "32n", time);
      }
    }, notes, "16n").start(0);
    Tone.Transport.start();
  };
  const stop = () => {
    Tone.Transport.stop();
  };
  return (
    <div>
      <h1>Core Dawlet</h1>
      <button onClick={play}>Play</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
};

export default App;
