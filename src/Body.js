import './Body.css';
import React from 'react';
import GradientImg from './img/gradient.png';


function Body() {
	return (
		<div className="fullpage">
			<img id="gimage" src={GradientImg} alt=""/>
		<div className="bodycontent">
		<div className="firstpage">
		<div className="title">
			<p id="maintitle">Oscar Coghlan</p>
			<p id="subsubtitle">Software engineering student with a passion for coding</p>
			<a href="#About" className="buttonStyle">learn more</a>
			<p className="pb15vh"> </p>
		</div>
		</div>
		<div className="divwhitespace78" id="About"> &nbsp; </div>
			<p className="contentBox"><h2>About Me:</h2>
				Hi! I'm Oscar. I really love messing around with computers and creating cool things with them. My language of choice is C (C++ when I feel like it), and I have experience in Python, Java, rust, and C#. I am also well versed in web development, with experience in PHP, CSS, and JavaScript. <br/> <br/>
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/><br/> I’m currently open to job opportunities so please feel free to email or connect with me via LinkedIn.

		<br/>
		<br/>
		<br/>
		Some stuff
		<div className="divwhitespace78" id="Projects"> &nbsp; </div>
		<h2>My Work:</h2>
			</p>
		</div>
		</div>
	);
}

export default Body;
