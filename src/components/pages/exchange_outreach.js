import React from 'react';
import {Grid, Row, Col, Table} from 'react-bootstrap';
import {Helmet} from 'react-helmet';
import '../../styles/exchange_outreach.css';
import hashtag_graphic from '../../img/hashtag_graphic.jpg';

const ExchangeOutreach = () => {
	return (
		<div className='exchange_outreach'>
			<Helmet>
				<title>Telos Hashtag Campaign</title>
				<meta name="description" content="Be rewarded for using your influence to get TLOS tokens listed your cryptocurrency exchange. Anyone, including those who opted to keep their ERC-20 EOS tokens on an exchange during the Genesis snapshot, can participate in our hashtag campaign to spread the word and earn additional TLOS tokens." />
			</Helmet>
			<ExchangeIntro />
			<ExchangeRules />
			<ExchangeParticipation />
			<ExchangeRegister />
		</div>
	);
};

const ExchangeIntro = () => {
	return (
		<section id='exchange_intro'>
			<Grid>
				<Row>
					<Col md={8}>
						<h1>Telos Hashtag Campaign</h1>
						<p>Millions of the ERC-20 EOS tokens held on exchanges went unregistered, but we are determined to ensure that every TLOS holder can access their tokens.</p>
						<p>When the Telos network launches, approximately 44% of potential tokens could be held on exchanges. Community members who kept their ERC-20 EOS tokens on an exchange during the Genesis Snapshot will receive their free TLOS tokens only if their exchange agrees to list TLOS.</p>
						<p>Be rewarded for using your influence to get TLOS tokens listed your cryptocurrency exchange. Anyone, including those who opted to keep their ERC-20 EOS tokens on an exchange during the Genesis snapshot, can participate in our hashtag campaign to spread the word and earn additional TLOS tokens.</p>	
						<p>
							<em>Payouts for this campaign will be paid according to the following guidelines:</em>
						</p>
					</Col>
					<Col md={4}>
						<img className='img-responsive' src={hashtag_graphic} alt='hashtag campaign' />
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const ExchangeRules = () => {
	return (
		<section id='exchange_rules'>
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
						<ol>
							<li>All items subject to change and investigation. Gaming the system or getting rewards on a technicality will not be allowed.</li>
							<li>Participants must register with the Exchange Outreach Campaign Registration form below, providing their user names in the various platforms.</li>
						</ol>
					</Col>
					<Col md={4}>
						<ol start='3'>
							<li>All participants who earn tokens will receive a free Telos Address!</li>
							<li>All posts are required to have links to an official Telos website or Telos social media page.</li>
						</ol>
					</Col>
					<Col md={4}>
						<ol start='5'>
							<li>All judges' determinations are final and cannot be appealed or arbitrated.</li>
							<li>If the amount earned by participants exceeds the 100,000 TLOS allocated, then all timely submissions will be reduced in like percentage to pay each participant a pro rata share.</li>
						</ol>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const ExchangeParticipation = () => {
	return (
		<section id='exchange_participation'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h2>How to Participate</h2>
						<ul>
							<li>
								Community members will need to contact the exchanges via the following social media channels to request their tokens:
								<ul className='sublist'>
									<li><a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a></li>
									<li><a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>Twitter</a></li>
									<li><a href='https://www.weibo.com/' target='_blank' rel='noopener noreferrer'>Weibo</a></li>
								</ul>
							</li>
							<li>
								Using the following hashtags:  <strong>#IWantMyTLOS</strong>, <strong>#HelloTelos</strong> and <strong>#TLOS</strong>
							</li>
							<li>
								Tag at least one exchange with their official account name @officialname. If your exchange is not listed below, simply look it up on your desired platform. Suggested exchanges are:
								<ul className='sublist'>
									<li>@Binance (Twitter)</li>
									<li>@Bitfinex (Twitter)</li>
									<li>@HuobiGlobal ‏& @HuobiGroup (Twitter)</li>
									<li>@krakenfx (Twitter)</li>
									<li>@kucoincom (Twitter)</li>
									<li>@BittrexExchange (Twitter)</li>
									<li>@hitbtc (Twitter)</li>
									<li>@Cryptopia_NZ (Twitter)</li>
									<li>@gate_io (Twitter)</li>
									<li>@OKEx_ ‏ (Twitter)</li>
									<li>@OpenLedgerDEX (Twitter)</li>
									<li>@Chaince_Group (Twitter)</li>
								</ul>
							</li>
							<li>
								This rewards campaign will run from:
								<ul className='sublist'>
									<li>Ongoing until announced</li>
								</ul>
							</li>
							<li>
								 TLOS will be rewarded according to the following chart:
							</li>
						</ul>
						<ExchangeRewardTable />
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const ExchangeRewardTable = () => {
	return (
		<div className='exchange_reward_table'>
			<Table striped bordered responsive>
				<thead>
					<tr>
						<th>Tier</th>
						<th>Reward</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1 post</td>
						<td>3</td>
					</tr>
					<tr>
						<td>2 - 10 Likes/Retweets</td>
						<td>10</td>
					</tr>
					<tr>
						<td>11 - 25 Likes/Retweets</td>
						<td>15</td>
					</tr>
					<tr>
						<td>26 - 75 Likes/Retweets</td>
						<td>30</td>
					</tr>
					<tr>
						<td>76 - 150 Likes/Retweets</td>
						<td>75</td>
					</tr>
					<tr>
						<td>150+ Likes/Retweets</td>
						<td>150</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

const ExchangeRegister = () => {
	return (
		<section id='exchange_register'>
			<header>
				<h2>To register your posts complete the form below:</h2>
			</header>
			<Grid>
				<Row>
					<Col md={8} mdOffset={2}>
						<iframe id='exchange_form' title='Exchange Form' src="https://docs.google.com/forms/d/e/1FAIpQLScB3lI_rlEKDesueqnTAwstid9EjnRI-Ruer9Vu6fCOpsXpAw/viewform?embedded=true" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default ExchangeOutreach;