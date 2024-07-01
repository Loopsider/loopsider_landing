import {MdApps} from "react-icons/md"
import Image from "next/image"

import Logo from "../../../../../public/img/svg/loopsider_logo_blanc.svg"
import "./sidebar.css"

const menu = [
	{
		list: [
			{
				title: "Dashboard",
				path: "/admin/",
				icon: <MdApps />,
			},
			{
				title: "Loopsider",
				path: "/admin/loopsider",
				icon: <MdApps />,
			},
			{
				title: "Hupster",
				path: "/admin/Hupster",
				icon: <MdApps />,
			},
			{
				title: "Period",
				path: "/admin/period",
				icon: <MdApps />,
			},
			{
				title: "Utilisateurs",
				path: "/admin/users",
				icon: <MdApps />,
			},
			{
				title: "test",
				path: "/admin/signin",
				icon: <MdApps />,
			},
		],
	},
]

const Sidebar = () => (
	<div className="sidebar">
		<div className="">
			<div className="mb-11">
				<a href="/" className="link-underline-black hover:scale-105 duration-200 flex justify-center  ">
					<Image className="w-3/4" src={Logo} alt="loopsider logo" />
				</a>
			</div>

			<ul className="p-5">
				{menu.map((cat) => (
					<li className="text-lg" key={cat.title}>
						<ul className="ml-4 mt-5">
							{cat.list.map((item) => (
								<li className="link-underline-black hover:scale-105 duration-200 flex items-center mb-5" key={item.title}>
									{item.icon}
									<a href={item.path} className="pl-2">
										{item.title}
									</a>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	</div>
)

export default Sidebar
