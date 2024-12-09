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
							{/* <p className={css.textCenter}> */}
							<p className={css.text}>
								<span className={css.textAccent}>
									Firma Havrysh3 Sp. z o.o.
								</span>{' '}
								dynamicznie rozwija swoją działalność, realizując inwestycje w
								zakresie budownictwa mieszkalnego na terenie województw
								lubuskiego oraz zachodniopomorskiego. Specjalizujemy się w
								projektach takich jak:{' '}
								<b>
									domy jednorodzinne wolnostojące, budynki mieszkalno-usługow
								</b>{' '}
								oraz <b>dwulokalowe budynki jednorodzinne</b>, dopasowane do
								indywidualnych potrzeb klientów.
							</p>
							<p className={css.text}>
								W miejscowościach <b>Ulim</b> i <b>Santocko</b>, położonych na
								obrzeżach <b>Gorzowa Wielkopolskiego</b>, realizujemy aktualnie{' '}
								<b>sześć budynków mieszkalnych dwulokalowych</b> o nowoczesnej
								architekturze i zróżnicowanej powierzchni użytkowej. W{' '}
								<b>Kamieniu Pomorskim</b>, zaledwie 6 km od morza, ukończyliśmy
								realizację:
								<ul className={css.workList}>
									<li className={css.workItem}>
										<b>Domy jednorodzinne wolnostojące</b>
									</li>
									<li className={css.workItem}>
										<b>Budynki mieszkalno-usługowe</b>
									</li>
									<li className={css.workItem}>
										<b>Dwulokalowe budynki jednorodzinne</b>, w tym bliźniaki
										domy, dopasowane do indywidualnych potrzeb klientów
									</li>
								</ul>
								Dodatkowo, w najbliższym czasie planujemy rozpoczęcie nowej
								inwestycji o charakterze mieszkaniowym w rejonie{' '}
								<b>Zielonej Góry</b>, która również będzie odpowiadała
								najwyższym standardom jakości i funkcjonalności. <br />
								<br />
								Zapraszamy do kontaktu i współpracy przy realizacji wymarzonych
								projektów mieszkaniowych!
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
							{/* <p className={css.textCenter}> */}
							<p className={css.text}>
								<p>
									Działająca na rynku od 2018 roku firma{' '}
									<b>Havrysh3 Sp. z o.o.</b> oferuje kompleksowe usługi w
									zakresie <b>prac ziemnych</b> oraz obsługi inwestycji
									kubaturowych na terenie <b>Województwa lubuskiego</b>, miast{' '}
									<b>Gorzów Wielkopolski</b>, <b>Zielona Góra</b> i okolic.
								</p>
								<p>
									Specjalizujemy się w pracach z użyciem sprzętu zapewniającego
									transport poziomy oraz pionowy do wysokości 21 m. Wszystkie
									prace ziemne realizujemy samodzielnie, pod nadzorem wysoko
									wykwalifikowanej kadry inżynieryjnej, zapewniając najwyższą
									jakość i terminowość.
								</p>
								<br />
								<p>
									Nasza oferta obejmuje również{' '}
									<b>wynajem sprzętu budowlanego wraz z operatoram</b>, w tym:
								</p>

								<ul className={css.workList}>
									<li className={css.workItem}>
										<b>Koparki</b> (np. JCB 3CX, rocznik 2015)
									</li>
									<li className={css.workItem}>
										<b>Minikoparki</b> (np. JCB 8020)
									</li>
									<li className={css.workItem}>
										<b>Ładowarki teleskopowe</b> o wysięgu 17 m i 21 m (JCB
										540-170, Dieci Pegasus 50.21 Obrotowa)
									</li>
									<li className={css.workItem}>
										<b>Wozidła budowlane</b> (np. Terex TA 6 t)
									</li>
									<li className={css.workItem}>
										<b>Ciężarówki z HDS</b> (np. Mercedes Actros)
									</li>
									<li className={css.workItem}>
										<b>Zagęszczarki rewersyjne</b> (np. Ammann APH 5020 DE)
									</li>
									<li className={css.workItem}>
										<b>Niwelatory laserowe</b> (NL520R)
									</li>
								</ul>
								<p>
									Ponadto dysponujemy nowoczesnymi środkami transportu
									drogowego, umożliwiającymi:
								</p>

								<ul className={css.workList}>
									<li className={css.workItem}>
										Przewóz towarów i rozładunek o masie do 22 ton
									</li>
									<li className={css.workItem}>Transport maszyn budowlanych</li>
								</ul>
								<p>
									Zapewniamy kompleksową obsługę inwestycji na terenie
									województw <b>lubuskiego</b> i <b>zachodniopomorskiego</b>,
									szczególnie w miastach <b>Gorzów Wielkopolski</b>,
									<b>Zielona Góra</b>, oraz w ich okolicach.{' '}
									<b>Havrysh3 Sp. z o.o.</b> to niezawodny partner, który
									sprosta każdemu wyzwaniu w zakresie prac budowlanych i
									transportowych.
								</p>
								<br />
								<p>Zapraszamy do kontaktu i współpracy!</p>
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
							<p className={css.text}>
								<p>
									Firma budowlana <b>Havrysh</b> zaprasza serdecznie Ukraińców
									poszukujących <b>stabilnej i długoterminowej pracy</b> do
									dołączenia do naszego zespołu na terenie{' '}
									<b>Województwa lubuskiego</b>, <b>Gorzowa Wielkopolskiego</b>,
									<b>Zielonej Góry</b> oraz okolic.
								</p>
								<br />
								<p>
									<b>Stanowiska, na które rekrutujemy:</b>
								</p>
								<ul className={css.workList}>
									<li className={css.workItem}>
										<b>Murarze (Муражі)</b> – praca na akord
									</li>
									<li className={css.workItem}>
										<b>Zbrojarze (Зброяжі)</b> – praca na akord
									</li>
									<li className={css.workItem}>
										<b>Cieśle (Теслярі)</b> – praca na akord
									</li>
									<li className={css.workItem}>
										<b>Pracownicy ogólnobudowlani (Різноробочі)</b> – praca na
										godziny
									</li>
								</ul>
								<b>Co oferujemy?</b>
								<ul className={css.workList}>
									<li className={css.workItem}>
										<b>Pełne wyposażenie brygad</b> w niezbędne narzędzia
									</li>
									<li className={css.workItem}>
										<b>Atrakcyjne wynagrodzenie</b> adekwatne do umiejętności i
										zaangażowania
									</li>
									<li className={css.workItem}>
										<b>Stabilne warunki zatrudnienia</b> z możliwością
										długoterminowej współpracy
									</li>
									<li className={css.workItem}>
										<b>Wsparcie na każdym etapie pracy</b>, od adaptacji na
										budowie po szkolenia
									</li>
								</ul>
								<b>Kogo szukamy?</b>
								<ul className={css.workList}>
									<li className={css.workItem}>
										<b>Doświadczonych fachowców</b> z branży budowlanej
									</li>
									<li className={css.workItem}>
										<b>Młodych i ambitnych osób</b>, chcących rozpocząć karierę
										w budownictwie
									</li>
								</ul>
								<p>
									<b>Dlaczego warto dołączyć do firmy Havrysh?</b>
									<ul className={css.workList}>
										<li className={css.workItem}>
											Nasz zespół składa się głównie z Ukraińców, co ułatwia
											komunikację i współpracę.
										</li>
										<li className={css.workItem}>
											Oferujemy <b>przyjazną atmosferę pracy</b>, w której
											doświadczeni pracownicy chętnie dzielą się swoją wiedzą,
										</li>
										<li className={css.workItem}>
											Projekty realizowane są w dynamicznie rozwijających się
											miastach: <b>Gorzów Wielkopolski</b>, <b>Zielona Góra</b>{' '}
											oraz okolicach.
										</li>
									</ul>
								</p>
								<p>
									Nie czekaj – <b>zbuduj swoją przyszłość</b> razem z nami!
									Skontaktuj się już dziś i dołącz do zespołu <b>Havrysh</b>
								</p>
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
