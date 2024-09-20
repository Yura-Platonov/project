import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House2.1.jpg'
import image2 from '../../images/House2.2.jpg'
import image3 from '../../images/House2.3.jpg'
import image4 from '../../images/House2.4.jpg'
import video1 from '../../images/House2Video.mp4'
import { ReactComponent as HomeInside } from '../../images/homeInside.svg'
import { ReactComponent as HomeKubatura } from '../../images/homeKubatura.svg'
import { ReactComponent as HomeOutside } from '../../images/homeOutside.svg'
import ImageModal from '../ImageModal/ImageModal'
import css from '../NieruchomośćFirst/NieruchomośćFirst.module.css'

const images = [video1, image1, image2, image3, image4]

const NieruchomośćSecond = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

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
					{images.map((media, index) => (
						<SplideSlide key={index}>
							{index === 0 ? (
								<video
									className={css.splideImg}
									// controls
									autoPlay
									muted
									loop
									onClick={e => openModal(index, e)}
								>
									<source src={media} type='video/mp4' />
									Your brouser doesnt support video.
								</video>
							) : (
								<img
									src={media}
									alt={`Slide ${index + 1}`}
									className={css.splideImg}
									onClick={e => openModal(index, e)}
								/>
							)}
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
						<p className={css.houseSpecificationText}>550 m2</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Kubatura</p>
						<HomeKubatura />
						<p className={css.houseSpecificationText}>657,50 m3</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia użytkowa </p>
						<HomeInside />
						<p className={css.houseSpecificationText}>130,71 m2</p>
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
						działkach o powierzchni 1100m2 każdy , co daje nam możliwość
						zagospodarowania ogrodów o powierzchni ok 450m2 do każdego lokalu .
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
						: 130,71 m2;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Kubatura
						</span>
						: 657,50 m3;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>
						: 550 m2;
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
