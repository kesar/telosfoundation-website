import React, {Component} from 'react';
import {Grid, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Slider from 'react-slick';
import dapps_currency from '../../img/dapps/currency_and_commerce.jpg';
import dapps_gig from '../../img/dapps/gig_economy.jpg';
import dapps_records from '../../img/dapps/records_and_info.jpg';

import decentralized from '../../img/dapps/decentralized.png';
import compatibility from '../../img/dapps/compatibility.png';
import powerful from '../../img/dapps/powerful.png';
import proprietary from '../../img/dapps/proprietary.png';
import secure from '../../img/dapps/secure.png';

import arrow_next from '../../img/dapps/arrow_next_white.png';
import arrow_prev from '../../img/dapps/arrow_prev_white.png';

import '../../styles/dapps.css';


const dappsSlides = [
	{
		img: dapps_gig,
		heading: 'Decentralized gig economies',
		paragraphs: [
			'Decentralized gig economies - Telos will lead the emergence of a new and more equitable gig economy; imagine the possibilities of the next Uber or Airbnb led by community ownership and a decentralized workforce.'
		]
	},
	{
		img: dapps_currency,
		heading: 'Currency',
		paragraphs: [
			'A stable currency on Telos will open up possibilities to billions of people around the world who don\'t have access to bank accounts, providing the transparency and decentralization that is needed to prevent financial meltdowns such as the 2008 economic crisis or Venezuela\'s extreme currency inflation.'
		]
	},
	{
		img: dapps_records,
		heading: 'Decentralized records and information',
		paragraphs: [
			'Corruption can be prevented when records are open, transparent and immutable. Information quality can be enhanced by aligned incentive and community efforts. Telos can support vital documents including home ownership registers, medical records, or the next community encyclopedia.'
		]
	}
];

const dappSections = [
	{
		heading: 'EOS Compatibility',
		img: compatibility,
		paragraphs: [
			'EOS.IO is currently responsible for half of all blockchain transactions and its development is expected to advance faster than older platforms like Ethereum and NEO. The Telos network runs the same EOS.IO software as EOS, so DApps written for EOS can run on Telos. No rewrite needed!'
		]
	},
	{
		heading: 'Powerful performance for decentralized DApp development ',
		img: powerful,
		paragraphs: [
			'Telos facilitates incredibly fast and free transactions to establish a stable and affordable market for DApp development. RAM supply will be scaled with actual usage in order to ensure affordability and prevent hoarding. Telos tokens have more than three times the resource utility of EOS, and developers will be able to purchase and stake resources such as CPU and bandwidth on behalf of users.'
		]
	},
	{
		heading: 'Secure and robust network',
		img: secure,
		paragraphs: [
			'Telos expands on the EOS network by enforcing additional disclosure requirements and minimum requirements for Telos block producers, who must maintain a full and open testnet in order to support DApp development. Nonfunctioning block producers are temporarily swapped out after missing just 30 minutes, as opposed to 3 hours on the EOS mainnet, so that developers encounter fewer pauses and problems without compromising security. Fair pay ensures all active and standby block producers are ready to produce at all times for maximum performance and stability.'
		]
	},
	{
		heading: 'DApps can be proprietary code',
		img: proprietary,
		paragraphs: [
			'Protect your intellectual property with Telos. Unlike EOS, Telos will not force developers to open source their code in order to support commercial DApps.'
		]
	},
	{
		heading: 'Decentralized Governance and Arbitration',
		img: decentralized,
		paragraphs: [
			'Telos has the most decentralized ownership of any blockchain existing today. No individual or entity will start with, or is likely to ever own, even one percent of the Telos blockchain. Telos’ decentralized voting system ensures that the blockchain is guided by the will of the community and the steady hand of the most competent block producers.',
			'Telos will have a fully developed and ratified Network Operating Agreement and Telos Arbitration Organization (TAO) upon launch. These entities will ensure that conflicts are resolved in a timely manner so that developers can focus on DApps instead of disputes.'
		]
	}
];


const DAppsPage = () => {
	return (
		<div className='dapps'>
			<DAppsIntro />
			<DAppsSlider />
			<DAppContent />
		</div>
	);
};

const DAppsIntro = () => {
	return (
		<section id='dapps_intro'>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<div className='text-center'>
							<h1>DApp Development</h1>
							<h2>The best network makes the best DApps</h2>
						</div>
					</Col>
					<Col md={10} mdOffset={1}>
						<div className='intro_buttons'>
							<div className='button_container'>
								<Button
									bsSize='large'
									bsStyle='primary'
								>
									TUTORIALS
								</Button>
								<p>Learn how to build your DApp on the Telos network.</p>
							</div>
							<div className='button_container'>
								<Button
									bsSize='large'
									bsStyle='primary'
								>
									SMART CONTRACT TEMPLATES
								</Button>
								<p>Write smart contracts that perform basic Telos functions such as exchanging tokens and casting votes.</p>
							</div>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

class DAppsSlider extends Component {

	constructor(){
		super();
		this.state = {

		};

		this.handleNext = this.handleNext.bind(this);
		this.handlePrevious = this.handlePrevious.bind(this);
	}

	handleNext(){
		this.slider.slickNext();
	}

	handlePrevious(){
		this.slider.slickPrev();
	}

	render(){
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			adaptiveHeight: true
		};

		const nextStyle = {
			backgroundImage: `url(${arrow_next})`
		};

		const prevStyle = {
			backgroundImage: `url(${arrow_prev})`
		};

		return (
			<section id='dapps_slider'>
				<header>
					<h2>The Future of DApps on Telos</h2>
				</header>
				<Slider 
					{...settings}
					ref={el => this.slider = el}
				>
					{dappsSlides.map((slide, i) => {
						return (
							<DAppSlide
								img={slide.img}
								heading={slide.heading}
								paragraphs={slide.paragraphs} />
						);
					})}
				</Slider>
				<button
					className='slider_arrow previous'
					style={prevStyle}
					onClick={this.handlePrevious} />
				<button
					className='slider_arrow next'
					style={nextStyle}
					onClick={this.handleNext} />
			</section>
		);
	}
}

const DAppSlide = (props) => {
	const slideImageStyle = {
		backgroundImage: `url(${props.img})`
	};

	return (
		<div className='dapps_slide'>
			<div className='slide_image' style={slideImageStyle}></div>
			<div className='slide_content_container'>
				<div className='slide_content'>
					<h4>{props.heading}</h4>
					{props.paragraphs.map((par, i) => <p key={i}>{par}</p>)}
				</div>
			</div>
		</div>
	);
};

const DAppContent = () => {
	return (
		<section id='dapp_content'>
			<Grid>
			{
				dappSections.map((sect, i) => {
					return (
						<DAppSection
							img={sect.img}
							heading={sect.heading}
							paragraphs={sect.paragraphs}
							order={i} />
					);
				})
			}
			</Grid>
		</section>
	);
};

const DAppSection = (props) => {
	return (
		<ScrollAnimation
			animateOnce={true}
			animateIn='fadeIn'
			duration={0.4}
		>
			<Row>
				<Col md={10} mdOffset={1}>
					<div className='content_container'>
						<img src={props.img} alt='' />
						<div className='content_section'>
							<h3>{props.heading}</h3>
							{props.paragraphs.map((par, i) => <p key={i}>{par}</p>)}
						</div>
					</div>
				</Col>
			</Row>
		</ScrollAnimation>
	);
};

export default DAppsPage;