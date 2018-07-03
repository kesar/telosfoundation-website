import React from 'react';
import Header from './header';
import Routes from './routes';
import Footer from './footer';
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {

	return (
		<Router>
			<div>
				<Header />
				<Routes />
				<Footer />
			</div>
		</Router>
	);
};

export default App;