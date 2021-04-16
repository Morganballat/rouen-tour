import React from 'react';
import './style.scss';

import fbImage from '../../images/facebook.png';
import instaImage from '../../images/instagram.png';
import twitterImage from '../../images/twitter.png';
import youtubeImage from '../../images/youtube.png';

const Header = () => (
	<div className='header'>
		<h1 className='header_title'>âme</h1>
		<h1 className='header_title'>&</h1>
		<h1 className='header_title'>lieu</h1>
		<input type='type' placeholder='RECHERCHER' />
		<nav className='header_nav'>
			<ul>
				<li>
					<a href='/'>accueil</a>
				</li>
				<li>
					<a href='/street'>votre rue</a>
				</li>
				<li>
					<a href='/acts'>nos actions</a>
				</li>
				<li>
					<a href='/missions'>on a besoin de vous</a>
				</li>
				<li>
					<a href='/stories'>Nos belles histoires</a>
				</li>
				<li>
					<a href='/account'>mon compte</a>
				</li>
				<li>
					<a href='/logout'>déconnexion</a>
				</li>
			</ul>
		</nav>
		<div className='header_social-network'>
			<img src={fbImage} alt='facebook' className='logo-social' />
			<img src={instaImage} alt='instagram' className='logo-social' />
			<img src={twitterImage} alt='twitter' className='logo-social' />
			<img src={youtubeImage} alt='youtube' className='logo-social' />
		</div>
		<div className='header_footer'>
			<p className='header_footer-date'> 2021</p>
			<p className='header_footer-details'>détails</p>
		</div>
	</div>
);

export default Header;
