import React from 'react'
import css from './NieruchomośćWelcome.module.css'

const NieruchomośćWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<h1 className={css.title}>Sprzedaż nieruchomości</h1>

			{/* <p className={css.text}>Z nami budujesz pewnie!</p>
			<a href='tel:+48605055346' className={css.textPhone}>
				+48 605 055 346
			</a> */}
		</section>
	)
}

export default NieruchomośćWelcome
