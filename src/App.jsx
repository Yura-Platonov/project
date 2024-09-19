import React, { useState } from 'react'
import Modal from 'react-modal'
import { Route, Routes } from 'react-router-dom'
import css from './App.module.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import ModalFormButtonClose from './images/ModalFormButtonClose.svg'
import ModalFormButtonOpen from './images/ModalFormOpen.svg'
import Domy from './pages/Domy/Domy'
import Kariera from './pages/Kariera/Kariera'
import Nieruchomość from './pages/Nieruchomość/Nieruchomość'
import Technika from './pages/Technika/Technika'

Modal.setAppElement('#root')

export const App = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false)
	const openModal = () => setModalIsOpen(true)
	const closeModal = () => setModalIsOpen(false)

	return (
		<div className={css.app}>
			<Header />
			<Routes>
				<Route path='/' exact element={<Domy />} />
				<Route path='/zabudowania' element={<Nieruchomość />} />
				<Route path='/praca' element={<Kariera />} />
				<Route path='/technika' element={<Technika />} />
			</Routes>
			<button className={css.fixedButton} onClick={openModal}>
				<img src={ModalFormButtonOpen} alt='Open Modal' />
			</button>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				contentLabel='Modal'
				className={css.modalContent}
				overlayClassName={css.modalOverlay}
			>
				<div>
					<h2>Форма в модальном окне</h2>
					<button onClick={closeModal}>
						<img src={ModalFormButtonClose} alt='Close Modal' />
					</button>
				</div>
			</Modal>
			<Footer />
		</div>
	)
}
