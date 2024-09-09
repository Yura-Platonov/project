import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House4.jpg'
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

const NieruchomośćFourth = () => {
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
						<p className={css.houseSpecificationText}>110,18 m2</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>
							Powierzchnia użytkowa piętra{' '}
						</p>
						<HomeStairs />
						<p className={css.houseSpecificationText}>107,23 m2</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia działki </p>
						<HomeOutside />
						<p className={css.houseSpecificationText}>1068 m2</p>
					</li>
				</ul>
			</div>
			<div className={css.houseItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<div className={css.specificationContainerText}>
					<p className={css.specificationItemTextCenter}>
						Następną inwestycja zrealizowaną i gotową na sprzedaży jest budynek
						o charakterze usługowo-mieszkalnym usytuowany na obrzeżach miasta
						Kamień Pomorski.
						<br />
						<br />
						Budynek zrealizowany został w technologii tradycyjnej .<br />
						<br />
						Cechą charakterystyczną niniejszych nieruchomości jest usytuowany w
						części parterowej wielostanowiskowy garaż o powierzchni ok 90 m2 .
						Duża wysokość umożliwia montaż podnośników samochodowych . Piętro
						przeznaczone jest na część mieszkalną . Budynek posadowiony jest na
						działce o powierzchni 1000m2 w sąsiedztwie lasku brzozowego .<br />
						<br />
						Budynek może mieć charakter prywatny oraz komercyjny.
						<br />
						<br />
						W części parterowej można prowadzić usługi, produkcje lub handel (
						np. warsztat samochodowy, drobną wytwórczość lub przeznaczyć
						pomieszczenia na magazyn lub sklep. ) Poddasze można przeznaczyć na
						wynajem krótko lub długoterminowy albo adoptować pod część prywatną
						– mieszkalną.
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
						: 110,18 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia użytkowa piętra
						</span>
						: 107,23 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>
						: 1068 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pomieszczenia
						</span>{' '}
						: Parter – garaż , kotłownia, pokój, biuro, łazienka z toaletą ,
						aneks kuchenny;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pietro
						</span>{' '}
						: cztery sypialnie , cztery łazienki .
						<br />
						<br />
						Standard wykonania <br />
						a) Pod klucz.
						<br />
						Na piętrze możliwość przebudowy na mieszkanie o powierzchni 105 m2.{' '}
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

export default NieruchomośćFourth
