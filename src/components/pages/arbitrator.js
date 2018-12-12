import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';
import triple_icon_desktop from '../../img/arbitrator/triple_icon.png';
import triple_icon_mobile from '../../img/arbitrator/triple_icon_horizontal.png';
import pdf_img from '../../img/download_pdf_icon.png';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import '../../styles/arbitrator.css';

//images
import marc_roger from '../../img/arbitrator/marc-roger.jpg';
import raul_sepulveda from '../../img/arbitrator/Raul Vidal y Sepulveda.jpg';
import roberto_corretjer from '../../img/arbitrator/Roberto Corretjer.png';
import moises_raba from '../../img/arbitrator/moises_raba.png';
import mark_blank from '../../img/arbitrator/mark_blankenship.jpeg';
import fred_brown from '../../img/arbitrator/william_fred_brown.jpg';
import jd_ressetar from '../../img/arbitrator/jd_ressetar.png';

const arbitratorPortraits = [
	marc_roger,
	roberto_corretjer,
	raul_sepulveda,
	moises_raba,
	mark_blank,
	fred_brown,
	jd_ressetar
];

//email template for contact link
const arbitratorMail = {
	address: 'hello@telosfoundation.io',
	subject: 'Telos Arbitrator candidate',
	body: 'Dear Members of the Telos Network,%0D%0A%0D%0AI am a legal professional who is interested in joining the Telos Network as an Arbitrator. Please send me more information about the role requirements, selection process, contract terms and compensation.%0D%0A%0D%0AThank you,%0D%0A%0D%0A[Signature]'
};

class Arbitrator extends Component {

	componentDidMount(){
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {arbitrators_page} = this.props;
		return (
			<div className='arbitrators'>
				<Helmet>
					<title>Telos Arbitrator Program</title>
					<meta name="description" content="The Telos Network is the world’s first governed blockchain with arbitrators elected by its members. We are looking for legal professionals from around the world to help us build this system into the model for all future blockchain governance and arbitration." />
				</Helmet>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<ArbitratorIntro intro={arbitrators_page.intro} documents={arbitrators_page.documents} contact={arbitrators_page.contact} />
							<ArbitratorCandidates candidate_section={arbitrators_page.candidate_section} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const ArbitratorIntro = ({intro, documents, contact}) => {
	const {address, subject, body} = arbitratorMail;
	return (
		<section id='arbitrator_intro'>
			<Row>
				<Col md={12}>
					<ScrollAnimation
						animateOnce
						animateIn='fadeIn'
						duration={0.5}
					>
						<h1>{intro.heading}</h1>
						<img src={triple_icon_mobile} alt='' className='triple_icon_mobile' />
					</ScrollAnimation>
					<Row>
						<Col sm={2}>
							<ScrollAnimation
								animateOnce
								animateIn='fadeIn'
								duration={0.5}
							>
								<img src={triple_icon_desktop} alt='' className='triple_icon_desktop' />
							</ScrollAnimation>
						</Col>
						<Col sm={10}>
							<ScrollAnimation
								animateOnce
								animateIn='fadeIn'
								duration={0.5}
							>
								<section>
									{intro.body.map((par, i) => {
										return (
											<div className='intro_row' key={i}>
												<p>{par}</p>
											</div>
										);
									})}
								</section>
							</ScrollAnimation>
							<section className='intro_downloads'>
								{documents.map((doc, i) => {
									return (
										<ScrollAnimation
											animateOnce
											animateIn='fadeInUp'
											duration={0.4}
										>
											<ArbitratorDocument
												key={i}
												name={doc.title}
												description={doc.description}
												url={doc.url} />
										</ScrollAnimation>
									);
								})}
							</section>
						</Col>
					</Row>
					

					<div className='arbitrator_intro_contact'>
						<ScrollAnimation
							animateOnce
							animateIn='fadeIn'
							duration={0.5}
						>
							<h3>{contact.heading}</h3>
							<a href={`mailto:${address}?subject=${subject}&body=${body}`} className='btn btn-lg btn-primary'>{contact.button_text}</a>
						</ScrollAnimation>
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorDocument = (props) => {
	return (
		<div className='arbitrator_document_container'>
			<div className='arbitrator_document'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.name}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url} target='_blank' rel='noopener noreferrer'>
				<img src={pdf_img} alt='pdf download icon' className='arbitrator_download_icon' /> 
			</a>
		</div> 
	);
};

const ArbitratorCandidates = ({candidate_section}) => {
	return (
		<section id='arbitrator_candidates'>
			<Row>
				<Col md={12}>
					<ScrollAnimation
						animateOnce
						animateIn='fadeIn'
						duration={0.5}
						delay={250}
					>
						<h2>{candidate_section.heading}</h2>
					</ScrollAnimation>
					<hr />
					<div className='candidate_list'>
						{
							candidate_section.candidates.map((arb, i) => {
								return (
									<ScrollAnimation
										animateOnce
										animateIn='fadeInUp'
										duration={0.4}
									>
										<ArbitratorCandidate
											key={i}
											cand_name={arb.name}
											cand_vote_name={arb.vote_name}
											cand_description={arb.description}
											cand_statement={arb.statement}
											cand_image={arbitratorPortraits[i]}
											cand_languages={arb.languages}
											cand_country={arb.country}
											languages_heading={candidate_section.languages_heading}
											country_heading={candidate_section.country_heading}
											vote_heading={candidate_section.vote_heading} />
									</ScrollAnimation>
								);
							})
						}
					</div>
				</Col>
			</Row>
		</section>
	);
};

const ArbitratorCandidate = (
		{
			cand_name,
			cand_vote_name,
			cand_description,
			cand_statement,
			cand_image,
			cand_languages,
			cand_country,
			languages_heading,
			country_heading,
			vote_heading
		}
	) => {

	const getDescription = () => {
		return cand_description ? <h4>{cand_description}</h4> : '';
	};

	const getCountry = () => {
		return cand_country ? <p>{country_heading}: &nbsp;&nbsp;{cand_country}</p> : '';
	};

	const getLanguages = () => {
		return cand_languages ? <p>{languages_heading}: &nbsp;&nbsp;{cand_languages.join(', ')}</p> : '';
	};

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
						{getDescription()}
						{cand_statement.map((par, i) => <p key={i} dangerouslySetInnerHTML={{__html: par}} />)}
						{getLanguages()}
						{getCountry()}
						<p>{vote_heading}: <span className='candidate_vote_name'>{cand_vote_name}</span></p>
					</div>
				</Col>
			</Row>
		</div>
	);
};

export default withRouter(connect(null, {selectLanguage})(Arbitrator));