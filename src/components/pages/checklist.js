import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import not_started_icon from '../../img/checklist/gng_list_no_circle.png';
import in_progress_icon from '../../img/checklist/gng_list_in-progress.png';
import completed_icon from '../../img/checklist/gng_list_yes.png';
import telos_logo from '../../img/checklist/logo_gray32x35.png';
import '../../styles/checklist.css';

const Checklist = () => {
	return (
		<Grid>
			<Row>
				<Col md={12}>
					<div className='checklist'>
						<h1>Launch Checklist</h1>
						<Row>
							<Col md={10} mdOffset={1}>
								<div className='checklist_intro'>
									<h2>The following list of features and functions are considered essential and must be completed and tested in order for Telos to launch</h2>
									<h2>First go/no-go decision date: Sept 28, 2018 16:00 UTC</h2>
									<h4>On a yes vote, the network will launch 8 hours later at midnight UTC</h4>
								</div>
							</Col>
						</Row>
						<ChecklistLegend />
						<DevelopmentCode />
						<Governance />
						<Contracts />
						<Tools />
						<Miscellaneous />
					</div>
				</Col>
			</Row>
		</Grid>
	);
};

const ChecklistLegend = () => {
	return (
		<section id='checklist_legend'>
			<Row>
				<Col sm={10} smOffset={1}>
					<Row>
						<Col xs={4}>
							<div className='legend_column'>
								<img src={not_started_icon} alt='legend completed icon' className='img-responsive' />
								<h4>In Progress</h4>
							</div>
						</Col>
						<Col xs={4}>
							<div className='legend_column'>
								<img src={in_progress_icon} alt='legend in-progress icon' className='img-responsive' />
								<h4>Functional/In Testing</h4>
							</div>
						</Col>
						<Col xs={4}>
							<div className='legend_column'>
								<img src={completed_icon} alt='legend completed icon' className='img-responsive' />
								<h4>Completed & Tested</h4>
							</div>
						</Col>
					</Row>
				</Col>
			</Row>
		</section>
	);
};

const DevelopmentCode = () => {
	return (
		<section id='development_code_cl'>
			<h3>Development/Code</h3>
			<ul className='top_level'>
				<li className='yes'>
					Create testing tool - Grow
					<InfoLinks github_link='https://github.com/Telos-Foundation/grow' />
				</li>
				<li className='yes'>
					Create network monitor
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos-monitor' />
				</li>
				<li className='yes'>
					Claim rewards improvements
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/10' />
				</li>
				<li className='yes'>
					Inverse-weighted voting
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/7' />
				</li>
				<li className='yes'>
					BP rewards (EBPs receive X, Standby BPs receive 50% of X)
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/1' />
				</li>
				<li className='yes'>
					Removal of non-producing BPs
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/52' />
				</li>
				<li className='yes'>
					Scheduled standby BP rotations
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/3' />
				</li>
				<li className='in_progress'>
					Rewrite regproducer to include BP json format
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/55' />
				</li>
				<li className='no'>
					Enforce BP minimums
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/4' />
				</li>
				<li className='yes'>
					Refactor unit tests
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/24' />
				</li>
			</ul>
		</section>
	);
};

const Governance = () => {
	return (
		<section id='governance_cl'>
			<h3>Governance</h3>
			<ul className='top_level'>
				<li className='in_progress'>
					Telos network operating agreement
					<InfoLinks telos_link='https://telosfoundation.io/downloads' />
				</li>
				<li className='in_progress'>Telos foundation voting tokens</li>
				<li className='no'>TF RAM administration</li>
				<li className='no'>Ratify final governance program</li>
				<li className='in_progress'>Minimum BP requirements</li>
			</ul>
		</section>
	);
};

const Contracts = () => {
	return (
		<section id='contracts_cl'>
			<h3>Contracts</h3>
			<ul className='top_level'>
				<li className='in_progress'>
					Ratify/Amend contract
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/29' />
				</li>
				<li className='no with_sublevel'>
					Arbitration contract
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/30' />
					<ul className='sub_level'>
						<li>Minimum arbitrator requirements</li>
						<li>Register arbitrator</li>
						<li>Enforce arbitrator minimums</li>
						<li>Arbitration mechanisms (voting, candidates, etc.)</li>
					</ul>
				</li>
				<li className='in_progress'>
					Worker proposal contract
					<InfoLinks github_link='https://github.com/Telos-Foundation/telos/issues/46' />
				</li>
				<li className='no'>BP Adjudication contract</li>
			</ul>
		</section>
	);
};

const Tools = () => {
	return (
		<section id='tools_cl'>
			<h3>Tools</h3>
			<ul className='top_level'>
				<li className='yes with_sublevel'>
					Wallet App
					<InfoLinks telos_link='https://telosfoundation.io/downloads' />
					<ul className='sub_level'>
						<li>Validate Voting Transactions in wallet</li>
						<li>Validate Wallet Security</li>
					</ul>
				</li>
				<li className='yes'>Block Explorer</li>
			</ul>
		</section>
	);
};

const Miscellaneous = () => {
	return (
		<section id='misc_cl'>
			<h3>Miscellaneous</h3>
			<ul className='top_level'>
				<li className='in_progress'>Include snapshot accounts</li>
				<li className='yes'>
					Community rewards system
					<InfoLinks telos_link='https://telosfoundation.io/rewards' />
				</li>
				<li className='no'>Telos Foundation System</li>
				<li className='yes'>Launch group rewards system</li>
				<li className='yes'>Verified capped genesis snapshot</li>
				<li className='in_progress'>At least 40 BP candidates have successfully participated in test launches</li>
				<li className='no'>Launching ABPs agreed upon (six across globe)</li>
				<li className='in_progress'>
					Lost tokens processed
					<InfoLinks telos_link='https://telosfoundation.io/recovery' />
				</li>
				<li className='in_progress'>Two testnets up, public and private staging testnet</li>
				<li className='in_progress'>Define final TLOS token balance (EOS snapshot + Rewards +/- lost/compromised keys)</li>
			</ul>
		</section>
	);
};

const InfoLinks = ({github_link, telos_link}) => {
	if(!github_link && !telos_link){
		return (
			<div></div>
		);
	}
	if(!github_link){
		return (
			<ul className='info_links'>
				<li>
					<a href={telos_link} target='_blank' rel='noopener noreferrer'>
						<img src={telos_logo} alt='telos link' />
					</a>
				</li>
			</ul>
		);
	}
	if(!telos_link){
		return (
			<ul className='info_links'>
				<li>
					<a href={github_link} target='_blank' rel='noopener noreferrer'>
						<i className='fa fa-github'></i>
					</a>
				</li>
			</ul>
		);
	}
	return (
		<ul className='info_links'>
			<li>
				<a href={github_link} target='_blank' rel='noopener noreferrer'>
					<i className='fa fa-github'></i>
				</a>
			</li>
			<li>
				<a href={telos_link} target='_blank' rel='noopener noreferrer'>
					<img src={telos_logo} alt='telos link' />
				</a>
			</li>
		</ul>
	);
};

export default Checklist;