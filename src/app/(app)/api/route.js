/* eslint-disable prefer-template */
/**
 * https://nextjs.org/docs/app/building-your-application/routing/route-handlers
 */

import {NextResponse} from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
	host: "mail.gandi.net",
	port: 587,
	secure: false,
	auth: {
		user: "contact@sherp.ai",
		pass: "iodfghjdoigodghdfogndfong343543",
	},
})

export async function POST(request) {
	try {
		const {lastName, email, text} = await request.json()

		const mailOption = {
			from: email,
			to: "romain@loopsider.com",
			// cc: "tech@loopsider.com",
			subject: "Email de la part de " + lastName,
			html: `
			<h3>${lastName} vous a contacté</h3>
			<h2>Voici le message:</h2>
			<p>${text}</p>
			<p>Voici les informations supplémentaires:</p>
			<li> Email: ${email}</li>
			`,
		}

		await transporter.sendMail(mailOption)

		return NextResponse.json({message: "Email Sent Successfully"}, {status: 200})
	} catch (error) {
		return NextResponse.json({message: "Failed to Send Email :" + error}, {status: 500})
	}
}
