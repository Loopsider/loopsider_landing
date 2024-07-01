"use client"

import {useEffect, useState} from "react"
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"

export default function Layout({children}) {
	const [isAdminRoute, setIsAdminRoute] = useState(false)

	useEffect(() => {
		const currentPath = window.location.pathname
		setIsAdminRoute(currentPath.includes("admin"))
	}, [])

	return (
		<div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
			{!isAdminRoute && <Topbar />}
			<div className="">
				<main>{children}</main>
			</div>
			{!isAdminRoute && <Footer />}
		</div>
	)
}
