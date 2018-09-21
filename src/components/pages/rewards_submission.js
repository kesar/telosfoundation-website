import React, {Component} from 'react';
import {Grid, Row, Col, ButtonGroup, Button, FormGroup, FormControl, Checkbox} from 'react-bootstrap';
import '../../styles/rewards_submission.css';

const FORM_SUBMIT_ENDPOINT = 'http://localhost:8080/api/v1/submissions/create';

export default class RewardsSubmission extends Component {

	constructor(){
		super();

		this.state = {
			email: '',
			submissions: [
				{
					category: 'Social_Media',
					platform: '',
					url: '',
					details: '',
					screenshot: null
				}
			],
			termsAccepted: false,
			formSubmitted: false
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handleCategoryChange = this.handleCategoryChange.bind(this);
		this.handlePlatformChange = this.handlePlatformChange.bind(this);
		this.handleUrlChange = this.handleUrlChange.bind(this);
		this.handleDetailsChange = this.handleDetailsChange.bind(this);
		this.handleTermsChange = this.handleTermsChange.bind(this);

		this.handleAddSubmission = this.handleAddSubmission.bind(this);
		this.handleRemoveSubmission = this.handleRemoveSubmission.bind(this);
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handleCategoryChange(e, idx){
		const {submissions} = this.state;
		const newSubmissions = submissions.map((sub, i) => {
			if(i !== idx) return sub;
			return {...sub, category: e.target.value};
		});
		this.setState({submissions: newSubmissions});
	}

	handlePlatformChange(e, idx){
		const {submissions} = this.state;
		const newSubmissions = submissions.map((sub, i) => {
			if(i !== idx) return sub;
			return {...sub, platform: e.target.value};
		});
		this.setState({submissions: newSubmissions});
	}

	handleUrlChange(e, idx){
		const {submissions} = this.state;
		const newSubmissions = submissions.map((sub, i) => {
			if(i !== idx) return sub;
			return {...sub, url: e.target.value};
		});
		this.setState({submissions: newSubmissions});
	}

	handleDetailsChange(e, idx){
		const {submissions} = this.state;
		const newSubmissions = submissions.map((sub, i) => {
			if(i !== idx) return sub;
			return {...sub, details: e.target.value};
		});
		this.setState({submissions: newSubmissions});
	}

	handleTermsChange(e){
		this.setState({termsAccepted: e.target.value});
	}

	handleAddSubmission(){
		const {submissions} = this.state;
		this.setState({
			submissions: submissions.concat(
				{
					category: 'Social_Media',
					platform: '',
					url: '',
					details: '',
					screenshot: null
				}
			)
		});
	}

	handleRemoveSubmission(){
		const {submissions} = this.state;
		if(submissions.length < 2) return;
		submissions.pop();
		this.setState({submissions: submissions});
	}

	handleSubmit(e){
		e.preventDefault();
		alert(JSON.stringify(this.state));
	}


	getSubmissions(){
		return this.state.submissions.map((submissionInputs, idx) => {
			return (
				<fieldset key={idx}>
					<legend>Rewards Entry</legend>
					<div className='rewards_submission_entry'>
						<FormGroup>
							<select
								className='form-control'
								onChange={e => this.handleCategoryChange(e, idx)}
								value={submissionInputs.category}
							>
								<option value='Social_Media'>Social Media</option>
								<option value='Video'>Video</option>
								<option value='Video_Tutorial'>Video (Tutorial)</option>
								<option value='Micro_Blogging'>Micro-Blogging</option>
								<option value='Article_Based_Forums'>Article-Based Forums</option>
								<option value='Forums_and_Chats'>Forums and Chats</option>
								<option value='Misc_Content'>Misc. Content</option>
								<option value='QA_and_Tech_Forums'>Q&A and Tech Forums</option>
								<option value='Image_Based_Social_Media'>Image-Based Social Media</option>
								<option value='Social_Media_Admin_Work'>Social Media Admin Work</option>
								<option value='Physical_Social_Gatherings'>Physical Social Gatherings</option>
							</select>
						</FormGroup>
						<FormGroup>
							<FormControl
								type='text'
								value={submissionInputs.platform}
								placeholder='Your platform'
								onChange={e => this.handlePlatformChange(e, idx)}
							/>
						</FormGroup>
						<FormGroup>
							<FormControl
								type='text'
								value={submissionInputs.url}
								placeholder='Enter the url'
								onChange={e => this.handleUrlChange(e, idx)}
							/>
						</FormGroup>
						<FormGroup>
							<textarea
								className='form-control'
								value={submissionInputs.details}
								placeholder='Please provide any additional details that will help us evaluate your submission'
								onChange={e => this.handleDetailsChange(e, idx)}
							>
							</textarea>
						</FormGroup>
					</div>
				</fieldset>
			);
		});
	}

	//note to self: remove grid, containers, etc.  just want form component

	render(){
		const {
			email,
			termsAccepted
		} = this.state;

		return (
			<div className='rewards_submission'>
				<h1>Rewards Submission</h1>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<form onSubmit={this.handleSubmit}>
								<FormGroup>
									<FormControl
										required
										type='email'
										value={email}
										placeholder='Your email'
										onChange={this.handleEmailChange}
									/>
								</FormGroup>

								{this.getSubmissions()}
								
								<FormGroup>
									<Checkbox
										required
										checked={termsAccepted}
										onChange={this.handleTermsChange}
									>
										I Accept the TLOS Rewards terms
									</Checkbox>
								</FormGroup>
								<div className='text-right'>
									<ButtonGroup>
										<Button
											onClick={this.handleAddSubmission}
										>
											Add Rewards Category
										</Button>
										<Button
											onClick={this.handleRemoveSubmission}
										>
											Remove Category
										</Button>
									</ButtonGroup>
								</div>

								<Button
									type='submit'
								>
									Submit
								</Button>
							</form>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}