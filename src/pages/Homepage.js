

import React from 'react';
<<<<<<< HEAD
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
=======
import Navbar from '../component.js/navbar';



function Homepage() {

    return (
        <div className='header'>
            <Navbar />

        </div>
    )
>>>>>>> db43ce2d161d679ad0e013dfa569645444374a53
}

export default Homepage