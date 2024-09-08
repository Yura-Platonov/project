import React from 'react'
import KarieraDeutch from '../../images/KarieraDeutch.jpg'
import KarieraMylar from '../../images/KarieraMylar.jpg'
import KarieraOpalybka from '../../images/KarieraOpalybka.jpg'
import KarieraRazno from '../../images/KarieraRazno.jpg'
import KarieraVideo from '../../images/KarieraVideo.mp4'
import KarieraZbroyaj from '../../images/KarieraZbroyaj.jpg'

import css from './KarieraVacancy.module.css'

export const KarieraVacancy = () => {
	return (
		<section className={css.karieraSection}>
			<h2 className={css.karieraTitle}>АКТУАЛЬНІ ВАКАНСІЇ</h2>
			<ul className={css.karieraList}>
				<li className={css.karieraItem}>
					<img src={KarieraMylar} alt='element' className={css.karieraImg} />
					<div className={css.karieraItemContainer}>
						<div className={css.karieraItemDiv}>
							<h3 className={css.karieraSubTitle}>Муляр(Murarz)</h3>
						</div>
						<ul className={css.vacancyList}>
							Основні обов'язки:
							<li className={css.vacancyItem}>
								Кладка стін із використанням таких матеріалів: Silks 24, Silka
								12, Bloczek betonowy;
							</li>
							<li className={css.vacancyItem}>
								Якісне виконання робіт із дотриманням технологічних стандартів;
							</li>
							<li className={css.vacancyItem}>
								Здатність працювати в команді та досягати поставлених цілей.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Вимоги до кандидатів:
							<li className={css.vacancyItem}>
								Наявність досвіду вітається. Ми завжди допоможемо Вам освоїтись
								і осягнути нові навички;
							</li>
							<li className={css.vacancyItem}>
								Відповідальність, пунктуальність, увага до деталей;
							</li>
							<li className={css.vacancyItem}>
								Бажання працювати та розвиватися у професійній сфері.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Умови оплати:
							<li className={css.vacancyItem}>
								Виплата здійснюється залежно від виконаного обсягу роботи (м²)
								на основі акордної системи оплати.
							</li>
						</ul>
					</div>
				</li>
				<li className={css.karieraItem}>
					<img src={KarieraZbroyaj} alt='element' className={css.karieraImg} />
					<div className={css.karieraItemContainer}>
						<div className={css.karieraItemDiv}>
							<h3 className={css.karieraSubTitle}>Зброяж(Zbrojarz)</h3>
						</div>
						<ul className={css.vacancyList}>
							Основні обов'язки:
							<li className={css.vacancyItem}>
								Монтаж арматури відповідно до проектної документації;
							</li>
							<li className={css.vacancyItem}>
								Виконання робіт із використанням ценьг для скручування арматури;
							</li>
							<li className={css.vacancyItem}>
								Дотримання технічних вимог та стандартів на будівельному
								майданчику;
							</li>
							<li className={css.vacancyItem}>
								Взаємодія з іншими членами бригади для забезпечення якісного та
								своєчасного виконання завдань;
							</li>
							<li className={css.vacancyItem}>
								Бригада укомплектована потрібним для роботи інструментом;
							</li>
							<li className={css.vacancyItem}>
								Для швидкого виконання робіт маємо професійну машину для різання
								арматури.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Вимоги до кандидатів:
							<li className={css.vacancyItem}>
								Досвід роботи на посаді збройового робітника (Zbrojarz) не є
								важливим але буде додатковим плюсом;
							</li>
							<li className={css.vacancyItem}>
								Відповідальність, точність, вміння працювати в команді;
							</li>
							<li className={css.vacancyItem}>
								Готовність до фізично активної роботи та бажання розвиватися у
								професійній сфері.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Умови оплати:
							<li className={css.vacancyItem}>
								Зарплата залежить від виконаного обсягу роботи (кг) на основі
								акордної системи оплати.
							</li>
						</ul>
					</div>
				</li>
				<li className={css.karieraItem}>
					<img src={KarieraOpalybka} alt='element' className={css.karieraImg} />
					<div className={css.karieraItemContainer}>
						<div className={css.karieraItemDiv}>
							<h3 className={css.karieraSubTitle}>Опалубщик (Cieślar)</h3>
						</div>
						<ul className={css.vacancyList}>
							Основні обов'язки:
							<li className={css.vacancyItem}>
								Монтаж і демонтаж опалубки для заливки бетону відповідно до
								проектної документації;
							</li>
							<li className={css.vacancyItem}>
								Встановлення та укріплення опалубки для забезпечення безпечного
								та якісного проведення будівельних робіт;
							</li>
							<li className={css.vacancyItem}>
								Взаємодія з іншими членами бригади для забезпечення своєчасного
								виконання завдань;
							</li>
							<li className={css.vacancyItem}>
								Бригада укомплектована потрібним для роботи інструментом.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Вимоги до кандидатів:
							<li className={css.vacancyItem}>
								Досвід роботи не є важливим але буде додатковим плюсом;
							</li>
							<li className={css.vacancyItem}>
								Відповідальність, пунктуальність, увага до деталей;
							</li>
							<li className={css.vacancyItem}>
								Бажання працювати та розвиватися у професійній сфері.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Умови оплати:
							<li className={css.vacancyItem}>
								Зарплата залежить від виконаного обсягу роботи на основі
								акордної системи оплати.
							</li>
						</ul>
					</div>
				</li>
				<li className={css.karieraItem}>
					<img src={KarieraRazno} alt='element' className={css.karieraImg} />
					<div className={css.karieraItemContainer}>
						<div className={css.karieraItemDiv}>
							<h3 className={css.karieraSubTitle}>
								Різноробочий (Pracownik ogólny)
							</h3>
						</div>
						<ul className={css.vacancyList}>
							Основні обов'язки:
							<li className={css.vacancyItem}>
								Виконання різних допоміжних робіт на будівельному майданчику;
							</li>
							<li className={css.vacancyItem}>
								Підтримка у виконанні завдань майстрів та інших фахівців;
							</li>
							<li className={css.vacancyItem}>
								Перспектива в подальшому працювати в бригаді;
							</li>
							<li className={css.vacancyItem}>
								Допоможемо вибрати свій напрямок в будівництві;
							</li>
							<li className={css.vacancyItem}>
								За короткий час допоможемо стати фахівцем своєї справи.{' '}
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Вимоги до кандидатів:
							<li className={css.vacancyItem}>
								Бажання працювати та розвиватися в будівельній сфері;
							</li>
							<li className={css.vacancyItem}>
								Відповідальність, пунктуальність, здатність до навчання;
							</li>
							<li className={css.vacancyItem}>
								Готовність до фізичної праці та робота в команді.
							</li>
						</ul>
						<ul className={css.vacancyList}>
							Умови оплати:
							<li className={css.vacancyItem}>
								Ставка на годину, яка залежить від стажу роботи в будівництві.
							</li>
						</ul>
					</div>
				</li>
			</ul>
			<div className={css.containerWorkGermany}>
				<div className={css.karieraItemDiv}>
					<h3 className={css.karieraSubTitle}>Робота в Німеччині!</h3>
				</div>
				<div className={css.containerFlex}>
					<div className={css.containerFlexItem}>
						<img src={KarieraDeutch} alt='Deutch' className={css.imgFlex} />
						<p className={css.infoText}>
							На будівництво в Німеччині шукаємо працівників!
						</p>
						<ul className={css.infoList}>
							Потрібні фахівці для виконання таких робіт:
							<li className={css.infoItem}>внутрішні роботи;</li>
							<li className={css.infoItem}>фасадні роботи; </li>
							<li className={css.infoItem}>покрівля даху; </li>
							<li className={css.infoItem}>бетонні роботи; </li>
							<li className={css.infoItem}>різноробочі. </li>
						</ul>
						<p className={css.infoSmallText}>
							За подробицями звертайтеся за телефоном{' '}
							<a href='tel:+48605055346' className={css.textPhone}>
								+48 605 055 346
							</a>{' '}
						</p>
					</div>
					<video controls className={css.videoPlayer}>
						<source src={KarieraVideo} type='video/mp4' />
						Your brouser doesnt support video{' '}
					</video>
				</div>
			</div>
		</section>
	)
}
