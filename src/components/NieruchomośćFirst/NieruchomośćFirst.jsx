import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import image1 from '../../images/House1.1.jpg'
import image10 from '../../images/House1.10.jpg'
import image11 from '../../images/House1.11.jpg'
import image12 from '../../images/House1.12.jpg'
import image13 from '../../images/House1.13.jpg'
import image14 from '../../images/House1.14.jpg'
import image15 from '../../images/House1.15.jpg'
import image16 from '../../images/House1.16.jpg'
import image17 from '../../images/House1.17.jpg'
import image18 from '../../images/House1.18.jpg'
import image19 from '../../images/House1.19.jpg'
import image2 from '../../images/House1.2.jpg'
import image3 from '../../images/House1.3.jpg'
import image4 from '../../images/House1.4.jpg'
import image5 from '../../images/House1.5.jpg'
import image6 from '../../images/House1.6.jpg'
import image7 from '../../images/House1.7.jpg'
import image8 from '../../images/House1.8.jpg'
import image9 from '../../images/House1.9.jpg'
import video1 from '../../images/House1Video.mp4'
import videoMobile from '../../images/House1VideoMob.mp4'

import { ReactComponent as HomeGospodarcha } from '../../images/homeGospodarcha.svg'
import { ReactComponent as HomeInside } from '../../images/homeInside.svg'
import { ReactComponent as HomeOutside } from '../../images/homeOutside.svg'
import { ReactComponent as HomePlan } from '../../images/homePlan.svg'
import ImageModal from '../ImageModal/ImageModal'
import css from './NieruchomośćFirst.module.css'

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
]

const NieruchomośćFirst = () => {
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
				OSIEDLE POLNE – Santocko Gm. Kłodawa Województwo Lubuskie
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
						<HomeOutside className={css.imageSvg} />
						<p className={css.houseSpecificationText}>
							700 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia użytkowa</p>
						<HomeInside className={css.imageSvg} />
						<p className={css.houseSpecificationText}>
							144,74 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>
							Powierzchnia gospodarcza{' '}
						</p>
						<HomeGospodarcha className={css.imageSvg} />
						<p className={css.houseSpecificationText}>
							39,18 m<sup>2</sup>
						</p>
					</li>
					<li className={css.houseSpecificationItem}>
						<p className={css.houseSpecificationText}>Powierzchnia działki </p>
						<HomePlan className={css.imageSvg} />
						<p className={css.houseSpecificationText}>
							183,92 m<sup>2</sup>
						</p>
					</li>
				</ul>
			</div>
			<div className={css.houseItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<div className={css.specificationContainerText}>
					<p className={css.specificationItemTextCenter}>
						Zapraszamy do zapoznania się z naszą ofertą dotyczącą sprzedaży
						domów w zabudowie bliźniaczej usytuowanych w pobliżu miasta Gorzów
						Wlkp.
						<br />
						<br />
						Cechą charakterystyczną niniejszych nieruchomości jest urokliwa
						okolica , w pobliżu której mamy piękne jezioro , stosunkowo mała
						ilość zabudowań oraz utwardzony dojazd nową drogą asfaltową. W skład
						kompleksu wchodzą cztery domy ( osiem lokali ) charakteryzujących
						się nowoczesną bryłą oraz ponadprzeciętną funkcjonalnością.
						<br />
						<br />
						Wychodząc naprzeciw obecnym trendom każdy lokal posiada podwójny
						garaż znajdujący się w bryle budynku. Budynki posadowione są na
						działkach o powierzchni 1400m<sup>2</sup> każdy , co daje nam
						możliwość zagospodarowania ogrodów o powierzchni ok 600m<sup>2</sup>{' '}
						do każdego lokalu
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
						: 144,74 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia gospodarcza
						</span>
						: 39,18 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia całkowita
						</span>
						: 183,92 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Powierzchnia działki
						</span>{' '}
						: 700 m<sup>2</sup>;
						<br />
						<span className={css.specificationItemTextAccentItalic}>
							Pomieszczenia
						</span>{' '}
						: Salon, kuchnia , WC, Garderoba , trzy sypialnie , dwie łazienki,
						garaż dwustanowiskowy.
						<br /> <br />
						Standard wykonania <br />
						a) Surowy zamknięty; <br />
						b) Deweloperski;
						<br />
						c) Pod klucz.
						<br />
						<br />
						<span className={css.specificationItemTextAccent}>
							Planowany termin przekazania obiektów: IV kwartał 2025r.
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

export default NieruchomośćFirst
