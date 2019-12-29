import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { activateDawlet } from '../redux/modules/dawlets';

const Dawlets = props => {
  console.log(props);
  const { dawlets, activate } = props;
  return (
    <div>
      <h2>dawlet list</h2>
      <ul>
        {dawlets.map(name => (
          <li key={name}>
            <div>
              {name}
              <button onClick={activate(name)}>activate</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Dawlets.propTypes = {
  dawlets: PropTypes.arrayOf(PropTypes.string).isRequired,
  activate: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  dawlets: state.dawlets.availableDawlets,
});

const mapDispatchToProps = dispatch => ({
  activate: name => () => dispatch(activateDawlet(name)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dawlets);
