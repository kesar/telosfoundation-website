import React from 'react';
import FrontPage from './pages/front_page';
import ExchangeOutreach from './pages/exchange_outreach';
import RewardsTranslate from './pages/rewards_translate'; //component that uses json file, ready for localization
import Checklist from './pages/checklist';
import Download from './pages/download';
import Arbitrator from './pages/arbitrator';
import TokenRecovery from './pages/token_recovery_translate';
import DAppsPage from './pages/dapps';
import Governance from './pages/governance';
import FAQ_Page from './pages/faq';
import BlockProducerCandidates from './pages/block_prod_candidates';
import HowToVote from './pages/how_to_vote';
import {connect} from 'react-redux';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import SideNavigation from './side_navigation';

import '../styles/body.css';

const MainSite = ({site_content}) => {
	if(!site_content) return <div>waiting...</div>;
	return (
		<div>
			<Header />
			<main className='main'>

				<Switch>
					<Route path='/rewards' render={() => <RewardsTranslate rewards_page={site_content.rewards_page} language={site_content.language} />} />
					<Route path='/exchange_outreach' component={ExchangeOutreach} />
					<Route path='/iwantmytlos' component={ExchangeOutreach} />
					<Route path='/launch' component={Checklist} />
					<Route path='/downloads' render={() => <Download downloads_page={site_content.downloads_page} language={site_content.language} />} />
					<Route path='/arbitrators' component={Arbitrator} />
					<Route path='/dapps' render={() => <DAppsPage dapps_page={site_content.dapps_page} />} />
					<Route path='/recovery' render={() => <TokenRecovery token_recovery={site_content.token_recovery} language={site_content.language} />} />
					<Route path='/governance' render={() => <Governance governance_page={site_content.governance_page} />} />
					<Route path='/faq' component={FAQ_Page} />
					<Route path='/candidates' component={BlockProducerCandidates} />
					<Route path='/how_to_vote' component={HowToVote} />
					<Route path='/' render={() => <FrontPage landing_page={site_content.landing_page} language={site_content.language} />} />
				</Switch>
			</main>
			<Footer />
			<SideNavigation />
		</div>
	);
};

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default withRouter(connect(mapStateToProps, null)(MainSite));