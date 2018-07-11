import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectLanguage} from '../actions';
import '../styles/language_toggle.css';

class LanguageToggle extends Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		e.preventDefault();
		this.props.selectLanguage(e.target.value);
		//write to local storage
		window.localStorage.setItem('telos_language', e.target.value);
	}

	render(){
		if(!this.props.site_content) return <div></div>;
		return (
			<li className='language_toggle_li'>
				<select
					className='language_toggle'
					onChange={this.handleChange}
					value={this.props.site_content.language}>
					<option value='en'>ENGLISH</option>
					<option value='pt-br'>PORTUGESE-BR</option>
				</select>
			</li>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, {selectLanguage})(LanguageToggle);