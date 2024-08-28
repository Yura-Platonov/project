import React from 'react'
import css from './TechnikaWelcome.module.css'

const TechnikaWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<h1 className={css.title}>Wynajem sprzętu budowlanego</h1>
			<div className={css.container}>
				<p className={css.text}>Z nami budujesz pewnie!</p>
				<p className={css.textPhone}>+48 605 055 346</p>
			</div>
		</section>
	)
}

export default TechnikaWelcome
