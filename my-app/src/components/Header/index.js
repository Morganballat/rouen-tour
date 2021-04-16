import React from 'react';
import './style.scss';

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
		<div className='header_footer'>
			<p className='header_footer-date'> 2021</p>
			<p className='header_footer-details'>détails</p>
		</div>
	</div>
);

export default Header;
