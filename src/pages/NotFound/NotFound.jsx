import React from 'react'
import css from './NotFound.module.css'

const NotFound = () => (
	<div className={css.notFound}>
		<h1>404</h1>
		<p>Strona, której szukasz, nie została znaleziona.</p>
		<a href='/' className={css.link}>
			Wróć do strony głównej
		</a>
	</div>
)

export default NotFound
