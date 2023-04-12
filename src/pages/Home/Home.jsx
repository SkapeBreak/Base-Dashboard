import React from 'react';
import { Hero } from '../../sections';
import { NavBar } from '../../components';

export default function Home() {
	return (
		<>
			<div className='mainRowFlex'>
				<NavBar />
				<Hero />
			</div>
		</>
	);
}
