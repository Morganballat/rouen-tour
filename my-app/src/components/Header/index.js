import React from 'react';
import './style.scss';

const Header = () => (
	<div className='header'>
		<h1 className='header_title'>âme</h1>
		<h1 className='header_title'>&</h1>
		<h1 className='header_title'>lieu</h1>
		<nav className='header_nav'>
			<ul>
				<li>accueil</li>
				<li>votre rue</li>
				<li>nos actions</li>
				<li>on a besoin de vous</li>
				<li>Nos belles histoires</li>
				<li>mon compte</li>
				<li>déconnexion</li>
			</ul>
		</nav>
		<div className='header_footer'>
			<p className='header_footer-date'>2021</p>
			<p className='header_footer-détails'>détails</p>
		</div>
	</div>
);

export default Header;
