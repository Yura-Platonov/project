import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as IconMenuClose } from '../../images/IconMenuClose.svg'
import { ReactComponent as IconMenuOpen } from '../../images/IconMenuOpen.svg'
import { ReactComponent as Logo } from '../../images/Logo.svg'
import css from './Header.module.css'

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	const location = useLocation()

	const toggleMenu = () => {
		setMenuOpen(prevState => !prevState)
	}

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

	let borderLeftClass
	switch (location.pathname) {
		case '/':
			borderLeftClass = css.borderLeftHome
			break
		case '/zabudowania':
			borderLeftClass = css.borderLeftNieruchomość
			break
		case '/technika':
			borderLeftClass = css.borderLeftTechnika
			break
		case '/praca':
			borderLeftClass = css.borderLeftKariera
			break
		default:
			borderLeftClass = css.borderLeftHome
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
			<button onClick={toggleMenu} className={css.menuButton}>
				{menuOpen ? <IconMenuClose /> : <IconMenuOpen />}
			</button>
			{menuOpen && (
				<div className={css.mobileMenu}>
					<div className={borderLeftClass}></div>
					<ul className={css.mobileNavList}>
						<li className={css.mobileNavItem}>
							<NavLink
								to='/'
								onClick={() => {
									scrollToTop()
									setMenuOpen(false)
								}}
								className={css.mobileNavLink}
							>
								Strona główna
							</NavLink>
						</li>
						<li className={css.mobileNavItem}>
							<NavLink
								to='/zabudowania'
								onClick={() => {
									scrollToTop()
									setMenuOpen(false)
								}}
								className={css.mobileNavLink}
							>
								Sprzedaż nieruchomości
							</NavLink>
						</li>
						<li className={css.mobileNavItem}>
							<NavLink
								to='/technika'
								onClick={() => {
									scrollToTop()
									setMenuOpen(false)
								}}
								className={css.mobileNavLink}
							>
								Sprzęt budowlany
							</NavLink>
						</li>
						<li className={css.mobileNavItem}>
							<NavLink
								to='/praca'
								onClick={() => {
									scrollToTop()
									setMenuOpen(false)
								}}
								className={css.mobileNavLink}
							>
								Praca
							</NavLink>
						</li>
					</ul>
				</div>
			)}
		</header>
	)
}

export default Header
