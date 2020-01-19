import React from 'react';
import { connect } from 'react-redux';
import { ScorePropType } from '../../../score';
import PropTypes from 'prop-types';
import { toggleNote } from '../redux/modules/score';

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'].reverse().map(n => `${n}4`);
const TICKS = [...new Array(16)].map((_, i) => i);

class App extends React.Component {
  render() {
    const { score, toggleNote } = this.props;
    if (!score) {
      return <div>loading</div>;
    }
    return (
      <div>
        <h1>Sequencer Dawlet</h1>
        <div className="container">
          {NOTES.map(note => (
            <div className="notes" key={`note-${note}`}>
              {TICKS.map(tick => {
                const frame = score.frames[tick];
                const isActive = frame.notes.findIndex(n => n.frequency === note) !== -1;
                return <div onClick={toggleNote(note, tick)} className={isActive ? 'active-note note' : 'note'} key={`${tick}-${note}`}></div>;
              })}
            </div>
          ))}
        </div>
        <style jsx>{`
          .notes {
            height: 50px;
            width: calc(50px * 16);
            border: 1px solid red;
            display: flex;
          }
          .active-note {
            background-color: red;
          }
          .note {
            content: ' ';
            height: 50px;
            width: 50px;
            opacity: 0.6;
            border: 1px solid green;
          }
        `}</style>
      </div>
    );
  }
}

App.propTypes = {
  score: ScorePropType,
  toggleNote: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  score: state.score.currentScore,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleNote: (note, tick) => () => dispatch(toggleNote(note, tick)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
