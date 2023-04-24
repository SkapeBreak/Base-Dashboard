import React from 'react';
import { About, Hero } from '../../sections';
import { NavBar } from '../../components';

export default function Home() {
	return (
		<>
			{/* <div className='mainRowFlex'> */}
			<NavBar />
			<div style={{ maxWidth: '100dvw', height: '100dvh' }}>
				<Hero />
				<About />
			</div>
			{/* </div> */}
		</>
	);
}
