import React from 'react'
import { KarieraInCompany } from '../../components/KarieraInCompany/KarieraInCompany'
import { KarieraVacancy } from '../../components/KarieraVacancy/KarieraVacancy'
import KarieraWelcome from '../../components/KarieraWelcome/KarieraWelcome'

const Kariera = () => {
	return (
		<>
			<KarieraWelcome />
			<KarieraInCompany />
			<KarieraVacancy />
		</>
	)
}

export default Kariera
