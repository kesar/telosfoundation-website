import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import foundation_logo from '../../img/foundation_site/logo.png';

import placeholder_portrait from '../../img/foundation_site/placeholder-female.png';
import azad_halim from '../../img/foundation_site/azad_halim.png';
import beth from '../../img/foundation_site/beth.png';
import jt_buice from '../../img/foundation_site/jt_buice.png';
import robert_james from '../../img/foundation_site/robert_james.jpg';

import '../../styles/board.css';

const interimNominees = [
	{
		name: 'Jan Smit',
		organization: 'DutchEOS',
		nominatedBy: 'Douglas Horn, GoodBlock',
		bio: [
			'Jan is a respected member of the Telos Contributors Group. DutchEOS was one of the original 12 organizations who participated in the Telos announcement. Since that time, Jan has contributed to several working groups and visibly represented Telos at the London Hackathon and blockchain conference in September, along with the rest of the DutchEOS team. Jan has a background in investing and has agreed to be bound by the trading restrictions regarding secrecy and trading TLOS RAM on his own account or that of his organization while serving as the RAM Administration Director. He has demonstrated progressive and thoughtful ideas about the subject of resource management in Telos and has proven himself to be diligent contributor to the Telos community. I believe Jan will make an excellent RAM Administration Director to guide us through the launch of the Telos Blockchain Network.'
		]
	}
];

const boardNominees = [
	{
		name: 'Azad Halim',
		portrait: azad_halim,
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		bio: [
			'Libertarian at heart and contrarian in mind yet, for the past 20 years, professionally engaged to deliver technology solutions in one of the most compliance driven industries, banking. Started my carrier as sysadmin, moved to web development during the dot com boom years, survived multiple bubbles and on few occasions learnt, the heard way, how to keep afloat. I was first exposed to EOS while investigating BitShares as a business platform, dabbled with node installations, studied it\'s governance model and closely monitored events as they unfolded to come to the conclusion that history may repeat itself with EOS, hence remained on the sidelines, until Telos came along.',
			'EOSIO is a very promising technology, some call it Blockchain 3. Within a few months of its launch, we started witnessing the conception of a number projects that are based on this very young open source software, each with their own specific mixed offering of governance, vision to reach out to the global community and deliver a solution within in their own space. Telos is one such project, it\'s a special one with many talented people collaborating to make it work for the people who believe in fairness and rewarding those who contribute to the wider community.',
			'I expect Telos to stay with us for a long time, I see further collaboration and positive contribution to the ever increasing number of EOSIO based projects. That in itself, is the best thing that could have happened to EOS.'
		]
	},
	{
		name: 'Marlon Williams',
		organization: 'EOS Detroit',
		nominatedBy: 'Peter Bue, GoodBlock',
		bio: [
			'Marlon is the founder of EOS Miami. He’s also CEO of Fenero, a cloud-based call center software company and Qubicles, an EOSIO-based marketplace for connecting call centers with customer service, sales and support talent in a global meritocracy-based system. Marlon has served as Treasurer for the Miami-Dade County Public Schools S.T.E.M. Advisory Board; President of the South Florida Chapter of the Society for Information Management; and is a current Board Member of the South Florida Digital Alliance.',
			'He co-chairs the Telos Development Working Group and have lead efforts to adopt multi-chain support in eosjs and eosjs-ecc, as well as development of Telos\' official wallet, Sqrl.',
		]
	},
	{
		name: 'Robert James, CEP, CECP',
		organization: 'Echelon Compensation Partners',
		portrait: robert_james,
		nominatedBy: 'Rob Konsdorf, EOS Detroit',
		bio: [
			'Rob is a co-founding Partner at Echelon Compensation Partners, an independent compensation and corporate governance consulting firm located in Southern California.',
			'At Echelon, Rob serves as a trusted advisor to Boards and senior management of public and privately-held businesses. He is a recognized expert on the strategy and financial structure of incentive plans, possessing in-depth knowledge of governance, regulatory compliance, SEC disclosure and tax considerations. Rob is also a Certified Executive Compensation Professional, Certified Equity Professional and holds Series 7 and Series 66 securities licenses.',
			'Rob has assisted Telos in the development of the Bounty System by providing guidance on competitive market compensation rates for Telos contributors. Rob remains an active member of the Telos, EOS and cryptoasset communities having discovered blockchain in in late 2016.'
		]
	},
	{
		name: 'J.T. Buice',
		organization: 'Kainos Technologies LLC',
		portrait: jt_buice,
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		bio: [
			'J.T. Buice (pronounced Bise) is a Technical IT Director with broad competencies in all areas of IT Infrastructure including LAN and WAN networking, server architecture (UNIX & Windows), mass storage, and telecommunications. Since 2015, Buice has served as Director of Technology for Kainos Technologies, a managed services provider business he co-founded bringing fast and efficient high technology solutions and support to the state of Texas. Before Kainos, Buice joined Space Exploration Technologies (SpaceX) as IT Manager to deliver always-on IT that enabled SpaceX to serve commercial and government entities in furthering the exploration of space with an end goal to make life multi-planetary. Having joined the Telos Community immediately following its announcement, Buice has jumped headlong in with one of the greatest blockchain communities in existence and is honored to be nominated for the Telos Foundation’s board of directors.'
		]
	}
];

