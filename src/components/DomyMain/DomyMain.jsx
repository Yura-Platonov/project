import React from 'react'
import { Link } from 'react-router-dom'
import DomyHouse from '../../images/domyHouse.jpg'
import DomyPraca from '../../images/domyPraca.jpg'
import DomyTechnika from '../../images/domyTechnika.jpg'

import css from './DomyMain.module.css'

const DomyMain = () => {
	return (
		<section className={css.mainSection}>
			<ul className={css.mainList}>
				<li className={css.mainItem}>
					<Link to='/zabudowania' className={css.mainLink}>
						<h3 className={css.mainSubTitle}>Sprzedaż nieruchomości</h3>
					</Link>
					<div className={css.continerFlex}>
						<Link to='/zabudowania' className={css.linkRedirect}>
							<img
								width='565'
								height='450'
								className={css.itemImg}
								src={DomyHouse}
								alt='house'
							/>
						</Link>
						<div className={css.textContainer}>
							<p className={css.textCenter}>
								<span className={css.textAccent}>
									Firma Havrysh3 Sp. z o.o.
								</span>{' '}
								na chwilę obecną zrealizowała lub jest w trakcie realizacji
								inwestycji własnych o charakterze budownictwa
								mieszkalnego(budynek jednorodzinny wolnostojący; budynek
								mieszkalno-usługowy; budynki jednorodzinne dwulokalowe)
								indywidualnego na terenie województwa Lubuskiego oraz
								Zachodniopomorskiego.
							</p>
							<p className={css.text}>
								Na obrzeżach miasta Gorzów wlkp. W miejscowościach Ulim oraz
								Santocko realizujemy sześć budynków mieszkalnych dwulokalowych o
								zróżnicowanej bryle i powierzchni. Na terenie Kamienia
								Pomorskiego w odległości ok 6km od morza zrealizowany został
								budynek jednorodzinny z użytkowym poddaszem o wysokim
								standardzie wykończenia oraz budynek użytkowo-mieszkalny w
								którym możliwe jest prowadzenie działalności gospodarczej z
								jednoczesną funkcją mieszkania całorocznego lub wynajmu
								sezonowego. Dodatkowo planujemy rozpoczęcie realizacji
								inwestycji o charakterze mieszkaniowym indywidualnym w rejonie
								Zielonej Góry.
							</p>
							<button className={css.buttonDomy}>
								<Link to='/zabudowania' className={css.relocateLink}>
									Pokaż więcej
								</Link>
							</button>
						</div>
					</div>
				</li>
				<li className={css.mainItem}>
					<Link to='/technika' className={css.mainLink}>
						<h3 className={css.mainSubTitle}>Wynajem sprzętu budowlanego</h3>
					</Link>
					<div className={css.continerFlex}>
						<Link to='/technika' className={css.linkRedirect}>
							<img
								width='565'
								height='450'
								className={css.itemImg}
								src={DomyTechnika}
								alt='technika'
							/>{' '}
						</Link>

						<div className={css.textContainer}>
							<p className={css.textCenter}>
								Będąca na rynku od 2018r. Firma Havrysh3 Sp. z o.o. świadczy
								również usługi w zakresie kompleksowych prac ziemnych, obsługi
								inwestycji kubaturowych w zakresie pracy sprzętu zapewniającego
								transport poziomy oraz pionowy do 21m . Prace ziemne prowadzimy
								samodzielnie pod nadzorem wykwalikowane kadry inżynieryjnej oraz
								świadczymy usługi wynajmu wraz z operatorem koparek,
								koparko-ładowarek , ładowarek teleskopowych o wysięgu 17 i 21 m.
								(JCB 3CX KOPARKO-LADOWARKA 2015, MINIKOPARKA JCB 8020, LADOWARKA
								TELESKOPOWA JCB 540-170, DIECI PEGASUS 50.21 OBROTOWA, Wozidło
								budowlane TEREX TA 6 t , MERCEDES ACTROS SAMOCHOD CIEZAROWE Z
								HDS, Zagęszczarka rewersyjna Ammann APH 5020 DE, Niwelator
								laserowy NL520R)
								<br /> <br />
								Dodatkowo posiadamy środki transportu drogowego umożliwiające
								przewóz towarów oraz rozładunek o wadzie 22 ton lub przewóz
								maszyn budowlanych .
							</p>
							<button className={css.buttonDomy}>
								<Link to='/technika' className={css.relocateLink}>
									Pokaż więcej
								</Link>
							</button>
						</div>
					</div>
				</li>
				<li className={css.mainItem}>
					<Link to='/praca' className={css.mainLink}>
						<h3 className={css.mainSubTitle}>Praca</h3>
					</Link>
					<div className={css.continerFlex}>
						<Link to='/praca' className={css.linkRedirect}>
							<img
								width='565'
								height='450'
								className={css.itemImg}
								src={DomyPraca}
								alt='praca'
							/>{' '}
						</Link>

						<div className={css.textContainer}>
							<p className={css.textCenter}>
								Firma budowlana Havrysh zaprasza do pracy Ukraińców
								poszukujących długoterminowej pracy.
							</p>
							<p className={css.textNormal}>
								Oferujemy następujące stanowiska:
							</p>
							<ul className={css.workList}>
								<li className={css.workItem}>Murarze (Муражі) - na akord;</li>
								<li className={css.workItem}>
									Zbrojarze (Зброяжі) - na akord;
								</li>
								<li className={css.workItem}>Cieśle (Теслярі) - na akord;</li>
								<li className={css.workItem}>
									Pracownik ogólnobudowlany na godziny(Різноробочі) ;
								</li>
							</ul>
							<p className={css.text}>
								Każda brygada jest wyposażona w potrzebne narzędzia do pracy.
								Poszukujemy pracowników z doświadczeniem w budownictwie, a także
								młodych, perspektywicznych osób bez doświadczenia. Nasza ekipa
								składa się z Ukraińców, którzy chętnie pracują i dobrze
								zarabiają. Pomogą wam szybko odnaleźć się na budowie.
							</p>
							<button className={css.buttonDomy}>
								<Link to='/praca' className={css.relocateLink}>
									Pokaż więcej
								</Link>
							</button>
						</div>
					</div>
				</li>
			</ul>
			<div className={css.technikaItemContainer}>
				<div className={css.specificationItemDiv}>O NAS</div>
				<p className={css.specificationItemText}>
					,,Rzetelna firma w nowej rzeczywistości ‘’ – to nasze hasło przewodnie
					. Założona w 2018r. firma na dzień dzisiejszy realizuje samodzielnie w
					branży budowlanej kompleksowe inwestycje mieszkaniowe w
					północno-zachodniej Polsce oraz na terenie Niemiec.
					<br />
					<br />
					Świadczymy usługi wykonawstwa stanów surowych, robót wykończeniowych
					oraz usługi sprzętowe .Profesjonalna kadra gwarantuje terminowe
					realizacja na najwyższym poziomie. Stała współpraca z największym
					deweloperem w regionie umożliwia nam rozwój oraz podnoszenie
					umiejętności technicznych i organizacyjnych. Jesteśmy otwarci na nowe
					wyzwania . Zapraszamy do współpracy.
				</p>
			</div>
		</section>
	)
}

export default DomyMain
