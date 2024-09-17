import React, { useEffect } from 'react'
import DomyWelcome from '../../components/DomyWelcome/DomyWelcome'

const Domy = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	return <DomyWelcome />
}

export default Domy
