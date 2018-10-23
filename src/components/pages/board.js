import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import foundation_logo from '../../img/foundation_site/logo.png';

import placeholder_portrait from '../../img/foundation_site/nominee_placeholder.png';
import azad_halim from '../../img/foundation_site/azad_halim.png';
import beth from '../../img/foundation_site/beth.png';
import jt_buice from '../../img/foundation_site/jt_buice.png';
import robert_james from '../../img/foundation_site/robert_james.jpg';
import jan_smit from '../../img/foundation_site/Jan Smit.jpg';
import jesse_schulman from '../../img/foundation_site/Jesse Schulman.jpg';
import marlon_williams from '../../img/foundation_site/Marlon Williams.jpg';
import josep_rosich from '../../img/foundation_site/josep_rosich.png';
import jerry_huff from '../../img/foundation_site/jerry_huff.png';
import rob_konsdorf from '../../img/foundation_site/eos_detroit_rob.png';
import sukesh from '../../img/foundation_site/Sukesh Kumar Tedla.jpeg';
import chen_li from '../../img/foundation_site/chen_li.png';
import richard_erikodi from '../../img/foundation_site/Richard Bryan Erikodi.jpg';
import syed_sadiq from '../../img/foundation_site/syed.jpg';
import jim_hewitt from '../../img/foundation_site/JimHewitt.jpg';
import ian_panchevre from '../../img/foundation_site/Ian Panchevre.jpg';
import james_davis from '../../img/foundation_site/James Davis.jpg';


import '../../styles/board.css';

const interimNominees = [
	{
		name: 'Jan Smit',
		organization: 'DutchEOS',
		nominatedBy: 'Douglas Horn, GoodBlock',
		portrait: jan_smit,
		bio: [
			'Jan is a respected member of the Telos Contributors Group. DutchEOS was one of the original 12 organizations who participated in the Telos announcement. Since that time, Jan has contributed to several working groups and visibly represented Telos at the London Hackathon and blockchain conference in September, along with the rest of the DutchEOS team. Jan has a background in investing and has agreed to be bound by the trading restrictions regarding secrecy and trading TLOS RAM on his own account or that of his organization while serving as the RAM Administration Director. He has demonstrated progressive and thoughtful ideas about the subject of resource management in Telos and has proven himself to be diligent contributor to the Telos community. I believe Jan will make an excellent RAM Administration Director to guide us through the launch of the Telos Blockchain Network.'
		]
	}
];

