import React from 'react'
import karieraItem1 from '../../images/karieraItem1.png'
import karieraItem2 from '../../images/karieraItem2.png'
import karieraItem3 from '../../images/karieraItem3.png'
import karieraItem4 from '../../images/karieraItem4.png'
import karieraItem5 from '../../images/karieraItem5.png'
import karieraItem6 from '../../images/karieraItem6.png'
import karieraItem7 from '../../images/karieraItem7.png'
import karieraItem8 from '../../images/karieraItem8.png'
import css from './KarieraInCompany.module.css'

export const KarieraInCompany = () => {
	return (
		<section className={css.karieraSection}>
			<h2 className={css.karieraTitle}>ЦІННОСТІ НАШОЇ КОМПАНІЇ</h2>
			<div className={css.karieraTextContainer}>
				<p className={css.karieraTextSubtitle}>
					Робота у нашій компанії – це шлях до розвитку та успіху!
				</p>
				<p className={css.karieraText}>
					Ми цінуємо працьовитість і завзятість, адже, щоб перетвори мрію на
					реальність, недостатньо хотіти, потрібно діяти!
					<br />
					Якщо ви не вмієте чогось, ми віримо у ваш потенціал -
					<span className={css.karieraTextBold}>
						"не кажи не вмію, а кажи навчуся".
					</span>
					<br />
					Кожен день у нашій компанії наповнений можливостями для тих, хто не
					боїться викликів, хто готовий ставити собі цілі і досягати їх. Ми
					віримо, що без наполегливості та співпраці не буде прогресу.
					<br />
					Робота в нашій команді дозволяє вам реалізувати себе, адже без роботи
					день стає роком, а в нас кожен день приносить нові знання, досвід та
					досягнення.
					<br />
					<span className={css.karieraTextBold}>
						"Праця чоловіка годує, а лінь марнує"
					</span>
					- тому ми шукаємо тих, хто готовий працювати на результат і разом з
					нами рухатись вперед...
				</p>
				<p className={css.karieraTextSubtitleRight}>
					Приєднуйтесь до нашої команди та розкрийте свій потенціал!
				</p>
			</div>

			<div className={css.karieraItemContainer}>
				<div className={css.karieraItemDiv}>
					<h3 className={css.karieraSubTitle}>
						ДОДАТКОВІ ПЕРЕВАГИ ДЛЯ РОБІТНИКІВ
					</h3>
				</div>
				<p className={css.karieraTextSubtitle}>
					Ми дбаємо про комфорт та добробут наших працівників, тому створили всі
					необхідні умови для вашої зручності та продуктивної роботи:
				</p>
				<ul className={css.karieraList}>
					<li className={css.karieraItem}>
						<img src={karieraItem1} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Санітарний барак:</span>{' '}
							Обладнаний усім необхідним для підтримки гігієни.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem2} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Їдальня:</span> Просторе та
							затишне місце, де ви зможете смачно поїсти та відпочити під час
							перерв.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem3} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Роздягальня:</span>{' '}
							Забезпечує місце для переодягання та зберігання особистих речей.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem4} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Пральна машина:</span> Ви
							можете скористатися пральною машиною для підтримання одягу в
							чистоті та порядку.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem5} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>
								Забезпечення питною водою влітку:
							</span>{' '}
							У період спекотної погоди ми безкоштовно надаємо воду.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem6} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Безкоштовне житло:</span> Ми
							пропонуємо безкоштовне житло.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem7} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>Аванс щотижня:</span> Для
							зручності наших працівників ми надаємо можливість отримувати аванс
							щотижня, щоб ви могли планувати свої фінанси.
						</p>
					</li>
					<li className={css.karieraItem}>
						<img src={karieraItem8} alt='element'></img>
						<p className={css.karieraItemText}>
							<span className={css.karieraTextBold}>
								Допомога з документами:
							</span>{' '}
							Ми підтримуємо вас на кожному етапі оформлення необхідних
							документів, щоб процес був максимально простим та зрозумілим.{' '}
						</p>
					</li>
				</ul>
				<p className={css.karieraItemTextLast}>
					Ці бенефіти доступні для кожного члена нашої команди без винятків,
					адже ми цінуємо наших працівників і прагнемо створити для них найкращі
					умови.
					<br />
					<br />
					Приєднуйтесь до нашої команди!
				</p>
			</div>
		</section>
	)
}
