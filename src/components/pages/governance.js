import React from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import pdf_img from '../../img/download_pdf_icon.png';

import '../../styles/governance.css';

const governanceDocuments = [
	{
		long_name: 'Operating Agreement (TBNOA)',
		short_name: 'Operating Agreement',
		long_description: 'The prime governing document on Telos describing the rights and responsibilities of becoming a member of the Telos Blockchain Network. It is required to opt-in to this agreement in order to access or use Telos. This agreement is the equivalent of the EOS Constitution. It differs from the EOS constitution in form: The TBNOA thoroughly defines all network parts and participants and describes governance actions such as electing block producers, amending the governance documents or submitting a worker proposal system submission. The TBNOA has inherited almost no terms from the EOS Constitution. The TBNOA includes the other five governance documents by reference and each of them adopts its definitions and terms.',
		short_description: 'Primary governance document',
		eos_analog: 'EOS Constitution',
		status: 'Awaiting TCG ratification',
		url: 'https://resources.telosfoundation.io/Operating Agreement.pdf'
	},
	{
		long_name: 'Arbitration Rules & Procedures (TBNARP)',
		short_name: 'Arbitration Rules & Procedures',
		long_description: 'The Arbitration Rules & Procedures describes the entire process of arbitration on Telos - from filing a case to procedures for arbitration, to delivery of arbitral judges decisions to block producers for execution. The EOS analog for this is the ECAF Rules and as yet unpublished ECAF Handbook. the Telos Arbitration Rules are entirely independent from the ECAF Rules and share no text. They are also a community amendable core governance document on Telos, whereas the ECAF Rules are set and maintained by the ECAF with no mechanism for input or control from the broader EOS community.',
		short_description: 'Rules and procedures for arbitration on Telos',
		eos_analog: 'ECAF Rules',
		status: 'In committee with Governance WG',
		url: 'https://resources.telosfoundation.io/Telos Network Arbitration Process.pdf'
	},
	{
		long_name: '\'regproducer\' Contract Human Language Terms (\'regproducer\')',
		short_name: '\'Regproducer\' Contract',
		long_description: 'The \'regproducer\' contract is used by any member desiring to become a block producer candidate to nominate themselves. The human-language terms of this contract set out the responsibilities and rules for block producer candidates. This text is largely inherited from the EOS \'regproducer\' contract with much additional text added. The primary difference between the EOS and Telos versions is that while both list prohibited actions, the Telos version also documents penalties for any infractions, the method of enforcement, and the responsibility of block producers to enforce the rules on other BPs.',
		short_description: 'Rules, responsibilities and representations of block producers',
		eos_analog: 'EOS \'Regproducer\' Contract',
		status: 'Awaiting TCG ratification',
		url: 'https://resources.telosfoundation.io/Regproducer Human Language Contract.pdf'
	},
	{
		long_name: 'Producer Minimum Requirements (BP Minimum Requirements)',
		short_name: 'BP Minimums',
		long_description: 'The BP Minimum Requirements is a list of disclosures, practices, equipment and networking standards that block producer candidates must adhere to in order to serve. Failure to meet the minimum requirements disqualifies a BP from service until the omission is cured, regardless of how many votes the BP has acquired. Due to the newness of the network, these requirements are described in increasingly stringent phases which the block producers can vote to move between based on 2/3 + 1 voting. EOS does not have minimum requirements or a similar document. A minimum amount of RAM is specified in the EOS \'regproducer\' contract.',
		short_description: 'Minimum requirements to act as a block producer',
		eos_analog: 'None',
		status: 'In committee with Governance WG',
		url: 'https://resources.telosfoundation.io/Block Producer Minimum Requirements (Phases 1-3).pdf'
	},
	{
		long_name: '\'regarb\' Contract Human Language Terms (\'regarb\')',
		short_name: '\'Regarb\' Contract',
		long_description: 'The \'regarb\' contract is used by any member desiring to become an arbitrator candidate to nominate themselves. The human-language terms of this contract set out the responsibilities and rules for arbitrator candidates. There is no similar document on EOS because EOS does not elect arbitrators.',
		short_description: 'Rules, responsibilities and representations of arbitrators',
		eos_analog: 'None',
		status: 'In committee with Governance WG',
		url: 'https://resources.telosfoundation.io/arbitrator_documents/Telos regarb Human-language Contract.pdf'
	},
	{
		long_name: 'Arbitrator Minimum Requirements (Arbitrator Minimum Requirements)',
		short_name: 'Arbitrator Minimums',
		long_description: 'The Arbitrator Minimum Requirements is a list of disclosures, practices, equipment and networking standards that arbitrator candidates must adhere to in order to serve. Failure to meet the minimum requirements disqualifies an arbitrator from being assigned new cases until the omission is cured, regardless of how many votes the arbitrator candidate has acquired. Due to the newness of the network, these requirements are described in increasingly stringent phases. There is no similar document on EOS because EOS does not elect arbitrators.',
		short_description: 'Minimum requirements to act as an arbitrator',
		eos_analog: 'None',
		status: 'In committee with Governance WG',
		url: 'https://resources.telosfoundation.io/arbitrator_documents/Telos Arbitrator Minimum Requirements.pdf'
	},
];

