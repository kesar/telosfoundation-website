import React, {Component} from 'react';
import {Grid, Row, Col, ResponsiveEmbed, Button, Table} from 'react-bootstrap';
import RewardsModal from '../modals/rewards_modal';
import '../../styles/rewards.css';

export default class Rewards extends Component {

	constructor(props){
		super(props);

		this.state = {
			showRewardsModal: false
		};
	}

	render(){
		return (
			<div className='rewards'>
				<section id='rewards_intro'>
					<Grid>
						<Row>
							<Col md={12}>
								<h1>The Community Rewards Program</h1>
							</Col>
						</Row>
						<Row>
							<Col 
								md={5}
								sm={6}
							>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vulputate mauris turpis. Duis commodo aliquet rutrum. Maecenas interdum, sem ac sollicitudin fermentum, ante ex ultrices dui, non blandit justo ante a orci. In convallis, enim efficitur dictum facilisis, lectus odio pretium nisl, auctor viverra dui ligula non arcu. In ullamcorper orci ac velit suscipit faucibus. Pellentesque vitae molestie velit. Mauris vitae lorem lectus.</p>
								<p>Mauris ullamcorper scelerisque posuere. Suspendisse pretium commodo tempus. Suspendisse sed libero ante. Vivamus aliquam, est vel convallis ultricies, mi quam vestibulum neque, non facilisis nunc quam at leo. Fusce id elit aliquam, placerat neque vitae, feugiat nulla. Aliquam sit amet ex laoreet, imperdiet nisl sed, porta mi. Vivamus sit amet magna justo.</p>
							</Col>
							<Col
								md={7}
								sm={6}
							>
								<ResponsiveEmbed a16by9>
									<iframe src="https://www.youtube.com/embed/GSDSvhgHyW8" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
								</ResponsiveEmbed>
								<div className='text-center'>
									<h2>Join Us Today!</h2>
									<Button
										bsStyle='primary'
										bsSize='large'
										onClick={() => this.setState({showRewardsModal: true})}
									>
										SIGN UP HERE
									</Button>
								</div>
							</Col>
						</Row>
					</Grid>
				</section>
				<RewardsDescription />
				<RewardsTable />
				<RewardsModal show={this.state.showRewardsModal} onHide={() => this.setState({showRewardsModal: false})} />
			</div>
		);
	}
}

