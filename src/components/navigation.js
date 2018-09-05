import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../img/Telos_MarketingSite_TelosLogo_500px.png';
import '../styles/hamburgers.css';
import '../styles/navigation.css';
import LanguageToggle from './language_toggle';
import {Link, withRouter} from 'react-router-dom';
import {toggleSideNav} from '../actions';
import {connect} from 'react-redux';

class Navigation extends Component {

	constructor(props){
		super(props);
	}

	render(){
		const {side_nav_open} = this.props;

		return (
			<Navbar fluid={true} collapseOnSelect>
			  <Navbar.Header>
			    <Navbar.Toggle />
			    <Navbar.Brand>
			      <a 
			      	href='/'
			      	onClick={e => {
			      		e.preventDefault();
			      		this.props.history.push('/');
			      	}}
			      >
			      	<img src={logo} alt='logo' className='logo' />
			      </a>
			    </Navbar.Brand>
			  </Navbar.Header>
			  <Navbar.Collapse>
				<Nav pullRight>
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
								this.props.push('/launch');
							}}
						>
							Launch Checklist
						</a>
					</li>
					{/*<li className='side_nav_item_mobile'>
						<a
							href='/download'
							onClick={e => {
								e.preventDefault();
								this.props.push('/download');
							}}
						>
							Download
						</a>
					</li>*/}
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