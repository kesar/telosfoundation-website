import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import LanguageToggle from './language_toggle';
import {Link} from 'react-router-dom';

const Navigation = () => {

	return (
		<Navbar fluid={true}>
			<Nav>
				<LanguageToggle />
				<li>
					<Link to='/telos_faq'>FAQ</Link>
				</li>
				<li>
					<Link to='/eos_problems'>EOS PROBLEMS</Link>
				</li>
				<li>
					<Link to='/telos_advantage'>TELOS ADVANTAGES</Link>
				</li>
				<li>
					<Link to='/constitution'>CONSTITUTION</Link>
				</li>
				<li>
					<Link to='/contact'>CONTACT</Link>
				</li>
				<NavItem eventKey={6} href='#'>
					TEAM / PARTNERS
				</NavItem>
			</Nav>
		</Navbar>
	);
};

export default Navigation;