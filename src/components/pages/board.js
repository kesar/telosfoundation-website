import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
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
import sukesh from '../../img/foundation_site/Sukesh Kumar Tedla.jpeg';
import chen_li from '../../img/foundation_site/chen_li.png';
import richard_erikodi from '../../img/foundation_site/Richard Bryan Erikodi.jpg';
// import syed_sadiq from '../../img/foundation_site/syed.jpg';
import jim_hewitt from '../../img/foundation_site/JimHewitt.jpg';
import james_davis from '../../img/foundation_site/James Davis.jpg';
import mark_cohen from '../../img/foundation_site/mark_cohen.png';
import adam_zientarski from '../../img/foundation_site/Adam Zientarski.png';
import brett_bolte from '../../img/foundation_site/Brett Bolte.jpg';
import chijioke from '../../img/foundation_site/Chijioke Ilochonwu.jpg';
import joost from '../../img/foundation_site/Joost Voordouw.png';
import justin_giudici from '../../img/foundation_site/Justin Giudici.jpg';


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
		name: 'Brett J. Bolte, M.D.',
		portrait: brett_bolte,
		nominatedBy: 'Jesse Schulman, CalEOS',
		bio: [
			'Dr. Bolte comes to the Telos Foundation with a long career spanning multiple decades and interests including the blockchain since 2013. As a medical doctor for 30 years, Dr. Bolte has personally treated over 140,000 patients and is a sought-after expert witness in complicated, contested litigation as an expert witness.',
			'Dr. Bolte is also the Managing Director of two multi-million dollar real estate trust corporations, and has a long history of serving on the Board of Directors of numerous organizations for over a 20+ year period. Additionally, as a musician, he has performed Rachmaninoff piano concertos to packed concert halls and standing ovations, as well being the opening act for such well-known musicians as Ray Charles, and many other well-known musicians.',
			'Dr. Bolte has earned his M.D. degree from the University of Texas, has a Master\'s and Bachelor\'s Degrees in Music. He began his involvement in the blockchain in 2012, and, when he heard Dan Larimer\'s presentation in May, 2017, he knew that the EOSIO platform was "The One", which ultimately lead to his BP team becoming one of the original 6 founding BP members of the Telos Foundation. As chair of the Arbitration Panel, and an active participant in social media, running several Telos pages on Facebook, and other, he have participated to the fullest in the launch of the Telos project.',
			'If elected to the Board of Directors, Dr. Bolte will, (as always), put forth incredible effort to see that the Telos Foundation project has it\'s best opportunity to achieve success and mass adoption as the world\'s premier governed blockchain.'
		]
	},
	{
		name: 'Mark Cohen',
		organization: 'Telos Vancouver',
		portrait: mark_cohen,
		nominatedBy: 'Richard Bryan, TelosDAC',
		bio: [
			'For more than a decade, Mark has helped build, deploy, and manage the technical infrastructure and security practices for a wide variety of organizations.',
			'Mark is an “inclusionist”; passionate about community, decentralized governance, and making space for dissenting voices.',
			'As a valued member of the Telos Contributors Group, Mark chairs the Onboarding workgroup, and actively contributes to the Governance, Network Maintenance, and Marketing and Social Media workgroups. He has spent countless hours helping facilitate conversations and share resources across the many various Telos working groups, to help bring about consensus.',
			'Mark has also spearheaded much of the public facing technical documentation, authoring articles for the Telos Foundation Wiki, so as to educate and empower Telos Block Producers, through the sharing of knowledge and best practices.',
			'Mark is the Head of Operations and Security at Telos Vancouver, Telos Block Producer candidates, and one of the original organizations who participated in the Telos announcement.'
		],
		linkedIn: 'https://www.linkedin.com/in/mark-cohen'
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
			'Richard (closest friends call him Bryan) is an open source, IoT and tech enthusiast.  He holds a BSc Hons in Accounting and Management Information Systems. Over the last 22 years, Bryan has held positions at various FTSE 100 organisations and will be looking to foster good relations between the Telos blockchain and the corporate world.  Bryan is passionate about community and economic mobility.   The decentralised economy will promote this by offering a unique opportunity to develop new organisational & ownership structures as well as new economic activities.',
			'Bryan brings a wealth of organisational & treasury management, financial analysis and reporting expertise to the team.  He is currently researching and developing a standard for financial reporting and audit for blockchain organisations, DAOs and DACs in this age of radical transparency.'
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
		name: 'Justin Giudici',
		organization: 'infinitybloc',
		nominatedBy: 'Rob Konsdorf',
		portrait: justin_giudici,
		bio: [
			'Justin is the founder and CEO of infinitybloc.io, a founding partner and block producer on Telos. He is highly experienced for thie space having assisted a number of top block producers before and after the first EOSIO chain launched. He is a well respected community member within both Telos and the broader EOSIO community.',
			'He  appears on a weekly tokenomics crowdcast interviewing and reviewing top EOSIO dapps. And runs regular meetup sessions to educate and incubate blockchain talent in San Francisco and Silicon Valley.',
			'Justin led the Telos dapp outreach program pre launch and helped to deliver an impressive list of tools, wallets and dapps expected to be available from early in the chains existence. If elected, Justin will be able to continue to bring top talent to Telos and champion the needs of the networks community above all else.'
		]
	},
	{
		name: 'Azad Halim',
		portrait: azad_halim,
		nominatedBy: 'Kevin Quaintance, eosglobal.io & Dimitri C, infinitybloc',
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
		name: 'Chijioke Ilochonwu',
		organization: 'Nobles',
		selfNominated: true,
		portrait: chijioke,
		bio: [
			'My name is Chijioke Ilochonwu. I am the owner of Nobles, a shipping and logistics company that cordinates the movement goods and services overseas with over a million dollars in gross revenue. I have a bachelors in Pure and Industrial Chemistry, originally from Nigeria. I am a naturalized citizen of the USA, but my journey to who I am and what I have become today was not an easy one. I came into United States with twenty dollars in my pocket and a big dream in my heart. I worked menial jobs to make ends meet during my first few years in the country. My faith and personal relationship with Jesus Christ has carried me since I committed my life to Him during my last year of college in 1999 and definitely sustained me through those trying years in the States. I grew up in an entrepreneurial household back in Nigeria where we don\'t work for people. When I got my first laptop when I arrived the United States, I kept saying that the computer and internet was going to change the world. My entrepreneurial journey led me to search for online businesses and through divine connections, I found a website called e-harmony.com. This was where I met my wife and we have been married for fourteen years with three lovely kids. My wife and I did not know how to do anything online, even her email address started with nointernetforme. She found the most precious person in her life, me, through the thing she distrusted the most, the internet. What irony! Eventually, I founded Nobles and my dream of owning my own online business came to be.',
			'I thought the internet was it until I discovered Cryptocurrency and blockchain.  Again, I kept saying that this was going to change the world just like the internet changed my life. The only difference this time is that I arrived early to this game. I have a Youtube channel called FINANCIALFREEDOMCJ where I share about ideas about acheiving financial freedom, but recently focus more on Cryptocurrency projects that I am really interested in. I also write articles about projects that I am fascinated about on platforms like Trybe, Steemit, Reddit, etc.',
			'I have been a big believer in EOSIO ecosystem since Dan Larimer introduced it in 2017 and to date it represents my largest portfolio of holdings in the Cryptospace. Having observed the limitations of other smart contract platforms, I knew EOS  was going to be the game changer. After the launch of EOS and the various issues that came up, I was bit disappointed until I heard about the Telos network. Since I discovered it, I have been fascinated with how the network and ecosystem has been progressing so much that it is the topic I mostly frequently write and make Youtube videos about now. I am excited about the technological and development partsof this ecosystem and I\'m still learning, but I am more like the average guy that believes in the power of decentralization. It\'s time to take back our data and our lives from the powers that be. As your Telos foundation board nominee, I am all for mass adoption which is really about getting the little guy off the street to be a part of this great technical revolution. I believe that the Telos network has all it takes to be a big piece of this revolution.'
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
		name: 'Josep Rosich',
		organization: 'EOS Barcelona',
		nominatedBy: 'Douglas Horn, GoodBlock',
		portrait: josep_rosich,
		bio: [
			'An original public member of the Telos Contributors Group, who offered important feedback and ideas for the Telos white paper before it was published, Josep has worked tirelessly towards the success of Telos. Josep arranged for the first exchange that listed TLOS tokens and he continues constant efforts towards onboarding more exchanges, developers, block producers, and users.'
		]
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
		name: 'Joost Voordouw',
		organization: 'DutchEOS',
		portrait: joost,
		nominatedBy: 'Chen Li, Telos Vancouver',
		bio: [
			'Joost is an early member of the Telos Contributors Group. DutchEOS was one of the original 12 organizations who participated in the Telos announcement. Since that time, Joost has contributed to several working groups and visibly represented Telos at the London blockchain conference in September, along with the rest of the DutchEOS team.',
			'Joost holds a M.Sc. in Computer Science from Delft University of Technolgy. He worked for over 10 years as a technical consultant for various multinationals. In 2017 he quitted his job as a data scientist to fully focus on blockchain technology. Besides being responsible for the operations of DutchEOS, Joost is co-chairing the Telos translations workgroup as he is passionate about sharing the opportunities of Telos with a global audience.'
		]
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
	},
	{
		name: 'Adam Zientarski',
		organization: 'EOS Detroit',
		nominatedBy: 'Justin Buck',
		portrait: adam_zientarski,
		bio: [
			'Adam Zientarski is the Director of Business Operations, where he is be responsible for running the day-to-day operations, developing partnerships in the Detroit and cryptocurrency communities, and representing EOS Detroit in the EOS, Telos, and Worbli communities as its governance expert.  Prior to helping found EOS Detroit, Adam was the Director of Business Development at Benzinga, a Detroit based financial tech and media firm. During his time there, he worked in many facets of the business including leading the sales team, organizing events (most notably the Benzinga Fintech Awards), web development, and salesforce architecture/administration.',
			'Adam is currently the co-chair for the Telos governance work group and has already contributed to improving the transparency of the Telos Foundation by authoring and successfully passing TIP-12, a proposal to have Telos Foundation pay proposed and voted on separately from Telos Foundation budgets by Telos Foundation Voting Token holders.',
			'Over his career, Adam has worked with some of the largest brands in finance to craft imaginative content and data solutions, with a particular specialty in alternative data. After leaving Benzinga, Adam became interested in the blossoming crypto and blockchain space, and has helped grow Detroit Blockchainers, Metro-Detroit’s largest blockchain meetup group through hosting live streamed educational events. Adam has also assisted companies such as BitBox with their marketing and sales process.',
			'Adam graduated from the University of Michigan, with a Bachelors of Business Administration and a focus in entrepreneurial studies.'
		]
	}
];

const Board = () => {
	return (
		<div className='foundation_site'>
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
			>
				<BoardIntro />
			</ScrollAnimation>
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
							<p>Nominations are closing November 15th, 2018. Nominees for board member may come from anyone in the community. We encourage nominees from inside and outside the Telos Contributors Group. To Nominate someone for the board, email <a href='mailto:hello@telosfoundation.io'>hello@telosfoundation.io</a>. Nominees must agree to stand for election in order to be listed on this site or the ballot.</p>
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
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							<p className='interim_intro'>The Telos Foundation Interim RAM Administration Director manages the Telos Foundation{"'"}s efforts to stabilize the Telos RAM market by publishing a Published Guidance Price and non-binding Advice to Block Producers regarding future RAM releases. On October 9th the Telos Launch Group voted unanimously to confirm Jan as the Interim RAM Administration Director.</p>
						</ScrollAnimation>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
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
						</ScrollAnimation>
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
									<ScrollAnimation
										key={i}
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<Nominee
											name={nom.name}
											portrait={nom.portrait}
											organization={nom.organization}
											bio={nom.bio}
											selfNominated={nom.selfNominated}
											nominatedBy={nom.nominatedBy}
											linkedIn={nom.linkedIn} />
									</ScrollAnimation>
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