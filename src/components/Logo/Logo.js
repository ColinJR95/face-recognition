import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import animation from './animation.PNG'

const Logo = () => {
	return (
<div className='ma4 mt0'>
	<Tilt className="Tilt br2" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
 	<div className="Tilt-inner pa3">
 	<em>J</em>
	  <em className="">C</em>
	  <em>O</em>
	  <em>L</em>
	  <em className="">I</em>
	  <em>N</em> 
	  <img style={{paddingTop: '5px'}}alt='logo' src={animation}/>
	 </div>
	  </Tilt>

</div> 
	);
}

export default Logo; 