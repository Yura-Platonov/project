import React from 'react'

import css from './DomyMain.module.css'

const DomyMain = () => {
	return (
		<section className={css.mainSection}>
			<ul className={css.mainList}>
				<li className={css.mainItem}>
					<h3 className={css.mainSubTitle}>
						PARAMETRY ROBOCZE RAMIENIA KOPARKOWEGO
					</h3>
					<ul className={css.specificationList}>
						<li className={css.specificationItem}>
							sterowanie ramieniem koparkowym za pomocą dźwigni
						</li>
					</ul>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}></div>
				<p className={css.specificationItemText}>
					<span className={css.specificationItemTextAccent}>
						JCB 3CX Koparko-Ładowarka z 2015 roku
					</span>{' '}
					- to wielofunkcyjna maszyna budowlana, która łączy w sobie funkcje
					koparki i ładowarki. Idealnie nadaje się do szerokiego zakresu prac na
					placach budowy, w tym kopania, wykonywania rowów, załadunku
					materiałów, podnoszenia ładunków oraz ogólnego przemieszczania ziemi.
					<br />
					<br />
					Ten model ma kompaktowe rozmiary i wysoką zwrotność, co pozwala na
					efektywną pracę w ograniczonej przestrzeni, np. w warunkach miejskich
					lub na małych placach budowy.
					<br />
					<br />
					Model z 2015 roku charakteryzuje się wysoką niezawodnością i
					wydajnością. Wyposażony jest w nowoczesne systemy sterowania, które
					zapewniają precyzję i kontrolę podczas pracy, co jest istotne dla
					osiągnięcia wysokich wyników na budowie. JCB słynie z łatwości w
					utrzymaniu, co zmniejsza koszty napraw i minimalizuje przestoje
					maszyn.
					<br />
					<br />
					To idealne rozwiązanie dla tych, którzy cenią efektywność,
					niezawodność i wygodę w użytkowaniu.
					<br />
					<br />
					Także oferujemy wybór łyżek do tego modelu maszyny : 150cm, 90cm,
					60cm, 30cm;
				</p>
			</div>
		</section>
	)
}

export default DomyMain
