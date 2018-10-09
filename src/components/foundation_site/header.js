import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import background from '../../img/foundation_site/header_background.png';
import logo from '../../img/Telos_MarketingSite_TelosIcon_334px.png';
import '../../styles/foundation_site/header.css';

const headerStyle = {
	backgroundImage: `url(${background})`
};

const Header = () => {
	return (
		<header
			className='foundation_header'
			style={headerStyle}
		>
			<Grid fluid>
				<a href='https://telosfoundation.io'>
					<img src={logo} alt='logo' className='logo'/>
				</a>
			</Grid>
		</header>
	);
};

export default Header;