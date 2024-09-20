import React from 'react'
import Modal from 'react-modal'
import css from './ModalError.module.css'
Modal.setAppElement('#root')

const ModalError = ({ isOpen, onRequestClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel='Error'
			className={css.modalContent}
			overlayClassName={css.modalOverlay}
		>
			<h2 className={css.modalTitle}>Błąd!</h2>
			<p className={css.modalMessage}>
				Wystąpił problem podczas wysyłania formularza. Spróbuj ponownie później
				lub skontaktuj się z nami bezpośrednio.
			</p>
			<button className={css.closeButton} onClick={onRequestClose}>
				Zamknij
			</button>
		</Modal>
	)
}

export default ModalError
