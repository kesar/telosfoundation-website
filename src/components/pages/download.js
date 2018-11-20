import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import BannerModal from '../modals/banner_modal';
import {Helmet} from 'react-helmet';
import ScrollAnimation from 'react-animate-on-scroll';

import sqrl_logo from '../../img/SQRL_Logo_1024px.png';
import pdf_img from '../../img/download_pdf_icon.png';
import zip_img from '../../img/download_zip_icon.png';

import banner_one from '../../img/banners/Splash Banner_Telos-Medium_generic_1_display.jpg';
import banner_two from '../../img/banners/Splash Banner_Telos-Medium_generic_2_display.jpg';
import banner_three from '../../img/banners/Splash Banner_Telos-Medium_generic_3_display.jpg';
import banner_four from '../../img/banners/Splash Banner_Telos-Medium_generic_4_display.jpg';
import banner_five from '../../img/banners/Splash Banner_Telos-Medium_generic_5_display.jpg';
import banner_six from '../../img/banners/Splash Banner_Telos-Medium_generic_6_display.jpg';

//white papers
import {
	WHITE_PAPER_ENGLISH,
	WHITE_PAPER_KOREAN,
	WHITE_PAPER_CHINESE,
	WHITE_PAPER_RUSSIAN,
	WHITE_PAPER_PORTUGESE
} from '../../config/constants';
import '../../styles/download.css';

const sg_en = 'https://resources.telosfoundation.io/Telos_Style Guide_2018.pdf';
//I don't know whether this will ever get translated
const press_kit_en = 'https://resources.telosfoundation.io/presskit_master/TELOS_press_kit.pdf';

const splashBanners = [
	{
		name: 'banner one',
		image: banner_one,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_1.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_1.jpg'
	},
	{
		name: 'banner two',
		image: banner_two,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_2.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_2.jpg'
	},
	{
		name: 'banner three',
		image: banner_three,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_3.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_3.jpg'
	},
	{
		name: 'banner four',
		image: banner_four,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_4.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_4.jpg'
	},
	{
		name: 'banner five',
		image: banner_five,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_5.jpg',
		downloadName: 'Splash Banner_Telos-Medium_generic_5.jpg'
	},
	{
		name: 'banner six',
		image: banner_six,
		download: 'https://resources.telosfoundation.io/images/banners/Splash Banner_Telos-Medium_generic_6.jpg',
		downloadName: 'Spash Banner_Telos-Medium_generic_6.jpg'
	}
];

class Download extends Component {
	componentDidMount(){
		window.scrollTo(0, 0);
	}

	render(){
		const {language, downloads_page} = this.props;
		return (
			<div className='download_page'>
				<Helmet>
					<title>Telos Downloads</title>
					<meta name="description" content="Download all the documents and tools that you need to join the Telos Network." />
				</Helmet>
				<Grid>
					<Row>
						<Col md={12}>
							<div className='download_intro'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.4}
								>
									<h1>{downloads_page.intro.heading}</h1>
									<Row>
										<Col md={10} mdOffset={1}>
											<h2>{downloads_page.intro.subheading}</h2>
										</Col>
									</Row>
								</ScrollAnimation>
							</div>
							<Wallets wallets={downloads_page.wallets} />
							<Documents documents={downloads_page.documents} banners={downloads_page.banners} language={language} />
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const Wallets = ({wallets}) => {
	return (
		<section id='download_wallets'>
			<ScrollAnimation
				animateOnce
				animateIn='fadeIn'
				duration={0.4}
				delay={250}
			>
				<h2>{wallets.heading}</h2>
				<hr />
			</ScrollAnimation>
			<Row>
				<Col md={10} mdOffset={1}>
					<ScrollAnimation
						animateOnce
						animateIn='fadeIn'
						duration={0.4}
					>
						<h3>{wallets.subheading}</h3>
					</ScrollAnimation>
				</Col>
				<Col sm={5}>
					<ScrollAnimation
						animateOnce
						animateIn='fadeInUp'
						duration={0.4}
					>
						<img src={sqrl_logo} alt='squirrel wallet logo' className='img-responsive' />
					</ScrollAnimation>
				</Col>
				<Col sm={7}> 
					<div className='squirrel_content'>
						<ScrollAnimation
							animateOnce
							animateIn='fadeInUp'
							duration={0.4}
						>
							<p>{wallets.sqrl_description}</p>
						</ScrollAnimation>
						<ul className='download_buttons'>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.2}
								>
									<a
										href='https://github.com/Telos-Foundation/Sqrl/releases'
										className='btn btn-primary'
									>
										<i className='fa fa-linux'></i>  {wallets.download}
									</a>
								</ScrollAnimation>
							</li>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.2}
									delay={50}
								>
									<a
										href='https://github.com/Telos-Foundation/Sqrl/releases'
										className='btn btn-primary'
									>
										<i className='fa fa-apple'></i>  {wallets.download}
									</a>
								</ScrollAnimation>
							</li>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.2}
									delay={100}
								>
									<a
										href='https://github.com/Telos-Foundation/Sqrl/releases'
										className='btn btn-primary'
									>
										<i className='fa fa-windows'></i>  {wallets.download}
									</a>
								</ScrollAnimation>
							</li>
							<li>
								<ScrollAnimation
									animateOnce
									animateIn='fadeIn'
									duration={0.2}
									delay={150}
								>
									<a 
										href='https://github.com/Telos-Foundation/Sqrl' 
										className='btn btn-primary' 
										target='_blank' 
										rel='noopener noreferrer'
									>
										<i className='fa fa-github'></i>  {wallets.source}
									</a>
								</ScrollAnimation>
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
		const {language, documents, banners} = this.props;

