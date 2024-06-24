"use client"

import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

export default function Layout({children}) {
	return (
		<div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
			<Topbar />
			<div className="">
				<main>{children}</main>
			</div>

			<Footer />
		</div>
	)
}
