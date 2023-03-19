import React from 'react';
import Navbar from './navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


function Homepage() {
  return (
    <div className='header'>
      <Navbar/>
      <div className="play">
      <FontAwesomeIcon icon={faPlay} className="playy"></FontAwesomeIcon>
        <p>Play All</p>
      </div>
    </div>
  )
}

export default Homepage