import React, {Component} from 'react';
import TagsInput from 'react-tagsinput';
import {Link} from 'react-router-dom';
import AutosizeInput from 'react-input-autosize';
import axios from 'axios';
import {Grid, Row, Col, ButtonGroup, Button, FormGroup, FormControl, Checkbox, ControlLabel} from 'react-bootstrap';
import '../../styles/rewards_submission.css';

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
					details: '',
					screenshot: null
				}
			],
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

  	handleScreenshotChange(e, idx){
  		const {submissions} = this.state;
  		const newSubmissions = submissions.map((sub, i) => {
  			if(i !== idx) return sub;
  			return {...sub, screenshot: e.target.files[0]};
  		});
  		this.setState({submissions: newSubmissions});
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
								inputProps={{placeholder: 'Links. Hit "ENTER" to add a URL'}}
								onChange={tags => this.handleTagsChange(tags, idx)} />
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
						<FormGroup>
							<ControlLabel>Screenshot (ONLY for in-person meetups)</ControlLabel>
							<FormControl
								type='file'
								onChange={e => this.handleScreenshotChange(e, idx)} />
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
						placeholder='Your name'
						onChange={this.handleNameChange} />

				</FormGroup>
				<FormGroup>
					<FormControl
						required
						type='email'
						value={email}
						placeholder='Your email'
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

				<Button type='submit'>
					Submit
				</Button>
			</form>
		);
	}

	render(){
		return (
			<div className='rewards_submission'>
				<Grid>
					<Row>
						<Col md={10} mdOffset={1}>
							<SubmissionIntro />
							{this.renderForm()}
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}

const SubmissionIntro = () => {
	return (
		<div>
			<h1>Rewards Submission</h1>
			<p>Submit your information here. <strong>IMPORTANT:</strong> you will only be submitting this form once, so you should read the instructions carefully and make sure you have all the correct information.</p>
			<p>Some notes:</p>
			<ul>
				<li>If you are going to make submissions in multiple categories, use the "Add Category/Remove Category" buttons to add/remove fields.</li>
				<li>Please refer to the table at <Link to='/rewards'>telosfoundation.io/rewards</Link> to determine what category each submission falls under and what information is required.  You do not need to designate the category, but it helps if you group your submissions that way.</li>
				<li>You may include multiple links in the link field, but they should be grouped by category.  Example: you have several Twitter and Youtube links to submit.  You should add the Twitter links to the link field, click the "Add Category" button, then add the Youtube links to the new links field.</li>
				<li>Only include an image if your submission is a Physical Social Gathering.  If you believe you need to submit multiple images for a single submission (you probably do not), please include a link to an album at a site such as Flickr or Imgur.</li>
			</ul>
			<p>Please follow these instructions carefully and include all the information for each category you wish to submit.  In most cases a link is sufficient.</p>
			<h2>YOU WILL NOT BE ABLE TO SUBMIT THIS FORM AGAIN, SO MAKE SURE THERE ARE NO ERRRORS*</h2>
			<small>*you can resubmit if you have to, shit happens</small>
		</div>
	);
};

function autosizingRenderInput ({addTag, ...props}) {
  let {onChange, value, ...other} = props
  return (
    <AutosizeInput type='text' onChange={onChange} value={value} {...other} />
  )
}  