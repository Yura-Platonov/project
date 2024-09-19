import React from 'react'
import css from './MapWithContactInfo.module.css'

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
			<div className={css.contactInfo}>
				<h2 className={css.contactTitle}>Dane kontaktowe</h2>
				<h3 className={css.contactSubTitle}>HAVRYSH 3 Sp. z o.o.</h3>
				{/* <ul className={css.listAdress}>
					<li className={css.itemAdress}>
						<strong>Adres:</strong>
						<p className={css.textLong}>
							ul. Franciszka Walczaka 114 66 - 400 Gorzów Wielkopolski
						</p>
					</li>
					<li className={css.itemAdress}>
						<strong>REGON:</strong>
						<p>369364012</p>
					</li>
					<li className={css.itemAdress}>
						<strong>NIP:</strong>
						<p>5993215322</p>
					</li>
					<li className={css.itemAdress}>
						<strong>KRS:</strong>
						<p>0000715989</p>
					</li>
				</ul> */}
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
			</div>
		</div>
	)
}

export default MapWithContactInfo
