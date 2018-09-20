import React from 'react';
import FrontPage from './pages/front_page';
import ExchangeOutreach from './pages/exchange_outreach';
import RewardsTranslate from './pages/rewards_translate'; //component that uses json file, ready for localization
import Checklist from './pages/checklist';
import Download from './pages/download';
import Arbitrator from './pages/arbitrator';
import TokenRecovery from './pages/token_recovery';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import '../styles/body.css';

const Body = ({site_content}) => {
	if(!site_content) return <div>waiting...</div>;
	return (
		<main className='main'>

			<Switch>
				<Route path='/rewards' component={RewardsTranslate} />
				<Route path='/exchange_outreach' component={ExchangeOutreach} />
				<Route path='/iwantmytlos' component={ExchangeOutreach} />
				<Route path='/launch' component={Checklist} />
				<Route path='/downloads' render={() => <Download language={site_content.language} />} />
				<Route path='/arbitrators' component={Arbitrator} />
				<Route path='/recovery' component={TokenRecovery} />
				<Route path='/' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
			</Switch>
		</main>
	);
};

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default withRouter(connect(mapStateToProps, null)(Body));