import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {selectLanguage} from '../../actions';

import '../../styles/faq.css';

class FAQPage extends Component {
	
	componentDidMount(){
		//go to top
		window.scrollTo(0, 0);

		if(this.props.match.params.language){
			this.props.selectLanguage(this.props.match.params.language);
		}
	}

	render(){
		const {faq_page} = this.props;
		return (
			<div className='faq'>
				<Helmet>
					<title>Telos FAQs</title>
					<meta name='description' content='Telos Foundation FAQ page.' />
				</Helmet>
				<ScrollAnimation
					animateOnce
					animateIn='fadeIn'
					duration={0.5}
				>
					<FAQIntro intro={faq_page.intro} />
				</ScrollAnimation>
				<FAQContent faqs={faq_page.faqs} />
			</div>
		);
	}	
}

const FAQIntro = ({intro}) => {
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

const FAQContent = ({faqs}) => {
	return (
		<section id='faq_content'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						{
							faqs.map((faq, i) => {
								return (
									<div className='question_container' key={i}>
										<ScrollAnimation
											animateOnce
											animateIn='fadeInUp'
											duration={0.4}
										>
											<p className='question'>Q: &nbsp;{faq.question}</p>
											{
												faq.answer.map((ans, j) => {
													if(j === 0) return <p key={j} className='answer'><span className='a'>A:</span> &nbsp;<span dangerouslySetInnerHTML={{__html: ans}}></span></p>;
													return <p key={j} className='answer' dangerouslySetInnerHTML={{__html: ans}}></p>;
												})
											}
										</ScrollAnimation>
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

export default withRouter(connect(null, {selectLanguage})(FAQPage));