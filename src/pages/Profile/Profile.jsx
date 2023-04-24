import React from 'react';
import { NavBar } from '../../components';
import { Hero, About } from '../../sections';

export default function Profile() {
	return (
		<>
			<div style={{ maxWidth: '100dvw', height: '100dvh' }}>
				<NavBar />
				<About />
			</div>
		</>
	);
}
