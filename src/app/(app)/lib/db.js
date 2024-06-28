import {Pool} from "pg"

const pool = new Pool({
	host: process.env.DATABASE_HOST,
	database: process.env.DATABASE_NAME,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
	ssl: process.env.DATABASE_SSL === "true",
})

export async function libquery(text, params) {
		const res = await pool.query(text, params)
		return res
}
