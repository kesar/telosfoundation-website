import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import meeting_icon from '../../img/meeting_icon.png';
import gavel_icon from '../../img/gavel_icon.png';

import '../../styles/arbitrator.css';

//images
import face_placeholder from '../../img/arbitrator/placeholder-female.png';

const arbitratorCandidates = [
	{
		cand_name: 'Michael Smith, esq.',
		cand_vote_name: 'arbmikesmith',
		cand_description: 'Licensed Attorney, Maine Bar Association, USA.',
		cand_statement: 'I am passionate about law and blockchain. Serving as one of the first arbitrators on Telos would allow me to bridge these interests. I graduated from the University of Vermont Law School where I served on law review. I work with a number of computer software companies in my practice. I have been involved in blockchain since late 2016 as an investor and POS staker. I admit that this area is still somewhat new to me but I will strive to be honest and fair, to hear from all parties in a case, and to seek to thoroughly understand the technical issues involved in any case before ruling.',
		cand_image: face_placeholder
	}
];

//email template for contact link
const arbitratorMail = {
	address: 'hello@telosfoundation.io',
	subject: 'Telos Arbitrator candidate',
	body: 'Dear Members of the Telos Network,%0D%0A%0D%0AI am a legal professional who is interested in joining the Telos Network as an Arbitrator. Please send me more information about the role requirements, selection process, contract terms and compensation.%0D%0A%0D%0AThank you,%0D%0A%0D%0A[Signature]'
};

const ARBITRATION_DOCUMENT = 'http://resources.telosfoundation.io/Telos Network Arbitration Process.pdf';

const Arbitrator = () => {
	return (
		<div className='arbitrators'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<ArbitratorIntro />
						<ArbitratorCandidates />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

const ArbitratorIntro = () => {
	const {address, subject, body} = arbitratorMail;
	return (
		<section id='arbitrator_intro'>
			<Row>
				<Col md={12}>
					<h1>Network Arbitrator Program</h1>
					
					<div className='intro_row'>
						<img src={gavel_icon} alt='' className='gavel_icon' />
						<p>The Telos Network is the world’s first governed blockchain with arbitrators elected by its members. We are looking for legal professionals from around the world to help us build this system into the model for all future blockchain governance and arbitration.</p>
					</div>
					<div className='intro_row'>
						<p>Arbitrators may be individuals, teams, or firms who nominate themselves by executing the regarbitrator contract. Arbitrators are selected by the votes of TLOS token-holders and are paid arbitration fees in TLOS. At launch, this page will hold the campaign statements of every arbitrator candidate to facilitate voting. At present, the site shows sample statements and statements from any who notify us of their intent to campaign.</p>
						<img src={meeting_icon} alt='' className='meeting_icon' />
					</div>
					
					<p>Arbitration on Telos follows the process documented in the <a href={ARBITRATION_DOCUMENT} target='_blank' rel='noopener noreferrer'>Telos Arbitration Process Document</a>.</p>
					<p>Arbitrators must meet the <a href='#' target='_blank' rel='noopener noreferrer'>Telos Arbitrators Minimum Requirements</a>.</p>
					<p>Arbitrators agree to the terms of the <a href='#' target='_blank' rel='noopener noreferrer'>regarbitrator human-language contract</a>.</p>
					<div className='arbitrator_intro_contact'>
						<h3>If you are interested in becoming an arbitrator on the Telos Network, please contact us.</h3>
						<a href={`mailto:${address}?subject=${subject}&body=${body}`} className='btn btn-lg btn-primary'>CONTACT US</a>
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorCandidates = () => {
	return (
		<section id='arbitrator_candidates'>
			<Row>
				<Col md={12}>
					<h2>Candidates</h2>
					<hr />
					<div className='candidate_list'>
						{
							arbitratorCandidates.map(arb => {
								return (
									<ArbitratorCandidate
										cand_name={arb.cand_name}
										cand_vote_name={arb.cand_vote_name}
										cand_description={arb.cand_description}
										cand_statement={arb.cand_statement}
										cand_image={arb.cand_image} />
								);
							})
						}
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorCandidate = ({cand_name, cand_vote_name, cand_description, cand_statement, cand_image}) => {
	return (
		<div className='arbitrator_candidate'>
			<Row>
				<Col md={3} sm={4}>
					<div className='arbitrator_candidate_image_container'>
						<img src={cand_image} alt={cand_name} className='arbitrator_candidate_image' />
					</div>
				</Col>
				<Col md={9} sm={8}>
					<div className='arbitrator_candidate_content'>
						<h3>{cand_name}</h3>
						<h4>{cand_description}</h4>
						<p>{cand_statement}</p>
						<p>Vote for: <span className='candidate_vote_name'>{cand_vote_name}</span></p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default Arbitrator;