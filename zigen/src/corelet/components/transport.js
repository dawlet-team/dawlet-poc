import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as Tone from 'tone';
import PropTypes from 'prop-types';
import { play, pause } from '../redux/modules/player';

const Transport = props => {
  const { loading, playing, play, pause } = props;
  // const [playing, setPlaying] = useState(false);
  // useEffect(() => {
  //   const setPlayingFalse = () => setPlaying(false);
  //   Tone.Transport.on('stop', setPlayingFalse);
  //   Tone.Transport.on('pause', setPlayingFalse);
  //   return function cleanup() {
  //     Tone.Transport.off('stop', setPlayingFalse);
  //     Tone.Transport.off('pause', setPlayingFalse);
  //   };
  // });
  // const play = () => {
  //   setPlaying(true);
  //   synth.play(score);
  // };
  // const stop = () => {
  //   setPlaying(false);
  //   Tone.Transport.stop();
  // };
  return (
    <div>
      {loading ? (
        <div>loading</div>
      ) : (
        <div>
          <button disabled={playing} onClick={play}>
            Play
          </button>
          <button disabled={!playing} onClick={pause}>
            Stop
          </button>
        </div>
      )}
    </div>
  );
};

Transport.propTypes = {};
const mapStateToProps = state => ({
  playing: state.player.playing,
});
const mapDispatchToProps = dispatch => ({
  play: () => dispatch(play()),
  pause: () => dispatch(pause()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Transport);
