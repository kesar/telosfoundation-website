import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import sqrl_logo from '../../img/SQRL_Logo_1024px.png';

import '../../styles/how_to_vote.css';

const HowToVote = () => {
	return (
		<div className='how_to_vote'>
			<Intro />
			<OptionOne />
			<OptionTwo />
		</div>
	);
};

const Intro = () => {
	return (
		<section id='htv_intro'>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<h1>How to Vote!</h1>
						<h2>Telos block producers are selected by inverse weighted voting: the more block producers you vote for, the more weight your votes carry. This encourages token holders to vote for a more diverse group of block producer candidates and discourages those who seek to vote only for themselves and their affilieates, preventing the emergence of whale accounts such as those now dominating the EOS network.</h2>
						<h2>Every block producer has a 12 digit identification code that you enter to vote for them. There are two ways to vote for Block Producers:</h2>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const OptionOne = () => {
	return (
		<section id='htv_option_one'>
			<header>
				<h2>Option 1: Teclos - Native Telos Command Line Wallet</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p>You must install the Telos development environment on your computer in order to use cleos. You can download it from the <a href='https://github.com/Telos-Foundation/telos' target='_blank' rel='noopener noreferrer'>Telos Github Public Repository</a>.</p>
						<p><strong>Account Name [Your TBN Account Name]:</strong></p>
						<p>If you have teclos installed, you can copy paste this into your command line:</p>
						<code>./teclos.sh system voteproducer prods accountname goodblock -p accountname</code>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

const OptionTwo = () => {
	return (
		<section id='htv_option_two'>
			<header>
				<h2>Option 2: Sqrl Wallet</h2>
			</header>
			<Grid>
				<Row>
					<Col md={10} mdOffset={1}>
						<p className='option_two_intro'>Sqrl is a fork of the open source Greymass eos-voter wallet and offers new improvements such as multi-chain access, free account creation, block producer voting, and more. The user-friendly interface is perfect for token holders who do not feel comfortable running the native command line EOS wallet, cleos.</p>
						<ol>
							<li style={{position: 'relative', lineHeight: '40px'}}>
								Download Sqrl and create a free account: <img src={sqrl_logo} alt='sqrl logo' className='htv_sqrl_logo' />
								<br /><Link to='/downloads'>https://telosfoundation.io/downloads</Link>
								
								
							</li>
							<li>Generate public and private keys to create an account, or enter your EOS or Telos key to unlock your account if you already have one.</li>
							<li>Vote for Telos. Under the Producer Voting page, you will select up to 30 block producers and then submit your votes.</li>
						</ol>
						<p>Read this guide by Telos community member Justin for more detailed instructions on setting up a Sqrl wallet:</p>
						<p><a href='https://trybe.one/how-to-create-and-open-a-telos-account-using-sqrl' target='_blank' rel='noopener noreferrer'>https://trybe.one/how-to-create-and-open-a-telos-account-using-sqrl</a></p>
					</Col>
				</Row>
			</Grid>
		</section>
	);
};

export default HowToVote;