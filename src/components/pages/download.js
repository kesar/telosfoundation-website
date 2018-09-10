import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import sqrl_logo from '../../img/SQRL_Logo_1024px.png';
import pdf_img from '../../img/white_paper_pdf_solid.png';
//white papers
import {WHITE_PAPER_ENGLISH, WHITE_PAPER_KOREAN} from '../../config/constants';
import '../../styles/download.css';

const sg_en = 'http://resources.telosfoundation.io/Telos_Style Guide_2018.pdf';

const Download = ({language}) => {
	return (
		<div className='download_page'>
			<Grid>
				<Row>
					<Col md={12}>
						<div className='download_intro'>
							<h1>Downloads</h1>
							<Row>
								<Col md={10} mdOffset={1}>
									<h2>Download all the documents and tools that you need to join the Telos Network.</h2>
								</Col>
							</Row>
						</div>
						<Wallets />
						<Documents language={language} />
					</Col>
				</Row>
			</Grid>
		</div>
	);
};

const Wallets = () => {
	return (
		<section id='download_wallets'>
			<h2>Telos Wallets</h2>
			<hr />
			<Row>
				<Col md={10} mdOffset={1}>
					<h3>Choose a wallet to store and trade your TLOS tokens.</h3>
				</Col>
				<Col sm={5}>
					<img src={sqrl_logo} alt='squirrel wallet logo' className='img-responsive' />
				</Col>
				<Col sm={7}>
					<div className='squirrel_content'>
						<p>Sqrl is a fully functional light wallet designed for the TELOS blockchain. This application can be used to connect to a remote TELOS API endpoint to perform producer voting actions and common wallet commands.</p>
						<a 
							href='https://github.com/Telos-Foundation/Sqrl' 
							className='btn btn-lg btn-primary' 
							target='_blank' 
							rel='noopener noreferrer'
						>
							DOWNLOAD
						</a>
					</div>
				</Col>
			</Row>
		</section>
	);
};

const Documents = ({language}) => {
	let wp_url;
	switch(language){
		case 'en':
			wp_url = WHITE_PAPER_ENGLISH;
			break;
		case 'korean':
			wp_url = WHITE_PAPER_KOREAN;
			break;
		default:
			wp_url = WHITE_PAPER_ENGLISH;
			break;
	}

	return (
		<section id='download_documents'>
			<h2>Documents</h2>
			<hr />
			<Row>
				<Col md={8} mdOffset={2}>
					<div className='download_document_container'>
						<div className='download_document'>
							<a href={wp_url}>White Paper</a>
							<p>We are out to create the best blockchain ever - read the white paper to judge for yourself. Join us and build on Telos.</p>
						</div>
						<a href={wp_url}>
							<img src={pdf_img} alt='' />
						</a>
					</div>
					<div className='download_document_container'>
						<div className='download_document'>
							<a href={sg_en}>Telos Style Guide</a>
							<p>A style guide featuring Telos Foundation logos, color palettes and fonts for brand use.</p>
						</div>
						<a href={sg_en}>
							<img src={pdf_img} alt='' />
						</a>
					</div>
				</Col>
			</Row>
		</section>
	);
};

export default Download;