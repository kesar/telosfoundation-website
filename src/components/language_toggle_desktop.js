import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions';
import {CSSTransition} from 'react-transition-group';
import english_flag from '../img/flags/en.png';
import brazil_flag from '../img/flags/pt-br.png';
import china_flag from '../img/flags/china.png';
import spain_flag from '../img/flags/spain.png';
import korea_flag from '../img/flags/korea.png';
import russia_flag from '../img/flags/russia.png';
import france_flag from '../img/flags/france.png';
import germany_flag from '../img/flags/germany.png';
import indonesia_flag from '../img/flags/indonesia.png';
import '../styles/language_toggle_new.css';

const languageOptions = [
	{
		value: 'en',
		name: 'ENGLISH',
		flag: english_flag
	},
	{
		value: 'pt-br',
		name: 'PORTUGUÊS',
		flag: brazil_flag
	},
	{
		value: 'mandarin',
		name: '中文',
		flag: china_flag
	},
	{
		value: 'spanish',
		name: 'ESPAÑOL',
		flag: spain_flag
	},
	{
		value: 'korean',
		name: '한국어',
		flag: korea_flag
	},
	{
		value: 'russian',
		name: 'РУССКИЙ',
		flag: russia_flag
	},
	{
		value: 'french',
		name: 'FRANÇAIS',
		flag: france_flag
	},
	{
		value: 'german',
		name: 'DEUTSCHE',
		flag: germany_flag
	},
	{
		value: 'indonesian',
		name: 'BAHASA INDONESIA',
		flag: indonesia_flag
	}
];

class LanguageToggleDesktop extends Component {
	constructor(){
		super();
		this.state = {
			languageToggleOpen: false
		};
	}

	render(){
		if(!this.props.site_content){
			return <div></div>;
		}

		const {language} = this.props.site_content;
		//get language object from array
		const currentLanguage = languageOptions[languageOptions.findIndex(item => item.value === language)];

		const languageMenu = languageOptions.filter(lng => lng.value !== language).map((lang, i) => {
			return (
				<div 
					className='language_option_container'
					key={i}
					onClick={e => {
						e.preventDefault();
						this.props.selectLanguage(lang.value);
						//write to local storage
						window.localStorage.setItem('telos_language', lang.value);
						this.setState({languageToggleOpen: false});
					}}
				>
					<span className='language_option'>{lang.name}</span>
					<img src={lang.flag} alt={`${lang.value} flag`} /> 
				</div>
			);
		});

		return (
			<li
				className='language_toggle_li_desktop'
				tabIndex={1}
				onBlur={() => this.setState({languageToggleOpen: false})}
			>
				<span
					className='selected_language'
					onClick={() => this.setState({languageToggleOpen: !this.state.languageToggleOpen})}
					style={{backgroundImage: `url(${currentLanguage.flag})`}}
				>
					{currentLanguage.name}
				</span>
				<CSSTransition
					in={this.state.languageToggleOpen}
					timeout={250}
					unmountOnExit
					classNames='languageMenu'
				>
					<div className='language_menu'>
						{languageMenu}
					</div>
				</CSSTransition>
			</li>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, {selectLanguage})(LanguageToggleDesktop);