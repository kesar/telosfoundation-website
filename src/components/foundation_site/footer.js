import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import background from '../../img/foundation_site/footer_background.png';
import logo_wire from '../../img/foundation_site/logo_wire.png';
import '../../styles/foundation_site/footer.css';

const footerStyle = {
	backgroundImage: `url(${background})`
};

const Footer = () => {
	return (
		<footer
			className='foundation_footer'
			style={footerStyle}
		>
			<Grid fluid>
				<div className='footer_row'>
					<div className='social_links'>
						<ul>
							<li><a href='#'><i className='fa fa-twitter'></i></a></li>
							<li><a href='#'><i className='fa fa-twitter'></i></a></li>
						</ul>
					</div>
					<div className='footer_logo'>
						<img src={logo_wire} alt='footer logo' />
					</div>
					<div className='inline_links'>
						<ul>
							<li><a href='#'>Privacy Policy</a></li>
						</ul>
					</div>
				</div>
			</Grid>
		</footer>
	);
};

export default Footer;