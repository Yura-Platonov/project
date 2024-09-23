import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House3.1.jpg'
import image10 from '../../images/House3.10.jpg'
import image11 from '../../images/House3.11.jpg'
import image12 from '../../images/House3.12.jpg'
import image13 from '../../images/House3.13.jpg'
import image14 from '../../images/House3.14.jpg'
import image15 from '../../images/House3.15.jpg'
import image16 from '../../images/House3.16.jpg'
import image17 from '../../images/House3.17.jpg'
import image18 from '../../images/House3.18.jpg'
import image19 from '../../images/House3.19.jpg'
import image2 from '../../images/House3.2.jpg'
import image20 from '../../images/House3.20.jpg'
import image3 from '../../images/House3.3.jpg'
import image4 from '../../images/House3.4.jpg'
import image5 from '../../images/House3.5.jpg'
import image6 from '../../images/House3.6.jpg'
import image7 from '../../images/House3.7.jpg'
import image8 from '../../images/House3.8.jpg'
import image9 from '../../images/House3.9.jpg'
import video1 from '../../images/MainPageVideo.mp4'
import videoMobile from '../../images/MainPageVideoMob.mp4'
import { ReactComponent as HomeInside } from '../../images/homeInside.svg'
import { ReactComponent as HomeOutside } from '../../images/homeOutside.svg'
import { ReactComponent as HomeStairs } from '../../images/homeStairs.svg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../NieruchomośćFirst/NieruchomośćFirst.module.css'

const images = [
	video1,
	image1,
	image2,
	image3,
	image4,
	image5,
	image6,
	image7,
	image8,
	image9,
	image10,
	image11,
	image12,
	image13,
	image14,
	image15,
	image16,
	image17,
	image18,
	image19,
	image20,
]

const NieruchomośćThird = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)
	const [isVideoLoaded, setIsVideoLoaded] = useState(false)

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

	const handleVideoLoad = () => {
		setIsVideoLoaded(true)
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
					<SplideSlide>
						<video
							className={css.splideImg}
							autoPlay
							playsInline
							muted
							loop
							onLoadedData={handleVideoLoad}
							onClick={e => openModal(0, e)}
						>
							<source
								src={videoMobile}
								media='(max-width: 768px)'
								type='video/mp4'
							/>
							<source
								src={video1}
								media='(min-width: 769px)'
								type='video/mp4'
							/>
							Your browser doesn't support video.
						</video>
					</SplideSlide>
					{isVideoLoaded &&
						images.slice(1).map((media, index) => (
							<SplideSlide key={index + 1}>
								<img
									src={media}
									alt={`Slide ${index + 1}`}
									className={css.splideImg}
									loading='lazy'
									onClick={e => openModal(index + 1, e)}
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
						<p className={css.houseSpecificationText}>
							111,21 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>
							Powierzchnia użytkowa piętra{' '}
						</p>
						<HomeStairs />
						<p className={css.houseSpecificationText}>
							103,56 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia działki </p>
						<HomeOutside />
						<p className={css.houseSpecificationText}>
							1100 m<sup>2</sup>
						</p>
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
						jest na działce o powierzchni 1100m<sup>2</sup> w sąsiedztwie lasku
						brzozowego na nowo powstającym osiedlu domów jednorodzinnych <br />
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
						: 111,21 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia użytkowa piętra
						</span>
						: 103,56 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>
						: 1100 m<sup>2</sup>;
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
						Na piętrze możliwość przebudowy na mieszkanie o powierzchni 92 m
						<sup>2</sup>.
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
