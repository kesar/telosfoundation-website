import React, {Component} from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';

import goodblock from '../../img/partner_logos/logo_goodblock.png';
import caleos from '../../img/partner_logos/logo_caleos.png';
import zephyr from '../../img/partner_logos/logo_zephyr.png';
import blindbloc from '../../img/partner_logos/logo_blindbloc.png';
import telos_vancouver from '../../img/partner_logos/logo_telos_vancouver.png';
import eosbarcelona from '../../img/partner_logos/logo_eosbarcelona.png';
// import eosgreen from '../../img/partner_logos/logo_eosgreen.png';
import telos_green from '../../img/partner_logos/logo_telos_green.png';
import telos_miami from '../../img/partner_logos/logo_telos_miami.png';
import dutcheos from '../../img/partner_logos/logo_dutch_eos.png';
import hellenicos from '../../img/partner_logos/logo_hellenicos.png';
// import eos_sweden from '../../img/partner_logos/logo_eossweden.png';
import kainos from '../../img/partner_logos/logo_kainos.png';
import eos_metal from '../../img/partner_logos/logo_eosmetal.png';
import sweden_cornet from '../../img/partner_logos/logo_swedencornet.png';
import telos_dac from '../../img/partner_logos/logo_telos_dac.png';
import telos_global from '../../img/partner_logos/logo_telosglobal.png';

import eos_detroit from '../../img/partner_logos/logo_eosdetroit_small.png';
import telosuk from '../../img/partner_logos/logo_telos_uk.png';
// import eosvan from '../../img/partner_logos/logo_eosvan.png';
import infinitybloc from '../../img/partner_logos/logo_infinitybloc.png';
// import teloslabs from '../../img/partner_logos/logo_teloslabs.png';
import eosworld from '../../img/partner_logos/logo_eosworld.png';
// import fuzzy from '../../img/partner_logos/logo_fuzzy.png';
// import eos_in_space from '../../img/partner_logos/logo_eosspace.png';
// import discover_telos from '../../img/partner_logos/logo_discovertelos.png';
// import zmeta from '../../img/partner_logos/logo_zmeta.png';
import csx from '../../img/partner_logos/logo_csx.png';
// import telos_russia from '../../img/partner_logos/logo_telosrussia.png';
import amplified from '../../img/partner_logos/logo_amplified.png';
import venezuela from '../../img/partner_logos/logo_telos_venezuela.png';
import madrid from '../../img/partner_logos/logo_telos_madrid.png';
import telos_ny from '../../img/partner_logos/logo_telos_ny.png';
import telos_canton from '../../img/partner_logos/logo_telos_canton.png';
import eos_impera from '../../img/partner_logos/logo_eosimpera.png';
import telos_voyager from '../../img/partner_logos/logo_telos_voyager.png';
import china_goingos from '../../img/partner_logos/logo_china_goingos.png';
import telescope from '../../img/partner_logos/logo_telescope.png';
import intasia from '../../img/partner_logos/logo_intasia.png';
import germany from '../../img/partner_logos/logo_telos_germany.png';
import central from '../../img/partner_logos/logo_telos_central.png';
import telos_china from '../../img/partner_logos/logo_telos_china.png';
import eos_sandiego from '../../img/partner_logos/logo_eos_sandiego.png';
import eos_sphere from '../../img/partner_logos/logo_eos_sphere.png';
import eos_index from '../../img/partner_logos/logo_eosindex.png';
import telos_unlimited from '../../img/partner_logos/logo_telos_unlimited.png';
import eos_venezuela from '../../img/partner_logos/logo_eos_venezuela.png';
import eos_awake from '../../img/partner_logos/logo_eosawake.png';
import cryptosuvi from '../../img/partner_logos/logo_cryptosuvi.png';

import checkmark from '../../img/green_check.png';

import '../../styles/block_prod_candidates.css';

//sort states
const DEFAULT_SORT = 'default_sort'
const COMPLIANCE_SORT_ASC = 'compliance_sort_asc';
const COMPLIANCE_SORT_DESC = 'compliance_sort_desc';

class BlockProducerCandidates extends Component {

	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		return (
			<div className='block_prod_candidates'>
				<Helmet>
					<title>Telos BP Candidates</title>
					<meta name='description' content='Directory of candidates who submitted their names for consideration as block producers on Telos and are listed in the order of when they joined the Telos testnet. This is not necessarily a complete list of block producer candidates, and being on this list is not an endorsement.' />
				</Helmet>

				<ScrollAnimation
					animateOnce
					animateIn='fadeIn'
					duration={0.5}
				>
					<Intro />
				</ScrollAnimation>
				<Candidates />
			</div>
		);
	}
}