const RewardsDescription = () => {

	return (
		<section id='rewards_description'>
			<header className='text-center'>
				<h2>Community Rewards</h2>
			</header>
			<Grid>
				<Row>
					<Col md={12}>
						<div className='text-center'>
							<h3>Max Payout per participant: 10,000 TLOS</h3>
						</div>
					</Col>
				</Row>
				<Row>
					<Col md={4}>
						<ul>
							<li>All items subject to change and investigation.  Gaming the system or getting rewards on a technicality will not be allowed.</li>
							<li>Participants must register with the system via email and/or portal, providing their user names in the various platforms.</li>
							<li>After network activation, participants will submit a final list of links and an address according to our future template and we will verify.</li>
						</ul>
					</Col>
					<Col md={4}>
						<ul>
							<li>Submissions must be completed in a given timeframe, TBD. (e.g. 2 weeks after activation?)</li>
							<li>Payment to the participant timing TBD. (e.g. 2 weeks after submission deadline?)</li>
							<li>All participants who earn tokens will receive a free Telos Address!</li>
							<li>All post have to have links to an official Telos website or Telos social media site.</li>
						</ul>
					</Col>
					<Col md={4}>
						<ul>
							<li>All judges determinations are final and cannot be appealed or arbitrated.</li>
							<li>There is a possibility for a professional social media or video channel person to go over the 10,000 reward limit.  These cases will be brought up ahead of time and reviewed BEFORE the participant submits for rewards.</li>
							<li>If the amount earned by participants exceeds the 1 million TLOS allocated, then all timely submissions will be reduced in like percentage to pay each participant a pro rata share.</li>
						</ul>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const RewardsTable = () => {
	return (
		<section id="rewards_table">
			<Grid>
				<Row>
					<Col md={12}>
						<Table striped bordered responsive>
							<thead>
								<tr>
									<th>Site Category</th>
									<th>Task Category</th>
									<th>Specific Task</th>
									<th>Task Tier - Reward</th>
									<th>Proof Req.</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Video</td>
									<td>Youtube, Vimeo, etc</td>
									<td>Post Online Video</td>
									<td>
										<ul>
											<li>1 post - 10</li>
											<li>10 - 100 views - 25</li>
											<li>100 - 250 views - 75</li>
											<li>250 - 500 views - 100</li>
											<li>500+ views - 150</li>
										</ul>
									</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Video (Tutorial)</td>
									<td>Tutorial Video Bonus</td>
									<td>Videos that demonstrate how to do something Telos-related (generally how to use a wallet, app, node, etc) in a clear, concise, positive manner</td>
									<td>Double the value of a general purpose video</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Social Media</td>
									<td>Facebook, LinkedIn, Google+, VK, Oknaklassniki, QQ, QZone Posts (and</td>
									<td>Post on site</td>
									<td>
										<ul>
											<li>1 post - 5</li>
											<li>1 - 10 Likes - 10</li>
											<li>11 - 25 Likes - 25</li>
											<li>25 - 75 Likes - 50</li>
											<li>76 - 500 Likes - 75</li>
											<li>500+ Likes - 125</li>
										</ul>
									</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Micro-Blogging</td>
									<td>Twitter, Weibo Posts (and similar public messaging services</td>
									<td>Post on Twitter</td>
									<td>
										<ul>
											<li>1 post - 3</li>
											<li>1 - 10 Likes/Retweets - 10</li>
											<li>11 - 25 Likes/Retweets - 15</li>
											<li>25 - 75 Likes/Retweets - 30</li>
											<li>76 - 150 Likes/Retweets - 75</li>
											<li>150+ Likes/Retweets - 150</li>
										</ul>
									</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Article-based Forums</td>
									<td>Medium, Steemit, Reddit, Baidu Tieba article writing</td>
									<td>Post on Medium or Steemit and similar blogging sites including > 250 word posts/responses on Reddit.</td>
									<td>1 post - 50</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Forums and Chats</td>
									<td>Forum or Chat posts</td>
									<td>Post or reply on site</td>
									<td>
										<ul>
											<li>1 post - 10</li>
											<li>1 replay (no repeats) - 3</li>
										</ul>
									</td>
									<td>Link to forum with username</td>
								</tr>
								<tr>
									<td>Misc. Content</td>
									<td>Unforseen but usable content</td>
									<td>Technology tools (Blockchain explorers, tools kits, etc.</td>
									<td>Unknown - Case by case</td>
									<td>Case by case</td>
								</tr>
								<tr>
									<td>Q&A and Tech Forums</td>
									<td>Quora, Technical and Tutorial articles</td>
									<td>Creating an article meant to demonstrate how to do something on Telos and/or EOSIO programming that also prominently mentions Telos specifically in a neutral or positive light</td>
									<td>1 post - 50</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Image-based Social Media</td>
									<td>Instagram, image posts/work</td>
									<td>Graphic content, infographics, gifs, memes</td>
									<td>1 post - 50</td>
									<td>Link</td>
								</tr>
								<tr>
									<td>Social Media Admin Work</td>
									<td>Forum Admin</td>
									<td>Managing a forum group top to bottom, keeping it on target, posting relevant articles, replying, etc</td>
									<td>
										<ul>
											<li>3 - 10 Users - 25</li>
											<li>11 - 50 Users - 50</li>
											<li>51 - 100 Users - 100</li>
											<li>101 - 250 Users - 150</li>
											<li>251+ Users - 200</li>
										</ul>
									</td>
									<td>Link to forum with username and details of work</td>
								</tr>
								<tr>
									<td>Physical Social Gatherings</td>
									<td>Meetups, etc.</td>
									<td>Create or speak at a Meetup or similar social group</td>
									<td>
										<ul>
											<li>1 - 2 attendees - 50</li>
											<li>3 - 5 attendees - 75</li>
											<li>6 - 10 attendees - 100</li>
											<li>11 - 20 attendees - 125</li>
											<li>21+ attendees - 150</li>
										</ul>
									</td>
									<td>Photos, Link to invite</td>
								</tr>
							</tbody>
						</Table>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};