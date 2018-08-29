import React, {Component} from 'react';
import {Grid, Row, Col, ResponsiveEmbed, Button, Table} from 'react-bootstrap';
import RewardsModal from '../modals/rewards_modal';
import axios from 'axios';
import '../../styles/rewards.css';

export default class RewardsTranslate extends Component {

	constructor(props){
		super(props);

		this.state = {
			showRewardsModal: false,
			rewards_page: null
		};
	}

	//gonna get this through props though
	componentDidMount(){
		axios.get('/resources/rewards_template.json')
		.then(res => {
			this.setState({rewards_page: res.data.rewards_page});
		}).catch(err => {
			console.log(err);
		});
	}

	render(){
		const {rewards_page} = this.state;
		if(!rewards_page) return <div>no content yet</div>;

		return (
			<div className='rewards'>
				<section id='rewards_intro'>
					<Grid>
						<Row>
							<Col md={12}>
								<h1>{rewards_page.intro.intro_heading}</h1>
							</Col>
						</Row>
						<Row>
							<Col 
								md={5}
								sm={6}
							>
								{
									rewards_page.intro.intro_paragraphs.map((par, i) => {
										return <p key={i} dangerouslySetInnerHTML={{__html: par}} />
									})
								}
							</Col>
							<Col
								md={7}
								sm={6}
							>
								<ResponsiveEmbed a16by9>
									<iframe src="https://www.youtube.com/embed/1XJjGqzS1AU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
								</ResponsiveEmbed>
								<div className='text-center'>
									<h2>{rewards_page.intro.join_us}</h2>
									<Button
										bsStyle='primary'
										bsSize='large'
										onClick={() => this.setState({showRewardsModal: true})}
									>
										{rewards_page.intro.cta_text}
									</Button>
								</div>
							</Col>
						</Row>
					</Grid>
				</section>
				<RewardsDescription description={rewards_page.description} />
				<RewardsTable table={rewards_page.table} />
				<RewardsModal show={this.state.showRewardsModal} onHide={() => this.setState({showRewardsModal: false})} />
			</div>
		);
	}
}

const RewardsDescription = ({description}) => {
	if(!description) return <div>no description</div>;
	return (
		<section id='rewards_description'>
			<header className='text-center'>
				<h2>{description.main_heading}</h2>
			</header>
			<Grid>
				<Row>
					<Col md={12}>
						<div className='text-center'>
							<h3>{description.sub_heading}</h3>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<ul>
							{
								description.column_one.map((item, i) => {
									return <li key={i}>{item}</li>;
								})
							}
						</ul>
					</Col>
					<Col md={4}>
						<ul>
							{
								description.column_two.map((item, i) => {
									return <li key={i}>{item}</li>;
								})
							}
						</ul>
					</Col>
					<Col md={4}>
						<ul>
							{
								description.column_three.map((item, i) => {
									return <li key={i}>{item}</li>;
								})
							}
						</ul>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const RewardsTable = ({table}) => {
	if(!table) return <div>no table</div>;
	const {table_headings, table_rows} = table;
	return (
		<section id="rewards_table">
			<Grid>
				<Row>
					<Col md={12}>
						<Table striped bordered responsive>
							<thead>
								<tr>
									<th>{table_headings.site_category}</th>
									<th>{table_headings.task_category}</th>
									<th>{table_headings.task}</th>
									<th>{table_headings.tier_reward}</th>
									<th>{table_headings.proof}</th>
								</tr>
							</thead>
							<tbody>
								{
									table_rows.map((row, i) => {
										return (
											<tr key={i}>
												<td>{row.site_category}</td>
												<td>{row.task_category}</td>
												<td>{row.task}</td>
												<td>
													<ul>
														{
															row.tier_reward.map((item, j) => {
																return <li key={j}>{item}</li>;
															})
														}
													</ul>
												</td>
												<td>{row.proof}</td>
											</tr>
										);
									})
								}
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};