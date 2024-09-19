import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const ContactForm = () => {
	const validationSchema = Yup.object().shape({
		fullName: Yup.string().required('Pole nie może być puste.'),
		email: Yup.string()
			.email('Proszę wprowadzić poprawny adres e-mail.')
			.required('Pole nie może być puste.'),
		phoneNumber: Yup.string().optional(),
		textarea: Yup.string().required('Pole nie może być puste.'),
		checkbox1: Yup.boolean().oneOf([true], 'Это обязательное поле'),
		checkbox2: Yup.boolean().oneOf([true], 'Это обязательное поле'),
	})

	return (
		<Formik
			initialValues={{
				fullName: '',
				email: '',
				phoneNumber: '',
				textarea: '',
				checkbox1: false,
				checkbox2: false,
			}}
			validationSchema={validationSchema}
			onSubmit={values => {
				console.log('Form data', values)
			}}
		>
			{({ isSubmitting }) => (
				<Form>
					<h2>Kontakt</h2>
					<div>
						<label htmlFor='fullName'>Imię i nazwisko*</label>
						<Field type='text' name='fullName' />
						<ErrorMessage name='fullName' component='div' />
					</div>

					<div>
						<label htmlFor='email'>Adres e-mail*</label>
						<Field type='email' name='email' />
						<ErrorMessage name='email' component='div' />
					</div>

					<div>
						<label htmlFor='phoneNumber'>Numer telefonu</label>
						<Field type='text' name='phoneNumber' />
						<ErrorMessage name='phoneNumber' component='div' />
					</div>

					<div>
						<label htmlFor='textarea'>Wiadomość*</label>
						<Field as='textarea' name='textarea' />
						<ErrorMessage name='textarea' component='div' />
					</div>

					<div>
						<label>
							<Field type='checkbox' name='checkbox1' />
							Wyrażam zgodę na kontakt telefoniczny (również MMS, SMS) w celu
							otrzymywania informacji  m.in. o oferowanych usługach, nowych
							możliwościach ofertowych i promocyjnych.{' '}
						</label>
						<ErrorMessage name='checkbox1' component='div' />
					</div>

					<div>
						<label>
							<Field type='checkbox' name='checkbox2' />
							Wyrażam zgodę na kontakt elektroniczny (email) w celu otrzymywania
							informacji o  m.in. o oferowanych usługach, nowych możliwościach
							ofertowych i promocyjnych.{' '}
						</label>
						<ErrorMessage name='checkbox2' component='div' />
					</div>

					<button type='submit' disabled={isSubmitting}>
						Wyślij
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default ContactForm
