import React, { useEffect } from 'react'
import DomyMain from '../../components/DomyMain/DomyMain'
import DomyWelcome from '../../components/DomyWelcome/DomyWelcome'
import ContactForm from '../../components/Form/Form'

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
			<ContactForm />
		</>
	)
}

export default Domy
