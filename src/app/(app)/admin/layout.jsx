import React from "react"
import {FaUser} from "react-icons/fa"
import Sidebar from "./sidebar/sidebar"

export default function AppLayout({children}) {
	return (
		<div style={{display: "flex"}}>
			<Sidebar />
			<div style={{flexGrow: 1}}>
				<div
					className="cursor-pointer"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "60px",
						backgroundColor: "#fff",
						boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						padding: "0 20px",
					}}
				>
					<div className="">
						<FaUser className="text-2xl" />
					</div>
				</div>
				<div style={{marginTop: "60px", padding: "20px"}}>{children}</div>
			</div>
		</div>
	)
}
