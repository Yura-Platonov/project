import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import Modal from 'react-modal'
import image1 from '../../images/Photo1.1.jpg'
import image2 from '../../images/Photo1.2.jpg'
import image3 from '../../images/Photo1.3.jpg'
import css from './TechnikaFirst.module.css'

const images = [image1, image2, image3]

const TechnikaFirst = () => {
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
			<h2 className={css.technikaTitle}>JCB 3CX KOPARKO-LADOWARKA 2015</h2>
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
			</div>
		</section>
	)
}

export default TechnikaFirst
