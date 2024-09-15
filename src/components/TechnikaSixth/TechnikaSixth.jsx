import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import video1 from '../../images/technikaSection6.0.mp4'
import image1 from '../../images/technikaSection6.1.jpg'
import image2 from '../../images/technikaSection6.2.jpg'
import image3 from '../../images/technikaSection6.3.jpg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../TechnikaFirst/TechnikaFirst.module.css'

const images = [video1, image1, image2, image3]

const TechnikaSixth = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openModal = (index, event) => {
		event.preventDefault()
		setCurrentImageIndex(index)
		setIsModalOpen(true)
		document.body.style.overflow = 'hidden'
	}

	const closeModal = () => {
		setIsModalOpen(false)
		document.body.style.overflow = 'auto'
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
			<h2 className={`${css.technikaTitle} ${css.technikaTitleSolo}`}>
				MERCEDES ACTROS SAMOCHOD CIEZAROWE Z HDS
			</h2>
			<div className={css.sliderContainer}>
				<Splide
					options={{ rewind: true, pagination: false }}
					aria-label='React Splide'
				>
					{images.map((media, index) => (
						<SplideSlide key={index}>
							{index === 0 ? (
								<video
									className={css.splideImg}
									// controls
									autoPlay
									muted
									loop
									onClick={e => openModal(index, e)}
								>
									<source src={media} type='video/mp4' />
									Your brouser doesnt support video.
								</video>
							) : (
								<img
									src={media}
									alt={`Slide ${index + 1}`}
									className={css.splideImg}
									onClick={e => openModal(index, e)}
								/>
							)}
						</SplideSlide>
					))}
				</Splide>
			</div>
			<ul className={css.technikaList}>
				<li className={`${css.technikaItem} ${css.technikaItemSolo}`}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY </h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>pojemność - 10 518 cm3</li>
						<li className={css.specificationItem}>
							dopuszczalna masa całkowita pojazdu - 26 000 kg
						</li>
						<li className={css.specificationItem}>
							{' '}
							długość przestrzeni ładunkowej - 6 600 mm
						</li>
						<li className={css.specificationItem}>
							szerokość przestrzeni ładunkowej - 2 490 mm
						</li>
						<li className={css.specificationItem}>
							wysokość przestrzeni ładunkowej - 1 000 mm
						</li>
						<li className={css.specificationItem}>
							całkowita masa holowania - 40000 kg
						</li>
						<li className={css.specificationItem}>ładowność - 12330 kg</li>
					</ul>
				</li>
			</ul>
			<div
				className={`${css.technikaItemContainer} ${css.technikaItemContainerSolo}`}
			>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						MERCEDES ACTROS z HDS
					</span>{' '}
					- to samochód ciężarowy, który łączy wysoką wydajność z
					wszechstronnością. Model ACTROS jest znany ze swojej niezawodności,
					mocy i nowoczesnych technologii. Jest wyposażony w hydrauliczny dźwig
					(HDS), który umożliwia przeprowadzanie prac załadunkowych i
					rozładunkowych bez konieczności używania dodatkowego sprzętu. Ten
					pojazd jest idealny do transportu ładunków wielkogabarytowych na
					placach budowy lub w innych branżach, gdzie potrzebne jest szybkie
					wykonanie ciężkich zadań. Dzięki swojej wytrzymałości i efektywności,
					MERCEDES ACTROS z HDS jest doskonałym wyborem dla profesjonalistów,
					którzy szukają niezawodnego i wielofunkcyjnego samochodu
				</p>
			</div>

			<ImageModal
				isModalOpen={isModalOpen}
				closeModal={closeModal}
				currentImageIndex={currentImageIndex}
				images={images}
				handleNextImage={handleNextImage}
				handlePrevImage={handlePrevImage}
			/>
		</section>
	)
}

export default TechnikaSixth
