import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import '../../styles/faq.css';

class FAQPage extends Component {
	
	componentDidMount(){
		//go to top
		window.scrollTo(0, 0);
	}

	render(){
		const {faq_page} = this.props;
		return (
			<div className='faq'>
				<Helmet>
					<title>Telos FAQs</title>
					<meta name='description' content='Telos Foundation FAQ page.' />
				</Helmet>
				<FAQIntro intro={faq_page.intro} />
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

export default FAQPage;