const boardNominees = [
	{
		name: 'J.T. Buice',
		organization: 'Kainos Technologies LLC',
		portrait: jt_buice,
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		bio: [
			'J.T. Buice (pronounced Bise) is a Technical IT Director with broad competencies in all areas of IT Infrastructure including LAN and WAN networking, server architecture (UNIX & Windows), mass storage, and telecommunications. Since 2015, Buice has served as Director of Technology for Kainos Technologies, a managed services provider business he co-founded bringing fast and efficient high technology solutions and support to the state of Texas. Before Kainos, Buice joined Space Exploration Technologies (SpaceX) as IT Manager to deliver always-on IT that enabled SpaceX to serve commercial and government entities in furthering the exploration of space with an end goal to make life multi-planetary. Having joined the Telos Community immediately following its announcement, Buice has jumped headlong in with one of the greatest blockchain communities in existence and is honored to be nominated for the Telos Foundation’s board of directors.'
		]
	},
	{
		name: 'James Davis',
		organization: 'GoodBlock',
		portrait: james_davis,
		nominatedBy: 'Nominated by Justin Giudici, infinitybloc',
		bio: [
			'James has been a leader of the Telos Blockchain Network launch group since its inception. He brings over 20 years of experience as a product manager and certified scrum master who has led development teams for many large commercial brands including Disney, Marvel, Halo, and Magic: The Gathering. James was the project manager on the initial Telos public announcement and Telos Testnet “Stage 0”. As an administrator of the Telos launch group rewards pool and the Community Rewards program, James has been entrusted with ensuring a fair and equitable distribution of these core funds. James also manages the Telos Foundation website and conducts extensive community outreach through the Telos social media channels. James is a Senior Producer at GoodBlock, a Telos block producer candidate.'
		]
	},
	{
		name: 'Richard Bryan Erikodi',
		organization: 'Telos DAC',
		nominatedBy: 'Justin Giudici, infinitybloc',
		portrait: richard_erikodi,
		bio: [
			'Richard (closest friends call him Bryan) is an open source, IoT and tech enthusiast.  He holds a BSc Hons in Accounting and Management Information Systems. Over the last 22 years, Bryan has held positions at various FTSE 100 organisations and will be looking to foster good relations between the Telos blockchain and the corporate world.  Bryan is passionate about community and economic mobility.   The decentralised economy will promote this by offering a unique opportunity to develop new organisational & ownership structures as well as new economic activities.'
		]
	},
	{
		name: 'Beth Farnham',
		organization: 'GoodBlock',
		nominatedBy: 'Arjen Kruithof, DutchEOS',
		portrait: beth,
		bio: [
			'Beth has been the chair and driving force for many groups. We specifically think of the Telos marketing / social media group, the exchange outreach group and the translations group. In the past she has served on the boards of a number of charity / non-profit organizations. We feel her organizational and leadership skills would be a welcome addition to the board.'
		]
	},
	{
		name: 'Azad Halim',
		portrait: azad_halim,
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		bio: [
			'Libertarian at heart and contrarian in mind yet, for the past 20 years, professionally engaged to deliver technology solutions in one of the most compliance driven industries, banking. Started my carrier as sysadmin, moved to web development during the dot com boom years, survived multiple bubbles and on few occasions learned, the hard way, how to keep afloat. I was first exposed to EOS while investigating BitShares as a business platform, dabbled with node installations, studied it\'s governance model and closely monitored events as they unfolded to come to the conclusion that history may repeat itself with EOS, hence remained on the sidelines, until Telos came along.',
			'EOSIO is a very promising technology, some call it Blockchain 3. Within a few months of its launch, we started witnessing the conception of a number projects that are based on this very young open source software, each with their own specific mixed offering of governance, vision to reach out to the global community and deliver a solution within in their own space. Telos is one such project, it\'s a special one with many talented people collaborating to make it work for the people who believe in fairness and rewarding those who contribute to the wider community.',
			'I expect Telos to stay with us for a long time, I see further collaboration and positive contribution to the ever increasing number of EOSIO based projects. That in itself, is the best thing that could have happened to EOS.'
		]
	},
	{
		name: 'Jim Hewitt',
		organization: 'EOS UK',
		nominatedBy: 'Jan Smit, DutchEOS',
		portrait: jim_hewitt,
		bio: [
			'Jim has been the chair of the main weekly Telos Launch Group meetings and an invaluable contributor to the governance working group. In addition we feel that his unique backround will be an asset to the board. Before joining EOS UK, Jim was an assistant head teacher and for the last 3 years he has managed the operations of an internet consulting practice. Jim majored in history with a focus on the industrial revolution and we expect him to be a driving force behind this "new" industrial revolution.'
		]
	},
	{
		name: 'Jerry Huff',
		organization: 'BlindBlocArt',
		nominatedBy: 'Ed Silva, GoodBlock',
		portrait: jerry_huff,
		bio: [
			'Jerry has been in the computer industry since 1972, either repairing, building, or administrating.',
			'He has a B.S. in Computer Science from California State University, Stanislaus.',
			'He is and always has been a problem solver and is looking forward to bringing his vast experience to Telos. He has held jobs in manufacturing and service, been an Operations Manager, and co-founded a 3rd party service company where he was President and CFO. This gives him a very broad view how things should be run, and a very level-headed approach to solving problems.'
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
		name: 'Rob Konsdorf',
		organization: 'EOS Detroit',
		nominatedBy: 'James Davis, GoodBlock',
		portrait: rob_konsdorf,
		bio: [
			'Rob Konsdorf (a.k.a @robrigo) hails from the Bitshares and Steem communities. Having studied and worked toward the proliferation of blockchain networks passionately since 2014, Rob is a natural fit for rallying a cross-disciplinary team together to accelerate the adoption of EOSIO and its applications. As an avid proponent of the transformative force of decentralized networks, he decided to focus on his passion of evangelizing and building in the blockchain industry full time last year. Over this period of time, Rob has done various gigs in the blockchain industry, such as consulting for AIKON, PassageX, and Bitcash, recovering lost digital assets, launching EOSIO networks, and teaching everything he knows about blockchains to people. With a degree in Computer Science and background in Software Engineering, Rob is a hustler by nature, doing whatever it takes to get the job done.'
		]
	},
	{
		name: 'Chen Li',
		organization: 'Telos Vancouver',
		nominatedBy: 'Beth Farnham, GoodBlock',
		portrait: chen_li,
		bio: [
			'Chen Li was one of the original members of the Telos Contributors Group. He has put in countless hours of outreach to Chinese exchanges, Dapps, and users and has performed many of the Chinese document translations. Chen has also contributed to the development working groups. His outreach to the Chinese community is of enormous value to the network.',
			'Chen started programming in high school and won 1st Prize in the National Olympiad in Informatics (NOIP) at the age of 18. Over the past 15 years, he has successfully implemented and deployed various projets ranging from Global Navigation Satellite Reflectometry to Network Monitoring System for large-scaled enterprises. With his experience in development and dev ops, Chen is committed to contributing his technical skills to the Telos community.'
		]
	},
	{
		name: 'Ian Panchèvre',
		organization: 'Amplified Telos',
		nominatedBy: 'Justin Giudici, InfinityBloc.io',
		portrait: ian_panchevre,
		bio: [
			'Ian is the founder of Amplified Telos (www.amplified.software), a block producer and a technical contributor to Telos. Ian first became interested in blockchains while studying political science at Yale. He wrote a hundred-page thesis on the virtual politics of Bitcoin. Years later, Ian joined Intuit’s Innovation and Advanced Technologies group, where he worked as a product manager to lead Intuit’s blockchain R&D efforts. Ian is a serial entrepreneur, having previously founded mobile and edtech startups. Ian is currently an MBA student at the Stanford Graduate School of Business.',
			'In addition to blockchain expertise, entrepreneurial experience, and political theory chops, Ian will bring a high ethical standard to the Telos Foundation. Ian expects the Telos Foundation to operate ethically and transparently so that it may become the gold standard among cryptocurrency foundations.'
		],
		linkedIn: 'https://www.linkedin.com/in/ianpanchevre/'
	},
	{
		name: 'Josep Rosich',
		organization: 'EOS Barcelona',
		nominatedBy: 'Douglas Horn, GoodBlock',
		portrait: josep_rosich,
		bio: [
			'An original public member of the Telos Contributors Group, who offered important feedback and ideas for the Telos white paper before it was published, Josep has worked tirelessly towards the success of Telos. Josep arranged for the first exchange that listed TLOS tokens and he continues constant efforts towards onboarding more exchanges, developers, block producers, and users.'
		]
	},
	{
		name: 'Syed Mushabbar Sadiq (CISSP, CRISC, CISM, PMP, Privacy E.)',
		organization: 'swedencornet (Core Net AB)',
		nominatedBy: 'Maliha, CEO swedencornet (Core Net AB)',
		portrait: syed_sadiq,
		bio: [
			'Syed is an early member of the Telos Contributors Group. He is co-chair of GRC, Security, and Marketing Working Groups. But he is an all-rounder and spending lot of time (day and night) in most of the working groups; including, but not limited to: Governance, Network Maintenance, Social Media, Exchange Outreach and so on... He is obsessed with Telos and would like it to succeed in becoming the best choice for Dapps in both Enterprise and Consumer domains.',
			'He has over 20 years of GRC (Governance, Risks, Compliance), Information Security, and Privacy experience. He comes from Nordic Biggest Bank. He has had worked in global organizations and had roles such as Director of Compliance, senior Info. Security Officer, CISO, Technical National Security and Public Safety Solutions Manager.',
			'He holds 3 M.Sc. degrees from Sweden and has earned numerous globally recognized security certifications (e.g. CISSP, CISM, CRISC, Privacy Eagle, PMI PMP)'
		],
		linkedIn: 'https://www.linkedin.com/in/mushabbar'	
	},
	{
		name: 'Jesse Schulman',
		organization: 'CalEOS',
		nominatedBy: 'Josep Rosich, EOS Barcelona',
		portrait: jesse_schulman,
		bio: [
			'Jesse is an early member of the Telos Launch Group and has made a big impact as co-chair of the network maintenance group.  He is focused on the technical side of things, and has made contributions across the board such as authoring and implementing the TIP3 snapshot contract as well as helping many new BPs learn the nuances of eosio software and what it takes to get up and running on the testnet.  As co-founder of CalEOS.io, he along with his partner Don will be block producer candidates on the Telos network running their own self-funded bare metal infrastructure, they are working to learn and share as much as possible about tuning the eosio software for optimal performance, making sure users of the Telos network are billed as little CPU as possible for their transactions.'
		]
	},
	{
		name: 'Sukesh Kumar Tedla',
		organization: 'TelosGreen',
		portrait: sukesh,
		selfNominated: true,
		bio: [
			'Sukesh Kumar Tedla is a tech enthusiast who envisions a fair & transparent Internet with complete freedom of choice. He works as a Blockchain Innovation Consultant for Volvo Cars and is the Regional Head & Board Member for Swedish Blockchain Association. He has 4 years of experience in ICT industry and also possesses a Masters Degree in Telecommunications. Demonstrates a good level of technical knowledge, driven to do something good for the community with a Can-Do attitude. He is an EOSIO believer since day one and an early adopter of TELOS. Together with his BP - TelosGreen, he has been working with bounty-system, Dapps-outreach and exchange-outreach groups mainly. He believes in sustainability and green tech projects.',
			'He can bring his experience, skill-set and most important contacts in the industry to encourage the mass adoption of Telos Network. Together with Swedish Blockchain Association, he has the ability to influence a large community in the Nordic Region. He standbys with the vision of Telos Blockchain Network.'
		],
		linkedIn: 'https://linkedin.com/in/sukeshtedla'
	},
	{
		name: 'Marlon Williams',
		organization: 'EOS Miami',
		nominatedBy: 'Peter Bue, GoodBlock',
		portrait: marlon_williams,
		bio: [
			'Marlon is the founder of EOS Miami. He’s also CEO of Fenero, a cloud-based call center software company and Qubicles, an EOSIO-based marketplace for connecting call centers with customer service, sales and support talent in a global meritocracy-based system. Marlon has served as Treasurer for the Miami-Dade County Public Schools S.T.E.M. Advisory Board; President of the South Florida Chapter of the Society for Information Management; and is a current Board Member of the South Florida Digital Alliance.',
			'He co-chairs the Telos Development Working Group and have lead efforts to adopt multi-chain support in eosjs and eosjs-ecc, as well as development of Telos\' official wallet, Sqrl.',
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
									href='https://resources.telosfoundation.io/Telos Foundation Governance.pdf'
									target='_blank'
									rel='noopener noreferrer'
									className='btn btn-primary'
								>
									TELOS FOUNDATION GOVERNANCE DOCUMENT
								</a>
							</div>
							<p>The Telos Foundation is governed by a board of 12 elected board members who will elect an Executive Director and a RAM Administration Director.</p>
							<p>Nominees for board member may come from anyone in the community. We encourage nominees from inside and outside the Telos Contributors Group. To Nominate someone for the board, email <a href='mailto:hello@telosfoundation.io'>hello@telosfoundation.io</a>. Nominees must agree to stand for election in order to be listed on this site or the ballot.</p>
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
				<h2>Interim RAM Administration Director</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p className='interim_intro'>The Telos Foundation Interim RAM Administration Director manages the Telos Foundation's efforts to stabilize the Telos RAM market by publishing a Published Guidance Price and non-binding Advice to Block Producers regarding future RAM releases. On October 9th the Telos Launch Group voted unanimously to confirm Jan as the Interim RAM Administration Director.</p>
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