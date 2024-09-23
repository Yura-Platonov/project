// import React, { useEffect } from 'react'
// import NieruchomośćFirst from '../../components/NieruchomośćFirst/NieruchomośćFirst'
// import NieruchomośćFourth from '../../components/NieruchomośćFourth/NieruchomośćFourth'
// import NieruchomośćSecond from '../../components/NieruchomośćSecond/NieruchomośćSecond'
// import NieruchomośćThird from '../../components/NieruchomośćThird/NieruchomośćThird'
// import NieruchomośćWelcome from '../../components/NieruchomośćWelcome/NieruchomośćWelcome'

// const Nieruchomość = () => {
// 	useEffect(() => {
// 		window.scrollTo({
// 			top: 0,
// 		})
// 	}, [])

// 	return (
// 		<>
// 			<NieruchomośćWelcome />
// 			<NieruchomośćFirst />
// 			<NieruchomośćSecond />
// 			<NieruchomośćThird />
// 			<NieruchomośćFourth />
// 		</>
// 	)
// }

// export default Nieruchomość

import React, { useEffect, useRef, useState } from 'react'
import NieruchomośćFirst from '../../components/NieruchomośćFirst/NieruchomośćFirst'
import NieruchomośćFourth from '../../components/NieruchomośćFourth/NieruchomośćFourth'
import NieruchomośćSecond from '../../components/NieruchomośćSecond/NieruchomośćSecond'
import NieruchomośćThird from '../../components/NieruchomośćThird/NieruchomośćThird'
import NieruchomośćWelcome from '../../components/NieruchomośćWelcome/NieruchomośćWelcome'

const Nieruchomość = () => {
	const [loadedSections, setLoadedSections] = useState([
		false,
		false,
		false,
		false,
	])
	const sectionRefs = useRef([])

	useEffect(() => {
		window.scrollTo({
			top: 0,
		})
	}, [])

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const index = sectionRefs.current.indexOf(entry.target)
						if (index >= 0) {
							setLoadedSections(prev => {
								const newLoadedSections = [...prev]
								newLoadedSections[index] = true
								return newLoadedSections
							})
							observer.unobserve(entry.target)
						}
					}
				})
			},
			{ threshold: 0.1 }
		)

		sectionRefs.current.forEach(section => {
			if (section) {
				observer.observe(section)
			}
		})

		return () => {
			observer.disconnect()
		}
	}, [])

	return (
		<>
			<NieruchomośćWelcome />
			<div ref={el => (sectionRefs.current[0] = el)}>
				{loadedSections[0] && <NieruchomośćFirst />}
			</div>
			<div ref={el => (sectionRefs.current[1] = el)}>
				{loadedSections[1] && <NieruchomośćSecond />}
			</div>
			<div ref={el => (sectionRefs.current[2] = el)}>
				{loadedSections[2] && <NieruchomośćThird />}
			</div>
			<div ref={el => (sectionRefs.current[3] = el)}>
				{loadedSections[3] && <NieruchomośćFourth />}
			</div>
		</>
	)
}

export default Nieruchomość
