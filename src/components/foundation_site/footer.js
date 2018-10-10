import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import PrivacyPolicyModal from '../modals/privacy_policy_modal';
import background from '../../img/foundation_site/footer_background.png';
import svg_background from '../../img/foundation_site/TFG_Header_Footer.svg';
import logo_wire from '../../img/foundation_site/logo_wire.png';
import '../../styles/foundation_site/footer.css';

const footerStyle = {
	backgroundImage: `url(${svg_background})`
};

class Footer extends Component {
	constructor(){
		super();
		this.state = {
			policyModalOpen: false
		};
	}

	render(){
		const {policyModalOpen} = this.state;
		return (
			<footer
				className='foundation_footer'
			>
				<Grid fluid>
					<div className='footer_row'>
						<div className='social_links'>
							<ul>
								<li><a href='https://twitter.com/HelloTelos' target='_blank' rel='noopener noreferrer'><i className='fa fa-twitter'></i></a></li>
								<li><a href='https://t.me/HelloTelos' target='_blank' rel='noopener noreferrer'><i className='fa fa-telegram'></i></a></li>
								<li><a href='https://github.com/Telos-Foundation' target='_blank' rel='noopener noreferrer'><i className='fa fa-github'></i></a></li>
								<li><a href='https://www.youtube.com/c/TheTelosNetwork' target='_blank' rel='noopener noreferrer'><i className='fa fa-youtube'></i></a></li>
								<li><a href='https://www.facebook.com/TelosFoundation.io/' target='_blank' rel='noopener noreferrer'><i className='fa fa-facebook'></i></a></li>
							</ul>
						</div>
						<div className='footer_logo'>
							<img src={logo_wire} alt='footer logo' />
						</div>
						<div className='inline_links'>
							<ul>
								<li>
									<a 
										href='#'
										onClick={e => {
											e.preventDefault();
											this.setState({policyModalOpen: true});
											console.log(this.state.policyModalOpen);
										}}
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a href='mailto:hello@telosfoundation.io'>hello@telosfoundation.io</a>
								</li>
							</ul>
						</div>
					</div>
				</Grid>
				<div className='footer_background' style={footerStyle}></div>
				<PrivacyPolicyModal show={policyModalOpen} onHide={() => this.setState({policyModalOpen: false})} />
			</footer>
		);
	}
}

export default Footer;