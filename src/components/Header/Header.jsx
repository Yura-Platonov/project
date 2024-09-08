import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import css from './Header.module.css'

const Header = () => {
	const location = useLocation()

	let borderBottomClass
	switch (location.pathname) {
		case '/':
			borderBottomClass = css.borderBottomHome
			break
		case '/technika':
			borderBottomClass = css.borderBottomTechnika
			break
		case '/kariera':
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
				<Logo />
			</Link>
			<nav className={css.navigation}>
				<div className={css.navList}>
					<NavLink to='/' className={css.navLink}>
						Sprzedaż nieruchomości
					</NavLink>
					<NavLink to='/technika' className={css.navLink}>
						Sprzęt budowlany
					</NavLink>
					<NavLink to='/kariera' className={css.navLink}>
						Praca
					</NavLink>
				</div>
			</nav>
		</header>
	)
}

export default Header
