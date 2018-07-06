import React from 'react';
import telos_icon from '../img/Telos_Icon_500px.png';
import FooterSocial from './footer_social';

const Footer = () => {

	return (
		<footer className='main_footer'>
			<div className='footer_content'>
				<FooterSocial />
				<img src={telos_icon} alt='' className='img-responsive telos_icon' />
				<ul className className='footer_links'>
					<li><a href='#'>Terms of Use</a></li>
					<li><a href='#'>Privacy Policy</a></li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;