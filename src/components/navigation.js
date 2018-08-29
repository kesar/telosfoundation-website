import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../img/Telos_MarketingSite_TelosLogo_500px.png';
import '../styles/navigation.css';
import LanguageToggle from './language_toggle';
import {Link, withRouter} from 'react-router-dom';

const Navigation = (props) => {

	return (
		<Navbar fluid={true} collapseOnSelect>
		  <Navbar.Header>
		    <Navbar.Toggle />
		    <Navbar.Brand>
		      <a 
		      	href='/'
		      	onClick={e => {
		      		e.preventDefault();
		      		props.history.push('/');
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
					<a 
						href="/rewards"
						onClick={e => {
							e.preventDefault();
							props.history.push('/rewards');
						}}
					>
						REWARDS
					</a>
				</li>				
				<li>
					<a href="http://testnet.telosfoundation.io/">TESTNET</a>
				</li>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
	);
};

export default withRouter(Navigation);