/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
import React from "react"
import {Button, Card, CardActions, CardContent, Grid} from "@mui/material"
import {Field, Form, Formik} from "formik"
import * as Yup from "yup"
import {TextField} from "formik-material-ui"
import {env} from "../../../../../../configs/env"

const initialValues = {
	lastName: "",
	email: "",
	text: "",
}

const validationSchema = Yup.object().shape({
	lastName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
})

const UserForm = ({handleClose}) => {
	const endpoint = "/api"
	const url = `${env.BASE_URL}${endpoint}`
	const onSubmit = async (values) => {
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				lastName: values.lastName,
				email: values.email,
				text: values.text,
			}),
		})
		handleClose()
	}

	return (
		<Grid>
			<Grid item md={6}>
				<Card>
					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
						{({values}) => {
							return (
								<Form className="shadow-white">
									<CardContent>
										<div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
											<div className="space-y-5">
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre Nom" variant="outlined" fullWidth name="lastName" component={TextField} />
												</Grid>
											</div>
											<div className="space-y-5">
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre email professionnel" variant="outlined" fullWidth name="email" component={TextField} />
												</Grid>
											</div>
										</div>
										<div className="mt-5">
											<Grid item xs={12} sm={12} md={12}>
												<Field label="Votre texte" variant="outlined" fullWidth name="text" component={TextField} multiline rows={4} maxRows={8} />
											</Grid>
										</div>
									</CardContent>
									<CardActions className="flex items-center">
										<Button
											autoFocus
											type="submit"
											style={{
												backgroundColor: "black",
												color: "white",
												borderRadius: "50px",
												padding: "10px 20px",
												textTransform: "none",
												fontWeight: "bold",
											}}
											className="my-4 text-white hover:scale-105 duration-200 font-semibold py-2 px-4 rounded-lg"
										>
											Contacter un de nos experts
										</Button>
									</CardActions>
								</Form>
							)
						}}
					</Formik>
				</Card>
			</Grid>
		</Grid>
	)
}

export default UserForm
