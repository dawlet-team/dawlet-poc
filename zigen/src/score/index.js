const generateId = (() => {
  let i = 0;
  return prefix => {
    return `${prefix}-${++i}`;
  };
})();

class Score {
  constructor(name = 'untitled') {
    this.frames = [];
    this.name = name;
  }
}

class Frame {
  constructor(notes, tick = 0) {
    this.notes = notes;
    this.tick = tick;
  }
}

class Note {
  constructor(freq, duration = '8n', velocity = 1) {
    this.frequency = freq;
    this.duration = duration;
    this.velocity = velocity;
  }
}
export { Score, Frame, Note };
