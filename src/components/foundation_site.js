import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Board from './pages/board';
import Header from './foundation_site/header';
import Footer from './foundation_site/footer';

import '../styles/board.css';

const FoundationSite = () => {
	return (
		<div>
			<Header />
			<Board />
			<Footer />
		</div>
	);
};

export default FoundationSite;