import Sidebar from "./sidebar/sidebar"

export default function AppLayout({children}) {
	return (
		<div>
			<div>
				<Sidebar />
			</div>

			{children}
		</div>
	)
}
