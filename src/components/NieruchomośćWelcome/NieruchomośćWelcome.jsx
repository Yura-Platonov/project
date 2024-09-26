import React from 'react'
import NieryhomistPageVideo from '../../images/NieryhomistPageVideo.mp4'
import NieryhomistPageVideoMob from '../../images/NieryhomistPageVideoMob.mp4'

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
				preload='auto'
				playsInline
			>
				<source
					src={NieryhomistPageVideoMob}
					media='(max-width: 768px)'
					type='video/mp4'
				/>
				<source
					src={NieryhomistPageVideo}
					media='(min-width: 769px)'
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
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
