import React from 'react'
import css from './KarieraWelcome.module.css'

const KarieraWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			{/* <div className={css.container}> */}
			<p className={css.text}>Приєднуйся до нас!</p>
			<a href='tel:+48605055346' className={css.textPhone}>
				+48 605 055 346
			</a>
			{/* </div> */}
		</section>
	)
}

export default KarieraWelcome