const Board = () => {
	return (
		<div className='foundation_site'>
			<BoardIntro />
			<InterimNominees />
			<ExecutiveNominees />
		</div>
	);
};

const BoardIntro = () => {
	return (
		<section id='board_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_logo_container'>
							<img src={foundation_logo} alt='telos foundation logo' />
							<h1>The <strong>Telos</strong> Foundation</h1>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='intro_content'>
							<p>The Telos Foundation is an apolitical body with a mission of promoting the Telos Blockchain Network. It is voted as a decentralized autonomous organization (DAO) voted by holders of Telos Foundation Voting Tokens as described in its governance document.</p>
							<div className='text-center'>
								<a
									href='#'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-primary'
								>
									TELOS FOUNDATION GOVERNANCE DOCUMENT
								</a>
							</div>
							<p>The Telos Foundation is governed by a board of 12 elected board members who will elect an Executive Director and a RAM Administration Director.</p>
							<p>Nominees for board member may come from anyone in the community. We encourage nominees from inside and outside the Telos Contributors Group. To Nominate someone for the board, email <a href='#'>hello@telosfoundation.io</a>. Nominees must agree to stand for election in order to be listed on this site or the ballot.</p>
							<p>The Telos Foundation Board elections will happen as soon as feasible after the Telos launch in order to empower voting for ongoing business such as grants.</p>
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const InterimNominees = () => {
	return (
		<section id='interim_nominees'>
			<header>
				<h2>Interim RAM Administration Director Nominees</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p className='interim_intro'>The Telos Foundation Interim RAM Administration Director manages the Telos Foundation''s efforts to stabilize the Telos RAM market by publishing a Published Guidance Price and non-binding Advice to Block Producers regarding future RAM releases.</p>
						{
							interimNominees.map((nom, i) => {
								return (
									<Nominee
										key={i}
										name={nom.name}
										portrait={nom.portrait}
										organization={nom.organization}
										bio={nom.bio}
										selfNominated={nom.selfNominated}
										nominatedBy={nom.nominatedBy}
										linkedIn={nom.linkedIn} />
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const ExecutiveNominees = () => {
	return (
		<section id='executive_nominees'>
			<header>
				<h2>Executive Board Nominees</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							boardNominees.map((nom, i) => {
								return (
									<Nominee
										key={i}
										name={nom.name}
										portrait={nom.portrait}
										organization={nom.organization}
										bio={nom.bio}
										selfNominated={nom.selfNominated}
										nominatedBy={nom.nominatedBy}
										linkedIn={nom.linkedIn} />
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};



const Nominee = (props) => {
	const getNominatedBy = () => {
		if(props.selfNominated){
			return <p>Self nominated</p>;
		}else{
			return <p>Nominated by: <strong>{props.nominatedBy}</strong></p>;
		}
	};

	const getLinkedIn = () => {
		if(props.linkedIn) return (
			<p>
				LinkedIn: <a href={props.linkedIn} target='_blank' rel='noopener noreferrer'>{props.linkedIn}</a>
			</p>
		);
	};
	
	const getName = () => {
		if(!props.organization){
			return <h4>{props.name}</h4>;
		}
		return <h4>{props.name}, {props.organization}</h4>;
	}

	return (
		<div className='nominee'>
			<div className='nominee_img_container'>
				<img src={props.portrait ? props.portrait : placeholder_portrait} alt='' />
			</div>
			<div className='nominee_description'>
				{getName()}
				{props.bio.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
				{getNominatedBy()}
				{getLinkedIn()}
			</div>
		</div>
	);
};

export default Board;