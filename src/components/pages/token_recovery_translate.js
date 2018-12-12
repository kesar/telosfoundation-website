import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import RecoveryFormModal from '../modals/recovery_form_modal';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';
import '../../styles/token_recovery.css';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import new_step_one from '../../img/token_recovery/new_step_1.png';
import new_step_two from '../../img/token_recovery/new_step_2.png';
import new_step_three from '../../img/token_recovery/new_step_3.png';

import ether_screenshot_one from '../../img/token_recovery/new_ether_screenshot_1.png'
import ether_screenshot_two from '../../img/token_recovery/new_ether_screenshot_2.png'
import ether_screenshot_three from '../../img/token_recovery/new_ether_screenshot_3.png'
import ether_screenshot_four from '../../img/token_recovery/new_ether_screenshot_4.png'
import ether_screenshot_five from '../../img/token_recovery/new_ether_screenshot_5.jpg'
import ether_screenshot_six from '../../img/token_recovery/new_ether_screenshot_6.jpg'

const recovery_steps = [
	new_step_one,
	new_step_two,
	new_step_three
];

class TokenRecovery extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {token_recovery} = this.props;
		if(!token_recovery){
			return (
				<div className='token_recovery'>
					<h4>missing translation</h4>
				</div>
			);
		}

		return (
			<div className='token_recovery'>
				<Helmet>
					<title>Token Recovery</title>
					<meta name="description" content="Were your keys lost or compromised on EOS? Telos wants to make sure the proper owners receive their TLOS tokens in our upcoming Telos sharedrop!" />
				</Helmet>
				<TokenRecoveryIntro intro={token_recovery.intro} />
				{/*<TokenRecoveryProcessOne
					process={token_recovery.process_one}
					recovery_form={token_recovery.recovery_form} />
				<TokenRecoveryProcessTwo process={token_recovery.process_two} />*/}
			</div>
		);
	}
}

