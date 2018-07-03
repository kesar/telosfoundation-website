import React, {Component} from 'react';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import yaml from 'js-yaml';
import axios from 'axios';

export default class Contact extends Component {

	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			message: '',
			contact_yml: null
		};
	}

	componentDidMount(){
		axios.get('/resources/contact.yml')
		.then(response => this.setState({contact_yml: response.data}))
		.catch(error => console.log(error));
	}

	render(){
		const contact_obj = yaml.load(this.state.contact_yml);
		if(!contact_obj){
			return <div></div>;
		}

		const {name, email, message} = this.state;
		const { name_label,
				name_placeholder,
				email_label,
				email_placeholder,
				message_label,
				message_placeholder } = contact_obj;

		return (
			<Col sm={12}>
				<div className='contact_social'>
					<ul className='contact_social_list'>
						<li><a href='#'><i className='fa fa-facebook'></i></a></li>
						<li><a href='#'><i className='fa fa-linkedin'></i></a></li>
						<li><a href='#'><i className='fa fa-github'></i></a></li>
						<li><a href='#'><i className='fa fa-twitter'></i></a></li>
					</ul>
				</div>
				<form className='contact_form'>
					<Row>
						<Col sm={6}>
							<FormGroup controlId="contactName">
		          				<ControlLabel>{name_label}</ControlLabel>
						          <FormControl
						            type="text"
						            value={name}
						            placeholder={name_placeholder} />
							</FormGroup>
						</Col>
						<Col sm={6}>
							<FormGroup controlId="contactEmail">
								<ControlLabel>{email_placeholder}</ControlLabel>
								<FormControl
									type='email'
									value={email}
									placeholder={email_placeholder} />
							</FormGroup>
						</Col>
					</Row>
					<FormGroup controlId="contactMessage">
						<ControlLabel>{message_placeholder}</ControlLabel>
						<FormControl
							componentClass="textarea"
							value={message}
							placeholder={message_placeholder} />
					</FormGroup>
				</form>
			</Col>
		);
	}
}