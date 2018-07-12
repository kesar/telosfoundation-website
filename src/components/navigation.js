import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import logo from '../img/Telos_MarketingSite_TelosLogo_500px.png';
import '../styles/navigation.css';
import LanguageToggle from './language_toggle';

const Navigation = () => {

	return (
		<Navbar fluid={true} collapseOnSelect>
		  <Navbar.Header>
		    <Navbar.Toggle />
		    <Navbar.Brand>
		      <a href='#'>
		      	<img src={logo} alt='logo' className='logo' />
		      </a>
		    </Navbar.Brand>
		  </Navbar.Header>
		  <Navbar.Collapse>
			<Nav pullRight>
				<LanguageToggle />
				<li>
					<a href="http://testnet.telosfoundation.io/">TESTNET</a>
				</li>
			</Nav>
		  </Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;