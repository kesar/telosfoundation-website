import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import {selectLanguage} from '../actions';
import {connect} from 'react-redux';

import axios from 'axios';

class App extends Component {

	componentDidMount(){
		//on initial mount, will check local storage for language setting.  If none found, default to english
		const localLanguage = window.localStorage.getItem('telos_language');
		if(localLanguage){
			this.props.selectLanguage(localLanguage);	
		}else{
			this.props.selectLanguage('en');
		}
	}

	render(){
		console.log(this.props.site_content);
		return (
			<div className='app'>
				<Header />
				<Body />
				<Footer />
			</div>
		);
	}
}

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, {selectLanguage})(App);