import PropTypes from 'prop-types';

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

const cloneScore = scoreObj => {
  return {
    name: scoreObj.name,
    frames: scoreObj.frames.map(f => ({
      notes: f.notes.map(({ frequency, duration, velocity }) => ({
        frequency,
        duration,
        velocity,
      })),
      tick: f.tick,
    })),
  };
};

const NotePropType = PropTypes.shape({
  frequency: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  duration: PropTypes.oneOf(['4n', '8n', '16n', '32n']).isRequired,
  velocity: PropTypes.number.isRequired,
});
const FramePropType = PropTypes.shape({
  notes: PropTypes.arrayOf(NotePropType).isRequired,
  tick: PropTypes.number.isRequired,
});
const ScorePropType = PropTypes.shape({
  frames: PropTypes.arrayOf(FramePropType).isRequired,
  name: PropTypes.string.isRequired,
});
export { Score, Frame, Note, ScorePropType, FramePropType, NotePropType, cloneScore };
