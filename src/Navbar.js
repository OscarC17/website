import './Navbar.css';
import React from 'react';


function Navbar() {
	return (
		<nav className="Navbar">
		<a href="/index.js">Home</a> &nbsp;&nbsp; <a href="blog.js">Blog</a>
		<span className="RightAlign">
		<a href="#About">About</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="#Projects">Projects</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="#Experience">Experience</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="#Contact">Contact</a>&nbsp;&nbsp;&nbsp;&nbsp;
		|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="./oscarcresume.pdf">Resume</a>
		</span>
		</nav>
	);
}

export default Navbar;
