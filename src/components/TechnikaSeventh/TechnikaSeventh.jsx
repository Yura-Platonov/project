import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/technikaSection7.1.jpg'
import image2 from '../../images/technikaSection7.2.jpg'
import image3 from '../../images/technikaSection7.3.jpg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../TechnikaFirst/TechnikaFirst.module.css'

const images = [image1, image2, image3]

const TechnikaSeventh = () => {
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
			<h2 className={`${css.technikaTitle} ${css.technikaTitleSolo}`}>
				Zagęszczarka rewersyjna Ammann APH 5020 DE
			</h2>
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
								loading='lazy'
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
						<li className={css.specificationItem}>ciężar - 450mm</li>
						<li className={css.specificationItem}>szerokość maszyny - 450mm</li>
						<li className={css.specificationItem}>długość maszyny - 900mm</li>
						<li className={css.specificationItem}>wysokość maszyny -  775mm</li>
						<li className={css.specificationItem}>
							długość płyty podstawy - 450mm
						</li>
						<li className={css.specificationItem}>
							maksymalna częstotliwość wubracji - 65Hz
						</li>
						<li className={css.specificationItem}>
							powierzchnia robocza - 650m2/h
						</li>
						<li className={css.specificationItem}>
							głębokość zagęszczania (maks.) - 70cm
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
						Zagęszczarka rewersyjna Ammann APH 5020 DE
					</span>{' '}
					- to wydajne i wszechstronne urządzenie przeznaczone do zagęszczania
					gruntów, żwiru oraz innych materiałów sypkich. Dzięki swojej
					rewersyjnej funkcji, zagęszczarka umożliwia ruch zarówno do przodu,
					jak i do tyłu, co pozwala na precyzyjną pracę nawet w trudno
					dostępnych miejscach. Wyposażona w mocny silnik Diesla, APH 5020 DE
					oferuje wysoką wydajność przy niskim zużyciu paliwa. Solidna
					konstrukcja i łatwość obsługi sprawiają, że jest to niezawodne
					narzędzie w każdej sytuacji wymagającej intensywnego zagęszczania
					gruntu, szczególnie na budowach.
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

export default TechnikaSeventh
