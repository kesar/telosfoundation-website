import React, {Component} from 'react';
import {Grid, Row, Col, ButtonGroup} from 'react-bootstrap';
import BannerModal from '../modals/banner_modal';
import sqrl_logo from '../../img/SQRL_Logo_1024px.png';
import pdf_img from '../../img/download_pdf_icon.png';
import zip_img from '../../img/download_zip_icon.png';

import banner_one from '../../img/banners/Splash Banner_Telos-Medium_generic_1_display.jpg';
import banner_two from '../../img/banners/Splash Banner_Telos-Medium_generic_2_display.jpg';
import banner_three from '../../img/banners/Splash Banner_Telos-Medium_generic_3_display.jpg';
import banner_four from '../../img/banners/Splash Banner_Telos-Medium_generic_4_display.jpg';

//white papers
import {WHITE_PAPER_ENGLISH, WHITE_PAPER_KOREAN} from '../../config/constants';
import '../../styles/download.css';

const sg_en = 'http://resources.telosfoundation.io/Telos_Style Guide_2018.pdf';

const splashBanners = [
	{
		name: 'banner one',
		image: banner_one,
		download: 'http://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_1.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_1.jpg'
	},
	{
		name: 'banner two',
		image: banner_two,
		download: 'http://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_2.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_2.jpg'
	},
	{
		name: 'banner three',
		image: banner_three,
		download: 'http://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_3.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_3.jpg'
	},
	{
		name: 'banner four',
		image: banner_four,
		download: 'http://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_4.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_4.jpg'
	}
];

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
						<ul className='download_buttons'>
							<li>
								<a
									href='https://github.com/Telos-Foundation/Sqrl/archive/0.5.2.tar.gz'
									className='btn btn-primary'
								>
									<i className='fa fa-linux'></i>  DOWNLOAD
								</a>
							</li>
							<li>
								<a
									href='https://github.com/Telos-Foundation/Sqrl/releases/download/0.5.2/mac-Sqrl-0.5.2.dmg'
									className='btn btn-primary'
								>
									<i className='fa fa-apple'></i>  DOWNLOAD
								</a>
							</li>
							<li>
								<a
									href='https://github.com/Telos-Foundation/Sqrl/releases/download/0.5.2/win-Sqrl-0.5.2.exe'
									className='btn btn-primary'
								>
									<i className='fa fa-windows'></i>  DOWNLOAD
								</a>
							</li>
							<li>
								<a 
									href='https://github.com/Telos-Foundation/Sqrl' 
									className='btn btn-primary' 
									target='_blank' 
									rel='noopener noreferrer'
								>
									<i className='fa fa-github'></i>  SOURCE
								</a>
							</li>
						</ul>
					</div>
				</Col>
			</Row>
		</section>
	);
};

class Documents extends Component {
	constructor(props){
		super(props);
		this.state = {
			downloadModalOpen: false,
			displayBanner: '',
			downloadBanner: '',
			downloadBannerName: ''
		};
	}

	render(){
		const {language} = this.props;

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
								<img src={pdf_img} alt='' className='download_icon' />
							</a>
						</div>
						<div className='download_document_container'>
							<div className='download_document'>
								<a href={sg_en}>Telos Style Guide</a>
								<p>A style guide featuring Telos Foundation logos, color palettes and fonts for brand use.</p>
							</div>
							<a href={sg_en}>
								<img src={pdf_img} alt='' className='download_icon' />
							</a>
						</div>
						<div className='download_document_container'>
							<div className='download_document'>
								<a href='http://resources.telosfoundation.io/Telos_Logos_and_Icons.zip'>Telos Logo and Icon</a>
								<p>A package containing an assortment of file sizes and types for the Telos logo and icon.</p>
							</div>
							<a href='http://resources.telosfoundation.io/Telos_Logos_and_Icons.zip'>
								<img src={zip_img} alt='' className='download_icon' />
							</a>
						</div>
						<div className='download_banner_container'>
							<div className='download_banner_description'>
								<h3>Telos Article Splash Banners</h3>
								<p>Splash Banner art for use in online articles about Telos.</p>
							</div>
							<Row>
								{
									splashBanners.map(banner => {
										return (
											<Col sm={6}>
												<img
													src={banner.image}
													alt={banner.name}
													className='download_banner'
													onClick={e => {
														e.preventDefault();
														this.setState({
															downloadModalOpen: true,
															displayBanner: banner.image,
															downloadBanner: banner.download,
															downloadBannerName: banner.downloadName
														});
													}} />
											</Col>
										);
									})
								}
							</Row>
						</div>
					</Col>
				</Row>
				<BannerModal
					show={this.state.downloadModalOpen}
					display_banner={this.state.displayBanner}
					download_banner={this.state.downloadBanner}
					download_banner_name={this.state.downloadBannerName}
					onHide={() => this.setState({downloadModalOpen: false})} />
			</section>
		);
	}
}

export default Download;