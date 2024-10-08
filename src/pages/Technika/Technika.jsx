import React, { useEffect } from 'react'
import TechnikaEighth from '../../components/TechnikaEighth/TechnikaEighth'
import TechnikaFifth from '../../components/TechnikaFifth/TechnikaFifth'
import TechnikaFirst from '../../components/TechnikaFirst/TechnikaFirst'
import TechnikaFourth from '../../components/TechnikaFourth/TechnikaFourth'
import TechnikaSecond from '../../components/TechnikaSecond/TechnikaSecond'
import TechnikaSeventh from '../../components/TechnikaSeventh/TechnikaSeventh'
import TechnikaSixth from '../../components/TechnikaSixth/TechnikaSixth'
import TechnikaThird from '../../components/TechnikaThird/TechnikaThird'
import TechnikaWelcome from '../../components/TechnikaWelcome/TechnikaWelcome'

const Technika = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])
	return (
		<>
			<TechnikaWelcome />
			<TechnikaFirst />
			<TechnikaSecond />
			<TechnikaThird />
			<TechnikaFourth />
			<TechnikaFifth />
			<TechnikaSixth />
			<TechnikaSeventh />
			<TechnikaEighth />
		</>
	)
}

export default Technika
