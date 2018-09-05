import React from 'react';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import sqrl_logo from '../../img/SQRL_Logo_1024px.png';
import pdf_img from '../../img/white_paper_pdf_solid.png';
import '../../styles/download.css';

const wp_en = 'http://resources.telosfoundation.io/telos_white_paper_8_15_18.pdf';
const sg_en = 'http://resources.telosfoundation.io/Telos_Style Guide_2018.pdf';

const Download = () => {
	return (
		<div className='download_page'>
			<Grid>
				<Row>
					<Col md={12}>
						<div className='download_intro'>
							<h1>Downloads</h1>
							<h2>Below you will find download links for Telos compatible wallets, and PDFs for the Telos Whitepaper, Telos Style Guide, as well as the Telos Governance Documents.</h2>
						</div>
						<Wallets />
						<Documents />
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
				<Col sm={5}>
					<img src={sqrl_logo} alt='squirrel wallet logo' className='img-responsive' />
				</Col>
				<Col sm={7}>
					<div className='squirrel_content'>
						<p>Fill your cheeks with Telos using our Squirrel wallet.  Need the real copy later.</p>
						<Button
							bsStyle='primary'
							bsSize='large'>
							DOWNLOAD
						</Button>
					</div>
				</Col>
			</Row>
		</section>
	);
};

const Documents = () => {
	return (
		<section id='download_documents'>
			<h2>Documents</h2>
			<hr />
			<Row>
				<Col md={8} mdOffset={2}>
					<div className='download_document_container'>
						<div className='download_document'>
							<a href={wp_en}>White Paper</a>
							<p>Read the white paper to judge for yourself.  We are out to create the best blockchain ever.  Join us and build on Telos.</p>
						</div>
						<a href={wp_en}>
							<img src={pdf_img} alt='' />
						</a>
					</div>
					<div className='download_document_container'>
						<div className='download_document'>
							<a href={sg_en}>Telos Style Guide</a>
							<p>A style guide featuring logos, color pallets, and fonts used for the Telos Foundation</p>
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