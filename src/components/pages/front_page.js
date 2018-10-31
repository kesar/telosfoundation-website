import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

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
import teloslabs from '../../img/partner_logos/logo_teloslabs.png';
import eosworld from '../../img/partner_logos/logo_eosworld.png';
import eosgreen from '../../img/partner_logos/logo_eosgreen.png';
import fuzzy from '../../img/partner_logos/logo_fuzzy.png';
import caleos from '../../img/partner_logos/logo_caleos.png';
import eos_in_space from '../../img/partner_logos/logo_eosspace.png';
// import eos_sweden from '../../img/partner_logos/logo_eossweden.png';
import sweden_cornet from '../../img/partner_logos/logo_swedencornet.png';
// import eos_miami from '../../img/partner_logos/logo_eosmiami.png';
import telos_miami from '../../img/partner_logos/logo_telos_miami.png';
import hellenicos from '../../img/partner_logos/logo_hellenicos.png';
import discover_telos from '../../img/partner_logos/logo_discovertelos.png';
import zmeta from '../../img/partner_logos/logo_zmeta.png';
import blindbloc from '../../img/partner_logos/logo_blindbloc.png';
import csx from '../../img/partner_logos/logo_csx.png';
import telos_russia from '../../img/partner_logos/logo_telosrussia.png';
import amplified from '../../img/partner_logos/logo_amplified.png';
import venezuela from '../../img/partner_logos/logo_telos_venezuela.png';
import madrid from '../../img/partner_logos/logo_telos_madrid.png';
import telos_ny from '../../img/partner_logos/logo_telos_ny.png';
import telos_dac from '../../img/partner_logos/logo_telos_dac.png';
import telos_canton from '../../img/partner_logos/logo_telos_canton.png';
import eos_impera from '../../img/partner_logos/logo_eosimpera.png';
import zephyr from '../../img/partner_logos/logo_zephyr.png';
import telos_vancouver from '../../img/partner_logos/logo_telos_vancouver.png';

//exchange logos
import chainrift from '../../img/exchange_logos/exchange_chainrift.png';
import dexeos from '../../img/exchange_logos/exchange_dexeos.png';

import chainrift_button from '../../img/exchange_logos/Chainrift-Button.jpg';
import dexeos_button from '../../img/exchange_logos/DEXEOS-Button.jpg';
import findex_button from '../../img/exchange_logos/Findex-Button.jpg';

import sqrl_logo from '../../img/SQRL_Logo_1024px.png';

//white papers
import {WHITE_PAPER_ENGLISH, WHITE_PAPER_KOREAN, WHITE_PAPER_CHINESE} from '../../config/constants';

//charts
import chart_ch from '../../img/charts/Telos_MarketingSite_Chart_1000px_CH.png';
import chart_en from '../../img/charts/Telos_MarketingSite_Chart_1000px_EN.png';
import chart_kr from '../../img/charts/Telos_MarketingSite_Chart_1000px_KR.png';
import chart_pg from '../../img/charts/Telos_MarketingSite_Chart_1000px_PG.png';
import chart_rn from '../../img/charts/Telos_MarketingSite_Chart_1000px_RN.png';
import chart_sp from '../../img/charts/Telos_MarketingSite_Chart_1000px_SP.png';

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
		name: 'telos vancouver',
		logo: telos_vancouver,
		url: 'https://www.telosvancouver.io/'
	},
	{
		name: 'good block',
		logo: goodblock,
		url: 'http://goodblock.io'
	},
	{
		name: 'infinitybloc',
		logo: infinitybloc,
		url: 'https://www.infinitybloc.io/'
	},
	{
		name: 'Telos Labs',
		logo: teloslabs
	},
	{
		name: 'Eos World',
		logo: eosworld,
		url: 'https://eostheworld.io/'
	},
	{
		name: 'eos green',
		logo: eosgreen,
		url: 'http://eosgreen.io/'
	},
	{
		name: 'fuzzy',
		logo: fuzzy
	},
	{
		name: 'caleos',
		logo: caleos,
		url: 'https://caleos.io/'
	},
	{
		name: 'eos in space',
		logo: eos_in_space,
		url: 'https://eosin.space/#telos'
	},
	{
		name: 'telos miami',
		logo: telos_miami,
		url: 'http://telos.miami'
	},
	{
		name: 'eos sweden',
		logo: sweden_cornet,
		url: 'https://eossweden.eu/'
	},
	{
		name: 'hellenic open systems',
		logo: hellenicos
	},
	{
		name: 'discover telos',
		logo: discover_telos
	},
	{
		name: 'z meta',
		logo: zmeta
	},
	{
		name: 'blind bloc',
		logo: blindbloc,
		url: 'https://www.blindblocart.io/'
	},
	{
		name: 'eos csx',
		logo: csx,
		url: 'https://www.csx.io'
	},
	{
		name: 'telos russia',
		logo: telos_russia,
	},
	{
		name: 'telos amplified',
		logo: amplified,
		url: 'https://amplified.software/'
	},
	{
		name: 'telos venezuela',
		logo: venezuela,
		url: 'https://www.telosvenezuela.com'
	},
	{
		name: 'telos madrid',
		logo: madrid,
		url: 'https://telosmadrid.io/'
	},
	{
		name: 'telos dac',
		logo: telos_dac
	},
	{
		name: 'telos ny',
		logo: telos_ny
	},
	{
		name: 'telos canton',
		logo: telos_canton,
		url: 'https://teloscanton.io'
	},
	{
		name: 'eos impera',
		logo: eos_impera,
		url: 'https://eosimpera.io'
	},
	{
		name: '21 zephyr',
		logo: zephyr,
		url: 'https://telos-21zephyr.com'
	}
];

