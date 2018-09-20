import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../../styles/token_recovery.css';
import step_one from '../../img/token_recovery/step_1.png';
import step_two from '../../img/token_recovery/step_2.png';
import step_three from '../../img/token_recovery/step_3.png';
import step_four from '../../img/token_recovery/step_4.png';
import step_five from '../../img/token_recovery/step_5.png';
import step_six from '../../img/token_recovery/step_6.png';
import step_seven from '../../img/token_recovery/step_7.jpg';
import step_eight from '../../img/token_recovery/step_8.jpg';
import ether_screenshot_one from '../../img/token_recovery/ether_screenshot_1.jpg';
import ether_screenshot_two from '../../img/token_recovery/ether_screenshot_2.jpg';

//import bcrypt from 'bcryptjs';

const recovery_steps = [
	{
		image: step_one,
		caption: 'Open up the Sqrl wallet.'
	},
	{
		image: step_two,
		caption: 'Select "Telos Testnet"'
	},
	{
		image: step_three,
		caption: 'Click "Create New Account"'
	},
	{
		image: step_four,
		caption: 'Enter your account name'
	},
	{
		image: step_five,
		caption: 'Generate "Owner Public Key"'
	},
	{
		image: step_six,
		caption: 'Copy "Owner Public Key" into "Active Public Key" field'
	},
	{
		image: step_seven,
		caption: 'Copy/Paste your Keys to a safe place! Offline storage is recommended.'
	},
	{
		image: step_eight,
		caption: 'Create your account'
	}
];

const recoveryMail = {
	address: 'hello@telosfoundation.io',
	subject: 'Key Recovery',
	body: 'I just filled out my lost key info and submitted it. Here is my Ethereum account and my new Public Key:'
};


const TokenRecovery = () => {
	return (
		<div className='token_recovery'>
			<TokenRecoveryIntro />
			<TokenRecoveryProcessOne />
			<TokenRecoveryProcessTwo />
		</div>
	);
};

// const salt = bcrypt.genSaltSync(10);
// const RECOVERY_PASSWORD = '$2a$10$GfJotbQ/cy0rg856aCgOGuf1TE3/5Mc/qjMPjoSGLTLthjW8LDKrC';

// class TokenRecovery extends Component {

// 	constructor(){
// 		super();

// 		this.state = {
// 			candidate: '',
// 			passed: false
// 		};
// 		this.handleSubmit = this.handleSubmit.bind(this);
// 	}

// 	handleSubmit(){
// 		this.setState({
// 			passed: bcrypt.compareSync(this.state.candidate, RECOVERY_PASSWORD)
// 		});
// 	}

// 	render(){
// 		const {passed, candidate} = this.state;

// 		if(!passed){
// 			return (
// 				<div className='token_recovery_password'>
// 					<Grid>
// 						<Row>
// 							<Col md={8} mdOffset={2}>
// 								<div className='form-group'>
// 									<input type='password' className='form-control' placeholder='Enter password to view token recovery page' value={candidate} onChange={e => this.setState({candidate: e.target.value})} />
// 								</div>
// 								<div className='form-group'>
// 									<button className='btn btn-default' onClick={this.handleSubmit}>Submit Password</button>
// 								</div>
// 							</Col>
// 						</Row>
// 					</Grid>
// 				</div>
// 			);
// 		}

// 		return (
// 			<div className='token_recovery'>
// 				<TokenRecoveryIntro />
// 				<TokenRecoveryProcessOne />
// 				<TokenRecoveryProcessTwo />
// 			</div>
// 		);
// 	}
// }

