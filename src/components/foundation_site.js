import React from 'react';
import Board from './pages/board';
import Header from './foundation_site/header';
import Footer from './foundation_site/footer';

import '../styles/board.css';

const FoundationSite = () => {
	return (
		<div>
			<Header />
			<main className='foundation_site_main'>
				<Board />
			</main>
			<Footer />
		</div>
	);
};

export default FoundationSite;