const Governance = () => {
	return (
		<div className='governance'>
			<Helmet>
				<title>Telos Governance</title>
			</Helmet>
			<GovernanceIntro />
			<GovernanceDocuments />
			<GovernanceTable />
		</div>
	);
};

const GovernanceIntro = () => {
	return (
		<section id='governance_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Governance Overview</h1>
						<h3>Telos is a governed blockchain based on EOSIO - the same software that powers EOS - so that DApps can deploy on Telos and EOS with the same code. When Telos launches (as early as October 17, 2018) it will have complete documentation and operating structures such as full on-chain governance, the ability to ratify or amend the governance documents by community voting, a worker proposal system, and election of block producers and arbitrators. Below are the main elements and features of blockchain governance on Telos.</h3>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const GovernanceDocuments = () => {
	return (
		<section id='governance_documents'>
			<header>
				<h2>THE DOCUMENTS</h2>
			</header>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<h3 className='text-center'>
							The definitions, rules, and procedures of Telos governance are contained in six documents that will be recorded on-chain and modifiable by community vote (pro rata by TLOS token ownership). These documents are:
						</h3>
					</Col>
				</Row>
				<Row>
					<Col md={10} mdOffset={1}>
						<div className='documents'>
							{
								governanceDocuments.map((doc, i) => {
									return (
										<GovernanceDocument
											key={i}
											name={doc.long_name}
											description={doc.long_description}
											url={doc.url} />
									);
								})
							}
						</div>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const GovernanceDocument = (props) => {
	return (
		<div className='document_container'>
			<div className='document_icon_container'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>
					<img src={pdf_img} alt='pdf icon' className='document_icon' />
				</a>
			</div>
			<div className='document_info'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.name}</a>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

const GovernanceTable = () => {
	return (
		<section id='governance_table'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h2 className='text-center'>Telos Governance at a glance</h2>
						<Table striped bordered responsive>
							<thead>
								<tr>
									<th>Document</th>
									<th>Description</th>
									<th>EOS Analog</th>
									<th>Status</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody>
								{
									governanceDocuments.map((doc, i) => {
										return (
											<tr key={i}>
												<td>
													<h4>{doc.short_name}</h4>
												</td>
												<td>{doc.short_description}</td>
												<td>{doc.eos_analog}</td>
												<td>{doc.status}</td>
												<td>
													<a href={doc.url} target='_blank' rel='noopener noreferrer'>
														<img src={pdf_img} alt='pdf icon' className='table_pdf' />
													</a>
												</td>
											</tr>
										);
									})
								}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default Governance;