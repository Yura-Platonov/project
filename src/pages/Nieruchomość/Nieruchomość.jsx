import React, { useEffect } from 'react'
import NieruchomośćFirst from '../../components/NieruchomośćFirst/NieruchomośćFirst'
import NieruchomośćFourth from '../../components/NieruchomośćFourth/NieruchomośćFourth'
import NieruchomośćSecond from '../../components/NieruchomośćSecond/NieruchomośćSecond'
import NieruchomośćThird from '../../components/NieruchomośćThird/NieruchomośćThird'
import NieruchomośćWelcome from '../../components/NieruchomośćWelcome/NieruchomośćWelcome'

const Nieruchomość = () => {
	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	return (
		<>
			<NieruchomośćWelcome />
			<NieruchomośćFirst />
			<NieruchomośćSecond />
			<NieruchomośćThird />
			<NieruchomośćFourth />
		</>
	)
}

export default Nieruchomość
