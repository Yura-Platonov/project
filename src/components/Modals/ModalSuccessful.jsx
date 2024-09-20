import React from 'react'
import Modal from 'react-modal'
import { ReactComponent as ModalSuccessfulSvg } from '../../images/ModalSuccessful.svg'
import css from './ModalSuccessful.module.css'

Modal.setAppElement('#root')

const ModalSuccessful = ({ isOpen, onRequestClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Successful'
			className={css.modalContent}
			overlayClassName={css.modalOverlay}
		>
			<ModalSuccessfulSvg className={css.modalSvg} />
			<div className={css.titleContainer}>
				<h2 className={css.modalTitle}>Dziękujemy!</h2>
			</div>
			<p className={css.modalMessage}>
				Twoja wiadomość została pomyślnie dostarczona.
				<br /> <br /> Skontaktujemy się z Tobą wkrótce.
			</p>
			<button className={css.closeButton} onClick={onRequestClose}>
				Zamknij
			</button>
		</Modal>
	)
}

export default ModalSuccessful
