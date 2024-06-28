import {MdApps} from "react-icons/md"

import "./sidebar.css"

const menu = [
	{
		title: "Dashboard",
		list: [
			{
				title: "Dashboard",
				path: "/admin/dashboard",
				icon: <MdApps />,
			},
		],
	},
]

const Sidebar = () => (
	<div className="sidebar">
		<ul>
			{menu.map((cat) => (
				<li key={cat.title}>{cat.title}</li>
			))}
		</ul>
	</div>
)

export default Sidebar
