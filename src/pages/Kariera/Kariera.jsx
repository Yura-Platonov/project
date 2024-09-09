import React, { useEffect } from 'react'
import { KarieraInCompany } from '../../components/KarieraInCompany/KarieraInCompany'
import { KarieraVacancy } from '../../components/KarieraVacancy/KarieraVacancy'
import KarieraWelcome from '../../components/KarieraWelcome/KarieraWelcome'

const Kariera = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	return (
		<>
			<KarieraWelcome />
			<KarieraInCompany />
			<KarieraVacancy />
		</>
	)
}

export default Kariera
