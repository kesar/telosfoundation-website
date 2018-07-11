import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import {selectLanguage} from '../actions/index';
import {connect} from 'react-redux';

import axios from 'axios';

class App extends Component {

	componentDidMount(){
		selectLanguage('english');
	}

	render(){
		console.log(this.props);
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