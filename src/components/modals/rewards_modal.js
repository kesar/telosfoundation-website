import React, {Component} from 'react';
import {Modal, Button, FormGroup, FormControl} from 'react-bootstrap';
import axios from 'axios';

const FORM_SUBMIT_ENDPOINT = 'http://localhost:8080/api/v1/rewards/create';

export default class RewardsModal extends Component {
	constructor(){
		super();

		this.state = {
			name: '',
			email: '',
			formSubmitted: false
		};
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	onHandleClose(){
		this.props.onHide();
	}

	//input change functions
	handleNameChange(e){
		this.setState({name: e.target.value});
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handleSubmit(e){
		const {name, email} = this.state;
		e.preventDefault();

		axios.post(
			FORM_SUBMIT_ENDPOINT,
			{
				name: name,
				email: email
			}
		)
		.then(res => {
			console.log(res.data);
			this.setState({formSubmitted: true});
		})
		.catch(err => console.log(err));
	}

	//validation functions
	getNameValidationState(){
		const {name} = this.state;
		if(name === '') return 'error';
		return 'success';
	}

	getEmailValidationState(){
		const {email} = this.state;
		//will also have to check for valid email address
		if(email === '') return 'error';
		return 'success';
	}

	renderForm(){
		const {name, email} = this.state;
		return (
			<form 
				className='rewards_form'
				onSubmit={this.handleSubmit}
			>
				<FormGroup>
			    	<FormControl
			        	type='text'
			            value={name}
			            placeholder='Your name'
			            onChange={this.handleNameChange}
			            validationstate = {this.getNameValidationState()} />
			        <FormControl.Feedback />
				</FormGroup>
				<FormGroup>
					<FormControl
						type='email'
						value={email}
						placeholder='Your email'
						onChange={this.handleEmailChange}
						validationstate = {this.getEmailValidationState()} />
					<FormControl.Feedback />
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
                    <Modal.Title>Your Info Here</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                	{!formSubmitted ? this.renderForm() : this.renderSuccessMessage()}
                </Modal.Body>
            </Modal>
		);
	}
}