import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import Modal from 'react-modal'
import image1 from '../../images/Photo1.1.jpg'
import image2 from '../../images/Photo1.2.jpg'
import image3 from '../../images/Photo1.3.jpg'
import css from './TechnikaSecond.module.css'

const images = [image1, image2, image3]

const TechnikaSecond = () => {
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
			<h2 className={css.technikaTitle}>MINIKOPARKA JCB 8020</h2>
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
					<h3 className={css.technikaSubTitle}>
						PARAMETRY ROBOCZE RAMIENIA KOPARKOWEGO
					</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							maksymalna głębokość kopania – 2,58 m
						</li>
						<li className={css.specificationItem}>
							zasięg na poziomie gruntu od osi obrotu ramienia – 4,02 m
						</li>
						<li className={css.specificationItem}>
							zasięg na poziomie gruntu w bok od osi maszyny – 2,67 m
						</li>
						<li className={css.specificationItem}>
							wysokość załadunku – 2,65 m
						</li>
						<li className={css.specificationItem}>
							udźwig z wysuwem – 430 kg{' '}
						</li>
						<li className={css.specificationItem}>wysokość lemiesza 175 mm </li>
						<li className={css.specificationItem}>
							szerokość lemiesza 1000/1360 mm{' '}
						</li>
					</ul>
				</li>
				<li className={css.technikaItem}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							wysokość transportowa - 2.83m
						</li>
						<li className={css.specificationItem}>
							szerokość transportowa - 1m
						</li>
						<li className={css.specificationItem}>
							długośc transportowa - 3.6 m
						</li>
						<li className={css.specificationItem}>
							szerokość łańcuchów - 250 mm
						</li>
						<li className={css.specificationItem}>
							masa transportowa: 2000 kg
						</li>
						<li className={css.specificationItem}>masa robocza: 2075 kg</li>
					</ul>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						MINIKOPARKA JCB 8020
					</span>{' '}
					- koparka gąsienicowa JCB 8020 CTS z ogrzewaną kabiną zamkniętą (
					Oryginalna kabina JCB ROPS/FOPS ). Waga: 2000 kg, gąsienice gumowe
					hydraulicznie rozsuwane, lemiesz spycharkowy, instalacja hydrauliczna,
					dwie prędkości jazdy wolna/szybka, dodatkowe oświetlenie robocze,
					łyżka koparkowa.
					<br />
					<br />
					Konstrukcja wysięgnika została tak zaprojektowana, aby przy zachowaniu
					jego lekkości zapewnić znakomitą wytrzymałość i trwałość.Opcjonalnie
					maszyna JCB 8018 wyposażona jest w dwie prędkości jazdy. Cecha ta ma
					szczególnie zastosowanie podczas pracy w trudnych warunkach kiedy to
					następuje automatyczna zmiana biegu wysokiego na niski w zależności od
					warunków pracy maszyny.
					<br />
					<br />
					Także oferujemy wybór łyżek do tego modelu maszyny : 100cm, 40cm i
					30cm.
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

export default TechnikaSecond
