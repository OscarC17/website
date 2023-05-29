import './Navbar.css';
import QuickLink from './QuickLink';
import React from 'react';


function Navbar() {
	return (
		<nav className="Navbar">
        ~/website/src/index.js
		<span className="RightAlign">
		<QuickLink text={'About'} dest={'#About'} /> &nbsp;&nbsp; 
		<QuickLink text={'Projects'} dest={'#Projects'} /> &nbsp;&nbsp; 
		<QuickLink text={'Experience'} dest={'#Experience'} /> &nbsp;&nbsp;
		<QuickLink text={'Contact'} dest={'#Contact'} />
		</span>
		</nav>
	);
}

export default Navbar;
