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
		
		]
	}
];


const DAppsPage = () => {
	return (
		<div className='dapps'>
			<DAppsIntro />
			<DAppsSlider />
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
		<div></div>
	);
};

const DAppSection = (props) => {
	return (
		<div></div>
	);
};

export default DAppsPage;