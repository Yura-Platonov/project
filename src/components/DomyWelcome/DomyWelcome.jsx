import React from 'react'
import MainPageVideo from '../../images/MainPageVideo.mp4'
import MainPageVideoMob from '../../images/MainPageVideoMob.mp4'
import css from './DomyWelcome.module.css'

const DomyWelcome = () => {
	return (
		<section className={css.welcomeSection}>
			<video
				className={css.welcomeVideo}
				autoPlay
				preload='auto'
				loop
				muted
				playsInline
			>
				<source
					src={MainPageVideoMob}
					media='(max-width: 768px)'
					type='video/mp4'
				/>
				<source
					src={MainPageVideo}
					media='(min-width: 769px)'
					type='video/mp4'
				/>
				Your browser does not support the video tag.
			</video>
		</section>
	)
}

export default DomyWelcome
