import React, {Component} from 'react';
import {Modal, FormGroup, FormControl, Button} from 'react-bootstrap';
import '../../styles/recovery_form_modal.css';

export default class RecoveryFormModal extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			ethereumAddress: '',
			newlyGenerated: '',
			formSubmitted: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleEtherumChange = this.handleEtherumChange.bind(this);
		this.handleGeneratedChange = this.handleGeneratedChange.bind(this);
	}

	handleSubmit(e){
		e.preventDefault();
		//validate and submit
		console.log(JSON.stringify(this.state));
	}

	handleEmailChange(e){
		this.setState({
			email: e.target.value
		});
	}

	handleEtherumChange(e){
		this.setState({
			ethereumAddress: e.target.value
		});
	}

	handleGeneratedChange(e){
		this.setState({
			newlyGenerated: e.target.value
		});
	}

	render(){
		return (
            <Modal
            	show={this.props.show}
            	onHide={this.props.onHide}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Please enter your information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                	<div className='recovery_form'>
	                	<form onSubmit={this.handleSubmit}>
	                		<FormGroup>
	                			<FormControl 
	                				required={false}
	                				type='email'
	                				value={this.state.email}
	                				placeholder='Email (Optional)'
	                				onChange={this.handleEmailChange}
	                			/>
	                		</FormGroup>
	                		<FormGroup>
	                			<FormControl
	                				required={true}
	                				type='text'
	                				value={this.state.ethereumAddress}
	                				placeholder='Ethereum Address'
	                				onChange={this.handleEtherumChange}
	                			/>
	                		</FormGroup>
	                		<FormGroup>
	                			<FormControl
	                				required={true}
	                				type='text'
	                				value={this.state.newlyGenerated}
	                				placeholder='Newly generated EOS or TLOS public key'
	                				onChange={this.handleGeneratedChange}
	                			/>
	                		</FormGroup>
	                		<Button 
	                			type='submit'
	                			bsSize='large'
	                			bsStyle='primary'
	                		>
	                			SUBMIT
	                		</Button>
	                	</form>
                	</div>
                </Modal.Body>
            </Modal>
		);
	}
}