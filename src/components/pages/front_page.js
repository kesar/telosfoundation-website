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
import blocksmith from '../../img/partner_logos/logo_blocksmith.png';
import dutcheos from '../../img/partner_logos/logo_dutcheos.png';
import eosukio from '../../img/partner_logos/logo_eosukio.png';

import '../../styles/front_page.css';

const FrontPage = () => {

	return (
		<div>
			<Intro />
			<IconsText />
			<WhitePaper />
			<Partners />
		</div>
	);
};

const Intro = () => {

	return (
		<section id='front_page_intro'>
			<Grid>
				<Row>
					<Col sm={6}>
						<h1>DPoS Perfected</h1>
						<p>Delegated proof of stake is the future of smart-contract blockchains.  We are EOS based, but we’re taking steps to make this the most decentralized currency around.  Our main focus is limiting the effects of whales in the eco-system, to control the price of RAM and to create a better system of governance.</p>
					</Col>
					<Col sm={6}>
						<img src={chart} alt='chart' className='img-responsive' />
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const IconsText = () => {
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
								<h2>For Developers</h2>
								<p>By controlling the price of RAM as well as not forcing all software to be open-sourced, we have a much more developer-friendly contract environment.</p>
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
								<h2>DPoS Speed</h2>
								<p>
	For a moder smart-contract blockchain to thrive it needs to be scalable and fast.  We feel that the delegated-proof-of-stake EOSIO software creates a great base for this and that is the future of blockchains.</p>
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
								<h2>Governance</h2>
								<p>By having an active constitution, creating the Telos Foundation and setting strict qualifications for block producers, we have created a cohesive group for governance.</p>
							</div>
						</ScrollAnimation>

					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const WhitePaper = () => {

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
									duration={0.5}>
									
									<div className='white_paper_text'>
										<h1>Download the<br /> white paper</h1>
										<p>Please take a few minutes and look through our white paper to see for yourself.  We believe that we’ve got some great ideas that will help create the best blockchain available.
	</p>
									</div>
								</ScrollAnimation>
							</Col>
							<Col sm={6}>
								<ScrollAnimation
									animateOnce={true}
									animateIn='fadeIn'
									duration={0.5}
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

const Partners = () => {
	return (
		<section id='partners'>
			<header className='text-center'>
				<h1>Meet our Partners</h1>
			</header>
			<Grid>
				<div className='partners_container'>
					<div className='partner'>
						<a href='https://eosdetroit.io/' target='_blank' rel='noopener noreferrer'>
							<img src={eos_detroit} alt='eos detroit' className='partner_logo' />
						</a>
					</div>
					<div className='partner'>
						<a href='https://eosmetal.io/' target='_blank' rel='noopener noreferrer'>
							<img src={eos_metal} alt='eos metal' className='partner_logo' />
						</a>
					</div>
					<div className='partner'>
						<a href='https://eosuk.io/' target='_blank' rel='noopener noreferrer'>
							<img src={eosukio} alt='eosuk io' className='partner_logo' />
						</a>
					</div>
					<div className='partner'>
						<a href='https://eosblocksmith.io/' target='_blank' rel='noopener noreferrer'>
							<img src={blocksmith} alt='blocksmith' className='partner_logo' />
						</a>
					</div>
					<div className='partner'>
						<a href='https://dutcheos.io/' target='_blank' rel='noopener noreferrer'>
							<img src={dutcheos} alt='dutch eos' className='partner_logo' />
						</a>
					</div>
				</div>
			</Grid>
		</section>
	);
};

export default FrontPage;