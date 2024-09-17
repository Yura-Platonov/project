import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import { ReactComponent as Facebook } from '../../images/facebookFooter.svg'
import { ReactComponent as Gmail } from '../../images/gmailFooter.svg'
import css from './Footer.module.css'

const Footer = () => {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	return (
		<footer className={css.footer}>
			{/* <Link to='/'>
				<Logo className={css.logo} />
			</Link> */}
			<div className={css.containerColumn}>
				<nav className={css.navigation}>
					<div className={css.navList}>
						<div className={css.navItem}>
							<Link to='/' onClick={scrollToTop} className={css.navLink}>
								Strona główna
							</Link>
							<Link
								to='/zabudowania'
								onClick={scrollToTop}
								className={css.navLink}
							>
								Sprzedaż nieruchomości
							</Link>
						</div>
						<div className={css.navItem}>
							<Link
								to='/technika'
								onClick={scrollToTop}
								className={css.navLink}
							>
								Sprzęt budowlany
							</Link>
							<Link to='/praca' onClick={scrollToTop} className={css.navLink}>
								Praca
							</Link>
						</div>
					</div>
				</nav>
				<div className={css.contactInfoContainer}>
					<a href='tel:+48605055346' className={css.contactInfo}>
						+48 605 055 346
					</a>
					<a href='tel:+48570351830' className={css.contactInfo}>
						+48 570 351 830
					</a>
					<br />
					<a href='mailto:havrysh4@gmail.com' className={css.contactInfo}>
						havrysh4@gmail.com
					</a>
				</div>
			</div>
			<a
				href='https://www.google.com/maps/search/?api=1&query=ul.+Franiciszka+Walczaka+114,+66-400+Gorzów+Wielkopolski'
				target='_blank'
				rel='noopener noreferrer'
				className={css.address}
			>
				ul. Franciszka Walczaka 114, 66-400 Gorzów Wielkopolski
			</a>
			<div className={css.containerColumnSecond}>
				<Link to='/'>
					<Logo className={css.logo} />
				</Link>
				<div className={css.socialMediaContainer}>
					<a
						href='https://www.facebook.com/profile.php?id=61550639923473'
						target='_blank'
						rel='noopener noreferrer'
						className={css.socialMediaLink}
					>
						<Facebook />
					</a>
					<Gmail />
				</div>
			</div>
		</footer>
	)
}

export default Footer
