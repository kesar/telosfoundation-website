import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Helmet} from 'react-helmet';

import '../../styles/faq.css';

const faqs = [
	{
		question: 'question?',
		answer: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lorem in eros fermentum ultrices sagittis at dui. Phasellus in neque aliquet odio rutrum finibus. Cras turpis diam, posuere et cursus sed',
			'<a href="#">Link goes here.</a>'
		]
	},
	{
		question: 'question?',
		answer: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lorem in eros fermentum ultrices sagittis at dui. Phasellus in neque aliquet odio rutrum finibus. Cras turpis diam, posuere et cursus sed',
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lorem in eros fermentum ultrices sagittis at dui. Phasellus in neque aliquet odio rutrum finibus. Cras turpis diam, posuere et cursus sed'
		]
	},
	{
		question: 'question?',
		answer: [
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae lorem in eros fermentum ultrices sagittis at dui. Phasellus in neque aliquet odio rutrum finibus. Cras turpis diam, posuere et cursus sed'
		]
	},
];

const FAQ_Page = () => {
	return (
		<div className='faq'>
			<Helmet>
				<title>Telos FAQs</title>
				<meta name='description' content='Telos Foundation FAQ page.' />
			</Helmet>
			<FAQ_Intro />
			<FAQ_Content />
		</div>
	);
};

const FAQ_Intro = () => {
	return (
		<section id='faq_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>Frequently Asked Questions</h1>
						<h2>faqs subheading will go here.</h2>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const FAQ_Content = () => {
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