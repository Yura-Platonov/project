import React, { useEffect } from 'react'

const Domy = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	return (
		<div>
			<h1>Domy Page</h1>
			<p>Welcome to the Domy page! This is a placeholder component.</p>
		</div>
	)
}

export default Domy
