import './Body.css';
import React from 'react';
import GradientImg from './img/gradient.png';


function Body() {
	return (
		<div className="fullpage">
			<img id="gimage" src={GradientImg} alt=""/>
		<div className="bodycontent">
		<div className="title">
			<h1>Oscar Coghlan</h1>
			<h2>(Aspiring) Software Developer</h2>
		</div>
			<p id="About" className="contentBox">About:<br/>
				Hi! I'm Oscar. I really love messing around with computers and creating cool things with them. My language of choice is C (C++ when I feel like it), and I have experience in Python, Java, rust, and C#. I am also well versed in web development, with experience in PHP, CSS, and JavaScript - in fact, this very website is my creation (shocking, I know). Scroll down a bit and you can have a look at some of the things I've made.
			</p>
		</div>
		</div>
	);
}

export default Body;