		let wp_url;
		switch(language){
			case 'en':
				wp_url = WHITE_PAPER_ENGLISH;
				break;
			case 'korean':
				wp_url = WHITE_PAPER_KOREAN;
				break;
			case 'mandarin':
				wp_url = WHITE_PAPER_CHINESE;
				break;
			case 'russian':
				wp_url = WHITE_PAPER_RUSSIAN;
				break;
			case 'pt-br':
				wp_url = WHITE_PAPER_PORTUGESE;
				break;
			default:
				wp_url = WHITE_PAPER_ENGLISH;
				break;
		}

		const downloadDocuments = [
			{
				document_type: 'pdf',
				url: wp_url,
				link_text: documents.white_paper.link,
				description: documents.white_paper.description
			},
			{
				document_type: 'pdf',
				url: press_kit_en,
				link_text: documents.press_kit.link,
				description: documents.press_kit.description
			},
			{
				document_type: 'pdf',
				url: sg_en,
				link_text: documents.style_guide.link,
				description: documents.style_guide.description
			},
			{
				document_type: 'zip',
				url: 'https://resources.telosfoundation.io/Telos_Logos_and_Icons.zip',
				link_text: documents.logos_icons.link,
				description: documents.logos_icons.description
			}
		];

		return (
			<section id='download_documents'>
				<ScrollAnimation
					animateOnce
					animateIn='fadeInUp'
					duration={0.4}
				>
					<h2>{documents.heading}</h2>
					<hr />
				</ScrollAnimation>
				<Row>
					<Col md={8} mdOffset={2}>
						{
							downloadDocuments.map((doc, i) => {
								if(doc.document_type === 'pdf'){
									return (
										<ScrollAnimation
											key={i}
											animateOnce
											animateIn='fadeInUp'
											duration={0.4}
											delay={i * 50}
										>
											<DownloadDocumentPDF
												url={doc.url}
												link_text={doc.link_text}
												description={doc.description} />
										</ScrollAnimation>
									);
								}else{
									//right now we only have pdf and zip, but might have others in the future.
									return (
										<ScrollAnimation
											key={i}
											animateOnce
											animateIn='fadeInUp'
											duration={0.4}
											delay={i * 50}
										>
											<DownloadDocumentZIP
												url={doc.url}
												link_text={doc.link_text}
												description={doc.description} />
										</ScrollAnimation>
									);
								}
							})
						}

						<div className='download_banner_container'>
							<div className='download_banner_description'>
								<ScrollAnimation
									animateOnce
									animateIn='fadeInUp'
									duration={0.4}
								>
									<h3>{banners.heading}</h3>
									<p>{banners.subheading}</p>
								</ScrollAnimation>
							</div>
							<Row>
								{
									splashBanners.map((banner, i) => {
										return (
											<Col sm={6} key={i}>
												<ScrollAnimation
													animateOnce
													animateIn='fadeIn'
													duration={0.4}
													delay={i * 10 + 50}
												>
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
												</ScrollAnimation>
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

const DownloadDocumentPDF = (props) => {
	return (
		<div className='download_document_container'>
			<div className='download_document'>
				<a href={props.url} target='_blank' rel='noopener noreferrer'>{props.link_text}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url} target='_blank' rel='noopener noreferrer'>
				<img src={pdf_img} alt='pdf download icon' className='download_icon' /> 
			</a>
		</div>
	);
};

const DownloadDocumentZIP = (props) => {
	return (
		<div className='download_document_container'>
			<div className='download_document'>
				<a href={props.url}>{props.link_text}</a>
				<p>{props.description}</p>
			</div>
			<a href={props.url}>
				<img src={zip_img} alt='zip download icon' className='download_icon' />
			</a>
		</div>
	);
};

export default Download;