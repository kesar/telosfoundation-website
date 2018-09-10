import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import '../../styles/checklist.css';

const Checklist = () => {
	return (
		<Grid>
			<Row>
				<Col md={12}>
					<div className='checklist'>
						<h1>Launch Prerequisites Checklist</h1>
						<Row>
							<Col md={10} mdOffset={1}>
								<h2>The following list of features and functions are considered essential and must be completed and tested in order for Telos to launch</h2>
							</Col>
						</Row>
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

const DevelopmentCode = () => {
	return (
		<section id='development_code_cl'>
			<h3>Development/Code</h3>
			<ul className='top_level'>
				<li className='yes'>Create testing tool - Grow</li>
				<li className='yes'>Create network monitor</li>
				<li className='yes'>Claim rewards improvements</li>
				<li className='yes'>Inverse-weighted voting</li>
				<li className='yes'>BP rewards (EBPs receive X, Standby BPs receive 50% of X)</li>
				<li className='in_progress'>Removal of non-producing BPs</li>
				<li className='in_progress'>Scheduled standby BP rotations</li>
				<li className='no'>Rewrite regproducer to include BP json format</li>
				<li className='no'>Refactor unit tests</li>
				<li className='no'>Validate chain functionality</li>
				<li className='no'>Test chain security</li>
				<li className='no'>Enforce BP minimums</li>
			</ul>
		</section>
	);
};

const Governance = () => {
	return (
		<section id='governance_cl'>
			<h3>Governance</h3>
			<ul className='top_level'>
				<li className='in_progress'>Telos network operating agreement</li>
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
				<li className='in_progress'>Ratify/Amend contract</li>
				<li className='no with_sublevel'>
					Arbitration contract
					<ul className='sub_level'>
						<li>Minimum arbitrator requirements</li>
						<li>Register arbitrator</li>
						<li>Enforce arbitrator minimums</li>
						<li>Arbitration mechanisms (voting, candidates, etc.)</li>
					</ul>
				</li>
				<li className='no'>Worker proposal contract</li>
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
				<li className='in_progress with_sublevel'>
					Wallet App
					<ul className='sub_level'>
						<li>Validate Voting Transactions in wallet</li>
						<li>Validate Wallet Security</li>
					</ul>
				</li>
				<li className='no'>Block Explorer</li>
			</ul>
		</section>
	);
};

const Miscellaneous = () => {
	return (
		<section id='misc_cl'>
			<h3>Miscellaneous</h3>
			<ul className='top_level'>
				<li className='no'>Include snapshot accounts</li>
				<li className='no'>Validate snapshot accounts</li>
				<li className='yes'>Community rewards system</li>
				<li className='no'>Telos Foundation System</li>
				<li className='in_progress'>Launch group rewards system</li>
				<li className='yes'>Verified capped genesis snapshot</li>
				<li className='no'>At least 40 BP candidates have successfully participated in test launches</li>
				<li className='no'>Launching ABPs agreed upon (six across globe)</li>
				<li className='no'>Lost tokens processed</li>
				<li className='no'>Two testnets up, public and private staging testnet</li>
				<li className='no'>Define final TLOS token balance (EOS snapshot + Rewards +/- lost/compromised keys)</li>
			</ul>
		</section>
	);
};

export default Checklist;