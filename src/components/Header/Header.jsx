import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import css from './Header.module.css'

const Header = () => {
	const location = useLocation()

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	let borderBottomClass
	switch (location.pathname) {
		case '/':
			borderBottomClass = css.borderBottomHome
			break
		case '/zabudowania':
			borderBottomClass = css.borderBottomNieruchomość
			break
		case '/technika':
			borderBottomClass = css.borderBottomTechnika
			break
		case '/praca':
			borderBottomClass = css.borderBottomKariera
			break
		default:
			borderBottomClass = css.borderBottomDefault
	}

	return (
		<header className={css.header}>
			<div className={borderBottomClass}></div>
			<div className={css.borderBottom}></div>
			<Link to='/'>
				<Logo className={css.logo} />
			</Link>
			<nav className={css.navigation}>
				<div className={css.navList}>
					<NavLink to='/' onClick={scrollToTop} className={css.navLink}>
						Strona główna
					</NavLink>
					<NavLink
						to='/zabudowania'
						onClick={scrollToTop}
						className={css.navLink}
					>
						Sprzedaż nieruchomości
					</NavLink>
					<NavLink to='/technika' onClick={scrollToTop} className={css.navLink}>
						Sprzęt budowlany
					</NavLink>
					<NavLink to='/praca' onClick={scrollToTop} className={css.navLink}>
						Praca
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
