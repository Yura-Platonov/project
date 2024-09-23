import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House2.1.jpg'
import image2 from '../../images/House2.2.jpg'
import image3 from '../../images/House2.3.jpg'
import image4 from '../../images/House2.4.jpg'
import image5 from '../../images/House2.5.jpg'
import image6 from '../../images/House2.6.jpg'
import image7 from '../../images/House2.7.jpg'
import image8 from '../../images/House2.8.jpg'
import image9 from '../../images/House2.9.jpg'
import video1 from '../../images/House2Video.mp4'
import videoMobile from '../../images/House2VideoMob.mp4'

import { ReactComponent as HomeInside } from '../../images/homeInside.svg'
import { ReactComponent as HomeKubatura } from '../../images/homeKubatura.svg'
import { ReactComponent as HomeOutside } from '../../images/homeOutside.svg'
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
]

const NieruchomośćSecond = () => {
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
				OSIEDLE Aleje Sosnowe – Ulim Gm. Deszczno Województwo Lubuskie
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
					{images.slice(1).map((media, index) => (
						<SplideSlide key={index + 1}>
							<img
								src={media}
								alt={`Slide ${index + 1}`}
								className={css.splideImg}
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
						<p className={css.houseSpecificationText}>Powierzchnia działki</p>
						<HomeOutside />
						<p className={css.houseSpecificationText}>
							550 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Kubatura</p>
						<HomeKubatura />
						<p className={css.houseSpecificationText}>
							657,50 m<sup>3</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia użytkowa </p>
						<HomeInside />
						<p className={css.houseSpecificationText}>
							130,71 m<sup>2</sup>
						</p>
					</li>
				</ul>
			</div>
			<div className={css.houseItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<div className={css.specificationContainerText}>
					<p className={css.specificationItemTextCenter}>
						Kolejną inwestycja zrealizowaną i gotową na sprzedaży są domy w
						zabudowie bliźniaczej usytuowanych na obrzeżach miasta Gorzów Wlkp.{' '}
						<br />
						<br />
						Cechą charakterystyczną niniejszych nieruchomości jest kompaktowa
						wielkość , nowoczesny wygląd ,oraz dogodny dojazd do aglomeracji
						miejskiej . Dodatkowo w pobliżu znajduje się nowo wybudowane
						przedszkole oraz przepiękne tereny leśne umożliwiające uprawianie
						turystyki pieszej oraz rowerowej . Budynki posadowione są na
						działkach o powierzchni 1100m<sup>2</sup> każdy , co daje nam
						możliwość zagospodarowania ogrodów o powierzchni ok 450m<sup>2</sup>{' '}
						do każdego lokalu .
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
							Powierzchnia użytkowa
						</span>{' '}
						: 130,71 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Kubatura
						</span>
						: 657,50 m<sup>3</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>
						: 550 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pomieszczenia
						</span>{' '}
						: Salon, kuchnia , kotłownia , trzy lub cztery sypialnie , dwie
						łazienki, garaż jednostanowiskowy.
						<br /> <br />
						Standard wykonania <br />
						a) Deweloperski ;<br />
						b) Pod klucz.
						<br />
						<br />
						<span className={css.specificationItemTextAccent}>
							Planowany termin przekazania obiektów: I kwartał 2025r.
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

export default NieruchomośćSecond
