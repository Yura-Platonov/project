import React from 'react'
import Modal from 'react-modal'
import { ReactComponent as ModalSuccessfulSvg } from '../../images/Logo.svg'
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
			<ModalSuccessfulSvg />
			<h2 className={css.modalTitle}>Dziękujemy!</h2>
			<p className={css.modalMessage}>
				Twoja wiadomość została pomyślnie dostarczona. Skontaktujemy się z Tobą
				wkrótce.
			</p>
			<button className={css.closeButton} onClick={onRequestClose}>
				Zamknij
			</button>
		</Modal>
	)
}

export default ModalSuccessful
