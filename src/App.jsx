import React from 'react'
import Modal from 'react-modal'
import { Route, Routes } from 'react-router-dom'
// import './index.css';
import Header from './components/Header/Header'
import Domy from './pages/Domy/Domy'
import Kariera from './pages/Kariera/Kariera'
import Technika from './pages/Technika/Technika'

Modal.setAppElement('#root')

export const App = () => {
	return (
		<div className='app'>
			<Header />
			<Routes>
				<Route path='/' exact element={<Domy />} />
				<Route path='/kariera' element={<Kariera />} />
				<Route path='/technika' element={<Technika />} />
			</Routes>
		</div>
	)
}
