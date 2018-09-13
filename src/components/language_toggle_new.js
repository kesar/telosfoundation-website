import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions';
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

class LanguageToggle extends Component {
	constructor(){
		super();
		this.state = {
			languageToggleOpen: false
		};
	}

	render(){
		return (
			<li className='language_toggle_li'>
				
			</li>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, {selectLanguage})(LanguageToggle);