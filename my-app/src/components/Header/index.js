import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import fbImage from '../../images/facebook.png';
import instaImage from '../../images/instagram.png';
import twitterImage from '../../images/twitter.png';
import youtubeImage from '../../images/youtube.png';

const Header = () => {
	console.log(window.location.pathname);

	// const a = document.getElementsByTagName('a');
	// const isActive = window.location.pathname ===  ;
	// const className = isActive ? 'active' : '';

	const homeClass = window.location.pathname === '/' ? 'active' : '';
	const placeClass = window.location.pathname === '/place' ? 'active' : '';
	const activitiesClass =
		window.location.pathname === '/activities' ? 'active' : '';
	const monumentsClass =
		window.location.pathname === '/monuments' ? 'active' : '';
	const historyClass = window.location.pathname === '/history' ? 'active' : '';
	const accountClass = window.location.pathname === '/account' ? 'active' : '';

	return (
		<div className='header'>
			<h1 className='header_title'>Rouen</h1>
			<h1 className='header_title'>Tour</h1>

			<input type='type' placeholder='RECHERCHER' />
			<nav className='header_nav'>
				<ul>
					<li className='header_links'>
						<a className={homeClass} href='/'>
							accueil
						</a>
					</li>
					<li className='header_links'>
						<a className={placeClass} href='/place'>
							Autour de Rouen
						</a>
					</li>
					<li className='header_links'>
						<a className={activitiesClass} href='/activities'>
							activités
						</a>
					</li>
					<li className='header_links'>
						<a className={monumentsClass} href='/monuments'>
							monuments
						</a>
					</li>
					<li className='header_links'>
						<a className={historyClass} href='/history'>
							histoire
						</a>
					</li>
					<li className='header_links'>
						<a className={accountClass} href='/account'>
							mon compte
						</a>
					</li>
					<li className='header_links'>
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
};

export default Header;
