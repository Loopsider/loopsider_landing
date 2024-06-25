import Image from "next/image"
import Button from "@mui/material/Button"

// import BasicModal from "../Button"

import LoopsiderLogoGreen from "./svg/loopsider_footer.svg"
import HupsterLogo from "./svg/hupster_footer.svg"
import PeriodLogo from "./svg/period_footer.svg"
import bCorpLogo from "./svg/bcorp_footer.svg"
import logoBackLoopsider from "../../../../../../../public/img/svg/logo_loopsider.svg"

import fbLogo from "../../../../../../../public/img/svg/logos/black/fb.svg"
import igLogo from "../../../../../../../public/img/svg/logos/black/ig.svg"
import tkLogo from "../../../../../../../public/img/svg/logos/black/tk.svg"
import inLogo from "../../../../../../../public/img/svg/logos/black/in.svg"
import scLogo from "../../../../../../../public/img/svg/logos/black/sc.svg"
import ytLogo from "../../../../../../../public/img/svg/logos/black/yt.svg"
import xLogo from "../../../../../../../public/img/svg/logos/black/x.svg"

const Footer = () => (
	<div className="main-div-spacing-x pt-20 md:flex-column items-center w-full text-black bg-white pb-20">
		<div className="flex justify-between">
			<div className="flex-column">
				{/* <BasicModal firstletter="D" title="emander une démo" /> */}
				<Image className="mb-3" src={logoBackLoopsider} alt="logoBackLoopsider" />
				<div className="flex mb-3">
					<Image className="mr-1" src={LoopsiderLogoGreen} alt="LoopsiderLogoGreen" />
					<Image className="mr-1" src={HupsterLogo} alt="HupsterLogo" />
					<Image className="mr-1" src={PeriodLogo} alt="PeriodLogo" />
					<Image className="mr-1" src={bCorpLogo} alt="bCorpLogo" />
				</div>
				<div className="flex ">
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={fbLogo} alt="fbLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={igLogo} alt="igLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={tkLogo} alt="tkLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={inLogo} alt="inLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={scLogo} alt="scLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={ytLogo} alt="ytLogo" />
					<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={xLogo} alt="xLogo" />
				</div>
			</div>

			<div className="flex flex-col">
				<p className="font-bold mb-4">S’abonner à notre newsletter</p>
				<a rel="noreferrer" href="mailto:jamie@fakeemail.com" target="_blank" className=" pb-4 loop-gray-text link-underline link-underline-black font-semibold">
					Adresse email
				</a>
				<Button
					style={{
						backgroundColor: "black",
						color: "white",
						borderRadius: "50px",
						padding: "10px 20px",
						textTransform: "none",
						fontWeight: "bold",
						border: "none",
					}}
					// onClick={handleClickOpen}
				>
					Je m&apos;abonne
				</Button>
			</div>

			<div className="flex flex-col space-x-9">
				<p className="link-underline link-underline-black hover:scale-105 duration-200 font-semibold">Articles</p>
				<a className="loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/info" rel="noreferrer">
					Derniers Articles
				</a>
				<a className="loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/info" rel="noreferrer">
					...
				</a>
			</div>
		</div>
	</div>
)

export default Footer
