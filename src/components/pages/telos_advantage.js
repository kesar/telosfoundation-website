import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import yaml from 'js-yaml';
import axios from 'axios';

export default class TelosAdvantage extends Component {
	constructor(){
		super();
		this.state = {
			advantage_yml: null
		};
	}

	componentDidMount(){
		axios.get('/resources/telos_advantage.yml')
		.then(response => this.setState({advantage_yml: response.data}))
		.catch(error => console.log(error));
	}

	render(){
		const advantage_obj = yaml.load(this.state.advantage_yml);
		if(!advantage_obj){
			return <div></div>;
		}

		const {page_intro} = advantage_obj;

		const get_for_developers = () => {
			const {for_developers} = advantage_obj;
			return (
				<div>
					<h3>{for_developers.heading}</h3>
					{for_developers.intro.map(item => <p key={item}>{item}</p>)}
					{for_developers.items.map(item => {
						return (
							<div key={item.heading}>
								<h4>{item.heading}</h4>
								{item.content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
								{item.footnotes ? <small>{item.footnotes}</small> : ''}
							</div>
						);
					})}
				</div>
			);
		};

		const get_for_holders = () => {
			const {for_holders} = advantage_obj;
			return (
				<div>
					<h3>{for_holders.heading}</h3>
					{for_holders.intro.map(item => <p key={item}>{item}</p>)}
					{for_holders.items.map(item => {
						return (
							<div key={item.heading}>
								<h4>{item.heading}</h4>
								{item.content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
								{item.footnotes ? <small>{item.footnotes}</small> : ''}
							</div>
						);
					})}
				</div>
			);
		};

		const get_for_producers = () => {
			const {for_producers} = advantage_obj;
			return (
				<div>
					<h3>{for_producers.heading}</h3>
					{for_producers.intro.map(item => <p key={item}>{item}</p>)}
					{for_producers.items.map(item => {
						return (
							<div key={item.heading}>
								<h4>{item.heading}</h4>
								{item.content.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
								{item.footnotes ? <small>{item.footnotes}</small> : ''}
							</div>
						);
					})}
				</div>
			);
		}

		return (
			<Col sm={12}>
				<article>
					<h2>{advantage_obj.page_title}</h2>
					{page_intro.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
					<strong>{page_intro.for_developers_heading}</strong>
					<ul>
						{page_intro.for_developers_list.map(list_item => <li key={list_item}>{list_item}</li>)}
					</ul>
					<strong>{page_intro.for_holders_heading}</strong>
					<ul>
						{page_intro.for_holders_list.map(list_item => <li key={list_item}>{list_item}</li>)}
					</ul>
					<strong>{page_intro.for_producers_heading}</strong>
					<ul>
						{page_intro.for_producers_list.map(list_item => <li key={list_item}>{list_item}</li>)}
					</ul>
					{get_for_developers()}
					{get_for_holders()}
					{get_for_producers()}
				</article>
			</Col>
		);
	}
}


/*
const TelosAdvantage = () => {
	return (
		<Col sm={12}>
			<article>
				<h2>The Telos Advantage</h2>
				<p>Telos is a new network based on Eos. It offers many advantages over the Eos Mainnet.</p>
				<p>For Developers</p>
				<ul>
					<li>Proprietary DApps allowed</li>
					<li>Lower cost DApp deployment</li>
					<li>Fewer network pauses</li>
					<li>Enhanced Security</li>
					<li>Public testnet operated by BPs</li>
					<li>Telos/Eos mainnet compatibility</li>
				</ul>
				<p>For Token Holders</p>
				<ul>
					<li>Meaningful voting for all</li>
					<li>Higher equity per token</li>
					<li>Developer focus builds value</li>
					<li>Lower inflation</li>
					<li>Pre-activation resolution of stolen tokens</li>
				</ul>
				<p>For Block Producers</p>
				<ul>
					<li>Equitable payout model</li>
					<li>Equitable voting</li>
					<li>Smart contract enforced block producer requirements</li>
					<li>Regular downtime for node maintenance</li>
				</ul>
				<h3>FOR DEVELOPERS</h3>
				<p>The Telos network exists to provide a reliable, affordable, well managed network for developers to release DApps. Telos offers the following advantages over the Eos mainnet:</p>

				<h4>Proprietary DApps Allowed</h4>
				<p>All DApp code running on the Eos mainnet must be open source. (Eos Constitution: Article VII) Telos will allow developers to designate original portions of their code as proprietary.</p>

				<h4>Lower Cost DApp Deployment</h4>
				<p>The Telos network will manage RAM requirements in a way that scales with actual usage. This will limit early RAM hoarding and keep the cost of deploying DApps more affordable.</p>

				<h4>Fewer Network Pauses</h4>
				<p>The Telos network uses a block producer system that swaps all standbys into block production on a daily basis to prove that all are capable of producing blocks whenever called on. This system also allows any block producer that is not operational to be temporarily swapped out after missing just 30 minutes (15 consecutive blocks) as opposed to 3 hours on the Eos mainnet. This reduces the risk of mandatory network pauses due to 6 block producers becoming inactive at any given time.</p>

				<h4>Enhanced Security</h4>
				<p>Telos expands on the security of the Eos network by adding enforced minimum technical and information disclosure requirements for Telos block producers.</p>
				<p>All Telos block producers and standbys are required to have a node on the BP private testnet where new patches can be tested before implementation*.  This increases network security by revealing new bugs prior to implementation and allows for better update coordination among block producers to reduce the incidents of dead chains.</p>
				<small>(* except emergency security patches for known exploits.)</small>

				<h4>Public Testnet Operated by Block Producers</h4>
				<p>All Telos block producers and standbys are required to contribute a node to a full and open testnet identical to the Telos mainnet. This aids app development and testing.</p>

				<h4>Telos/Eos Mainnet Compatibility</h4>
				<p>The Telos network runs the same software as the Eos mainnet, so DApps written for Eos can run on Telos. The only code changes on the Telos network relate to how BPs are paid, selected, and temporarily removed from service due to noncompliance. All other differences result from genesis snapshot modifications, constitutional changes, and organizational principals.</p>

				<h3>FOR TOKEN HOLDERS</h3>
				<p>Telos tokens (TLOS) have advantages over EOS tokens:</p>

				<h4>Meaningful Voting For All</h4>
				<p>The Telos genesis token ownership caps all genesis accounts at 40,000 TLOS tokens. Telos Foundation-owned addresses cannot vote. As a result, Telos token ownership is one of the most proportionate of any cryptocurrency network. Telos members have a much more equal say in the governance of the network than Eos members.</p>

				<h4>Higher Equity Per Token</h4>
				<p>Each EOS token represents 1/1,000,0000,000 of the total value of the Eos network. Because Telos has fewer tokens, each TLOS token represents approximately 1/300,000,000* of the value of the Telos network. That is more than 3X the network ownership percentage for the same number of tokens.</p>
				<small>(* Depending on the total number of Exchanges that activate TLOS token distribution for their EOS token owners.)</small>

				<h4>Developer Focus Builds Value</h4>
				<p>The value of any Eos-based network will ultimately reflect the network’s usefulness to developers in deploying DApps. Telos offers additional value to developers through features like lower DApp deployment costs and the ability to deploy proprietary code. These features may make the Telos network more attractive and more valuable to developers over time.</p>
			
				<h4>Lower Inflation</h4>
				<p>Eos inflation is set at 5% per year. Telos will aim for inflation of 2.5% per year. TLOS token inflation will be as much as 50% that of EOS tokens.</p>

				<h4>Pre-activation Resolution of Stolen Tokens</h4>
				<p>The Telos Foundation and ABPs will provide a smart contract to allow any EOS holders who had tokens stolen to prove their ownership prior to Telos mainnet launch. This will return the tokens to their rightful owners and prevent additional members from unwittingly purchasing tokens that may later be frozen due to theft.</p>

				<h3>FOR BLOCK PRODUCERS</h3>
				<p>Block producers validate transactions, provide network security, and perform crucial governance roles on the blockchain. In order to attract the best possible block producers to the Telos network, we have enacted the following improvements:</p>

				<h4>Equitable Payout Model</h4>
				<p>The Telos block producer system is comprised of 21 block producers and 30 standbys, organized by rank based on user votes. Every block producer will be paid <u>the same</u> daily share of the Telos 1% inflation. Every standby block producer (up to 30) will receive one half the amount that the top 21 block producers receive. Every standby block producer will rotate into active block production every 3 days to “earn their keep” and prove that they are constantly available to fulfill their responsibilities. Block producers will be penalized for any missed blocks and statistics will be furnished to Telos voters.</p>
			
				<h4>Equitable Voting</h4>
				<p>In the Eos voting system, “whales” can vote in any block producer they choose. Telos does not have whales and therefore block producers need only convince the broad collective of TLOS token holders of their strong candidacy.</p>

				<h4>Smart Contract Enforced Block Producer Requirements</h4>
				<p>Telos maintains minimum standards for block producers to be eligible candidates. These standards are based on security, server capacity, information disclosure, and participation in the public and private testnet. These standards will be enforced by smart contract from the time of mainnet activation and any block producer candidate that is not in compliance will not be capable of serving, regardless of votes. All other block producer candidates will automatically rise up the block producer ranks to fill in until the minimum requirements are met.</p>

				<h4>Regular Downtime for Node Maintenance</h4>
				<p>Standby block producers will prove their reliability by rotating into block production for several hours every 3 days on a semi-regular schedule. This will give primary block producers frequent opportunities to take down nodes for maintenance and upgrades. This significantly reduces the cost of operation. This system also ensures all standbys are constantly ready to fulfill their duties.</p>
			</article>
		</Col>
	);
};

export default TelosAdvantage;*/