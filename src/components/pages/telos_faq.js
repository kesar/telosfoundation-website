import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import yaml from 'js-yaml';

export default class TelosFAQ extends Component {

	constructor(){
		super();
		this.state = {
			faq_yml: null
		};
	}

	componentDidMount(){
		axios.get('/resources/faq.yml')
		.then(response => this.setState({faq_yml: response.data}))
		.catch(error => console.log(error));
	}

	render(){
		const {faq_yml} = this.state;
		//parse yaml into js object
		const faq_obj = yaml.load(faq_yml);
		if(!faq_obj){
			return <div></div>;
		}

		const get_faqs = faq_obj.questions.map(item => {
			return (
				<div key={item.question}>
					<strong>{item.question}</strong>
					<p>{item.answer}</p>
				</div>
			);
		});

		return (
			<Col sm={12}>
				<article>
					<h2>{faq_obj.page_title}</h2>
					{get_faqs}
				</article>
			</Col>
		);
	}
}

/*
const TelosFAQ = () => {

	return (
		<Col sm={12}>
			<article>
				<h2>Telos FAQ</h2>
				<strong>Q: What is Telos?</strong>
				<p>A: Telos is a new blockchain network based on Eosio software.</p>
				<strong>Q: What is the difference between Eos and Telos?</strong>
				<p>A: Eos and Telos are both networks running the Eosio software. Any smart contract that runs on one system should run equally well on the other. Telos has modified the Eos genesis snapshot and some rules to make the network more responsible to the majority of token holders, to be more attractive to DApp developers, and to generally run more responsively and sustainably.</p>
				<strong>Q: What is TLOS?</strong>
				<p>A: TLOS is the name of the token that reflects ownership in the Telos network. A TLOS token is like an EOS token except that there will be around 3X fewer TLOS tokens than EOS.</p>
				<strong>Q: If I bought EOS tokens, will I get TLOS?</strong>
				<p>A: Yes, if you bought EOS and registered them, then your TLOS tokens will be available for voting at mainnet launch and for transfer or stake as soon as the mainnet activates reaches 15% consensus – up to 40,000 TLOS per address. If your tokens are on an exchange, the exchange must agree to list TLOS and distribute tokens to owners for you to receive them.</p>
				<strong>Q: Are you taking away people’s EOS tokens?</strong>
				<p>A: No. EOS holders will have the exact same number of EOS tokens on the Eos network as they ever had. That is what they purchased from Block.one. Telos is a new project based on the Eos network. The Eos source code is open source and freely available to fork. We have decided to give an equal number of TLOS tokens to every EOS token holder on the genesis snapshot, but capping values at 40,000 TLOS per genesis address. This means that there will be no whales on Telos.</p> 
				<strong>Q: Is Telos an airdrop?</strong>
				<p>A: Telos is a completely new network using the same Eosio operating software as Eos mainnet with a few small modifications. It is not an airdrop. However, the distribution of TLOS tokens is similar to an airdrop in that anyone who owned Eos tokens will receive new TLOS tokens at their addresses based on our genesis token distribution algorithm.</p>
				<strong>Q: What exactly is the Telos genesis token distribution algorithm?</strong>
				<p>A: Simply, it is that all Telos genesis addresses will receive the same number of tokens as their corresponding Eos addresses held in the genesis snapshot—up to a maximum of 40,000 tokens. Except for a few special cases:. Addresses proven to have been stolen, phished, or misregistered, thereby depriving their rightful owners of them will be restored to new addresses controlled by their rightful owners; and New genesis tokens will be created to compensate the ABPs and establish the Telos Foundation.</p>
				<strong>If you cap all accounts, how can EOS holders get TLOS from exchanges?</strong>
				<p>A: The TLOS block producers have the ability to create new tokens by a vote of 2/3+1. The 6 ABPs agree to create new tokens for distribution for any exchange that can show EOS holdings on the snapshot and that agrees: to list TLOS; not to vote the exchange account; and to request and distribute only enough coins so that all EOS holders at the time of the snapshot receive their coins capped at 40,000 per account. The ABPs will have a process in place for exchanges to petition them to create TLOS tokens and promise to honor all valid petitions. (It will require a vote of 5 of the 6 block producers to accomplish this.) Once the Telos network activates and the elected block producers validate the network, it will take a vote of 15 of the 21 block producers to create new tokens for exchanges.</p>
				<strong>Q: Why cap genesis addresses at 40,000 TLOS?</strong>
				<p>A: The largest 1,100 Eos addresses control about 90% of EOS tokens and therefore completely control block producer selection, their voting, and ultimately the entire network. This makes the system dangerously centralized. By capping genesis addresses at 40,000 TLOS—approximately the 90th percentile of ownership—the Telos network will be one of the most evenly distributed major blockchains in existence. 162,930 addresses will have exactly as many TLOS as they did EOS. The total TLOS token supply will be lowered to approximately 200-400,000,000 TLOS tokens depending on how many exchanges petition to recreate their wallets.</p>
				<strong>Q: Can Telos addresses ever have more than 40,000 TLOS?</strong>
				<p>A: Yes. The 40,000 TLOS cap only applies at the network genesis. Addresses may hold any amount of TLOS thereafter.</p>
				<strong>Q: Will you still require 15% of TLOS token holders to vote to launch the mainnet?</strong>
				<p>A: Yes. However, with addresses capped and Telos Foundation addresses permanently excluded from voting, the number of total votes needed to launch will decrease. This will represent a much broader cross-section of individual TLOS token holders.</p>
				<strong>Q: What is the difference between the Telos mainnet launch and activation?</strong>
				<p>A: Telos mainnet launch is the process of the beginning to run the Telos network to allow votes to be cast for block producers and for network validation. Activation is the point when TLOS holders can begin transferring or otherwise controlling their tokens beyond just voting. Activation will commence 24 hours after 15% of TLOS token holders eligible to vote have voted for block producers and mainnet activation and at least 40 block producer candidates meet the minimum block producer requirements.</p>
				<strong>Q: If exchange addresses cannot vote, will my TLOS tokens be able to vote if they are currently on an exchange?</strong>
				<p>A: Once tokens are off the exchange and on your own Telos address, you can vote them. Individual owners cannot vote their tokens held on exchanges. Preventing voting from exchange accounts keeps exchanges from voting with customer tokens, which is against the Telos rules.</p>
				<strong>Q: Will this hurt the Eos network?</strong>
				<p>A: The Eos network will succeed or fail based on its own merits. We hope it succeeds, as we are all deeply invested in this project. However, the Eos mainnet release has revealed problems with the system that will be difficult to resolve on the Eos blockchain. “Whales” have shown that they generally just vote for their own block producer partners and even game the rewards system to harm other block producers—this may also be expected once worker proposals emerge. The Eos network is under the control of a few whale accounts. We offer a fresh approach where all token holders’ voices matter.</p>
				<strong>Q: If these changes will fix the network, why doesn’t Eos make them?</strong>
				<p>A: Block.one sold EOS tokens in their tokensale. They accepted money for tokens and made certain representations. They can’t easily change the results of their sale—especially by reducing the tokens of their largest contributors, which is really the key change that fixes the system. Telos is a completely new system that never took money from nor made promises to anyone. We intend to build a network using the open source Eos software (that we all helped pay for) to create an entirely new network that better represents the true purpose of Eos.</p>
				<strong>Q: Can I buy and sell TLOS tokens? What are they worth?</strong>
				<p>A: TLOS tokens will not gain value until the Telos mainnet launches and they are able to be traded. In practical terms, TLOS will gain real value when exchanges accept them to trade against other cryptocurrencies. We expect that this will happen because exchange customers will demand that they be given access to their tokens. The technical requirements for listing TLOS will be identical to EOS so we expect little resistance on that point. Once tokens are freely trading on exchanges they will find their value based on supply and demand. The TLOS token supply will be between one-fifth and one-third that of EOS, and the Telos network should be as good as or better than Eos. Telos will also not have any “whale” addresses which often are responsible for price manipulations in other coins.</p>
				<strong>Q: Are you selling TLOS tokens?</strong>
				<p>A: We are not selling any TLOS tokens. We will use the Eos Snapshot with the following changes: 1) Capping all addresses at 40,000; 2) Creating a process for exchange addresses to petition the BPs to create TLOS tokens for their EOS snapshot owners by listing and distributing TLOS tokens (up to 40,000 per account holder); 3) Providing new public keys to EOS token holders who can prove that their tokens were stolen or misregistered; 4) Adding 1M new tokens to each of 6 ABPs as payment to the initial ABPs (vesting over 3 years) and 4M TLOS tokens to the Telos Foundation Ltd, to support network needs that cannot otherwise be funded. These tokens currently have no value and will only gain value if the ABPs and Telos Foundation can create a valuable network. The Telos Foundation pledges to never vote its tokens.</p>
				<strong>Q: Who are you and why are you launching Telos?</strong>
				<p>A: We are a group of Eos block producer candidates who have contributed to the system, run testnets, and taken part in the Eos Mainnet Launch Group that voted to unanimously launch the mainnet. We believe in the promise of Eos, but we have come to be concerned that the current system is deeply flawed due to the overwhelming power of Eos token holders with enormous holdings. We hope that Eos can overcome this problem, but in the meantime, we want to launch a new, more decentralized network using the Eos technology.</p>
				<strong>Q: Can Eos block producers also be Telos block producers?</strong>
				<p>A: Absolutely! We hope they will since they know how to run Eosio nodes well. Anyone who meets the minimum requirements for a Telos block producer may submit themselves for voting.</p>
				<strong>Q: Can developers make their code proprietary?</strong>
				<p>A: Yes. If the developer has not accepted payment as a block producer, code reviewer, or worker grant recipient in the past six months, they can designate the original code in a DApp as proprietary. Any underlying open source code that the DApp is built upon will remain open source, of course. By contrast, all smart contracts running on the Eos network must be open source according to the Eos Constitution.</p>
				<strong>Q: What if Telos users don’t want to use proprietary software on the blockchain?</strong>
				<p>A: Each smart contract will designate if portions of its code are proprietary. Telos members will be able to choose whether or not they wish to work with proprietary smart contracts or only open source contracts.</p>
				<strong>Q: When will the Telos mainnet launch?</strong>
				<p>A: The mainnet will launch for voting in August 2018, run by 6 ABPs until it receives both 15% of all outstanding Telos votes (Telos Foundation addresses), and at least 40 Telos block producer candidates who meet the minimum requirements. At this point the ABPs will resign any special powers and 24 hours later the Telos mainnet will activate for transactions. In other words, we will wait for a groundswell of support from both the original Eos token holders and a group of highly qualified technical block producer candidates. We believe that this will indicate a true mandate for the Telos network.</p>
				<strong>Q: How are Telos block producers paid?</strong>
				<p>Telos will have 21 active block producers and up to 30 standby block producers sharing the 1% TLOS inflation. Each block producer will be paid the same flat rate and each standby will be one half of that rate. All will receive pay deductions for missed blocks.</p>
				<strong>Q: Will the team launching Telos take a fee for its service?</strong>
				<p>A: Launching the Telos network is an expensive and time-consuming venture. The people launching Telos include block producers, developers, social media marketers, arbitrators, and others working together in a largely decentralized way. Some groups such as the 6 ABPs will be compensated in the TLOS genesis file. Others offering services to the launch will be compensated by grants from the Telos Foundation upon mainnet activation. Each ABP will receive 1M TLOS tokens that will unlock over 3 years. The Telos Foundation will receive 4M tokens. In total, these tokens will amount to about 2.5% of the total network value.</p>
				<strong>Q: You say that Telos won’t have any “whales” but aren’t the ABPs and Telos Foundation going to become whales?</strong>
				<p>A: The Telos Foundation will never vote its tokens. The ABPs tokens will unlock evenly over a 3-year period. No ABP will be able to vote itself into the block producer ranks without the help of many TLOS token holders.</p>
				<strong>Q: Why are ABPs being compensated?</strong>
				<p>A: The Appointed Block Producers are six block producers taking a central role in launching the Telos network. They are bearing the costs of development, operation, and validation of the network to the point that it is self-operating. To compensate their work and defray cost they incur, they are being granted new genesis tokens on the Telos blockchain. These tokens are of zero value at the genesis and will only gain value if the ABPs, Telos Foundation, and other participants can launch a valuable network.</p>
				<strong>Q: What is the Telos Foundation?</strong>
				<p>A: The Telos Foundation is the organization initially launching the Telos Network. Prior to the Telos mainnet launch, the Telos foundation will organize technical, informational, and marketing efforts to advance the Telos network. The Telos Foundation will manage the Telos genesis file subject to validation of the 6 ABPs. Immediately upon the mainnet launch, the Telos Foundation will cede its authority to the 6 ABPs to be governed by the Telos Constitution and voting rules.</p>
				<p>After mainnet launch the Telos Foundation will function as an independent promotion and funding body for the Telos network. Its function will be to pay for projects that are not selected for worker proposals or that cannot yet be funded due to inadequate funds. (Particularly early in the life of the network.) The Telos Foundation may apply for worker proposal funds to reimburse funds dispersed as the goal is to create an ongoing fund that is not depleted. Addresses owned by the Telos Foundation will never vote.</p>
			</article>
		</Col>
	);
};

export default TelosFAQ;*/