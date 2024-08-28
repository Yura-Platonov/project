import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import Modal from 'react-modal'
import image1 from '../../images/Photo1.1.jpg'
import image2 from '../../images/Photo1.2.jpg'
import image3 from '../../images/Photo1.3.jpg'
import css from './TechnikaSeventh.module.css'

const images = [image1, image2, image3]

const TechnikaSeventh = () => {
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
			<h2 className={css.technikaTitle}>
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
			<div className={css.technikaItemContainer}>
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

export default TechnikaSeventh
