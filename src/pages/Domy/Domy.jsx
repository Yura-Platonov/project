import React, { useEffect } from 'react'
import DomyMain from '../../components/DomyMain/DomyMain'
import DomyWelcome from '../../components/DomyWelcome/DomyWelcome'

const Domy = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	return (
		<>
			<DomyWelcome />
			<DomyMain />
		</>
	)
}

export default Domy
