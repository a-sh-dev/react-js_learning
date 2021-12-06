import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ displayValue }) {
  return <div className="display-container"></div>;
}

Display.propTypes = { displayValue: PropTypes.string.isRequired };
