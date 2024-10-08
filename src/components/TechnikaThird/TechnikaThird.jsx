import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/technikaSection3.1.jpg'
import image2 from '../../images/technikaSection3.2.jpg'
import image3 from '../../images/technikaSection3.3.jpg'
import image4 from '../../images/technikaSection3.4.jpg'
import image5 from '../../images/technikaSection3.5.jpg'
import image6 from '../../images/technikaSection3.6.jpg'
import image7 from '../../images/technikaSection3.7.jpg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../TechnikaFirst/TechnikaFirst.module.css'

const images = [image1, image2, image3, image4, image5, image6, image7]

const TechnikaThird = () => {
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
			<h2 className={css.technikaTitle}>LADOWARKA TELESKOPOWA JCB 540-170</h2>
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
				<li className={`${css.technikaItem} ${css.technikaItemThird}`}>
					<h3 className={css.technikaSubTitle}>
						PARAMETRY ROBOCZE UKŁADU ŁADOWARKOWEGO
					</h3>
					<ul
						className={`${css.specificationList} ${css.specificationListThird}`}
					>
						Stabilizatory opuszczone:
						<li
							className={`${css.specificationItem} ${css.specificationItemThird}`}
						>
							udźwig maksymalny – 4 000 kg
						</li>
						<li className={css.specificationItem}>
							udźwig na pełną wysokość – 2 500 kg
						</li>
						<li className={css.specificationItem}>
							udźwig przy pełnym zasięgu do przodu – 800 kg
						</li>
						<li className={css.specificationItem}>
							wysokość podnoszenia – 16,70 m
						</li>
						<li className={css.specificationItem}>
							zasięg maksymalny– 12,50 m;
						</li>
					</ul>
					<ul
						className={`${css.specificationList} ${css.specificationListThird}`}
					>
						Stabilizatory podniesione:
						<li
							className={`${css.specificationItem} ${css.specificationItemThird}`}
						>
							udźwig maksymalny – 4 000 kg
						</li>
						<li className={css.specificationItem}>
							udźwig na pełną wysokość – 1000 kg
						</li>
						<li className={css.specificationItem}>
							udźwig przy pełnym zasięgu do przodu – 0 kg
						</li>
						<li className={css.specificationItem}>
							wysokość podnoszenia – 11,57 m
						</li>
						<li className={css.specificationItem}>
							zasięg maksymalny– 9,04 m;
						</li>
					</ul>
				</li>
				<li className={`${css.technikaItem} ${css.technikaItemThird}`}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							długość transportowa - 6,36m
						</li>
						<li className={css.specificationItem}>
							szerokość transportowa - 2,44m
						</li>
						<li className={css.specificationItem}>
							wysokość transportowa - 2,69m
						</li>
						<li className={css.specificationItem}>
							szerokość maszyny - 2380 mm
						</li>
						<li className={css.specificationItem}>waga - ok. 12066 kg</li>
					</ul>
				</li>
			</ul>
			<div
				className={`${css.technikaItemContainer} ${css.technikaItemContainerThird}`}
			>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						LADOWARKA TELESKOPOWA JCB 540-170
					</span>{' '}
					- duży zasięg ramienia w połączeniu z krótkim rozstawem osi daje
					szerokie możliwości wykonywania różnorodnych prac przy zachowaniu
					znakomitej zwrotności Dzięki imponującemu zasięgowi oraz dużej
					nośności, ta maszyna jest niezastąpiona na placu budowy, w rolnictwie
					oraz przy wszelkich pracach magazynowych.
					<br />
					<br />
					Ładowarka JCB 540-170 charakteryzuje się niezawodnością i prostotą
					obsługi, co znacząco zwiększa wydajność pracy. Solidna konstrukcja
					oraz zaawansowane technologie gwarantują długą żywotność i niskie
					koszty eksploatacji.
					<br />
					<br />
					Maksymalny zasięg roboczy: 17 metrów, co pozwala na precyzyjne
					podnoszenie i przemieszczanie ładunków na dużych wysokościach.
					<br />
					<br />
					Nośność: 4 000 kg, umożliwiająca efektywną pracę z ciężkimi
					materiałami. Wysokość podnoszenia: 13,8 m, co czyni ją idealnym
					rozwiązaniem do załadunku na wysokie platformy.
					<br />
					<br />
					Jeśli szukasz maszyny, która sprosta najbardziej wymagającym zadaniom,
					ta ładowarka teleskopowa jest idealnym wyborem. Zapraszamy do kontaktu
					i umówienia się na prezentację sprzętu!
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

export default TechnikaThird
