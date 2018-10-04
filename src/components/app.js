import React, {Component} from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import {selectLanguage, toggleSideNav} from '../actions';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import SideNavigation from './side_navigation';
import {Helmet} from 'react-helmet';
import '../styles/app.css';

class App extends Component {

	componentDidMount(){
		//on initial mount, will check local storage for language setting.  If none found, default to english
		const localLanguage = window.localStorage.getItem('telos_language');
		if(localLanguage){
			this.props.selectLanguage(localLanguage);	
		}else{
			this.props.selectLanguage('en');
		}

		this.props.toggleSideNav(false);
	}

	render(){
		return (
			<Router>
				<div className={`app ${this.props.side_nav_open ? 'side_nav_open' : ''}`}>
					<Helmet>
						<title>Telos Foundation</title>
					</Helmet>
					<Header />
					<Body />
					<Footer />
					<SideNavigation />
				</div>
			</Router>
		);
	}
}

function mapStateToProps(state){
	return {
		site_content: state.site_content,
		side_nav_open: state.side_nav_open
	};
}

export default connect(mapStateToProps, {selectLanguage, toggleSideNav})(App);