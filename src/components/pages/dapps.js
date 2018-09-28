import React, {Component} from 'react';
import {Grid, Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import Slider from 'react-slick';
import dapps_currency from '../../img/dapps/currency_and_commerce.jpg';
import dapps_gig from '../../img/dapps/gig_economy.jpg';
import dapps_records from '../../img/dapps/records_and_info.jpg';

import decentralized from '../../img/dapps/decentralized.png';
import compatibility from '../../img/dapps/compatibility.png';
import powerful from '../../img/dapps/powerful.png';
import proprietary from '../../img/dapps/proprietary.png';
import secure from '../../img/dapps/secure.png';

import '../../styles/dapps.css';


const dappsSlides = [
	{
		img: dapps_gig,
		heading: 'Decentralized Gig Economies',
		paragraphs: [
			'Telos will lead the emergence of a new and more equitable gig economy; imagine the possibilities of the next Uber or Airbnb led by community ownership and a decentralized workforce.'
		]
	},
	{
		img: dapps_currency,
		heading: 'Currency and Commerce',
		paragraphs: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sodales mollis tellus et hendrerit. Vestibulum arcu eros, euismod sit amet rutrum vel, feugiat at nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras scelerisque, nibh id ornare rhoncus, justo orci porttitor nisi, ut auctor ligula neque non diam.'
		]
	},
	{
		img: dapps_records,
		heading: 'Records and Info',
		paragraphs: [
			'Quisque sodales mollis tellus et hendrerit. Vestibulum arcu eros, euismod sit amet rutrum vel, feugiat at nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
		]
	}
];

const dappSections = [
	{
		heading: 'EOS Compatibility',
		img: compatibility,
		paragraphs: [
			'EOS.IO is currently responsible for half of all blockchain transactions and its development is expected to advance faster than older platforms like Ethereum and NEO. The Telos network runs the same EOS.IO software as the EOS mainnet, so DApps written for EOS can run on Telos. No rewrite needed!'
		]
	},
	{
		heading: 'Powerful performance for DApp development',
		img: powerful,
		paragraphs: [
			'Telos facilitates incredibly fast and free transactions to establish a stable and affordable market for DApp development. RAM supply will be scaled with actual ussage in order to ensure affordability and prevent hoarding. Telos tokens have more than three times the resource utility of EOS, and developers will be able to purchase and stake resources such as CPU and bandwidth on behalf of users.'
		]
	},
	{
		heading: 'Secure and robust network',
		img: secure,
		paragraphs: [
			'Telos expands on the EOS network by enforcing additional disclosure requirements and rigorous backup testing for Telos block producers, who must maintain a full and open testnet in order to support DApp development. Nonfunctioning block producers are temporarily swapped out after missing just 30 minutes, as opposed to 3 hours on the EOS mainnet, so that developers encounter fewer pauses and problems without compromising security. Fair play ensures all active and standby block producers are ready to produce at all times for maximum performance and stability.'
		]
	},
	{
		heading: 'DApps can be proprietary code',
		img: proprietary,
		paragraphs: [
			'Protect your intellectual property with Telos. Unlike EOS, Telos will not force developers to open source their code in order to support commercial DApps. However, those that received funds from the network (block producers, adjudicators, code contributors, etc.) within the last 6 months must designate any DApps as open source.'
		]
	},
	{
		heading: 'Decentralized Governance and Arbitration',
		img: decentralized,
		paragraphs: [
			'Telos has the most decentralized ownership of any blockchain existing today. No individual or entity will start with, or is likely to ever own, even one percent of the Telos blockchain. Telos\' decentralized voting system ensures that the blockchain is guided by the will of the community and the steady hand of the most competent block producers.',
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
							<h2>With affordable deployment prices, propietary code protections, and EOS DApp compatibility, Telos is the network of choice for DApp developers.</h2>
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
								<p>(coming soon)</p>
							</div>
							<div className='button_container'>
								<Button
									bsSize='large'
									bsStyle='primary'
								>
									SMART CONTRACT TEMPLATES
								</Button>
								<p>(coming soon)</p>
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
	}

	render(){
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};

		return (
			<section id='dapps_slider'>
				<header>
					<h2>The Future on DApps on Telos</h2>
				</header>
				<Slider {...settings}>
					{dappsSlides.map((slide, i) => {
						return (
							<DAppSlide
								img={slide.img}
								heading={slide.heading}
								paragraphs={slide.paragraphs} />
						);
					})}
				</Slider>
			</section>
		);
	}
}

const DAppSlide = (props) => {
	return (
		<div className='dapps_slide'>
			<img src={props.img} alt='' />
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
							paragraphs={sect.paragraphs} />
					);
				})
			}
			</Grid>
		</section>
	);
};

const DAppSection = (props) => {
	return (
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
	);
};

export default DAppsPage;