const TokenRecoveryIntro = () => {
	return (
		<section id='token_recovery_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Telos Lost Key Recovery Portal</h1>
						<p>Were your keys lost or compromised on EOS? Telos wants to make sure the proper owners receive their TLOS tokens in our upcoming Telos sharedrop!</p>
						<p>Telos will give TLOS tokens 1:1 based on the original EOS ERC-20 snapshot (up to 40,000 per account) using the same keys and account names as the EOS genesis. Unfortunately, this means that anyone whose keys were lost or compromised at that time or since that time will also need their keys replaced on the Telos chain. For this reason, we’re working to alert EOS genesis token holders that Telos will allow them to revise their keys where necessary.</p>
						<p>The key replacement process needs to occur BEFORE the Telos mainnet launches. Because Telos is using the original ERC-20 snapshot, we can verify ownership based on the Ethereum address that held those keys and can bypass any phishing or other key loss that may have happened to accounts after EOS launched. We have a special window of time in which to help anyone who lost their EOS accounts to maintain control of their new Telos accounts.</p>
						<p>To be clear, Telos can only protect lost or compromised genesis accounts on the Telos blockchain. Unfortunately, we have no power to aid lost key issues on EOS accounts</p>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const TokenRecoveryProcessOne = () => {
	return (
		<section id='token_recovery_process_one' className='process_section'>
			<h3>There are two processes for Key Recovery</h3>
			<header className='text-center'>
				<h2>PROCESS 1</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p>This is the process for any users who registered their EOS ERC-20 tokens but later lost their keys or had them compromised. This will apply to 98% of users so it is probably the right one for you.</p>
						<p>You will sign a message on the Ethereum blockchain from the same address that held your EOS tokens at the snapshot. This message will include a new public key that you can generate in any wallet you choose; we show examples here using the Sqrl, the native Telos wallet. Sqrl can create a public key that begins with either EOS or TLOS; the order doesn’t matter.</p>
						<p>Be sure to save the private key associated with your new public key. This is how you will access your account! Once you send the message, please send us the Ethereum address and EOS public key you recorded. We will verify the message and change the keys.</p>
						<p>Follow the instructions below:</p>
						<ol>
							<li>Download the Sqrl wallet from <Link to='/downloads'>telosfoundation.io/downloads</Link></li>
							<li>
								Generate new keys for a new Telos account:
								<div className='recovery_steps'>
									{
										recovery_steps.map((step, i) => {
											return (
												<div className='recovery_step' key={i}>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<img src={step.image} alt='recovery step' />
															<h4>{step.caption}</h4>
														</Col>
													</Row>
												</div>
											);
										})
									}
								</div>
							</li>
							<li>
								Go to: <a href='https://myetherwallet.com/signmsg.html' target='_blank' rel='noopener noreferrer'>www.myetherwallet.com/signmsg.html</a>
								<ul>
									<li>Sign in and select the Ethereum wallet that held your EOS tokens.</li>
									<li>
										Copy/paste this message:
										<div className='process_message'>
											<p>As the cryptographically verified owner of ethereum address listed below ("Ethereum Address"), I attest that I did own the EOS tokens listed on the EOS ERC-20 snapshot associated with this address and that I hereby request that the public key for my account be changed to the new EOS public key below (“New EOS Public Key”) or the Telos Network address equivalent for my corresponding account on the Telos Network. I agree to release the Telos Network and its Members - as well as the members of any blockchain project that may subsequently use this same value snapshot in the future - from any claim arising from this request. The cryptographic signature of this document constitutes my legal digital signature in all jurisdictions.</p>
											<ul>
												<li>Ethereum Address:</li>
												<li>New EOS Public Key:</li>
											</ul>
										</div>
										<div className='ether_screenshots'>
											<div className='recovery_step'>
												<Row>
													<Col md={8} mdOffset={2} sm={10} smOffset={1}>
														<img src={ether_screenshot_one} alt='ether screenshot one' />
													</Col>
												</Row>
											</div>
											<div className='recovery_step'>
												<Row>
													<Col md={8} mdOffset={2} sm={10} smOffset={1}>
														<img src={ether_screenshot_two} alt='ether screenshot two' />
														<h4>Enter your own Ethereum address where you held your EOS tokens in "Ethereum Address" and your new SQRL public key into "New EOS Public Key"</h4>
													</Col>
												</Row>
											</div>
										</div>
									</li>
									<li>
										<a
											href={`mailto:${recoveryMail.address}?subject=${recoveryMail.subject}&body=${recoveryMail.body}`}
										>
											Email us your information so we can research your claim.
										</a>
									</li>
								</ul>
							</li>
						</ol>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const TokenRecoveryProcessTwo = () => {
	return (
		<section id='token_recovery_process_two' className='process_section'>
			<header className='text-center'>
				<h2>PROCESS 2</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p>This process is for people who never registered their EOS ERC-20 tokens with Block One prior to the genesis snapshot. Because you will need to enter your private ethereum keys, we are directing you to EOS Authority. They are a respected block producer and have developed a verified process that will work on the Telos network exactly as it does on the EOS network.</p>
						<ol>
							<li>
								Go to the EOS Authority web site:
								<div className='process_message'>
									<a href='https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key' target='_blank' rel='noopener noreferrer'>https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key</a>
								</div>
							</li>
							<li>Save those keys for your SQRL wallet account.</li>
							<li>Import wallet through SQRL once network launches.</li>
						</ol>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};



export default TokenRecovery;