import React from 'react'
import css from './MapWithContactInfo.module.css'
import { ReactComponent as Facebook } from '../../images/facebookFooter.svg'
import { ReactComponent as Gmail } from '../../images/gmailFooter.svg'

const MapWithContactInfo = () => {
	return (
		<div className={css.container}>
			<iframe
				width='500'
				height='500'
				src='https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Franciszka%20Walczaka%20114,%2066-400%20Gorz%C3%B3w%20Wielkopolski,%20Poland+(Havrysh)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
				style={{ border: 0 }}
				allowFullScreen
				loading='lazy'
				title='Google Map'
			>
				<a href='https://www.gps.ie/'>gps vehicle tracker</a>
			</iframe>
			<div>
				<h2 className={css.contactTitle}>Dane kontaktowe</h2>
				<h3 className={css.contactSubTitle}>HAVRYSH 3 Sp. z o.o.</h3>
				<div className={css.flexContainer}>
					<ul className={css.listTitle}>
						<li className={css.bold}>Adres:</li>
						<li className={css.bold}>REGON:</li>
						<li className={css.bold}>NIP:</li>
						<li className={css.bold}>KRS:</li>
					</ul>

					<ul className={css.listText}>
						<li className={css.text}>
							ul. Franciszka Walczaka 114 <br /> 66 - 400 Gorzów Wielkopolski
						</li>
						<li className={css.text}>369364012</li>
						<li className={css.text}>5993215322</li>
						<li className={css.text}>0000715989</li>
					</ul>
				</div>
				<div className={css.contactInfoContainer}>
					<a href='tel:+48605055346' className={css.contactInfo}>
						+48 605 055 346
					</a>
					<a href='tel:+48570351830' className={css.contactInfo}>
						+48 570 351 830
					</a>
					<a href='mailto:havrysh4@gmail.com' className={css.contactInfo}>
						havrysh4@gmail.com
					</a>
				</div>
				<div className={css.socialMediaContainer}>
					<a
						href='https://www.facebook.com/profile.php?id=61550639923473'
						target='_blank'
						rel='noopener noreferrer'
						className={css.socialMediaLink}
					>
						<Facebook className={css.socialMediaSvg} />
					</a>
					<Gmail className={css.socialMediaSvg} />
				</div>
			</div>
		</div>
	)
}

export default MapWithContactInfo
