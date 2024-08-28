import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/technikaSection8.1.jpg'
import image2 from '../../images/technikaSection8.2.jpg'
import ImageModal from '../ImageModal/ImageModal'
import css from './TechnikaEighth.module.css'

const images = [image1, image2]

const TechnikaEighth = () => {
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
			<h2 className={css.technikaTitle}>Niwelator laserowy NL520R</h2>
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
						<li className={css.specificationItem}>
							Zasięg pracy - do 500 m z detektorem
						</li>
						<li className={css.specificationItem}>
							dokładność - ±1 mm na 10 m
						</li>
						<li className={css.specificationItem}>
							Zakres samopoziomowania - ±5°
						</li>
						<li className={css.specificationItem}>
							Prędkość obrotowa głowicy - 600 obr/min
						</li>
						<li className={css.specificationItem}>
							Klasa ochrony - IP54 (odporność na pył i bryzgi wody)
						</li>
						<li className={css.specificationItem}>
							Funkcje - możliwość pracy w trybie manualnym i automatycznym,
							funkcja alarmu przy naruszeniu poziomu
						</li>
						<li className={css.specificationItem}>
							Źródło zasilania - akumulator o dużej pojemności, czas pracy do 40
							godzin
						</li>
					</ul>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						Planowanie i projektowanie systemów nawadniających
					</span>{' '}
					– wykorzystaj niwelator laserowy do pomiaru różnic wysokości w
					terenie, co pozwoli na odpowiednie ustawienie dysz w celu
					równomiernego pokrycia obszaru wodą.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Definiowanie ukształtowania terenu{' '}
					</span>
					– niwelator pomoże precyzyjnie określić różnice wysokościowe terenu.
					Dzięki temu możliwe jest dokładne zaplanowanie obszarów wymagających
					dodania lub usunięcia ziemi.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Wyznaczanie spadków terenu{' '}
					</span>
					– przy planowaniu systemów odwodnieniowych, ścieżek czy zbiorników
					wodnych, kluczowe jest określenie naturalnego kierunku spływu wody.
					Niwelator umożliwia precyzyjne wyznaczenie odpowiednich spadków
					terenu, co jest niezbędne do skutecznego zaprojektowania tych
					elementów.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Budowanie schodów i tarasów{' '}
					</span>
					– niwelator jest wykorzystywany do precyzyjnego określenia różnic
					wysokości przy projektowaniu odpowiednich stopni czy poziomów.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Określanie wysokości składowych ogrodu {' '}
					</span>
					– z pomocą niwelatora laserowego ustal wysokości poszczególnych
					elementów architektury względem siebie tj. murków, altan, ogrodzeń czy
					tarasów.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Planowanie zbiorników wodnych{' '}
					</span>
					– przy planowaniu kaskad czy oczek wodnych, ważne jest, aby dno miało
					odpowiednie nachylenie i głębokość. Dzięki niwelatorowi unikniecie
					pomyłek przy określaniu parametrów.
					<br />
					<br />
					<span className={css.specificationItemTextAccent}>
						Planowanie tarasów i ścieżek{' '}
					</span>
					– niwelator pomoże upewnić się, czy są one odpowiednio wypoziomowane
					lub mają planowany spadek.
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

export default TechnikaEighth
