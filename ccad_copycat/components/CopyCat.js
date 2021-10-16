// ! PRESENTATIONAL COMPONENT CLASS (JSX ONLY - FOR DISPLAY)

import React from 'react';
import { styles } from '../styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};


export class CopyCat extends React.Component {
  render() {
    // const copying = this.props.copying;
    // const toggleTape = this.props.toggleTape
    // * USING OBJECT DESTRUCTURING:
    const { copying, toggleTape, value, handleChange, name } = this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: '80px', textAlign: 'center'}}>
          Copy Cat
          <br/> {name || 'Pipiya'}
        </h1>
        <input
          placeholder='meoww...'
          type='text'
          value={value}
          onChange={handleChange}
        />
        <img 
          style={styles.imgStyles}
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying:      PropTypes.bool.isRequired,
  toggleTape:   PropTypes.func.isRequired,
  value:        PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name:         PropTypes.string
}