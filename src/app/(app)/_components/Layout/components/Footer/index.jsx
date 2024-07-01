import Image from "next/image"
// import Button from "@mui/material/Button"
// import TextField from "@mui/material/TextField"
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
	<div className="main-div-spacing-x md:pt-20 pt-11 md:flex-column items-center w-full text-black bg-white md:pb-20 pb-11">
		<div className="flex md:flex-row flex-col justify-between">
			<div className="flex flex-col md:items-start items-center">
				{/* <BasicModal firstletter="D" title="emander une démo" /> */}
				<Image className="mb-3" src={logoBackLoopsider} alt="logoBackLoopsider" />
				<div className="flex mb-3">
					<Image className="mr-1" src={LoopsiderLogoGreen} alt="LoopsiderLogoGreen" />
					<Image className="mr-1" src={HupsterLogo} alt="HupsterLogo" />
					<Image className="mr-1" src={PeriodLogo} alt="PeriodLogo" />
					<Image className="mr-1" src={bCorpLogo} alt="bCorpLogo" />
				</div>
				<div className="flex ">
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.facebook.com/Loopsider" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={fbLogo} alt="fbLogo" />
					</a>
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.instagram.com/loopsider" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={igLogo} alt="igLogo" />
					</a>
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.tiktok.com/@loopsider" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={tkLogo} alt="tkLogo" />
					</a>
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.linkedin.com/company/loopsider" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={inLogo} alt="inLogo" />
					</a>
					<a
						target="_blank"
						className="link-underline-black hover:scale-105 duration-200"
						href="https://www.snapchat.com/p/37b40764-f5da-4fc3-8326-c8ebf26c3973/1147134081357824"
						rel="noreferrer"
					>
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={scLogo} alt="scLogo" />
					</a>
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.youtube.com/c/loopsider" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={ytLogo} alt="ytLogo" />
					</a>
					<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://x.com/loopsidernews?lang=en" rel="noreferrer">
						<Image className="hover:scale-105 duration-200 cursor-pointer mr-1" src={xLogo} alt="xLogo" />
					</a>
				</div>
			</div>

			<div className="md:hidden flex flex-col space-x-9 mt-5">
				<p className="link-underline link-underline-black hover:scale-105 duration-200 font-semibold">Articles</p>
				<a className="loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/info" rel="noreferrer">
					Derniers Articles
				</a>
				<a className="loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/info" rel="noreferrer">
					...
				</a>
			</div>

			{/* <div className="flex flex-col md:mt-0 mt-5">
				<p className="font-bold mb-4">S’abonner à notre newsletter</p>
				<TextField fullWidth className="mb-4" id="outlined-basic" label="Adresse email" variant="standard" />

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
				>
					Je m&apos;abonne
				</Button>
			</div> */}

			<div className="md:flex hidden flex-col space-x-9">
				<p className="link-underline link-underline-black font-semibold">Articles</p>
				<a className="pt-3 loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/articles/1" rel="noreferrer">
					Le mariage musulmant
				</a>
				<a className="pt-3 loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/articles/2" rel="noreferrer">
					Le Coffret Cadeau Idéal
				</a>
				<a className="pt-3 loop-gray-text link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/articles/3" rel="noreferrer">
					La fête du Ramadan
				</a>
			</div>

			<div>
				<a className="pt-3 link-underline link-underline-black hover:scale-105 duration-200 font-semibold" href="/legal" rel="noreferrer">
					<p>Mentions légales</p>
				</a>
			</div>
		</div>
	</div>
)

export default Footer
