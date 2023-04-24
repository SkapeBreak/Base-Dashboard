import React from 'react';
import { useNavigate } from 'react-router-dom';
import './hero.css';

export default function Hero() {
	const navigate = useNavigate();
	return (
		<div className='hero'>
			<h1>Hero</h1>
			<button onClick={() => navigate('/profile')}>Go to Profile</button>
		</div>
	);
}
