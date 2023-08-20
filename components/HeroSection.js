import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './styles.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>The future is exciting</h1>
      <p>Are you ready?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        {/* <button
          className='button-style button-outline'
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </button> */}

      </div>
    </div>
  );
}

export default HeroSection;