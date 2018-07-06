import React from 'react';
import {Route, Switch} from 'react-router-dom';
import FrontPage from './pages/front_page';
import TelosFAQ from './pages/telos_faq';
import TelosAdvantage from './pages/telos_advantage';
import Constitution from './pages/constitution';
import EosProblems from './pages/eos_problems';
import Contact from './pages/contact';
import {Grid, Row} from 'react-bootstrap';

const Routes = () => {
	return (
		<main>
			<Grid>
				<Row>
					<Switch>
						<Route path='/eos_problems' component={EosProblems} />
						<Route path='/telos_advantage' component={TelosAdvantage} />
						<Route path='/telos_faq' component={TelosFAQ} />
						<Route path='/constitution' component={Constitution} />
						<Route path='/contact' component={Contact} />
						<Route path='/' component={FrontPage} />
					</Switch>
				</Row>
			</Grid>
		</main>
	);
};

export default Routes;