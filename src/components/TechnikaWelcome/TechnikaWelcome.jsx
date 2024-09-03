import React from 'react'
import css from './TechnikaWelcome.module.css'

const TechnikaWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<h1 className={css.title}>Wynajem sprzętu budowlanego</h1>
			<div>
				<p className={css.text}>Z nami budujesz pewnie!</p>
				<a href='tel:+48605055346' className={css.textPhone}>
					+48 605 055 346
				</a>
			</div>
		</section>
	)
}

export default TechnikaWelcome
