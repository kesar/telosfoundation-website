import React from 'react';
import header_background from '../img/Telos_MarketingSite_Header_2400px_White.png';
import header_background_mobile from '../img/telos_mobile_header_top.png';
import header_background_mobile_bottom from '../img/telos_mobile_header_bottom.png';
import Navigation from './navigation';
import '../styles/header.css';

const Header = () => {

	return (
		<div>
			<header style={{backgroundImage: `url(${header_background})`}} className='main_header'>
				<Navigation />
			</header>
			<header style={{backgroundImage: `url(${header_background_mobile})`}} className='main_header_mobile'>
				<Navigation />
				<span style={{backgroundImage: `url(${header_background_mobile_bottom})`}} className='header_mobile_bottom'></span>
			</header>
		</div>
	);
};

export default Header;