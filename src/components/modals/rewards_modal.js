import React, {Component} from 'react';
import {Modal, Button, ButtonGroup, FormGroup, FormControl, Checkbox} from 'react-bootstrap';
import axios from 'axios';
import '../../styles/rewards_modal.css';

import {FORM_SUBMIT_ENDPOINT} from '../../config/constants';

export default class RewardsModal extends Component {
	constructor(){
		super();

		this.state = {
			email: '',
			publicKey: '',
			platforms: [
				{
					platform: '',
					username: ''
				}
			],
			termsAccepted: false,
			formSubmitted: false,
			emailTouched: false,
			termsAcceptedTouched: false
		};
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
		this.handleCheckmarkChange = this.handleCheckmarkChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddPlatform = this.handleAddPlatform.bind(this);
		this.handleRemovePlatform = this.handleRemovePlatform.bind(this);
	}

	onHandleClose(){
		this.props.onHide();
	}

	handlePlatformChange(e, idx){
		const {platforms} = this.state;
		const newPlatforms = platforms.map((pf, i) => {
			if(i !== idx) return pf;
			return {...pf, platform: e.target.value};
		});
		this.setState({platforms: newPlatforms});
	}

	handleUsernameChange(e, idx){
		const {platforms} = this.state;
		const newPlatforms = platforms.map((pf, i) => {
			if(i !== idx) return pf;
			return {...pf, username: e.target.value};
		});
		this.setState({platforms: newPlatforms});
	}

	handleCheckmarkChange(e){
		this.setState({termsAccepted: e.target.checked});
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handlePublicKeyChange(e){
		this.setState({publicKey: e.target.value});
	}

	handleAddPlatform(){
		const {platforms} = this.state;
		this.setState({
			platforms: platforms.concat(
				{
					platform: '',
					username: ''
				}
			)
		});
	}

	handleRemovePlatform(){
		const {platforms} = this.state;
		if(platforms.length < 2) return;
		platforms.pop();
		this.setState({platforms: platforms});
	}

	handleSubmit(e){
		e.preventDefault();
		const {email, platforms, termsAccepted, publicKey} = this.state;
		if(
			!email ||
			!termsAccepted
		){
			this.setState({
				emailTouched: true,
				termsAcceptedTouched: true
			});
			return;
		}

		//seperate platform and username into arrays
		const platformsArr = platforms.map(pf => {
			return pf.platform.trim();
		});

		const usernamesArr = platforms.map(pf => {
			return pf.username.trim();
		});

		const formData = {
			email: email.trim(),
			publicKey: publicKey.trim(),
			platform: platformsArr,
			username: usernamesArr,
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
		const {email, termsAccepted, publicKey} = this.state;
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
				<FormGroup>
					<FormControl
						type='text'
						value={publicKey}
						placeholder='Your public Eos/Telos key'
						onChange={this.handlePublicKeyChange} />
				</FormGroup>
				{
					this.state.platforms.map((platformInputs, idx) => {
						return (
							<fieldset key={idx}>
								<legend>Platform</legend>
								<div className='platform_and_username'>
									<FormGroup>
										<FormControl
											required
											type='text'
											value={platformInputs.platform}
											placeholder='Your platform(s)'
											onChange={e => this.handlePlatformChange(e, idx)} />
										<FormControl.Feedback />
									</FormGroup>
									<FormGroup>
								    	<FormControl
								    		required
								        	type='text'
								            value={platformInputs.username}
								            placeholder='Username on platform(s)'
								            onChange={e => this.handleUsernameChange(e, idx)} />
								        <FormControl.Feedback />
									</FormGroup>
								</div>
							</fieldset>
						);
					})
				}
				<div className='text-right'>
					<ButtonGroup>
						<Button onClick={this.handleAddPlatform}>
							Add Platform
						</Button>
						<Button onClick={this.handleRemovePlatform}>
							Remove Platform
						</Button>
					</ButtonGroup>
				</div>
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
					Join
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