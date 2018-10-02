import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RecoveryFormModal from '../modals/recovery_form_modal';
import '../../styles/token_recovery.css';
import step_one from '../../img/token_recovery/step_1.png';
import step_two from '../../img/token_recovery/step_2.png';
import step_three from '../../img/token_recovery/step_3.png';
import step_four from '../../img/token_recovery/step_4.png';
import step_five from '../../img/token_recovery/step_5.png';
import step_six from '../../img/token_recovery/step_6.png';
import step_seven from '../../img/token_recovery/step_7.jpg';
import step_eight from '../../img/token_recovery/step_8x.png';
import ether_screenshot_one from '../../img/token_recovery/ether_screenshot_1.jpg';
import ether_screenshot_two from '../../img/token_recovery/ether_screenshot_2.jpg';
import ether_screenshot_three from '../../img/token_recovery/ether_screenshot_3.png';
import ether_screenshot_four from '../../img/token_recovery/ether_screenshot_4.jpg';
import ether_screenshot_five from '../../img/token_recovery/ether_screenshot_5.jpg';

const recovery_steps = [
	{
		image: step_one,
		caption: 'Open up the Sqrl wallet.'
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

const TokenRecovery = ({language, token_recovery}) => {
	if(!token_recovery){
		return (
			<div className='token_recovery'>
				<h4>missing translation</h4>
			</div>
		);
	}

	return (
		<div className='token_recovery'>
			<TokenRecoveryIntro intro={token_recovery.intro} />
			<TokenRecoveryProcessOne
				process={token_recovery.process_one}
				recovery_form={token_recovery.recovery_form} />
			<TokenRecoveryProcessTwo process={token_recovery.process_two} />
		</div>
	);
};

const TokenRecoveryIntro = ({intro}) => {
	return (
		<section id='token_recovery_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>{intro.heading}</h1>
						{
							intro.content.map((paragraph, i) => {
								return (
									<p key={i}>{paragraph}</p>
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

class TokenRecoveryProcessOne extends Component {
	constructor(props){
		super(props);
		this.state = {
			showFormModal: false
		};
	}

	render(){
		const {
			process,
			recovery_form
		} = this.props;
		const {
			step_two,
			step_three
		} = process;

		return (
			<section id='token_recovery_process_one' className='process_section'>
				<h3>{process.two_process_heading}</h3>
				<header className='text-center'>
					<h2>{process.heading}</h2>
				</header>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							{
								process.process_intro.map((paragraph, i) => {
									return (
										<p key={i}>{paragraph}</p>
									);
								})
							}
							<ol>
								<li dangerouslySetInnerHTML={{__html: process.step_one}} />
								<li>
									{step_two.step}
									<div className='recovery_steps'>
										{
											recovery_steps.map((step, i) => {
												return (
													<div className='recovery_step' key={i}>
														<Row>
															<Col md={8} mdOffset={2} sm={10} smOffset={1}>
																<img src={step.image} alt='recovery step' />
																{/*<h4>{step_two.screenshot_captions[i]}</h4>*/}
																<h4 dangerouslySetInnerHTML={{__html: step_two.screenshot_captions[i]}} />
															</Col>
														</Row>
													</div>
												);
											})
										}
									</div>
								</li>
								<li>
									<span dangerouslySetInnerHTML={{__html: step_three.step}} />
									<ul>
										<li>{step_three.sign_in}</li>
										<li>
											{step_three.copy_paste}
											<div className='process_message'>
												<p>{step_three.message}</p>
												<ul>
													<li>{step_three.ethereum}</li>
													<li>{step_three.public_key}</li>
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
															<h4>{step_three.screenshot_caption}</h4>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<img src={ether_screenshot_three} alt='ether screenshot two' />
															<h4>{step_three.screenshot_caption_two}</h4>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<img src={ether_screenshot_four} alt='ether screenshot two' />
															<h4>{step_three.screenshot_caption_three}</h4>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<img src={ether_screenshot_five} alt='ether screenshot two' />
															<h4>{step_three.screenshot_caption_four}</h4>
														</Col>
													</Row>
												</div>
											</div>
										</li>
										<li>
											<a
												href='#'
												onClick={e => {
													e.preventDefault();
													this.setState({showFormModal: true});
												}}
											>
												{step_three.email_us}
											</a>
										</li>
									</ul>
								</li>
							</ol>
							<p><em>{process.process_note}</em></p>
						</Col>
					</Row>
				</Grid>
				<RecoveryFormModal
					show={this.state.showFormModal}
					onHide={() => this.setState({showFormModal: false})}
					recovery_form={recovery_form} />
			</section>
		);
	}
}

const TokenRecoveryProcessTwo = ({process}) => {
	return (
		<section id='token_recovery_process_two' className='process_section'>
			<header className='text-center'>
				<h2>{process.heading}</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							process.process_intro.map((paragraph, i) => {
								return (
									<p key={i}>{paragraph}</p>
								);
							})
						}
						<ol>
							<li>
								{process.eos_auth}
								<div className='process_message'>
									<a href='https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key' target='_blank' rel='noopener noreferrer'>https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key</a>
								</div>
							</li>
							<li>{process.save_keys}</li>
							<li>{process.import_wallet}</li>
						</ol>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};



export default TokenRecovery;