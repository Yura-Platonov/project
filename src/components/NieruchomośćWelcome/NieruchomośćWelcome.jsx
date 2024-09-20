import React from 'react'
import NieryhomistPageVideo from '../../images/NieryhomistPageVideo.mp4'
import css from './NieruchomośćWelcome.module.css'

const NieruchomośćWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<h1 className={css.title}>Sprzedaż nieruchomości</h1>
			<video
				className={css.welcomeVideo}
				autoPlay
				loop
				muted
				playsInline
				src={NieryhomistPageVideo}
			/>
			<div className={css.welcomeContainer}>
				<div className={css.specificationItemDiv}></div>
				<div className={css.specificationContainerText}>
					<p className={css.specificationItemTextCenter}>
						Firma Havrysh3 Sp. z o.o. oferuje na sprzedaż nieruchomości o
						zróżnicowanym charakterze :<br />
						<strong>
							-budynek jednorodzinny wolnostojący;
							<br />
							-budynek mieszkalno-usługowy;
							<br />
							-budynki jednorodzinne dwulokalowe.
						</strong>
					</p>
				</div>
			</div>
		</section>
	)
}

export default NieruchomośćWelcome
