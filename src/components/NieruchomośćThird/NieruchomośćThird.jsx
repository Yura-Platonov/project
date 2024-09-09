import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House3.jpg'
// import image2 from '../../images/technikaSection1.2.jpg'
// import image3 from '../../images/technikaSection1.3.jpg'
// import image4 from '../../images/technikaSection1.4.jpg'
// import image5 from '../../images/technikaSection1.5.jpg'
import { ReactComponent as HomeInside } from '../../images/homeInside.svg'
import { ReactComponent as HomeOutside } from '../../images/homeOutside.svg'
import { ReactComponent as HomeStairs } from '../../images/homeStairs.svg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../NieruchomośćFirst/NieruchomośćFirst.module.css'

const images = [image1]

const NieruchomośćThird = () => {
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
		<section className={css.houseSection}>
			<h2 className={css.houseTitle}>
				OSIEDLE Chopina – Kamień Pomorski Województwo zachodniopomorskie
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
								onClick={() => openModal(index)}
							/>
						</SplideSlide>
					))}
				</Splide>
			</div>
			<div className={css.houseItemContainerSmall}>
				<div className={css.specificationItemDivSmall}></div>
				<ul className={css.houseSpecificationList}>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>
							Powierzchnia użytkowa parteru
						</p>
						<HomeInside />
						<p className={css.houseSpecificationText}>111,21 m2</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>
							Powierzchnia użytkowa piętra{' '}
						</p>
						<HomeStairs />
						<p className={css.houseSpecificationText}>103,56 m2</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia działki </p>
						<HomeOutside />
						<p className={css.houseSpecificationText}>1100 m2</p>
					</li>
				</ul>
			</div>
			<div className={css.houseItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<div className={css.specificationContainerText}>
					<p className={css.specificationItemTextCenter}>
						Inwestycją już zrealizowaną i gotową na sprzedaży jest również
						budynek jednorodzinny wraz z garażem i zagospodarowanym ogrodem
						usytuowany na obrzeżach miasta Kamień Pomorski w bliskiej odległości
						( ok 6 km ) od morza <br />
						<br />
						Budynek zrealizowany został w technologii tradycyjnej , posadowiony
						jest na działce o powierzchni 1100m2 w sąsiedztwie lasku brzozowego
						na nowo powstającym osiedlu domów jednorodzinnych <br />
						<br />
						Kształt i charakter małej rezydencji doskonale podkreśla wysoki
						standard wykończenia.
						<br />
						<br />
						Charakterystyka jednego lokalu:
						<br />
						<br />
					</p>
					<p className={css.specificationItemText}>
						<span className={css.specificationItemTextAccentItalic}>Rynek</span>
						: pierwotny;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia użytkowa parteru
						</span>{' '}
						: 111,21 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia użytkowa piętra
						</span>
						: 103,56 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>
						: 1100 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pomieszczenia
						</span>{' '}
						: Parter – salon , kuchnia, pokój gościnny , łazienka z toaletą ,
						garaż , kotłownia;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pietro
						</span>{' '}
						: trzy sypialnie , dwie łazienki.
						<br />
						<br />
						Standard wykonania <br />
						a) Pod klucz.
						<br />
						Na piętrze możliwość przebudowy na mieszkanie o powierzchni 92 m2.
						<br />
						<br />
						<span className={css.specificationItemTextAccent}>
							Planowany termin przekazania obiektów: IV kwartał 2024r.{' '}
						</span>
					</p>
				</div>
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

export default NieruchomośćThird
