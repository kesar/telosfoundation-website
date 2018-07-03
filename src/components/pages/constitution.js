import React, {Component} from 'react';
import {Col} from 'react-bootstrap';
import axios from 'axios';
import yaml from 'js-yaml';

export default class Constitution extends Component {
	constructor(){
		super();
		this.state = {
			constitution_yml: null
		};
	}

	componentDidMount(){
		axios.get('/resources/constitution.yml')
		.then(response => this.setState({constitution_yml: response.data}))
		.catch(error => console.log(error));
	}

	render(){
		const constitution_obj = yaml.load(this.state.constitution_yml);
		console.log(constitution_obj);

		if(!constitution_obj){
			return <div></div>;
		}

		const get_articles = constitution_obj.articles.map(item => {
			return (
				<div>
					<h4>{item.article}</h4>
					{item.article_content.map(item => <p>{item.paragraph}</p>)}
				</div>
			);
		});


		return (
			<Col sm={12}>
				<article>
					<h2>{constitution_obj.page_title}</h2>
					{constitution_obj.page_intro.map(item => <p>{item.paragraph}</p>)}
					{get_articles}
				</article>
			</Col>
		);
	}
}


/*
const Constitution = () => {

	return (
		<Col sm={12}>
			<article>
				<h2>Constitution</h2>
				<p>This Constitution is a multi-party contract entered into by the Members by virtue of their use of this blockchain.</p>
				<h4>Article I - No Initiation of Violence</h4>
				<p>Members shall not initiate violence or the threat of violence against another Member.  Disputes may only be resolved by appending the blockchain.</p>

				<h4>Article II - No Perjury</h4>
				<p>Members shall be liable for losses caused by false or misleading attestations and shall forfeit any profit gained thereby.</p>
			
				<h4>Article III - Rights</h4>
				<p>The Members grant the right of contract and of private property to each other, therefore no property shall change hands except with the consent of the owner, by a valid Arbitrator’s order, or via community referendum. This Constitution creates no positive rights for or between any Members.</p>

				<h4>Article IV - No Vote Buying</h4>
				<p>No Member shall offer nor accept anything of value in exchange for a vote of any type, nor shall any Member unduly influence the vote of another.</p>

				<h4>Article V - No Fiduciary</h4>
				<p>No Member nor TLOS token holder shall have fiduciary responsibility to support the value of the TLOS token. The Members do not authorize anyone to hold assets, borrow, nor contract on behalf of TLOS token holders collectively. This blockchain has no owners, managers or fiduciaries; therefore, no Member shall have beneficial interest in more than 10% of the TLOS token supply.</p>

				<h4>Article VI - Restitution</h4>
				<p>Each Member agrees that penalties for breach of contract may include, but are not limited to, fines, loss of account, and other restitution.</p>

				<h4>Article VII - Open Source or Proprietary</h4>
				<p>Each Member who makes available a smart contract on this blockchain shall be a Developer. Each developer may designate original elements of their smart contracts as either open source or proprietary provided that no developer that has received payment as a block producer, code contributor, or code reviewer with- in the past six months shall be eligible to designate any smart contract code as proprietary. Each smart contract shall be documented with a Ricardian Contract stating the intent of all parties and naming the Arbitration Forum that will resolve disputes arising from that contract.</p>

				<h4>Article VIII - Language</h4>
				<p>Multi-lingual contracts must specify one prevailing language in case of dispute and the author of any translation shall be liable for losses due to their false, misleading, or ambiguous attested translations.</p>

				<h4>Article IX - Dispute Resolution</h4>
				<p>All disputes arising out of or in connection with this Constitution shall be finally settled under the Rules of Arbitration of the International Chamber of Commerce by the Telos Arbitration Organization by one or more arbitrators appointed by the block producers in accordance with the said Rules. The block producers shall execute orders issued by the arbitrators regarding the dispute within 12 hours of issuance.</p>

				<h4>Article X - Choice of Law</h4>
				<p>Choice of law for disputes shall be, in order of precedence, this Constitution, the Telos Rules and the Maxims of Equity.</p>

				<h4>Article XI - Amending</h4>
				<p>This Constitution and its subordinate documents shall not be amended except by a vote of the token holders with no less than 15% vote participation among tokens and no fewer than 10% more Yes than No votes, sustained for 30 continuous days within a 120 day period as recorded on a smart contract approved by the block producers or their assigned code validation body.</p>

				<h4>Article XII - Publishing</h4>
				<p>Members may only publish information to the Blockchain that is within their right to publish. The collective Telos community, Telos block producers, and Telos Foundation disavow and accept no responsibility for illegal or inappropriate information published on the Telos Blockchain. The block producers are not empowered excise illegal or inappropriate information published upon it. Any member who posts such material is wholly responsible for any judgement, prosecution or penalties due to such publication. Furthermore, Members voluntarily consent for all Members to permanent- ly and irrevocably retain a copy, analyze, and distribute all broadcast transactions and derivative information.</p>

				<h4>Article XIII - Informed Consent</h4>
				<p>All service providers who produce tools to facilitate the construction and signing of transactions on behalf of other Members shall present to said other Members the full Ricardian contract terms of this Constitution and other referenced contracts. Service providers shall be liable for losses resulting from failure to disclose the full Ricardian contract terms to users.</p>

				<h4>Article XIV - Severability</h4>
				<p>If any part of this Constitution is declared unenforceable or invalid, the remainder will continue to be valid and enforceable. No part of this Constitution is to be given higher importance than any other due to its Article number.</p>

				<h4>Article XV - Termination of Agreement</h4>
				<p>A Member is automatically released from all revocable obligations under this Constitution 3 years after that Member has sold or otherwise relinquished all TLOS tokens.</p>

				<h4>Article XVI - Developer Liability</h4>
				<p>Members agree to hold software developers harmless for unintentional mistakes made in the expression of contractual intent, whether or not said mistakes were due to actual or perceived negligence.</p>

				<h4>Article XVII - Consideration</h4>
				<p>All rights and obligations under this Constitution are mutual and reciprocal and of equally signifi- cant value and cost to all parties.</p>

				<h4>Article XVIII - Acceptance</h4>
				<p>A contract is deemed accepted when a member signs a transaction which incorporates a TAPOS proof of a block whose implied state incorporates an ABI of said contract and said transaction is incorporated into the blockchain.</p>

				<h4>Article XIX - Counterparts</h4>
				<p>This Constitution may be executed in any number of counterparts, each of which when executed and delivered shall constitute a duplicate original, but all counterparts together shall constitute a single agreement.</p>

				<h4>Article XX - Complete Constitution</h4>
				<p>This constitution is accepted as complete and does not need further ratification to be valid and enforceable.</p>
			</article>
		</Col>
	);
};

export default Constitution;*/