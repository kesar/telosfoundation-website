import React from 'react';
import {Grid} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import svg_background from '../../img/foundation_site/TFG_Header_Footer.svg';
import logo from '../../img/Telos_MarketingSite_TelosIcon_334px.png';
import '../../styles/foundation_site/header.css';

const headerStyle = {
	backgroundImage: `url(${svg_background})`
};

const Header = () => {
	return (
		<header
			className='foundation_header'
			style={headerStyle}
		>
			<Grid fluid>
				<div className='content_container'>
					<Link to='/'>
						<img src={logo} alt='logo' className='logo'/>
					</Link>
				</div>
			</Grid>
		</header>
	);
};

export default Header;