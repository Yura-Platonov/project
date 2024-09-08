import React from 'react'
import Modal from 'react-modal'
import css from './ImageModal.module.css'

const ImageModal = ({
	isModalOpen,
	closeModal,
	currentImageIndex,
	images,
	handleNextImage,
	handlePrevImage,
}) => {
	const isVideo = images[currentImageIndex].includes('.mp4')

	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={closeModal}
			className={css.modal}
			overlayClassName={css.overlay}
		>
			<button onClick={closeModal} className={css.closeButton}>
				<svg
					version='1.1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1792 1792'
					className={css.closeModalSvg}
				>
					<path
						d='M1082.2,896.6l410.2-410c51.5-51.5,51.5-134.6,0-186.1s-134.6-51.5-186.1,0l-410.2,410L486,300.4
            c-51.5-51.5-134.6-51.5-186.1,0s-51.5,134.6,0,186.1l410.2,410l-410.2,410c-51.5,51.5-51.5,134.6,0,186.1
            c51.6,51.5,135,51.5,186.1,0l410.2-410l410.2,410c51.5,51.5,134.6,51.5,186.1,0c51.1-51.5,51.1-134.6-0.5-186.2L1082.2,896.6z'
					/>
				</svg>
			</button>
			<button onClick={handlePrevImage} className={css.navButtonLeft}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 40 40'
					width='40'
					height='40'
					focusable='false'
					className={css.modalArrowLeft}
				>
					<path d='m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z'></path>
				</svg>
			</button>
			{/* <img
				src={images[currentImageIndex]}
				alt={`Modal Slide ${currentImageIndex + 1}`}
				className={css.modalImage}
			/> */}
			{isVideo ? (
				<video className={css.modalImage} controls autoPlay>
					<source src={images[currentImageIndex]} type='video/mp4' />
					Ваш браузер не поддерживает видео.
				</video>
			) : (
				<img
					src={images[currentImageIndex]}
					alt={`Modal Slide ${currentImageIndex + 1}`}
					className={css.modalImage}
				/>
			)}
			<button onClick={handleNextImage} className={css.navButtonRight}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 40 40'
					width='40'
					height='40'
					focusable='false'
					className={css.modalArrowRight}
				>
					<path d='m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z'></path>
				</svg>
			</button>
		</Modal>
	)
}

export default ImageModal
