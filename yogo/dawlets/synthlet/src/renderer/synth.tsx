import React, { FC } from 'react'
import * as Tone from 'tone'

//create a synth and connect it to the master output (your speakers)
const synth = new Tone.Synth().toDestination();

export const Synth: FC = () => {
  const onClick = () => {
  //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease("C4", "8n");


  }
  return (
    <button onClick={onClick}>Play</button>
  )
}