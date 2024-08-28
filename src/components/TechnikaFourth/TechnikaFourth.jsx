import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import React, { useState } from 'react'
import Modal from 'react-modal'
import image1 from '../../images/Photo1.1.jpg'
import image2 from '../../images/Photo1.2.jpg'
import image3 from '../../images/Photo1.3.jpg'
import css from './TechnikaFourth.module.css'

const images = [image1, image2, image3]

const TechnikaFourth = () => {
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
							maksymalna głębokość kopania – 5,97 m
						</li>
						<li className={css.specificationItem}>
							zasięg na poziomie gruntu od osi obrotu ramienia – 6,52 m
						</li>
						<li className={css.specificationItem}>
							zasięg na poziomie gruntu w bok od osi maszyny – 7,09 m
						</li>
						<li className={css.specificationItem}>
							wysokość załadunku – 4,72 m
						</li>
						<li className={css.specificationItem}>
							wysokość załadunku – 4,72 m
						</li>
					</ul>
				</li>
				<li className={css.technikaItem}>
					<h3 className={css.technikaSubTitle}>WYMIARY I MASY</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							długość całkowita – 5,62 m
						</li>
						<li className={css.specificationItem}>szerokość – 2,35 m</li>
						<li className={css.specificationItem}>wysokość z kabiną – 3,03m</li>
						<li className={css.specificationItem}>rozstaw osi – 2,17 m</li>
						<li className={css.specificationItem}>
							masa całkowita – 8 600 kg.
						</li>
					</ul>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						JCB 3CX Koparko-Ładowarka z 2015 roku
					</span>{' '}
					- to wielofunkcyjna maszyna budowlana, która łączy w sobie funkcje
					koparki i ładowarki. Idealnie nadaje się do szerokiego zakresu prac na
					placach budowy, w tym kopania, wykonywania rowów, załadunku
					materiałów, podnoszenia ładunków oraz ogólnego przemieszczania ziemi.
					<br />
					<br />
					Ten model ma kompaktowe rozmiary i wysoką zwrotność, co pozwala na
					efektywną pracę w ograniczonej przestrzeni, np. w warunkach miejskich
					lub na małych placach budowy.
					<br />
					<br />
					Model z 2015 roku charakteryzuje się wysoką niezawodnością i
					wydajnością. Wyposażony jest w nowoczesne systemy sterowania, które
					zapewniają precyzję i kontrolę podczas pracy, co jest istotne dla
					osiągnięcia wysokich wyników na budowie. JCB słynie z łatwości w
					utrzymaniu, co zmniejsza koszty napraw i minimalizuje przestoje
					maszyn.
					<br />
					<br />
					To idealne rozwiązanie dla tych, którzy cenią efektywność,
					niezawodność i wygodę w użytkowaniu.
					<br />
					<br />
					Także oferujemy wybór łyżek do tego modelu maszyny : 150cm, 90cm,
					60cm, 30cm;
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

export default TechnikaFourth
