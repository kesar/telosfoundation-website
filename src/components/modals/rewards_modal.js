import React, {Component} from 'react';
import {Modal, Button, FormGroup, FormControl, Checkbox} from 'react-bootstrap';
import axios from 'axios';

import {FORM_SUBMIT_ENDPOINT} from '../../config/constants';

export default class RewardsModal extends Component {
	constructor(){
		super();

		this.state = {
			username: '',
			email: '',
			platform: '',
			termsAccepted: false,
			formSubmitted: false,
			usernameTouched: false,
			emailTouched: false,
			platformTouched: false,
			termsAcceptedTouched: false
		};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCheckmarkChange = this.handleCheckmarkChange.bind(this);
		this.handlePlatformChange = this.handlePlatformChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onHandleClose(){
		this.props.onHide();
	}

	handleUsernameChange(e){
		this.setState({username: e.target.value});
	}

	handleCheckmarkChange(e){
		this.setState({termsAccepted: e.target.checked});
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handlePlatformChange(e){
		this.setState({platform: e.target.value});
	}

	handleSubmit(e){
		e.preventDefault();
		const {username, email, platform, termsAccepted} = this.state;
		if(
			!username ||
			!email ||
			!platform ||
			!termsAccepted
		){
			this.setState({
				usernameTouched: true,
				emailTouched: true,
				platformTouched: true,
				termsAcceptedTouched: true
			});
			return;
		}

		const formData = {
			email: email.trim(),
			platform: platform.trim(),
			username: username.trim(),
			termsAccepted: termsAccepted			
		};

		//alert(JSON.stringify(formData));

		axios.post(
			FORM_SUBMIT_ENDPOINT,
			formData
		)
		.then(res => {
			this.setState({formSubmitted: true});
		})
		.catch(err => console.log(err));
	}

	//validation functions
	getUsernameValidationState(){
		const {username, usernameTouched} = this.state;
		if(!usernameTouched) return null;
		if(username === '') return 'error';
		return 'success';
	}

	getPlatformValidationState(){
		const {platform, platformTouched} = this.state;
		if(!platformTouched) return null;
		if(platform === '') return 'error';
		return 'success';
	}

	getEmailValidationState(){
		const {email, emailTouched} = this.state;
		if(!emailTouched) return null;
		//will also have to check for valid email address
		if(!email) return 'error';
		return 'success';
	}

	getTermsValidationState(){
		const {termsAccepted, termsAcceptedTouched} = this.state;
		if(!termsAcceptedTouched) return null;
		return termsAccepted ? 'success' : 'error';
	}

	renderForm(){
		const {username, email, termsAccepted, platform} = this.state;
		return (
			<form 
				className='rewards_form'
				onSubmit={this.handleSubmit}
			>
				<FormGroup validationState = {this.getEmailValidationState()}>
					<FormControl
						required
						type='email'
						value={email}
						placeholder='Your email'
						onChange={this.handleEmailChange}
						onFocus={() => this.setState({emailTouched: true})} />
					<FormControl.Feedback />
				</FormGroup>
				<FormGroup validationState={this.getPlatformValidationState()}>
					<FormControl
						required
						type='text'
						value={platform}
						placeholder='Your platform'
						onChange={this.handlePlatformChange}
						onFocus={() => this.setState({platformTouched: true})} />
					<FormControl.Feedback />
				</FormGroup>
				<FormGroup validationState = {this.getUsernameValidationState()}>
			    	<FormControl
			    		required
			        	type='text'
			            value={username}
			            placeholder='Username on platform'
			            onChange={this.handleUsernameChange}
			            onFocus={() => this.setState({usernameTouched: true})} />
			        <FormControl.Feedback />
				</FormGroup>
				<FormGroup validationState={this.getTermsValidationState()}>
					<Checkbox
						required
						checked={termsAccepted}
						onChange={this.handleCheckmarkChange}
						onFocus={() => this.setState({termsAcceptedTouched: true})}
					>
						I Accept the TLOS Rewards terms
					</Checkbox>
				</FormGroup>
				<Button
					type='submit'
				>
					Submit
				</Button>
			</form>
		);
	}

	renderSuccessMessage(){
		//might add name or something to the response message
		return (
			<div className='reward_response_container'>
				<h3>Thanks for your submission</h3>
			</div>
		);
	}

	render(){
		const {formSubmitted} = this.state;
		return (
            <Modal
                {...this.props}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                	{!formSubmitted ? this.renderForm() : this.renderSuccessMessage()}
                </Modal.Body>
            </Modal>
		);
	}
}