const FrontPage = ({landing_page, language}) => {
	
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

	const getStyle = () => {
		if(language === 'arabic') return {direction: 'rtl'};
		return {};
	};

	return (
		<div style={getStyle()}>
			<Intro
				intro_heading={intro_heading}
				intro_content={intro_content}
				language={language} />
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
				github_text={github_text}
				language={language} />
			<Exchanges />
			<Wallets />
			<Partners
				partners_heading={partners_heading} />
		</div>
	);
};

const Intro = ({intro_heading, intro_content, language}) => {

	let localizedChart = '';
	switch(language){
		case 'en':
			localizedChart = chart_en;
			break;
		case 'korean':
			localizedChart = chart_kr;
			break;
		case 'mandarin':
			localizedChart = chart_ch;
			break;
		case 'pt-br':
			localizedChart = chart_pg;
			break;
		case 'russian':
			localizedChart = chart_rn;
			break;
		case 'spanish':
			localizedChart = chart_sp;
			break;
		default:
			localizedChart = chart_en;
			break;
	}

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
							<img src={localizedChart} alt='chart' className='img-responsive' />
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

const WhitePaper = ({white_paper_heading, white_paper_content, github_text, language}) => {

	let wp_url;
	switch(language){
		case 'en':
			wp_url = WHITE_PAPER_ENGLISH;
			break;
		case 'korean':
			wp_url = WHITE_PAPER_KOREAN;
			break;
		case 'mandarin':
			wp_url = WHITE_PAPER_CHINESE;
			break;
		default:
			wp_url = WHITE_PAPER_ENGLISH;
			break;
	}

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
										<a href={wp_url} target='_blank' rel='noopener noreferrer'>
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

const Exchanges = () => {
	return (
		<section id='exchanges'>
			<header>
				<h1>Participating Exchanges</h1>
			</header>
			<div className='exchange_intro'>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<p>Buy TLOS, the Telos token, and exchange them for other currencies on these exchanges. Check back often for new exchange partnerships!</p>
						</Col>
					</Row>
				</Grid>
			</div>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='exchange_buttons'>
							<div className='exchange_button'>
								<a
									href='https://chainrift.com'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={chainrift_button} alt='chainrift' />
								</a>
							</div>
							<div className='exchange_button'>
								<a
									href='https://dexeos.io'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={dexeos_button} alt='dexeos' />
								</a>
							</div>
							<div className='exchange_button'>
								<a
									href='https://findex.pro'
									target='_blank'
									rel='noopener noreferrer'
								>
									<img src={findex_button} alt='findex' />
								</a>
							</div>	
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Wallets = () => {
	return (
		<section id='wallets'>
			<header>
				<h1>Telos Wallets</h1>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='sqrl_wallet'>
							<p>Store and retrieve your TLOS tokens on these wallets.<br /> Check back often for new wallet partnerships!</p>
							<Link to='/downloads'>
								<img src={sqrl_logo} alt='sqrl wallet' />
							</Link>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const Partners = ({partners_heading}) => {
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