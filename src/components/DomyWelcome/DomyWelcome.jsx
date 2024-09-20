import React from 'react'
import MainPageVideo from '../../images/MainPageVideo.mp4'
import css from './DomyWelcome.module.css'

const DomyWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<video
				className={css.welcomeVideo}
				autoPlay
				loop
				muted
				playsInline
				src={MainPageVideo}
			/>
		</section>
	)
}

export default DomyWelcome
