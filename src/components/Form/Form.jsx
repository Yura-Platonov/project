import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import css from './Form.module.css'

const ContactForm = () => {
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

	const handleSubmit = async (values, { setSubmitting }) => {
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
			const data = await response.json()

			if (response.ok) {
				alert('Email sent!')
				console.log('Succesfull')
			} else {
				alert(`Error: ${data.message || 'Something went wrong.'}`)
			}
		} catch (error) {
			alert('An unexpected error occurred.')
		} finally {
			setSubmitting(false)
		}
	}

	return (
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
									<Field className={css.formInput} type='text' name='name' />
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
									<Field className={css.formInput} type='email' name='email' />
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
									<Field className={css.formInput} type='text' name='subject' />
									{/* <ErrorMessage
										className={css.errorMsg}
										name='phoneNumber'
										component='div'
									/> */}
								</div>
							</div>

							<div className={css.secondSection}>
								<label className={css.labelTitle} htmlFor='message'>
									Wiadomość*
								</label>
								<Field
									className={css.formTextarea}
									as='textarea'
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
								Wyrażam zgodę na kontakt telefoniczny (również MMS, SMS) w celu
								otrzymywania informacji  m.in. o oferowanych usługach, nowych
								możliwościach ofertowych i promocyjnych.
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
								otrzymywania informacji o  m.in. o oferowanych usługach, nowych
								możliwościach ofertowych i promocyjnych.
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
	)
}

export default ContactForm
