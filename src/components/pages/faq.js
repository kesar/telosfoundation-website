import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import '../../styles/faq.css';

// const faqs = [
// 	{
// 		question: 'How Do I Get My TLOS?',
// 		answer: [
// 			'TLOS will first be airdropped to all users with addresses in the EOS genesis snapshot, and account holders can access their TLOS tokens upon activation of the Telos Blockchain Network. If you cannot access your EOS account, recover your lost keys here:  <a href=\'https://telosfoundation.io/recovery\'>https://telosfoundation.io/recovery</a>.',
// 			'You will also be able to access TLOS tokens with Sqrl, the wallet of Telos. Scatter and DEXEOS will be listing a TLOS/EOS pair, Chainrift will list a  TLOS/BTC pair, and more exchanges are expected to announce their support as well.',
// 			'<strong>Sign up for a free account here:  <a href=\'https://telosfoundation.io/downloads\'>https://telosfoundation.io/downloads</a></strong>'
// 		]
// 	},
// 	{
// 		question: 'What is Telos?',
// 		answer: [
// 			'Telos is a new blockchain network based on EOSIO software.'
// 		]
// 	},
// 	{
// 		question: 'What is the difference between EOS and Telos?',
// 		answer: [
// 			'EOS and Telos are both networks running the EOSIO software. Any smart contract that runs on one system should run equally well on the other. Telos has modified the EOS genesis snapshot and some rules to make the network more responsible to the majority of token holders, to be more attractive to DApp developers, and to generally run more responsibly and sustainably.'
// 		]
// 	},
// 	{
// 		question: 'What is TLOS?',
// 		answer: [
// 			'TLOS is the name of the token that reflects ownership in Telos. A TLOS token is like an EOS token except that there will be around 3X fewer TLOS tokens than EOS.'
// 		]
// 	},
// 	{
// 		question: 'If I bought EOS tokens, will I get TLOS?',
// 		answer: [
// 			'Yes, if you bought EOS and registered them, then your TLOS tokens will be available for voting at the network launch and for transfer or stake as soon as the network activates – up to 40,000 TLOS per address. If your tokens are on an exchange, the exchange must agree to list TLOS and distribute tokens to owners for you to receive them.'
// 		]
// 	},
// 	{
// 		question: 'Are you taking away people’s EOS tokens?',
// 		answer: [
// 			'No. EOS holders will have the exact same number of EOS tokens on the EOS network as they ever had. That is what they purchased from Block.one. Telos is a new project based on the EOS network. The EOS source code is open source and freely available to fork. We have decided to give an equal number of TLOS tokens to every EOS token holder on the genesis snapshot, but capping values at 40,000 TLOS per genesis address. This means that there will be no whales on Telos.'
// 		]
// 	},
// 	{
// 		question: 'Is Telos an airdrop?',
// 		answer: [
// 			'Telos is a completely new network using the same EOSIO operating software as EOS mainnet with a few small modifications. It is not an airdrop. However, the distribution of TLOS tokens is similar to an airdrop in that anyone who owned EOS tokens will receive new TLOS tokens at their addresses based on our genesis token distribution algorithm.'
// 		]
// 	},
// 	{
// 		question: 'What exactly is the Telos genesis token distribution algorithm?',
// 		answer: [
// 			'Simply, it is that all Telos genesis addresses will receive the same number of tokens as their corresponding EOS addresses held in the genesis snapshot—up to a maximum of 40,000 tokens. There are a few exceptions to this policy: Addresses proven to have been stolen, phished, or misregistered, thereby depriving their rightful owners of them, will be restored to new addresses controlled by their rightful owners; and new genesis tokens will be created to compensate the Active Block Producers (ABPs) and establish the Telos Foundation.'
// 		]
// 	},
// 	{
// 		question: 'If you cap all accounts, how can EOS holders get TLOS from exchanges?',
// 		answer: [
// 			'The TLOS block producers have the ability to create new tokens by a vote of 2/3+1. The 6 ABPs agree to create new tokens for distribution for any exchange that can show EOS holdings on the snapshot and that agrees: to list TLOS; not to vote the exchange account; and to request and distribute only enough coins so that all EOS holders at the time of the snapshot receive their coins capped at 40,000 per account. The ABPs will have a process in place for exchanges to petition them to create TLOS tokens and promise to honor all valid petitions. (It will require a vote of 5 of the 6 block producers to accomplish this.) Once Telos activates and the elected block producers validate the network, it will take a vote of 15 of the 21 block producers to create new tokens for exchanges.'
// 		]
// 	},
// 	{
// 		question: 'Why cap genesis addresses at 40,000 TLOS?',
// 		answer: [
// 			'The largest 1,050 EOS addresses control about 90% of EOS tokens and therefore completely control block producer selection, their voting, and ultimately the entire network. This makes the system dangerously centralized. By capping genesis addresses at 40,000 TLOS — approximately the 90th percentile of ownership — Telos will be one of the most evenly distributed major blockchains in existence. 162,930 addresses will have exactly as many TLOS as they did EOS. The total TLOS token supply will be lowered to approximately 200-400,000,000 TLOS tokens depending on how many exchanges petition to recreate their wallets.  Read More Here: <a href=\'https://medium.com/@teloslogical/telos-token-distribution-use-of-the-eos-genesis-snapshot-why-2d849a2b0055\' target=\'_blank\' rel=\'noopener noreferrer\'>Telos Token Distribution — Use of the EOS Genesis Snapshot & Why</a>'
// 		]
// 	},
// 	{
// 		question: 'Can Telos addresses ever have more than 40,000 TLOS?',
// 		answer: [
// 			'Yes. The 40,000 TLOS cap only applies at the network genesis. Addresses may hold any amount of TLOS thereafter.'
// 		]
// 	},
// 	{
// 		question: 'What is the difference between the Telos launch and activation?',
// 		answer: [
// 			'Telos launch is the process of beginning to run Telos to allow votes to be cast for block producers and for network validation. Activation is the point when TLOS holders can begin transferring or otherwise controlling their tokens beyond just voting.'
// 		]
// 	},
// 	{
// 		question: 'If exchange addresses cannot vote, will my TLOS tokens be able to vote if they are currently on an exchange?',
// 		answer: [
// 			'Once tokens are off the exchange and on your own Telos address, you can vote them. Individual owners cannot vote their tokens held on exchanges. Preventing voting from exchange accounts keeps exchanges from voting with customer tokens, which is against the Telos rules.'
// 		]
// 	},
// 	{
// 		question: 'Will this hurt the EOS network?',
// 		answer: [
// 			'The EOS network will succeed or fail based on its own merits. We hope it succeeds, as we are all deeply invested in this project. However, the EOS mainnet release has revealed problems with the system that will be difficult to resolve on the EOS blockchain. “Whales” have shown that they generally just vote for their own block producer partners and even game the rewards system to harm other block producers— this may also be expected once worker proposals emerge. The EOS network is under the control of a few whale accounts. We offer a fresh approach where all token holders’ voices matter. Telos also hopes to provide a testbed for new ideas that may eventually be adopted by the EOS mainnet. In this way we hope to strengthen EOS.'
// 		]
// 	},
// 	{
// 		question: 'If these changes will fix the network, why doesn’t EOS make them?',
// 		answer: [
// 			'Block.one sold EOS tokens in their tokensale. They accepted money for tokens and made certain representations. They can’t easily change the results of their sale—especially by reducing the tokens of their largest contributors, which is really the key change that fixes the system. Telos is a completely new system that never took money from nor made promises to anyone. We intend to build a network using the open source EOS software (that we all helped pay for) to create an entirely new network that better represents the true purpose of EOS.'
// 		]
// 	},
// 	{
// 		question: 'Can I buy and sell TLOS tokens? What are they worth?',
// 		answer: [
// 			'TLOS tokens will not gain value until the Telos mainnet launches and they are able to be traded. In practical terms, TLOS will gain real value when exchanges accept them to trade against other cryptocurrencies. We expect that this will happen because exchange customers will demand that they be given access to their tokens. The technical requirements for listing TLOS will be identical to EOS so we expect little resistance on that point. Once tokens are freely trading on exchanges they will find their value based on supply and demand. The TLOS token supply will be between one-fifth and one-third that of EOS, and Telos should be as good as or better than EOS. Telos will also not have any “whale” addresses which often are responsible for price manipulations in other coins.'
// 		]
// 	},
// 	{
// 		question: 'Are you selling TLOS tokens?',
// 		answer: [
// 			'We are not selling any TLOS tokens. We will use the EOS Snapshot with the following changes: 1) Capping all addresses at 40,000; 2) Creating a process for exchange addresses to petition the BPs to create TLOS tokens for their EOS snapshot owners by listing and distributing TLOS tokens (up to 40,000 per account holder); 3) Providing new public keys to EOS token holders who can prove that their tokens were stolen or misregistered; 4) Adding 6M new tokens to form a Telos Founders Reward Pool and 6M TLOS tokens to the Telos Foundation Ltd, to support network needs that cannot otherwise be funded. These tokens currently have no value and will only gain value if the ABPs and Telos Foundation can create a valuable network. The Telos Foundation pledges to never vote its tokens.'
// 		]
// 	},
// 	{
// 		question: 'Who are you and why are you launching Telos?',
// 		answer: [
// 			'We are a group of EOS block producer candidates who have contributed to the system, run testnets, and taken part in the EOS Mainnet Launch Group that voted to unanimously launch the mainnet. We believe in the promise of EOS, but we have come to be concerned that the current system is deeply flawed due to the overwhelming power of EOS token holders with enormous holdings. We hope that EOS can overcome this problem, but in the meantime, we want to launch a new and more decentralized network using the EOS technology.'
// 		]
// 	},
// 	{
// 		question: 'Can EOS block producers also be Telos block producers?',
// 		answer: [
// 			'Absolutely! We hope they will since they know how to run EOSIO nodes well. Anyone who meets the minimum requirements for a Telos block producer may submit themselves for voting.'
// 		]
// 	},
// 	{
// 		question: 'Can developers make their code proprietary?',
// 		answer: [
// 			'Yes. If the developer has not accepted payment as a block producer, code reviewer, or worker proposal recipient in the past six months, they can designate the original code in a DApp as proprietary. Any underlying open source code that the DApp is built upon will remain open source, of course. By contrast, all smart contracts running on the EOS network must be open source according to the EOS Constitution.'
// 		]
// 	},
// 	{
// 		question: 'What if Telos users don’t want to use proprietary software on the blockchain?',
// 		answer: [
// 			'Each smart contract will designate if portions of its code are proprietary. Telos members will be able to choose whether or not they wish to work with proprietary smart contracts or only open source contracts.'
// 		]
// 	},
// 	{
// 		question: 'How are Telos block producers paid?',
// 		answer: [
// 			'Telos will have 21 ABPs and up to 30 standby block producers sharing the 1% TLOS inflation. Each block producer will be paid the same flat rate and each standby will be one half of that rate. All will receive pay deductions for missed blocks.'
// 		]
// 	},
// 	{
// 		question: 'Will the team launching Telos take a fee for its service?',
// 		answer: [
// 			'Launching Telos is an expensive and time-consuming venture. The people launching Telos include block producers, developers, social media marketers, arbitrators, and others working together in a largely decentralized way. Members of the Telos Launch Group will be compensated in the TLOS genesis file. A Telos Founders Reward Pool (TFRP) will be created in the Telos genesis file containing 6M TLOS (about 1.8% of the expected money supply). This fund will be distributed among members of the Telos Launch Group – an open-membership group established to create and launch Telos – based on tasks performed by members. The exact method of TFRP distribution is yet to be determined but will be formalized prior to network launch.'
// 		]
// 	},
// 	{
// 		question: 'You say that Telos won’t have any “whales” but aren’t the TFRP recipients and Telos Foundation going to become whales?',
// 		answer: [
// 			'The Telos Foundation will never vote its tokens. TFRP funds will be broadly distributed among contributors in a manner to be determined soon. Distributions over a certain amount will unlock evenly over a 3-year period similar to how Block.one’s tokens vest. No TFRP recipient will be able to vote itself into the block producer ranks without the help of many TLOS token holders.'
// 		]
// 	},
// 	{
// 		question: 'Why are TLG members being compensated?',
// 		answer: [
// 			'Members of the Telos Launch Group are taking a central role in creating and launching Telos. They are bearing the costs and contributing the effort to bring the network to life. To compensate their work and defray cost they incur, they are being granted new genesis tokens on the Telos blockchain distributed from the Telos Founders Reserve Pool. These tokens are of zero value at the genesis and will only gain value if the TLG, Telos Foundation, and other participants can launch a valuable network. This approach is in line with bounty programs common in cryptocurrency launches. The total amount of compensation for the many founders/bounty recipients is ~1.8% of the expected TLOS token supply, which is a low number for cryptocurrency projects where large amounts of work are required and no funding has been sought.'
// 		]
// 	},
// 	{
// 		question: 'What is the Telos Foundation?',
// 		answer: [
// 			'The Telos Foundation is the organization initially launching Telos. Prior to the Telos mainnet launch, the Telos Foundation will organize technical, informational, and marketing efforts to advance Telos. The Telos Foundation will manage the Telos genesis file that is subject to validation by the 6 ABPs. Immediately upon the mainnet launch, the Telos Foundation will cede its authority to the 6 ABPs to be governed by the Telos Constitution and voting rules. After mainnet launch, the Telos Foundation will function as an independent promotion and funding body for Telos. Its function will be to pay for projects that are not selected for worker proposals or that cannot yet be funded due to inadequate funds (particularly early in the life of the network.) The Telos Foundation may apply for worker proposal funds to reimburse funds dispersed as the goal is to create an ongoing fund that is not depleted. It will also seek to stabilize RAM prices by regularly publishing a guidance price and buying below that price, selling above it, and offering RAM for sale or lease to bona fide developers seeking to develop on the network. The Telos Foundation is a decentralized organization that votes on its own issues via smart contract. It does not serve or seek any official governance position and will remain neutral on block producer candidates and proposals. Addresses owned by the Telos Foundation will never vote.'
// 		]
// 	}
// ];

const FAQ_Page = ({faq_page}) => {
	console.log(faq_page);
	return (
		<div className='faq'>
			<Helmet>
				<title>Telos FAQs</title>
				<meta name='description' content='Telos Foundation FAQ page.' />
			</Helmet>
			<FAQ_Intro intro={faq_page.intro} />
			<FAQ_Content faqs={faq_page.faqs} />
		</div>
	);
};

const FAQ_Intro = ({intro}) => {
	return (
		<section id='faq_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>{intro.heading}</h1>
						<h2 dangerouslySetInnerHTML={{__html: intro.subheading}} />
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const FAQ_Content = ({faqs}) => {
	return (
		<section id='faq_content'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							faqs.map((faq, i) => {
								return (
									<div className='question_container' key={i}>
										<p className='question'>Q: &nbsp;{faq.question}</p>
										{
											faq.answer.map((ans, j) => {
												if(j === 0) return <p key={j} className='answer'><span className='a'>A:</span> &nbsp;<span dangerouslySetInnerHTML={{__html: ans}}></span></p>;
												return <p key={j} className='answer' dangerouslySetInnerHTML={{__html: ans}}></p>;
											})
										}
									</div>
								);
							})
						}
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default FAQ_Page;