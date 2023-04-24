import React from 'react';
import { useNavigate } from 'react-router-dom';
import './about.css';

export default function About() {
	const navigate = useNavigate();
	return (
		<div className='about'>
			<h1>About</h1>
			<button onClick={() => navigate('/')}>Go to Home</button>
		</div>
	);
}
