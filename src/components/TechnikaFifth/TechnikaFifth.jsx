import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/technikaSection5.1.jpg'
import image2 from '../../images/technikaSection5.2.jpg'
import image3 from '../../images/technikaSection5.3.jpg'
import image4 from '../../images/technikaSection5.4.jpg'
import image5 from '../../images/technikaSection5.5.jpg'
import image6 from '../../images/technikaSection5.6.jpg'
import image7 from '../../images/technikaSection5.7.jpg'
import image8 from '../../images/technikaSection5.8.jpg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../TechnikaFirst/TechnikaFirst.module.css'

const images = [image1, image2, image3, image4, image5, image6, image7, image8]

const TechnikaFifth = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	const openModal = index => {
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
			<h2 className={css.technikaTitle}>Wozidło budowlane TEREX TA 6 t</h2>
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
				<li className={`${css.technikaItem} ${css.technikaItemSolo}`}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY </h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>ładowność - 6000 kg</li>
						<li className={css.specificationItem}>napęd - 4x4</li>
						<li className={css.specificationItem}>długość - 4,4m</li>
						<li className={css.specificationItem}>szerokość -  2,3m</li>
						<li className={css.specificationItem}>wysokość - 1,9m</li>
						<li className={css.specificationItem}>
							wysokość z pałąkiem -  3,2m
						</li>
						<li className={css.specificationItem}>waga całkowita - 4410 kg</li>
						<li className={css.specificationItem}>
							limit pracy - 10 godzin na dobę
						</li>
					</ul>
				</li>
			</ul>
			<div
				className={`${css.technikaItemContainer} ${css.technikaItemContainerSolo}`}
			>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						Wozidło budowlane TEREX TA 6 t
					</span>{' '}
					- to wszechstronny i solidnie wykonany pojazd, który doskonale
					sprawdza się na placach budowy, szczególnie tam, gdzie potrzebna jest
					efektywność i niezawodność. Dzięki ładowności do 6 ton, ten model jest
					w stanie przewozić ciężkie materiały budowlane, takie jak ziemia,
					żwir, kamienie czy gruz, zapewniając przy tym stabilność i
					bezpieczeństwo w każdych warunkach terenowych.
					<br />
					<br />
					TEREX TA 6 t cechuje się mocnym silnikiem i doskonałą manewrowością,
					co pozwala na łatwe poruszanie się nawet w wąskich i trudnodostępnych
					miejscach. Pojazd jest wyposażony w prosty w obsłudze system
					sterowania, co ułatwia jego użytkowanie, nawet mniej doświadczonym
					operatorom. Dodatkowo, solidna konstrukcja i wysoka jakość materiałów
					użytych do produkcji zapewniają długą żywotność maszyny oraz minimalne
					wymagania dotyczące konserwacji.
					<br />
					<br />
					Dzięki tym wszystkim cechom, wozidło budowlane TEREX TA 6 t stanowi
					niezastąpione narzędzie na każdej budowie, gwarantując sprawny
					transport materiałów i przyczyniając się do ogólnej wydajności prac
					budowlanych.
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

export default TechnikaFifth
