import React from 'react';
import {Col} from 'react-bootstrap';

const FrontPage = () => {

	return (
		<div>
			<Col md={8}>
				<article className='front_page'>
					<h2>The Telos Project</h2>
					<em className='page_subheading'>Telos – The ultimate purpose of a thing. (from Greek τέλος).</em>
					<blockquote className='blockquote_mobile'>
						<p>“The telos of an acorn is to become an oak tree.”</p>
						<footer>
							<cite>Aristotle</cite>
						</footer>
					</blockquote>
					<p>The Eos system offers an amazing promise of a new economy. Unfortunately, high centralization undermines this promise. Just 1.6% of Eos holders own 90% of the tokens. The token ownership, governance, and block producer selection are all compromised by the existence of massive “whale” addresses that can push Eos in any direction they want without regard to the majority of tokenholders, developers, or even the overall health of the network.</p>
					<p>Telos is an alternative network based on the same Eosio code that aims to solve the key problems of the Eos. The Telos network offers:</p>
					<ol>
						<li>Economic decentralization – No whale addresses</li>
						<li>Equitable pay structure for block producers and standbys</li>
						<li>DApp developer-friendly with proprietary DApps and lower cost deployment</li>
						<li>Additional token holder protection and pre-activation resolution of stolen tokens</li>
					</ol>
					<blockquote className='blockquote_mobile'>
						<p>“The EOS dream will not come true until it fixes its centralization problems.”</p>
						<footer>
							<cite>Juan M. Villaverde, Weiss Ratings</cite>
						</footer>
					</blockquote>
					<h2>The Telos Fork</h2>
					<p>Telos forks Eos and updates the following elements:</p>
					<ul>
						<li>
							Remove the extreme economic power of a small number of “whales” by capping the value of every address in the genesis snapshot at 40,000 Telos (TLOS) tokens.
							<ul>
								<li>Eliminates whales’ control of block producer selection and token holder voting.</li>
							</ul>
						</li>
						<li>Exchanges will be given a process for petitioning to have TLOS tokens be created for their EOS owners at the time of the snapshot, provided that they agree to list TLOS and distribute tokens, capped at 40,000 per account holder</li>
						<li>
							Revise block producer (BP) and standby pay model to better secure the network.
							<ul>
								<li>A fixed 21 block producers plus 30 standbys based on voting.</li>
								<li>Equalize pay among block producers and standbys. All BPs will be paid the same amount and all standbys will be paid 50% the BP rate.</li>
								<li>Standbys will rotate into block production for a short time on a regular basis (every 3 days) to earn their pay and prove that they are ready to produce at any time.</li>
								<li>Active BPs that fail to produce 15 blocks in a row will be temporarily replaced by a standby BP (after 30 minutes instead of after 3 hours under Eos rules).</li>
								<li>BPs and standbys are penalized for missed blocks.</li>
								<li>This model will reduce incidence of network pauses due to 6 or more BPs becoming inactive.</li>
								<li>BPs and standbys will have a clear minimum requirement in terms of information disclosure, practices, and hardware/connectivity – any that do not meet minimum will be prevented from serving regardless of voting.</li>
								<li>Statistics on BP/Stand-by performance will be published to empower voters toward more reliable BPs</li>
							</ul>
						</li>
						<li>
							Telos code review/testing
							<ul>
								<li>The block producers or a body elected by them will review code for security and value.</li>
								<li>New code releases will be live tested on a private testnet maintained by all block producers and standbys prior to mainnet activation.</li>
								<li>Block producers and standbys will coordinate updates based on private testnet results.</li>
							</ul>
						</li>
						<li>
							Telos DApp developers may designate original code portions of their DApps to be proprietary or open source. (All Eos DApps must be open source which will limit participation by many potential developers.)
							<ul>
								<li>All software developed by developers paid as Telos block producers, code reviewers, or grant recipients within the past 6 months must be open source.</li>
							</ul>
						</li>
						<li>Telos will reduce annual inflation to 2-2.5% compared to 5%.</li>
						<li>Telos addresses will not be destroyed after 3 years of non-use. This feature of Eos is unfair and unnecessary and will not be implemented in Telos.</li>
					</ul>
					<p>Telos will be launched by a consortium of Eos block producer candidates who took part in the Eos Mainnet Launch Group (EMLG). We are well versed in the mechanics of launching and running the mainnet since we have done it before.</p>
					<p>We will distribute an entirely new token, TLOS, to those listed on the Eos genesis snapshot with a few modifications:</p>
					<ul>
						<li>All genesis addresses will be capped at 40,000 TLOS;</li>
						<li>All addresses that can prove they were stolen prior to launch will be repatriated to their true owners;</li>
						<li>New tokens will be generated to compensate the ABPs and fund the Telos Foundation Ltd – an organization for funding work important to the Telos network before worker proposals can be funded.</li>
						<li>Exchanges can petition to have their accounts re-created by the ABPs or BPs by agreeing to list TLOS for exchange and to distribute TLOS tokens to their EOS token holders as of the snapshot, capped at 40,000 per account holder.</li>

					</ul>
					<p>Exchanges can be expected to list TLOS due to pressure from their customers who want to receive the tokens—providing a method for exchange.</p>
					<p>The Telos network is likely to be more stable because block producers will be selected by voting from a broad community based on capability rather than a small number of whales based on affiliation. Also, block producers who fail to produce blocks will be rotated out within 30 minutes (15 missed blocks) as opposed to 3 hours. Additionally, standby block producers will be enabled and required to produce blocks every 72 hours in order to prove they are constantly ready. This semi-regular schedule provides needed downtime to block producers to maintain and update their servers, lowering the cost of operation. It also includes more standby BPs in governance as their votes will factor into block producer voting. This approach means proven standby capability and greater network resiliency which will likely result in fewer network pauses.</p>
					<p>Developers are likely to prefer the Telos system because they may designate some DApps as proprietary and therefore worth their development investment. The Telos network will work to lower deployment costs by keeping RAM availability commensurate with network need to reduce RAM hoarding by early participants. This should keep the cost of deploying DApps lower than on Eos. In all other ways, the Telos network will work to remain compatible with the Eos mainnet software so that DApps can be run interchangeably on either network.</p>
					<p>Token holders can be expected to be more engaged because their votes matter more compared to Eos, where only the whale votes really count. Analysts such as Weiss Ratings are likely to give higher valuations to Telos than Eos, since they have already warned about centralization as a severe problem with the Eos system and suggested limited voting of large accounts and incorporating more block producers – both of which Telos accomplishes. The TLOS token supply will be between one-fifth and one-third that of EOS depending on exchange participation. Given all of these advantages, TLOS may come to have a greater value than EOS.</p>
					<h2>A Fresh Start with Telos</h2>
					<p>The Eos mainnet launch has revealed numerous important shortcomings of the system. Many of these problems will be solved in time. Telos has the benefit of a clean slate to deal with these problems head on and solve the most pressing problems immediately on launch. The Telos network offers a fresh start to run the Eosio software on a network that focuses on providing clear and immediate value to DApp developers and token holders.</p>
				</article>
			</Col>
			<Col md={4}>
				<aside className='front_page_sidebar'>
					<blockquote>
						<p>“The telos of an acorn is to become an oak tree.”</p>
						<footer>
							<cite>Aristotle</cite>
						</footer>
					</blockquote>
					<blockquote>
						<p>“The EOS dream will not come true until it fixes its centralization problems.”</p>
						<footer>
							<cite>Juan M. Villaverde, Weiss Ratings</cite>
						</footer>
					</blockquote>
				</aside>
			</Col>
		</div>
	);
};

export default FrontPage;