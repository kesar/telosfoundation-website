import React, {Component} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../img/Telos_MarketingSite_TelosLogo_500px.png';
import '../styles/hamburgers.css';
import '../styles/navigation.css';
import LanguageToggleDesktop from './language_toggle_desktop';
import LanguageToggle from './language_toggle_mobile';
import {withRouter} from 'react-router-dom';
import {toggleSideNav} from '../actions';
import {connect} from 'react-redux';

class Navigation extends Component {

	constructor(props){
		super(props);

		this.state = {
			mobileOpen: false
		};
		this.handleToggleClick = this.handleToggleClick.bind(this);

	}

	handleToggleClick(){
		this.setState({mobileOpen: !this.state.mobileOpen});
	}

	//close navbars when item clicked
	handleCloseNav(){
		this.props.toggleSideNav(false);
		this.setState({mobileOpen: false});
	}

	render(){
		const {side_nav_open} = this.props;
		const {mobileOpen} = this.state;

		return (
			<Navbar
				fluid={true}
				expanded={mobileOpen}
				onToggle={() => {}}
			>
			  <Navbar.Header>
			    <Navbar.Toggle onClick={this.handleToggleClick} />
			    <Navbar.Brand>
			      <a 
			      	href='/'
			      	onClick={e => {
			      		e.preventDefault();
			      		this.props.history.push('/');
			      		this.handleCloseNav();
			      	}}
			      >
			      	<img src={logo} alt='logo' className='logo' />
			      </a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Navbar.Collapse>
				<Nav pullRight>
					<LanguageToggleDesktop />
					<LanguageToggle />
					<li>
						<a href='https://medium.com/@teloslogical'>BLOG</a>
					</li>			
					<li>
						<a href="http://testnet.telosfoundation.io/">TESTNET</a>
					</li>
					<li className='rewards_nav_item'>
						<a
							href="/rewards"
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/rewards');
								this.handleCloseNav();
							}}
						>
							REWARDS
						</a>
					</li>
					<button 
						className={`hamburger hamburger--spin ${side_nav_open ? 'is-active' : ''}`} 
						type="button"
						onClick={() => {
							if(!side_nav_open){
								this.props.toggleSideNav(true);
							}else{
								this.props.toggleSideNav(false);
							}
						}} >
					  <span className="hamburger-box">
					    <span className="hamburger-inner"></span>
					  </span>
					</button>
					<li className='side_nav_item_mobile'>
						<a 
							href='/launch' 
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/launch');
								this.handleCloseNav();
							}}
						>
							LAUNCH CHECKLIST
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/candidates'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/candidates');
								this.handleCloseNav();
							}}
						>
							BP CANDIDATES
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/governance'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/governance');
								this.handleCloseNav();
							}}
						>
							GOVERNANCE
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/arbitrators'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/arbitrators');
								this.handleCloseNav();
							}}
						>
							ARBITRATOR PROGRAM
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/dapps'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/dapps');
								this.handleCloseNav();
							}}
						>
							DAPP DEVELOPMENT
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/downloads'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/downloads');
								this.handleCloseNav();
							}}
						>
							DOWNLOADS
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/recovery'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/recovery');
								this.handleCloseNav();
							}}
						>
							TOKEN RECOVERY
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/iwantmytlos'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/iwantmytlos');
								this.handleCloseNav();
							}}
						>
							#IWANTMYTLOS
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/foundation'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/foundation');
								this.handleCloseNav();
							}}
						>
							FOUNDATION
						</a>
					</li>
					<li className='side_nav_item_mobile'>
						<a
							href='/faq'
							onClick={e => {
								e.preventDefault();
								this.props.history.push('/faq');
								this.handleCloseNav();
							}}
						>
							FAQ
						</a>
					</li>
				</Nav>
			  </Navbar.Collapse>
			</Navbar>
		);
	}
}

function mapStateToProps(state){
	return {
		side_nav_open: state.side_nav_open
	};
}

export default withRouter(connect(mapStateToProps, {toggleSideNav})(Navigation));