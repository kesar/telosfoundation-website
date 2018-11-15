import React, {Component} from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';

import pdf_img from '../../img/download_pdf_icon.png';

import '../../styles/governance.css';

class Governance extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		const {intro, documents, table} = this.props.governance_page;
		const governanceDocuments = [
			{
				long_name: documents.documents.operating_agreement.long_name,
				short_name: documents.documents.operating_agreement.short_name,
				long_description: documents.documents.operating_agreement.long_description,
				short_description: documents.documents.operating_agreement.short_description,
				eos_analog: documents.documents.operating_agreement.eos_analog,
				status: documents.documents.operating_agreement.status,
				url: 'https://resources.telosfoundation.io/governance_documents/TBNOA_Adopted_2018-10-26.pdf'
			},
			{
				long_name: documents.documents.arbitration_rules.long_name,
				short_name: documents.documents.arbitration_rules.short_name,
				long_description: documents.documents.arbitration_rules.long_description,
				short_description: documents.documents.arbitration_rules.short_description,
				eos_analog: documents.documents.arbitration_rules.eos_analog,
				status: documents.documents.arbitration_rules.status,
				url: 'https://resources.telosfoundation.io/governance_documents/TBNARP_Adopted_2018-10-26.pdf'
			},
			{
				long_name: 'Arbitration Parameters Schedule',
				short_name: 'Arbitration Parameters Schedule',
				long_description: 'The Arbitration Parameters Schedule documents the initial Arbitration Parameters Schedule used to determining the base fees, number of arbitrators to be assigned to various types of Cases, and Small Claims limit amount.',
				short_description: 'Initial Arbitration Parameters Schedule',
				eos_analog: 'None',
				status: 'Adopted',
				url: 'https://resources.telosfoundation.io/governance_documents/TBNARP_Arbitration_Parameters_Schedule_Adopted_2018-10-26.pdf'
			},
			{
				long_name: documents.documents.regproducer_contract.long_name,
				short_name: documents.documents.regproducer_contract.short_name,
				long_description: documents.documents.regproducer_contract.long_description,
				short_description: documents.documents.regproducer_contract.short_description,
				eos_analog: documents.documents.regproducer_contract.eos_analog,
				status: documents.documents.regproducer_contract.status,
				url: 'https://resources.telosfoundation.io/governance_documents/Telos Regproducer_Human-language_Contract_Adopted_2018-10-09.pdf'
			},
			{
				long_name: documents.documents.bp_minimums.long_name,
				short_name: documents.documents.bp_minimums.short_name,
				long_description: documents.documents.bp_minimums.long_description,
				short_description: documents.documents.bp_minimums.short_description,
				eos_analog: documents.documents.bp_minimums.eos_analog,
				status: documents.documents.bp_minimums.status,
				url: 'https://resources.telosfoundation.io/governance_documents/Telos_Block_Producer_Minimum_Requirements_Adopted_2018-10-09.pdf'
			},
			{
				long_name: documents.documents.regarb_contract.long_name,
				short_name: documents.documents.regarb_contract.short_name,
				long_description: documents.documents.regarb_contract.long_description,
				short_description: documents.documents.regarb_contract.short_description,
				eos_analog: documents.documents.regarb_contract.eos_analog,
				status: documents.documents.regarb_contract.status,
				url: 'https://resources.telosfoundation.io/governance_documents/Telos_Regarb_Human-language_Contract_Adopted_2018-10-12.pdf'
			},
			{
				long_name: documents.documents.arbitrator_minimums.long_name,
				short_name: documents.documents.arbitrator_minimums.short_name,
				long_description: documents.documents.arbitrator_minimums.long_description,
				short_description: documents.documents.arbitrator_minimums.short_description,
				eos_analog: documents.documents.arbitrator_minimums.eos_analog,
				status: documents.documents.arbitrator_minimums.status,
				url: 'https://resources.telosfoundation.io/governance_documents/Telos_Blockchain_Network_Arbitrator_Minimum_Requirements_Adopted_2018-10-12.pdf'
			},
			{
				long_name: 'Network Data Protection Policy',
				short_name: 'Network Data Protection Policy',
				long_description: 'Data protection policy document for Telos Blockchain Network.',
				short_description: 'Data protection policy',
				eos_analog: 'None',
				status: 'Adopted',
				url: 'https://resources.telosfoundation.io/governance_documents/Telos_Blockchain_Network_Data_Protection_Policy_Adopted_2018-10-12.pdf'
			}
		];

		return (
			<div className='governance'>
				<Helmet>
					<title>Telos Governance</title>
				</Helmet>
				<ScrollAnimation
					animateOnce
					animateIn='fadeIn'
					duration={0.5}
				>
					<GovernanceIntro intro={intro} />
				</ScrollAnimation>
				<GovernanceDocuments
					heading={documents.heading}
					subheading={documents.subheading}
					governanceDocuments={governanceDocuments} />
				<ScrollAnimation
					animateOnce
					animateIn='fadeIn'
					duration={0.5}
				>
					<GovernanceTable
						table={table}
						governanceDocuments={governanceDocuments} />
				</ScrollAnimation>
			</div>
		);
	}
}

const GovernanceIntro = ({intro}) => {
	return (
		<section id='governance_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>{intro.heading}</h1>
						<h3>{intro.subheading}</h3>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const GovernanceDocuments = ({governanceDocuments, heading, subheading}) => {
	return (
		<section id='governance_documents'>
			<header>
				<h2>{heading}</h2>
			</header>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							<h3 className='text-center'>
								{subheading}
							</h3>
						</ScrollAnimation>
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
		<ScrollAnimation
			animateOnce
			animateIn='fadeInUp'
			duration={0.4}
		>
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
		</ScrollAnimation>
	);
};

const GovernanceTable = ({governanceDocuments, table}) => {
	return (
		<section id='governance_table'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h2 className='text-center'>{table.heading}</h2>
						<Table striped bordered responsive>
							<thead>
								<tr>
									<th>{table.table_headings.document}</th>
									<th>{table.table_headings.description}</th>
									<th>{table.table_headings.eos_analog}</th>
									<th>{table.table_headings.status}</th>
									<th>{table.table_headings.link}</th>
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