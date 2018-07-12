import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import chart from '../../img/Telos_MarketingSite_Chart_1000px.png';
import icon_dapps from '../../img/Telos_MarketingSite_Icon_dapps_200px.png';
import icon_dpos from '../../img/Telos_MarketingSite_Icon_dpos_200px.png';
import icon_governance from '../../img/Telos_MarketingSite_Icon_governance_200px.png';
import white_paper from '../../img/white_paper_pdf_solid.png';
//partners logos
import eos_detroit from '../../img/partner_logos/logo_eosdetroit_small.png';
import eos_metal from '../../img/partner_logos/logo_eosmetal.png';
import dutcheos from '../../img/partner_logos/logo_ketendutch.png';
import eosukio from '../../img/partner_logos/logo_eosukio2.png';
import eosbarcelona from '../../img/partner_logos/logo_eosbarcelona.png';
import eosvan from '../../img/partner_logos/logo_eosvan.png';
import goodblock from '../../img/partner_logos/logo_goodblock.png';
import infinitybloc from '../../img/partner_logos/logo_infinitybloc.png';

import '../../styles/front_page.css';

const partnersArr = [
	{
		name: 'eos detroit',
		logo: eos_detroit,
		url: 'https://eosdetroit.io/'
	},
	{
		name: 'eos metal',
		logo: eos_metal,
		url: 'https://eosmetal.io'
	},
	{
		name: 'eosuk io',
		logo: eosukio,
		url: 'https://eosuk.io/'
	},
	{
		name: 'dutch eos',
		logo: dutcheos,
		url: 'https://dutcheos.io'
	},
	{
		name: 'eos barcelona',
		logo: eosbarcelona,
		url: 'http://eosbarcelona.com/'
	},
	{
		name: 'eos van',
		logo: eosvan,
		url: 'http://www.eosvan.io/'
	},
	{
		name: 'good block',
		logo: goodblock
	},
	{
		name: 'infinitybloc',
		logo: infinitybloc
	},
	{
		name: 'Telos Labs'
	},
	{
		name: 'Sukesh Tedla'
	}
];

const FrontPage = ({landing_page}) => {
	
	const { intro_heading,
			intro_content,
			developers_heading,
			developers_content,
			dpos_heading,
			dpos_content,
			gov_heading,
			gov_content,
			white_paper_heading,
			white_paper_content,
			github_text,
			partners_heading } = landing_page;

	return (
		<div>
			<Intro
				intro_heading={intro_heading}
				intro_content={intro_content} />
			<IconsText
				developers_heading={developers_heading}
				developers_content={developers_content}
				dpos_heading={dpos_heading}
				dpos_content={dpos_content}
				gov_heading={gov_heading}
				gov_content={gov_content} />
			<WhitePaper
				white_paper_heading={white_paper_heading}
				white_paper_content={white_paper_content}
				github_text={github_text} />
			<Partners
				partners_heading={partners_heading} />
		</div>
	);
};

const Intro = ({intro_heading, intro_content}) => {

	return (
		<section id='front_page_intro'>
			<Grid>
				<Row>
					<Col sm={6}>
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeIn'
							duration={0.4} >
							<h1>{intro_heading}</h1>
							<p>{intro_content}</p>
						</ScrollAnimation>
					</Col>
					<Col sm={6}>
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeIn'
							duration={0.4}
							delay={250} >
							<img src={chart} alt='chart' className='img-responsive' />
						</ScrollAnimation>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const IconsText = ({developers_heading, developers_content, dpos_heading, dpos_content, gov_heading, gov_content}) => {
	return (
		<section id='front_page_icons'>
			<Grid>
				<Row>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeIn'
							duration={0.4}>
							<img src={icon_dapps} alt="dapps" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{developers_heading}</h2>
								<p>{developers_content}</p>
							</div>
						</ScrollAnimation>
					</Col>
					<Col sm={4}>

						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeIn'
							duration={0.4}
							delay={250}>
							<img src={icon_dpos} alt="dpos" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{dpos_heading}</h2>
								<p>{dpos_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
					<Col sm={4}>
	
						<ScrollAnimation
							animateOnce={true}
							animateIn='fadeIn'
							duration={0.4}
							delay={500}>
							<img src={icon_governance} alt="governance" className='img-responsive front_page_icons_img' />
							<div className='icons_text'>
								<h2>{gov_heading}</h2>
								<p>{gov_content}</p>
							</div>
						</ScrollAnimation>

					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const WhitePaper = ({white_paper_heading, white_paper_content, github_text}) => {

	return (
		<section id='white_paper'>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<Row>
							<Col sm={6}>
								<ScrollAnimation
									animateOnce={true}
									animateIn='fadeIn'
									duration={0.4}>
									
									<div className='white_paper_text'>
										<h1 dangerouslySetInnerHTML={{__html: white_paper_heading}}></h1>
										<p>{white_paper_content}</p>
										<h3>{github_text}</h3><a href='https://github.com/Telos-Foundation' target='_blank' rel='noopener noreferrer'>https://github.com/Telos-Foundation</a>
									</div>
								</ScrollAnimation>
							</Col>
							<Col sm={6}>
								<ScrollAnimation
									animateOnce={true}
									animateIn='fadeIn'
									duration={0.4}
									delay={250}>

									<div className='white_paper_link'>
										<a href='resources/Telos Whitepaper - draft D.pdf' target='_blank' rel='noopener noreferrer'>
											<img src={white_paper} alt='white paper pdf' className='img-responsive front_page_pdf' />
										</a>
									</div>
								</ScrollAnimation>
							</Col>
						</Row>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Partners = ({partners_heading}) => {
	const partner = partnersArr[0];
	return (
		<section id='partners'>
			<header className='text-center'>
				<h1>{partners_heading}</h1>
			</header>
			<Grid>
				<div className='partners_container'>
					{partnersArr.map((partner, i) => {
						return (
							<div className='partner' key={i}>
								{partner.url ? 
									<a href={partner.url} target='_blank' rel='noopenter noreferrer'>
										{partner.logo ? <img src={partner.logo} alt={partner.name} className='partner_logo' /> : <p>{partner.name}</p>}
									</a>
									: 
									partner.logo ? <img src={partner.logo} alt={partner.name} className='partner_logo' /> : <p>{partner.name}</p>
								}
							</div>
						);
					})}
				</div>
			</Grid>
		</section>
	);
};

export default FrontPage;