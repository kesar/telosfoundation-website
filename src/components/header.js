import React from 'react';
import '../styles/header.css';
import header_background from '../img/Telos_MarketingSite_Header_2400px_White.png';
import Navigation from './navigation';

const Header = () => {

	return (
		<header style={{backgroundImage: `url(${header_background})`}} className='main_header'>
			<Navigation />
		</header>
	);
};

export default Header;