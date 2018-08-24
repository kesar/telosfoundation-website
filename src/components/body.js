import React from 'react';
import FrontPage from './pages/front_page';
import Rewards from './pages/rewards';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import '../styles/body.css';

const Body = ({site_content}) => {
	if(!site_content) return <div>waiting...</div>;
	return (
		<main className='main'>

			<Switch>
				<Route path='/rewards' component={Rewards} />
				<Route path='/' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
			</Switch>
		</main>
	);
};

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default withRouter(connect(mapStateToProps, null)(Body));