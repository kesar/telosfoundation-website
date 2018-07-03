import React from 'react';
import Navigation from './navigation';
import header_logo from '../img/telos_logo.png';
import header_logo_retina from '../img/telos_logo2x.png';
import {withRouter} from 'react-router-dom';

const Header = (props) => {
	return (
		<header className='main_header'>
			<Navigation />
			<img src={header_logo} onClick={() => props.history.push('/')} className='img-responsive header_logo' alt='' srcSet={`${header_logo} 1x, ${header_logo_retina} 2x`} />
		</header>
	);
};

export default withRouter(Header);