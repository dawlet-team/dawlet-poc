import * as Tone from 'tone';

class Synth {
  constructor() {
    this.synths = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(() => new Tone.Synth().toMaster());
  }

  play(score) {
    console.log('play ', score.frames);
    const loop = new Tone.Sequence(
      (time, frame) => {
        if (!frame) return;
        console.log(frame.notes);
        for (let i = 0; i < frame.notes.length; i++) {
          const note = frame.notes[i];
          console.log(time, note);
          this.synths[0].triggerAttackRelease(note.frequency, note.duration, time, note.velocity);
        }
      },
      score.frames,
      '8n'
    ).start(0);
    Tone.Transport.start();
  }
}

export default Synth;
