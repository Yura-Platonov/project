import React from 'react'
import Modal from 'react-modal'
import { ReactComponent as ModalErrorSvg } from '../../images/ModalError.svg'
import css from './ModalSuccessful.module.css'
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
			<ModalErrorSvg className={css.modalSvg} />
			<div className={css.titleContainer}>
				<h2 className={css.modalTitle}>Błąd!</h2>
			</div>
			<p className={css.modalMessage}>
				Wystąpił problem podczas wysyłania formularza.
				<br /> <br />
				Spróbuj ponownie później lub skontaktuj się z nami bezpośrednio.
			</p>
			<button className={css.closeButton} onClick={onRequestClose}>
				Zamknij
			</button>
		</Modal>
	)
}

export default ModalError
