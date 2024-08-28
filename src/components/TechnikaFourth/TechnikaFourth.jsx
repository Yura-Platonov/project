import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import Modal from 'react-modal'
import image1 from '../../images/technikaSection4.1.jpg'
import image2 from '../../images/technikaSection4.2.jpg'
import css from './TechnikaFourth.module.css'

const images = [image1, image2]

const TechnikaFourth = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openModal = index => {
		setCurrentImageIndex(index)
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}

	const handleNextImage = () => {
		setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length)
	}

	const handlePrevImage = () => {
		setCurrentImageIndex(
			prevIndex => (prevIndex - 1 + images.length) % images.length
		)
	}

	return (
		<section className={css.technikaSection}>
			<h2 className={css.technikaTitle}>DIECI PEGASUS 50.21 OBROTOWA</h2>
			<div className={css.sliderContainer}>
				<Splide
					options={{ rewind: true, pagination: false }}
					aria-label='React Splide'
				>
					{images.map((image, index) => (
						<SplideSlide key={index}>
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className={css.splideImg}
								onClick={() => openModal(index)}
							/>
						</SplideSlide>
					))}
				</Splide>
			</div>
			<ul className={css.technikaList}>
				<li className={css.technikaItem}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY </h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>środek ciężkości - 500 mm</li>
						<li className={css.specificationItem}>
							nominalny obciąż. gran. przy LSP - 5t
						</li>
						<li className={css.specificationItem}>
							wysokość nad ziemią - 360mm
						</li>
						<li className={css.specificationItem}>
							maksymalna długość - 7150mm
						</li>
						<li className={css.specificationItem}>wysokość kabiny - 3020mm</li>
						<li className={css.specificationItem}>
							szerokość maszyny - 2380mm
						</li>
						<li className={css.specificationItem}>promień skrętu - 4430mm</li>
					</ul>
				</li>
				<li className={css.technikaItem}>
					<h3 className={css.technikaSubTitle}>
						PARAMETRY ROBOCZE UKŁADU JEZDNEGO{' '}
					</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							maksymalny udźwig - 5000 kg
						</li>
						<li className={css.specificationItem}>
							maksymalna wysokość podnoszenia - 20,50 m
						</li>
						<li className={css.specificationItem}>
							maksymalna wysokość na podporach stabilizujących - 20,50 m 
						</li>
						<li className={css.specificationItem}>
							maksymalna wysokość na kołach - 20,30 m
						</li>
						<li className={css.specificationItem}>
							siła szarpnięcia - 5700 daN
						</li>
						<li className={css.specificationItem}>siła pociągowa - 9400 daN</li>
						<li className={css.specificationItem}>
							maksymalna prędkość - 40 km/h
						</li>
					</ul>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						DIECI PEGASUS 50.21 OBROTOWA
					</span>{' '}
					- PEGASUS 50.21 wyróżnia się prostotą obsługi, wytrzymałością oraz
					niezawodnością. Maszyna posiada pełny komplet zabezpieczeń i urządzeń
					ochronnych, w tym ogranicznik udźwigu oraz awangardowe oprzyrządowanie
					zapewniające pełną kontrolę nad maszyną w każdej sytuacji, niezależnie
					od obciążenia, ładunku oraz prędkości. W skład wyposażenia wchodzą
					również podpory stabilizujące z funkcją automatycznego poziomowania
					oraz system elektronicznego sterowania (wykonany w technologii
					CANBUS), co pozwala na pracę w dowolnej pozycji.
					<br />
					<br />
					Seria PEGASUS obejmuje podnośniki teleskopowe (zarówno z obrotem
					ciągłym 360°, jak i nieciągłym) charakteryzujące się wyjątkową
					elastycznością zastosowań. Współpracują z dużą gamą akcesoriów, dzięki
					którym nadają się do wielu prac. W ten sposób jedna maszyna może
					służyć zarówno jako podnośnik teleskopowy, platforma do prac
					napowietrznych oraz żuraw.
				</p>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				className={css.modal}
				overlayClassName={css.overlay}
			>
				<button onClick={closeModal} className={css.closeButton}>
					Закрыть
				</button>
				<button onClick={handlePrevImage} className={css.navButton}>
					Назад
				</button>
				<img
					src={images[currentImageIndex]}
					alt={`Modal Slide ${currentImageIndex + 1}`}
					className={css.modalImage}
				/>
				<button onClick={handleNextImage} className={css.navButton}>
					Вперед
				</button>
			</Modal>
		</section>
	)
}

export default TechnikaFourth