const TokenRecoveryIntro = ({intro}) => {
	return (
		<section id='token_recovery_intro'>
			{/*<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeIn'
							duration={0.4}
						>
							<h1>Telos Lost Key Recovery Portal is Now Closed</h1>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							animateIn='fadeIn'
							duration={0.4}
							delay={250}
						>
							{ intro.content.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
						</ScrollAnimation>
					</Col>
				</Row>
			</Grid>*/}
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Telos Lost Key Recovery Portal is Now Closed.</h1>
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
				<ScrollAnimation
					animateOnce
					animateIn='fadeIn'
					duration={0.4}
				>
					<h3>{process.two_processes_heading}</h3>
				</ScrollAnimation>
				<header className='text-center'>
					<h2>{process.heading}</h2>
				</header>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<ScrollAnimation
								animateOnce
								animateIn='fadeIn'
								duration={0.4}
							>
								{ process.process_intro.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
							</ScrollAnimation>
							<ol>
								{/*<li dangerouslySetInnerHTML={{__html: process.step_one}} />*/}
								<li>
									<ScrollAnimation
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<span dangerouslySetInnerHTML={{__html: process.step_one}} />
									</ScrollAnimation>
								</li>

								<li>
									<ScrollAnimation
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<span dangerouslySetInnerHTML={{__html: step_two.step}} />
									</ScrollAnimation>
									<div className='recovery_steps'>
										{
											recovery_steps.map((step, i) => {
												return (
													<div className='recovery_step' key={i}>
														<Row>
															<Col md={8} mdOffset={2} sm={10} smOffset={1}>
																<ScrollAnimation
																	animateOnce
																	animateIn='fadeInUp'
																	duration={0.4}
																>
																	<img src={step} alt='recovery step' />
																</ScrollAnimation>
																<ScrollAnimation
																	animateOnce
																	animateIn='fadeInUp'
																	duration={0.4}
																>
																	<h4 dangerouslySetInnerHTML={{__html: step_two.screenshot_captions[i]}} />
																</ScrollAnimation>
															</Col>
														</Row>
													</div>
												);
											})
										}
									</div>
								</li>
								<li>
									<ScrollAnimation
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<span dangerouslySetInnerHTML={{__html: step_three.step}} />
									</ScrollAnimation>
									<Row>
										<Col md={8} mdOffset={2}>
											<ScrollAnimation
												animateOnce
												animateIn='fadeInUp'
												duration={0.4}
											>
												<img src={ether_screenshot_one} alt='' className='ether_screenshot_one' />
											</ScrollAnimation>
										</Col>
									</Row>
									<ul>
										<li>
											<ScrollAnimation
												animateOnce
												animateIn='fadeInUp'
												duration={0.4}
											>
												<span dangerouslySetInnerHTML={{__html: step_three.copy_paste}} />
											</ScrollAnimation>
											<div className='process_message'>
												<ScrollAnimation
													animateOnce
													animateIn='fadeInUp'
													duration={0.4}
												>
													<p>{step_three.message}</p>
													<ul>
														<li>{step_three.ethereum}</li>
														<li>{step_three.public_key}</li>
													</ul>
												</ScrollAnimation>
											</div>
											<div className='ether_screenshots'>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<img src={ether_screenshot_two} alt='ether screenshot one' />
															</ScrollAnimation>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<img src={ether_screenshot_three} alt='ether screenshot two' />
															</ScrollAnimation>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<h4 dangerouslySetInnerHTML={{__html: step_three.screenshot_caption}}></h4>
															</ScrollAnimation>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<img src={ether_screenshot_four} alt='ether screenshot two' />
															</ScrollAnimation>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<h4>{step_three.screenshot_caption_two}</h4>
															</ScrollAnimation>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<img src={ether_screenshot_five} alt='ether screenshot two' />
															</ScrollAnimation>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<h4>{step_three.screenshot_caption_three}</h4>
															</ScrollAnimation>
														</Col>
													</Row>
												</div>
												<div className='recovery_step'>
													<Row>
														<Col md={8} mdOffset={2} sm={10} smOffset={1}>
															<ScrollAnimation
																animateOnce
																animateIn='fadeInUp'
																duration={0.4}
															>
																<img src={ether_screenshot_six} alt='ether screenshot two' />
															</ScrollAnimation>
														</Col>
													</Row>
												</div>
											</div>
										</li>
										<li>
											<ScrollAnimation
												animateOnce
												animateIn='fadeInUp'
												duration={0.4}
											>
												<span
													className='modal_toggle'
													onClick={e => {
														e.preventDefault();
														this.setState({showFormModal: true});
													}}
												>
													{step_three.email_us}
												</span>
											</ScrollAnimation>
										</li>
									</ul>
								</li>
							</ol>
							<ScrollAnimation
								animateOnce
								animateIn='fadeInUp'
								duration={0.4}
							>
								<p><em>{process.process_note}</em></p>
							</ScrollAnimation>
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
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							{ process.process_intro.map((paragraph, i) => <p key={i}>{paragraph}</p>) }
						</ScrollAnimation>
						<ol>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
								>
									<span dangerouslySetInnerHTML={{__html: process.eos_auth}} />
								</ScrollAnimation>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
								>
									<div className='process_message'>
										<a href='https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key' target='_blank' rel='noopener noreferrer'>https://eosauthority.com/blog/how_to_generate_your_EOS_fallback_key_from_ethereum_private_key</a>
									</div>
								</ScrollAnimation>
							</li>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
								>
									<span dangerouslySetInnerHTML={{__html: process.save_keys}} />
								</ScrollAnimation>
							</li>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
								>
									<span dangerouslySetInnerHTML={{__html: process.import_wallet}} />
								</ScrollAnimation>
							</li>
						</ol>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default withRouter(connect(null, {selectLanguage})(TokenRecovery));