import React, { useState } from 'react';
import './navbar.css';
import images from '../../constants/images';

export default function NavBar() {
	const [extended, setExtended] = useState(false);
	const toggleNav = () => {
		setExtended(!extended);
	};
	return (
		<nav className={`navbar ${extended ? 'big' : 'small'}`}>
			<div className='navHeader'>
				<div className='logoWrapper'>
					<img src={images.Logo} alt='Logo' />
				</div>
				{extended ? <h4>Xen-Wellness</h4> : ''}
			</div>
			<div className='navLinks'>
				<div className={`${extended ? 'bigSection' : 'smallSection'}`}>
					{extended ? (
						<ul>
							<li>Account</li>
							<li>Account</li>
							<li>Account</li>
						</ul>
					) : (
						<>
							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>
						</>
					)}
				</div>
				<div className={`${extended ? 'bigSection' : 'smallSection'}`}>
					{extended ? (
						<ul>
							<li>Account</li>
							<li>Account</li>
							<li>Account</li>
						</ul>
					) : (
						<>
							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>
						</>
					)}
				</div>
				<div className={`${extended ? 'bigSection' : 'smallSection'}`}>
					{extended ? (
						<ul>
							<li>Account</li>
							<li>Account</li>
							<li>Account</li>
						</ul>
					) : (
						<>
							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>

							<div className='iconWrapper'>
								<img src={images.AddDocIcon} alt='Icon' />
							</div>
						</>
					)}
				</div>
			</div>
			<div className='expandButton'>
				<button type='button' onClick={() => toggleNav()}>
					<span>{extended ? 'Collapse' : '>>>'}</span>
				</button>
			</div>
		</nav>
	);
}
