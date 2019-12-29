import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Tone from 'tone';

const notes = ['C4', 'C4', 'D#4', 'E4', 'E#4', 'G4', 'G#4', 'A4', 'A#4'];
import { Score, Note, Frame } from '../../score';
const score = new Score();
for (let i = 0; i < 16; i++) {
  score.frames.push(new Frame([new Note(notes[Math.floor(Math.random() * notes.length)], '16n')], i));
}

const Transport = props => {
  const { synth } = props;
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const setPlayingFalse = () => setPlaying(false);
    Tone.Transport.on('stop', setPlayingFalse);
    Tone.Transport.on('pause', setPlayingFalse);
    return function cleanup() {
      Tone.Transport.off('stop', setPlayingFalse);
      Tone.Transport.off('pause', setPlayingFalse);
    };
  });
  const play = () => {
    setPlaying(true);
    synth.play(score);
  };
  const stop = () => {
    setPlaying(false);
    Tone.Transport.stop();
  };
  return (
    <div>
      <h1>Core Dawlet</h1>
      <button disabled={playing} onClick={play}>
        Play
      </button>
      <button disabled={!playing} onClick={stop}>
        Stop
      </button>
    </div>
  );
};

export default Transport;
