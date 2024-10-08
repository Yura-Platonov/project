import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
import ModalError from '../Modals/ModalError'
import ModalSuccessful from '../Modals/ModalSuccessful'
import css from './Form.module.css'

const ContactForm = () => {
	const [modalSuccessIsOpen, setModalSuccessIsOpen] = useState(false)
	const [modalErrorIsOpen, setModalErrorIsOpen] = useState(false)

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Pole nie może być puste.'),
		email: Yup.string()
			.email('Proszę wprowadzić poprawny adres e-mail.')
			.required('Pole nie może być puste.'),
		subject: Yup.string().optional(),
		message: Yup.string().required('Pole nie może być puste.'),
		checkbox1: Yup.boolean().oneOf([true]),
		checkbox2: Yup.boolean().oneOf([true]),
	})

	const handleSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			const response = await fetch('https://havrysh.eu/mail/contact-form/', {
				method: 'POST',
				headers: {
					accept: 'application/json',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: values.name,
					email: values.email,
					subject: values.subject,
					message: values.message,
				}),
			})
			// const data = await response.json()

			if (response.ok) {
				setModalSuccessIsOpen(true)
				console.log('12')

				resetForm()
			} else {
				setModalErrorIsOpen(true)
				console.log('13')
			}
		} catch (error) {
			setModalErrorIsOpen(true)
			console.log('14')
		} finally {
			setSubmitting(false)
		}
	}

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					subject: '',
					message: '',
					checkbox1: false,
					checkbox2: false,
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ isSubmitting, errors, touched }) => (
					<Form className={css.formContainer}>
						<h2 className={css.title}>
							Cześć! <br /> Masz pytanie?
							<br /> W takim razie zapraszamy do kontaktu z nami !
						</h2>
						<div className={css.insideContainer}>
							<div className={css.flexContainer}>
								<div className={css.firstSection}>
									<div className={css.labelContainer}>
										<label className={css.labelTitle} htmlFor='name'>
											Imię i nazwisko*
										</label>
										<Field
											className={css.formInput}
											id='name'
											type='text'
											name='name'
											autoComplete='off'
										/>
										<ErrorMessage
											className={css.errorMsg}
											name='name'
											component='div'
										/>
									</div>

									<div className={css.labelContainer}>
										<label className={css.labelTitle} htmlFor='email'>
											Adres e-mail*
										</label>
										<Field
											className={css.formInput}
											id='email'
											type='email'
											name='email'
											autoComplete='on'
										/>
										<ErrorMessage
											className={css.errorMsg}
											name='email'
											component='div'
										/>
									</div>

									<div className={css.labelContainer}>
										<label className={css.labelTitle} htmlFor='subject'>
											Numer telefonu
										</label>
										<Field
											className={css.formInput}
											type='text'
											name='subject'
											id='subject'
										/>
									</div>
								</div>

								<div className={css.secondSection}>
									<label className={css.labelTitle} htmlFor='message'>
										Wiadomość*
									</label>
									<Field
										className={css.formTextarea}
										as='textarea'
										id='message'
										name='message'
									/>
									<ErrorMessage
										className={css.errorMsg}
										name='message'
										component='div'
									/>
								</div>
							</div>
							<label className={css.checkbox}>
								<Field
									className={css.customCheckboxInput}
									type='checkbox'
									name='checkbox1'
								/>
								<span className={css.customCheckbox}></span>
								<p
									className={`${css.text} ${
										errors.checkbox1 && touched.checkbox1 ? css.errorText : ''
									}`}
								>
									Wyrażam zgodę na kontakt telefoniczny (również MMS, SMS) w
									celu otrzymywania informacji  m.in. o oferowanych usługach,
									nowych możliwościach ofertowych i promocyjnych.
								</p>
							</label>

							<label className={css.checkbox}>
								<Field
									className={css.customCheckboxInput}
									type='checkbox'
									name='checkbox2'
								/>
								<span className={css.customCheckbox}></span>
								<p
									className={`${css.text} ${
										errors.checkbox2 && touched.checkbox2 ? css.errorText : ''
									}`}
								>
									Wyrażam zgodę na kontakt elektroniczny (email) w celu
									otrzymywania informacji o  m.in. o oferowanych usługach,
									nowych możliwościach ofertowych i promocyjnych.
								</p>
							</label>

							<button
								className={css.submitButtom}
								type='submit'
								disabled={isSubmitting}
							>
								Wyślij
							</button>
						</div>
					</Form>
				)}
			</Formik>
			<ModalSuccessful
				isOpen={modalSuccessIsOpen}
				// isOpen={true}
				onRequestClose={() => setModalSuccessIsOpen(false)}
			/>
			<ModalError
				isOpen={modalErrorIsOpen}
				onRequestClose={() => setModalErrorIsOpen(false)}
			/>
		</>
	)
}

export default ContactForm
