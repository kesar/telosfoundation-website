import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';
import {Link} from 'react-router-dom';
import AutosizeInput from 'react-input-autosize';
import axios from 'axios';
import {Grid, Row, Col, ButtonGroup, Button, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import '../../styles/rewards_submission.css';

import {REWARDS_SUBMISSION_ENDPOINT} from '../../config/constants';

//form submission states
const NOT_SUBMITTED = 'not_submitted';
const SUBMITTING = 'submitting';
const SUBMISSION_ERROR = 'submission_error';
const SUBMISSION_SUCCESS = 'submission_success';


export default class RewardsSubmission extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			email: '',
			public_key: '',
			submissions: [
				{
					urls: [],
					username: '',
					details: ''
				}
			],
			screenshot: null,
			termsAccepted: false,
			formState: NOT_SUBMITTED
		};

		//bind handlers
		this.handleEmailChange = this.handleEmailChange.bind(this);
		this.handlePublicKeyChange = this.handlePublicKeyChange.bind(this);
		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleTermsChange = this.handleTermsChange.bind(this);
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handleDetailsChange = this.handleDetailsChange.bind(this);
		this.handleTagsChange = this.handleTagsChange.bind(this);
		this.handleScreenshotChange = this.handleScreenshotChange.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddSubmission = this.handleAddSubmission.bind(this);
		this.handleRemoveSubmission = this.handleRemoveSubmission.bind(this);
	}

	handleNameChange(e){
		this.setState({name: e.target.value});
	}

	handleEmailChange(e){
		this.setState({email: e.target.value});
	}

	handlePublicKeyChange(e){
		this.setState({public_key: e.target.value});
	}

	handleTermsChange(e){
		this.setState({termsAccepted: e.target.checked});
	}

	handleAddSubmission(){
		const {submissions} = this.state;
		this.setState({
			submissions: submissions.concat(
				{
					urls: [],
					username: '',
					details: ''					
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

	handleUsernameChange(e, idx){
		const {submissions} = this.state;
		const newSubmissions = submissions.map((sub, i) => {
			if(i !== idx) return sub;
			return {...sub, username: e.target.value};
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

  	handleTagsChange(tags, idx){
  		const {submissions} = this.state;
  		const newSubmissions = submissions.map((sub, i) => {
  			if(i !== idx) return sub;
  			return {...sub, urls: tags};
  		});
  		this.setState({submissions: newSubmissions});
  	}

  	handleScreenshotChange(e){
  		this.setState({screenshot: e.target.files[0]});
  	}

  	handleSubmit(e){
  		e.preventDefault();
  		const {name, email, public_key, submissions, screenshot, termsAccepted} = this.state;

  		const urls = submissions.map(sub => sub.urls);
  		const username = submissions.map(sub => sub.username.trim());
  		const details = submissions.map(sub => sub.details.trim());

  		const sub_values = {
  			name: name,
  			email: email,
  			public_key: public_key,
  			termsAccepted: termsAccepted,
  			links: JSON.stringify(urls),
  			username: JSON.stringify(username),
  			comments: JSON.stringify(details),
  			screenshot: screenshot
  		};

  		const data = new FormData();
  		data.append('name', sub_values.name);
  		data.append('email', sub_values.email);
  		data.append('publicKey', sub_values.public_key);
  		data.append('links', sub_values.links);
  		data.append('username', sub_values.username);
  		data.append('comments', sub_values.comments);
  		data.append('screenshot', sub_values.screenshot);

  		const attemptSubmission = () => {
  			axios.post(REWARDS_SUBMISSION_ENDPOINT, data)
	  		.then(res => {
	  			console.log(res);
	  			if(res.status === 201) this.setState({formState: SUBMISSION_SUCCESS});
	  		})
	  		.catch(err => {
	  			console.log(err);
	  			this.setState({formState: SUBMISSION_ERROR});
	  		});
  		};

  		this.setState({formState: SUBMITTING}, attemptSubmission());

  	}

	getSubmissions(){
		return this.state.submissions.map((inputs, idx) => {
			return (
				<fieldset key={idx}>
					<legend>Rewards Entry</legend>
					<div className='rewards_submission_entry'>
						<FormGroup>
							<TagsInput
								value={inputs.urls}
								renderInput={autosizingRenderInput}
								inputProps={{placeholder: 'Links. Add all URLs that you wish to submit in this category.'}}
								onChange={tags => this.handleTagsChange(tags, idx)}
								addOnBlur />
						</FormGroup>
						<FormGroup>
							<FormControl
								type='text'
								value={inputs.username}
								placeholder='Username you used in this submission (optional)'
								onChange={e => this.handleUsernameChange(e, idx)} />
						</FormGroup>
						<FormGroup>
							<textarea
								className='form-control'
								value={inputs.details}
								placeholder='Please provide any additional details that will help us evaluate your submission (optional in most cases)'
								onChange={e => this.handleDetailsChange(e, idx)}
							></textarea>
						</FormGroup>
					</div>
				</fieldset>
			);
		});
	}

	renderForm(){
		const {email, name, termsAccepted, public_key} = this.state;

		return (
			<form onSubmit={this.handleSubmit}>
				<FormGroup>
					<FormControl
						required
						type='text'
						value={name}
						placeholder='Your name (required)'
						onChange={this.handleNameChange} />

				</FormGroup>
				<FormGroup>
					<FormControl
						required
						type='email'
						value={email}
						placeholder='Your email (required)'
						onChange={this.handleEmailChange} />
				</FormGroup>
				<FormGroup>
					<FormControl
						type='text'
						value={public_key}
						placeholder='Public key, if you have not yet provided one to us.'
						onChange={this.handlePublicKeyChange} />
				</FormGroup>

				{this.getSubmissions()}
				<div className='text-right add_categories'>
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
				<FormGroup>
					<ControlLabel>Photograph (ONLY for in-person meetups) JPG or PNG.</ControlLabel>
					<FormControl
						type='file'
						accept='image/x-png,image/jpeg'
						onChange={this.handleScreenshotChange} />
				</FormGroup>
				<FormGroup>
					<Checkbox
						required
						checked={termsAccepted}
						onChange={this.handleTermsChange}
					>
						I Accept the TLOS Rewards terms
					</Checkbox>
				</FormGroup>
				<h4 style={{marginBottom: '15px'}}>REVIEW YOUR ENTRIES BEFORE SUBMITTING</h4>
				<Button type='submit'>
					Submit
				</Button>
			</form>
		);
	}

	render(){
		const getMessage = (message) => {
			return (
				<div className='message'>
					<h4>{message}</h4>
				</div>
			);
		};

		const getSpinner = () => {
			return (
				<div className='spinner'>
					<h4>submitting...</h4>
				</div>
			);
		};

		const renderContent = () => {
			let displayState = null;
			switch(this.state.formState){
				case SUBMITTING:
					displayState = getSpinner();
					break;
				case NOT_SUBMITTED:
					displayState = this.renderForm();
					break;
				case SUBMISSION_ERROR:
					displayState = getMessage('Sorry, there was an error with your submission.  Please email us at hello@telosfoundation.io');
					break;
				case SUBMISSION_SUCCESS:
					displayState = getMessage('Thank you for your submission.');
					break;
				default:
					displayState = this.renderForm();
					break;
			}
			return displayState;
		};

		return (
			<div className='rewards_submission'>
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<SubmissionIntro />
							{renderContent()}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const SubmissionIntro = () => {
	return (
		<div id='submission_intro'>
			<h1>Rewards Submission</h1>
			<h2>All contributions must be compiled into a single form and submitted within one week of the Telos Blockchain Network activation. Multiple forms per applicant will not be accepted.</h2>
			<p>Use this form to submit your contributions to the Community Rewards Program and earn TLOS tokens. <strong>Prior to Network activation, make sure that you have given us a viable EOS/Telos public key so that we can create your account.</strong> Then, compile and submit all of your links and photo submissions into a single form for review within one week of the Telos Blockchain Network activation. All judges{"'"} determinations are final and cannot be appealed or arbitrated.</p>
			<p><strong>Notes:</strong></p>
			<ul>
				<li>If you are going to make submissions in multiple categories, use the "Add Category/Remove Category" buttons to add or remove fields.</li>
				<li>Refer to the table at <Link to='/rewards'>telosfoundation.io/rewards</Link> to determine what category each submission falls under and what information is required.</li>
				<li>You may include multiple links in the link field, but they should be grouped by category. Example: you have several Twitter and Youtube links to submit. You would first add the Twitter links to the link field. Then, you would click the "Add Category" button and add the Youtube links to the new links field.</li>
				<li>Image files are discouraged unless they are documenting a Physical Social Gathering for a Rewards submission. Screenshots of links will not be accepted. If you believe that you need to submit multiple images in a single submission, please include a link to an album at a photo sharing site such as <a href='https://www.flickr.com' target='_blank' rel='noopener noreferrer'>Flickr</a> or <a href='https://imgur.com' target='_blank' rel='noopener noreferrer'>Imgur</a>.</li>
				<li>Submitting a keyword and/or username in a social media channel for us to search is acceptable if this is a faster method for checking your posts. If you can find the links faster this way, then we can find them faster this way.  However, we will not sort through all of your links for you so only include search criteria that will yield reward-related information.</li>
			</ul>
			<p>Please follow these instructions carefully and include all the information for each category you wish to submit. In most cases, a link is sufficient.</p>
		</div>
	);
};

function autosizingRenderInput ({addTag, ...props}) {
  let {onChange, value, ...other} = props
  return (
    <AutosizeInput type='text' onChange={onChange} value={value} {...other} />
  )
}  