const Intro = () => {
	return (
		<section id='block_prod_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Block Producer Candidates</h1>
						<h2>This is a directory of candidates who submitted their names for consideration as block producers on Telos and are listed in the order of when they joined the Telos testnet. This is not necessarily a complete list of block producer candidates, and being on this list is not an endorsement.</h2> 
						<h2>Remember that Telos uses an inverse-weighted voting system - the more block candidates that you vote for, the more your votes count. Select up to 30 block producers to ensure that your votes hold maximum value.</h2>
						<h2>Download Sqrl, the free Telos wallet, to vote for block producer candidates:</h2> 
						<h2><Link to='/downloads'>https://telosfoundation.io/downloads</Link></h2>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

class Candidates extends Component {

	constructor(){
		super();
		this.state = {
			sort_by: DEFAULT_SORT
		};
		this.handleComplianceClick = this.handleComplianceClick.bind(this);
	}

	handleComplianceClick(e){
		e.preventDefault(); //might not need this?
		const {sort_by} = this.state;
		if(sort_by === COMPLIANCE_SORT_DESC){
			this.setState({sort_by: COMPLIANCE_SORT_ASC});
		}else if(sort_by === COMPLIANCE_SORT_ASC){
			this.setState({sort_by: DEFAULT_SORT});
		}else{
			this.setState({sort_by: COMPLIANCE_SORT_DESC});
		}
	}

	render(){
		const bpCandidates = [
			{
				name: 'GoodBlock',
				description: 'GoodBlock™, a leader in the creation of Telos, will support innovative DApps and lightning-fast transactions to help build the world’s most powerful blockchain network.',
				url: 'https://goodblock.io',
				logo: goodblock,
				vote_name: 'goodblocktls',
				compliant: true
			},
			{
				name: 'EOS Detroit',
				description: 'EOS Detroit\'s vision beyond serving as an infrastructure provider for EOSIO networks is to create EOSIO decentralized applications, as well as to grow the EOSIO ecosystem through education, advocacy, and outreach.',
				url: 'https://eosdetroit.io',
				logo: eos_detroit,
				vote_name: 'eosiodetroit',
				compliant: true
			},
			{
				name: 'EOSMetal',
				description: 'We are dedicated to advanced infrastructure, run completely on bare metal and we are independently funded IT professionals with over 50 years of combined IT experience.',
				url: 'https://eosmetal.io',
				logo: eos_metal,
				vote_name: 'eosmetaliobp',
				compliant: true
			},
			{
				name: 'Telos UK',
				description: 'Telos UK is headed up by Roger & Jim of EOS UK. They will serve the Telos community with the original EOS ethos of transparency, accessibility, professionalism and reliability.',
				url: 'https://telosuk.io',
				logo: telosuk,
				vote_name: 'telosuknodes',
				compliant: true
			},
			{
				name: 'DutchEOS',
				description: 'We are a self funded EOSIO Block Producer based in the Netherlands striving for maximum Reliability and Independence. DutchEOS has been a proud supporter of Telos since the start.',
				url: 'https://dutcheos.io',
				logo: dutcheos,
				vote_name: 'votedutcheos',
				compliant: false
			},
			{
				name: 'EOS Barcelona',
				description: 'EOS Barcelona have been working with the community since December 2017. We have bare metal servers on EOS main net, EOS testnet and Telos Testnet.',
				url: 'http://eos.barcelona',
				logo: eosbarcelona,
				vote_name: 'eosbarcelona',
				compliant: true
			},
			{
				name: 'KainosBP',
				description: 'KainosBP are a self-funded bare metal/cloud hybrid BP candidate. 10% of our rewards will go to unboundnow.org, a non-profit working in local communities to fight human trafficking.',
				url: 'https://kainosbp.com',
				logo: kainos,
				vote_name: 'kainosblkpro',
				compliant: true
			},
			{
				name: 'Telos Vancouver',
				description: 'Telos Vancouver, an independently owned Block Producer, is building solutions to real world problems on Telos through development, education, and support of the eos.io community.',
				url: 'https://www.telosvancouver.io',
				logo: telos_vancouver,
				vote_name: 'tlsvancouver',
				compliant: true
			},
			{
				name: 'infinitybloc',
				description: 'We use fast, scalable blockchain to enable new economic models that re-distribute value creation back to the community. We call it "the fair gig economy".',
				url: 'https://www.infinitybloc.io',
				logo: infinitybloc,
				vote_name: 'infinitybloc',
				compliant: false
			},
			{
				name: 'Big Iron BP',
				description: 'Big Iron BP (formerly, EOS the World) one of 6 original Telos partners, features bare-metal, best-in-class hardware, and world-class personnel in IT and executive business.',
				url: 'http://www.BigIron.io',
				logo: eosworld,
				vote_name: 'BigIronbpTex',
				compliant: false
			},
			{
				name: 'TelosGreen',
				description: 'TelosGreen goal is to promote sustainability and enterprise adoption of Telos Blockchain Network by engaging, empowering & educating the community.',
				logo: telos_green,
				vote_name: 'telosgreenbp',
				compliant: true
			},
			{
				name: 'BlindBlocArt',
				description: 'We will be using the funds from Telos to open art studios to teach art for free to kids and people with disabilities around the world, starting small and hopefully growing to many countries.',
				url: 'https://www.blindblocart.io',
				logo: blindbloc,
				vote_name: 'BlindBlocArt',
				compliant: true
			},
			{
				name: 'CalEOS',
				description: 'Caleos is a self-funded, bare metal Block Producer & dApp development team that has made substantial contributions to network mechanics & development.',
				url: 'https://caleos.io',
				logo: caleos,
				vote_name: 'caleosblocks',
				compliant: true
			},
			{
				name: 'Telos Miami',
				description: 'At Telos Miami, we’re passionate about Blockchain, Entrepreneurship, and Community. We are committed to giving back and creating DApps to transform industries.',
				url: 'https://telos.miami',
				logo: telos_miami,
				vote_name: 'TelosMiamiBP',
				compliant: true
			},
			{
				name: 'SwedenCorNet (TELOS/EOS Sweden)',
				description: 'SwedenCorNet places emphasis on the fundamentals of security, privacy, risk management, and compliance. We strive for decentralization and serving the masses (including YOU) as our top priority.',
				url: 'https://eossweden.eu',
				logo: sweden_cornet,
				vote_name: 'swedencornet',
				compliant: true
			},
			{
				name: 'Octagon Labs',
				description: 'Octagon Labs are building modern trusted knowledge networks. The team behind this organisation brings enterprise class experience to blockchain adoption.',
				url: 'https://octagonlabs.org',
				logo: hellenicos,
				vote_name: 'octagontelos',
				compliant: false
			},
			{
				name: 'CSX Community',
				description: 'Our goal is to become an active block producer to support the network, applications, and developers of the Telos blockchain.',
				url: 'https://www.csx.io',
				logo: csx,
				vote_name: 'csxcommunity',
				compliant: false
			},
			{
				name: 'Amplified Telos',
				description: 'Amplified Telos is on a mission to amplify the Telos blockchain through development, testing and support on the core, Network Monitor and Worker Proposal Contract.',
				url: 'https://amplified.software',
				logo: amplified,
				vote_name: 'amplifiedtls',
				compliant: false
			},
			{
				name: 'Telos Venezuela',
				description: 'We are a group of System Administrators and Miners involved in blockchain since 2014. Creating a better world block by block & giving back to the community.',
				url: 'https://www.telosvenezuela.com',
				logo: venezuela,
				vote_name: 'tlsvenezuela',
				compliant: true
			},
			{
				name: 'Telos Madrid',
				description: 'Focused on producing blocks and comitted to make TELOS community grow. Baremetal. Self funded.',
				url: 'https://www.telosmadrid.io',
				logo: madrid,
				vote_name: 'telosmadrid1',
				compliant: true
			},
			{
				name: 'TelosDAC',
				description: 'Our goal is to ensure that the community has a supplementary stake in the network by means of part ownership in a block producer candidate.',
				url: 'https://telosdac.io',
				logo: telos_dac,
				vote_name: 'telosdacnode',
				compliant: true
			},
			{
				name: 'Telos New York',
				description: 'Telos New York, a self-funded Block Producer that is dedicated EXCLUSIVELY to the Telos Network. Our focus is to provide a high-performance infrastructure using top of the line bare metal servers.',
				url: 'http://nytelos.com',
				logo: telos_ny,
				vote_name: 'telosnewyork',
				compliant: true
			},
			{
				name: 'Telos Canton',
				description: 'Telos Canton adheres to the "Fair, Just, Open" principle and strives to make Telos Canton a complete DAO. And the Libra.Vote decentralized voting and social survey system will be developed to extend the Telos network usage.',
				url: 'https://teloscanton.io',
				logo: telos_canton,
				vote_name: 'teloscantons',
				compliant: false
			},
			{
				name: 'EOSImpera',
				description: 'We are EOS Impera from Italy. Our mission is to create a platform for the community that can finance the best projects proposed by the community.',
				url: 'https://eosimpera.io',
				logo: eos_impera,
				vote_name: 'tlosimperabp',
				compliant: false
			},
			{
				name: 'Telos-21Zephyr',
				description: 'Telos-21Zephyr is passionate and committed to helping build the community around Telos by offering support to Telos users, and helping grow participation within the Telos community.',
				url: 'https://telos-21zephyr.com',
				logo: zephyr,
				vote_name: '21zephyr1111',
				compliant: true
			},
			{
				name: 'TelosGlobal',
				description: 'TelosGlobal is building global infrastructure focused on geographical decentralization, robustness, and high-availability for the TELOS community.  Your vote supports this effort and we thank you for your support!',
				url: 'https://telosglobal.io',
				logo: telos_global,
				vote_name: 'telosglobal1',
				compliant: true
			},
			{
				name: 'Telos Voyager',
				description: 'With experienced startup team members based in LA, Hawaii, and Latin America, we are focused on developing technical talent and growing the EOSIO ecosystem in emerging regions.',
				url: 'http://telosvoyager.io',
				logo: telos_voyager,
				vote_name: 'telosvoyager',
				compliant: true
			},
			{
				name: 'Telos GoingOS',
				description: 'Goingos is a digital team focusing on block chains and digitally encrypted currencies, dedicated to promoting good development of TELOS.',
				url: 'http://www.goingos.org',
				logo: china_goingos,
				vote_name: 'telgoingos13',
				compliant: false
			},
			{
				name: 'The Teloscope',
				description: 'With a highly competent and experienced team we are committed to achieve a high performance and reliable BP while being 100% transparent and community focused.',
				url: 'https://theteloscope.io',
				logo: telescope,
				vote_name: 'theteloscope',
				compliant: true
			},
			{
				name: 'Telos Intasia',
				description: 'Telos Intasia is based in a far-flung island called Borneo island. We are focusing on providing the best server hardware and infrastructure that contribute to the Telos system.',
				url: 'https://ikuwara.com',
				logo: intasia,
				vote_name: 'telosintasia',
				compliant: true
			},
			{
				name: 'TelosGermany',
				description: 'TelosGermany is a solid block producer candidate based out of Frankfurt (Germany). We believe in the values that Telos brings to the table and we will do our best to make Telos a success story.',
				url: 'https://telosgermany.io',
				logo: germany,
				vote_name: 'telosgermany',
				compliant: false
			},
			{
				name: 'Telos Central',
				description: 'We strive to be the central source of information for all things Telos. We are very community focused and want to find ways to include and educate the Telos community as much as possible, while at the same time develop usable user-friendly products.',
				url: 'https://teloscentral.com',
				logo: central,
				vote_name: 'teloscentral',
				compliant: false
			},
			{
				name: 'Telos China',
				description: 'The Telos China is a community specializing in block chain preaching and digital currency investment. We are committed to promoting the recognition of block chains and investing in block chains.',
				url: 'http://www.telasiachina.com',
				logo: telos_china,
				vote_name: 'telasiachina',
				compliant: false
			},
			{
				name: 'EOS San Diego',
				description: 'EOS San Diego is an independent team, 100% owned and funded by founders. Our focus is to add value to the TELOS blockchain by running and securing the network using the state of the art technology and growing the TELOS blockchain community.',
				url: 'https://www.eossandiego.io',
				logo: eos_sandiego,
				vote_name: 'eossandiego1',
				compliant: false
			},
			{
				name: 'EOSphere',
				description: 'EOSphere are an Australian BP, made up of professionals and EOSIO community members. They have the required technical expertise, professionalism and infrastructure as well as support the best community initiatives.',
				url: 'https://eosphere.io',
				logo: eos_sphere,
				vote_name: 'eosphereiobp',
				compliant: true
			},
			{
				name: 'EOSindex',
				description: 'EOSindex is a 100% self-funded block producer candidate, using bare-metal infrastructure in Germany. We are the creators of eosindex.io and plan to support Telos the same way.',
				url: 'https://eosindex.io',
				logo: eos_index,
				vote_name: 'bpeosindexio',
				compliant: true
			},
			{
				name: 'Telos Unlimited',
				description: 'Telos Unlimited provides Canadian multi-location bare metal hardware combined with strategic adoption initiatives designed to engage users and boost token value.',
				url: 'http://telosunlimited.io',
				logo: telos_unlimited,
				vote_name: 'telosunlimit',
				compliant: true
			},
			{
				name: 'EOSVenezuela',
				description: 'We are an elected EOS Standby Block Producers, our mission is to promote blockchain and crypto technologies mass adoption as path for development and better future. We are community builders!',
				url: 'https://eosvenezuela.io',
				logo: eos_venezuela,
				vote_name: 'eosvenezuela',
				compliant: false
			},
			{
				name: 'telos awake',
				description: 'Awake Team focuses on EOS ecology. We will contribute to the development of Telos through DApp development, wallets, and Akdex, a decentralized exchange with support EOS/Telos trade.',
				url: 'https://eosawake.io',
				logo: eos_awake,
				vote_name: 'eosawakeiobp',
				compliant: false
			},
			{
				name: 'Cryptosuvi',
				description: 'Cryptosuvi is a block producer candidate located in Finland, a stable EU jurisdiction. We are bringing high technical and business expertise to the table, advancing the EOSIO ecosystem.',
				url: 'http://www.cryptosuvi.io',
				logo: cryptosuvi,
				vote_name: 'cryptosuviio',
				compliant: true
			}
		];

		const {sort_by} = this.state;

		const sortedBpCandidates = () => {
			let cands = [];
			switch(sort_by){
				case COMPLIANCE_SORT_DESC:

					cands = bpCandidates.filter(item => item.compliant)
							.concat(
								bpCandidates.filter(item => !item.compliant)
							);
					break;
				case COMPLIANCE_SORT_ASC:
					cands = bpCandidates.filter(item => !item.compliant)
							.concat(
								bpCandidates.filter(item => item.compliant)
							);
					break;
				case DEFAULT_SORT:
					cands = bpCandidates;
					break;
				default:
					cands = bpCandidates;
					break;
			}
			return cands;
		};

		return (
			<section id='bp_candidates'>
				<header>
					<h2>Candidates</h2>
				</header>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<div className='sort_header'>
								<Row>
									<Col sm={2} smOffset={10}>
										<div className='sort_toggle compliance'>
											<Button
												onClick={this.handleComplianceClick}
												className={`sort_button btn-block ${sort_by}`}
											>
												BP Min. Requirements												
											</Button>
											<a
												href='https://github.com/Telos-Foundation/tips/blob/master/BPMinReq.md'
												target='_blank'
												rel='noopener noreferrer'
												className='question_link'
											>
												<i className='fa fa-question-circle-o' />
											</a>
										</div>
									</Col>
								</Row>
							</div>
							{sortedBpCandidates().map((cand, i) => {
								return (
									<ScrollAnimation
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<Candidate
											key={i}
											name={cand.name}
											description={cand.description}
											url={cand.url}
											logo={cand.logo}
											vote_name={cand.vote_name}
											compliant={cand.compliant} />
									</ScrollAnimation>
								);
							})}
						</Col>
					</Row>
				</Grid>
			</section>
		);
	}
}

const Candidate = (props) => {
	const {name, description, url, logo, vote_name, compliant} = props;

	return (
		<div className='bp_candidate'>
			<Row>
				<Col sm={3}>
					<div className='bp_candidate_logo_container'>
						{logo ?
							url ?
								<a href={url} target='_blank' rel='noopener noreferrer'>
									<img src={logo} alt={`${name} logo`} className='bp_candidate_logo' />
								</a>
									:
								<img src={logo} alt={`${name} logo`} className='bp_candidate_logo' />
								: ''
						}
					</div>
				</Col>
				<Col sm={7}>
					<div className='bp_candidate_info'>
						<h4>{name}</h4>
						{description ? <p>{description}</p> : ''}
						{
							url ? 
								<p><a href={url} target='_blank' rel='noopener noreferrer'>{url}</a></p> :
								''
						}
						{
							vote_name ?
								<p className='bp_candidate_vote'>Vote: <span className='bp_candidate_vote_name'>{vote_name}</span></p> :
								<p className='bp_candidate_vote'>Vote: </p>
						}
					</div>
				</Col>
				<Col sm={2}>
					{compliant ? <img src={checkmark} alt='compliance checkmark' className='compliance_checkmark' /> : ''}
				</Col>
			</Row>
		</div>
	);
};

export default withRouter(connect(null, {selectLanguage})(BlockProducerCandidates));