import React, { useEffect } from 'react'
import DomyMain from '../../components/DomyMain/DomyMain'
import DomyWelcome from '../../components/DomyWelcome/DomyWelcome'
import ContactForm from '../../components/Form/Form'
import MapWithContactInfo from '../../components/MapWithContactInfo/MapWithContactInfo'

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
			<MapWithContactInfo />
		</>
	)
}

export default Domy
