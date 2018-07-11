import React from 'react';
import FrontPage from './pages/front_page';
import {connect} from 'react-redux';
import '../styles/body.css';

const Body = ({site_content}) => {
	if(!site_content) return <div>waiting...</div>;
	return (
		<main className='main'>
			<FrontPage landing_page={site_content.landing_page} />
		</main>
	);
};

function mapStateToProps(state){
	return {site_content: state.site_content};
}

export default connect(mapStateToProps, null)(Body);