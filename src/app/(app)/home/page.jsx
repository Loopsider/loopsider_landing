"use client"

import Image from "next/image"
import Button from "@mui/material/Button"

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react"
import {Mousewheel, Pagination, Navigation} from "swiper/modules"

import "swiper/css"

import Thumb1 from "./svg/loopsiderCarousel/Thumbnail1.svg"
import Thumb2 from "./svg/loopsiderCarousel/Thumbnail2.svg"
import Thumb3 from "./svg/loopsiderCarousel/Thumbnail3.svg"
import Thumb4 from "./svg/loopsiderCarousel/Thumbnail4.svg"
import Thumb5 from "./svg/loopsiderCarousel/Thumbnail5.svg"

import Thumb1period from "./svg/periodCarousel/Thumbnail1.svg"
import Thumb2period from "./svg/periodCarousel/Thumbnail2.svg"
import Thumb3period from "./svg/periodCarousel/Thumbnail3.svg"
import Thumb4period from "./svg/periodCarousel/Thumbnail4.svg"
import Thumb5period from "./svg/periodCarousel/Thumbnail5.svg"
import Thumb6period from "./svg/periodCarousel/Thumbnail6.svg"

// trusted brand logo
import bpi from "../../../../public/img/svg/trustedBrands/bpi.svg"
import canal from "../../../../public/img/svg/trustedBrands/canal.svg"
import citeo from "../../../../public/img/svg/trustedBrands/citeo.svg"
import deezer from "../../../../public/img/svg/trustedBrands/deezer.svg"
import leboncoin from "../../../../public/img/svg/trustedBrands/leboncoin.svg"
import loreal from "../../../../public/img/svg/trustedBrands/loreal.svg"
import meta from "../../../../public/img/svg/trustedBrands/meta.svg"
import netflix from "../../../../public/img/svg/trustedBrands/netflix.svg"
import paribas from "../../../../public/img/svg/trustedBrands/paribas.svg"
import prime from "../../../../public/img/svg/trustedBrands/prime.svg"
import sncf from "../../../../public/img/svg/trustedBrands/sncf.svg"
import tinder from "../../../../public/img/svg/trustedBrands/tinder.svg"
import universal from "../../../../public/img/svg/trustedBrands/universal.svg"
import veolia from "../../../../public/img/svg/trustedBrands/veolia.svg"

// iphone type svg
import elleIphone from "../../../../public/img/svg/iphoneScreen/elle.svg"
import carrefourIphone from "../../../../public/img/svg/iphoneScreen/carrefour.svg"
import tele7joursIphone from "../../../../public/img/svg/iphoneScreen/tele7jours.svg"
import uptousIphone from "../../../../public/img/svg/iphoneScreen/uptous.svg"

import CardLoopsider from "./svg/card_loopsider.svg"
// import LoopsiderThumb1 from "./svg/loopsiderCarousel/Thumbnail1.svg"
import CardPeriod from "./svg/card_period.svg"
import CardHupster from "./svg/card_hupster.svg"
import BilieEilish from "./svg/billieEilish.svg"

import logoWhite from "../../../../public/img/svg/loopsider_logo_blanc.svg"
import hupsterLogoRounded from "../../../../public/img/svg/brandLogos/hupster_logo_rounded.svg"
import fbLogo from "../../../../public/img/svg/logos/fb_logo.svg"
import igLogo from "../../../../public/img/svg/logos/ig_logo.svg"
import tkLogo from "../../../../public/img/svg/logos/tk_logo.svg"
import inLogo from "../../../../public/img/svg/logos/in_logo.svg"
import scLogo from "../../../../public/img/svg/logos/sc_logo.svg"
import ytLogo from "../../../../public/img/svg/logos/yt_logo.svg"
import xLogo from "../../../../public/img/svg/logos/x_logo.svg"
import bCorpLogo from "../../../../public/img/svg/logos/B_corp_logo.svg"

import LoopsiderLogoGreen from "../../../../public/img/svg/brandLogos/Loopsider_logo_green.svg"
import HupsterLogo from "../../../../public/img/svg/brandLogos/hupster_logo.svg"
import PeriodLogo from "../../../../public/img/svg/brandLogos/period_logo.svg"

import ButtonWhite from "../_components/Layout/components/Button"
import ButtonBlack from "../_components/Layout/components/ButtonBlack"
// import Dashboard from "./svg/dashboard-home.svg";
// import BasicModal from "../_components/Layout/components/Button";

export default function HomePage() {
	return (
		<>
			<div
				className="p-5 w-full flex md:flex-row flex-col md:items-start items-center"
				style={{
					backgroundImage: `url(/img/loopsider_main_bg.png)`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					width: "100%",
					height: "100vh",
					maxHeight: "800px",
					padding: "0 5%",
				}}
			>
				<div className="h-full">
					<div className="h-full flex justify-center items-center	flex-col">
						<Image src={logoWhite} alt="dashboard" className=" w-full mb-3" />
						<div className="flex w-full mb-8">
							<Image src={fbLogo} alt="facebook logo" className="mr-3" />
							<Image src={igLogo} alt="instagram logo" className="mr-3" />
							<Image src={tkLogo} alt="tiktok logo" className="mr-3" />
							<Image src={scLogo} alt="snapchat logo" className="mr-3" />
							<Image src={ytLogo} alt="youtube logo" className="mr-3" />
							<Image src={inLogo} alt="linkedin logo" className="mr-3" />
							<Image src={xLogo} alt="x logo" className="" />
						</div>
						<h1 className="text-main-title  w-full">Regarder,</h1>
						<h1 className="text-main-title  w-full">Comprendre,</h1>
						<h1 className="text-main-title w-full" style={{color: "var(--green-loopsider)"}}>
							Partager
						</h1>
						<div className="w-full mt-3">
							<ButtonWhite text="Nous contacter" />
						</div>
					</div>
				</div>
			</div>
			<div className="main-div-spacing-x main-div-spacing-y">
				<div className="flex">
					<h2 style={{color: "var(--black-text)"}} className="text-main-title flex-1 w-32 flex items-center">
						Notre ambition
					</h2>
					<p style={{color: "var(--gray-text)"}} className="text-main flex-1 ...">
						Depuis 2018, rendre l’information accessible, là où sont les français : sur les réseaux sociaux. Des vidéos courtes et percutantes pour regarder, comprendre et partager le
						monde qui nous entoure
					</p>
				</div>
				<div className="mt-5 main-div-spacing-y">
					<div className="flex justify-center">
						<Image className="mr-3" src={CardLoopsider} alt="Card Loopsider" />
						<Image className="mr-3" src={CardPeriod} alt="Card Period" />
						<Image className="mr-3" src={CardHupster} alt="Card Hupster" />
					</div>
				</div>
				<div className="main-div-spacing-x">
					<div className="statistics-container justify-around flex">
						<div className="stat">
							<h2 style={{color: "var(--black-text)"}} className="ml-4 text-main-title">
								+150M
							</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de vidéos vues par mois
							</p>
						</div>
						<div className="stat">
							<h2 style={{color: "var(--black-text)"}} className="ml-4 text-main-title">
								8,1M
							</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de français touchés par jours
							</p>
						</div>
						<div className="stat">
							<h2 style={{color: "var(--black-text)"}} className="ml-4 text-main-title">
								7,3M
							</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de followers
							</p>
						</div>
						<ButtonBlack />
					</div>
				</div>
			</div>
			<div className="bg-[#100E0D] flex">
				<div className="main-div-spacing-x-2 main-div-spacing-y mt-5 mb-5 flex">
					<Image className="mr-20" src={BilieEilish} alt="Billie Eilish photo" />
					<div className="flex flex-col justify-center m-5">
						<h2 className="text-main-title text-white">Vidéo à la une</h2>
						<h3 className="uppercase font-bold	mt-2" style={{color: "var(--green-loopsider)"}}>
							I comme icone
						</h3>
						<p className="text-lg mt-5 text-white font-extralight">
							En 5 ans, elle est devenue l’un des artistes les plus influentes de sa générations. À 22 ans, elle revient déjà avec un 3 album. Voici l’histoire de la prodigieuse Billie
							Eilish
						</p>
						<Button
							// onClick={handleClickOpen}
							style={{
								backgroundColor: "white",
								color: "black",
								borderRadius: "50px",
								padding: "10px 20px",
								textTransform: "none",
								maxWidth: "220px",
							}}
							className="text-lg my-4 mt-5 text-white hover:scale-105 duration-200 font-bold py-2 px-4 rounded-lg"
						>
							Découvrir la vidéo
						</Button>
					</div>
				</div>
			</div>
			<div className="main-div-spacing-y" style={{paddingBottom: "0"}}>
				<div className="mb-5 flex flex-col main-div-spacing-x-2">
					<div className="flex flex-col justify-center">
						<h2 className="text-main-title" style={{color: "var(--black-text)"}}>
							Nos dernières vidéos
						</h2>
						<Image className="mb-5 mt-10" src={LoopsiderLogoGreen} alt="loopsider logo green" />
					</div>
				</div>
				<div className="main-div-spacing-x-left mt-5 mb-20">
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}}
						pagination={{
							dynamicBullets: true,
							clickable: true,
						}}
						modules={[Mousewheel, Pagination, Navigation]}
						slidesPerView={2}
						spaceBetween={10}
						grabCursor
						// mousewheel
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={Thumb1} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb2} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb3} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb4} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb5} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb1} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb1} alt="Thumb1" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mb-5 flex flex-col main-div-spacing-x-2">
					<div className="flex flex-col justify-center">
						<Image className="mb-5 mt-10" src={PeriodLogo} alt="PeriodLogo" />
					</div>
				</div>
				<div className="main-div-spacing-x-left mt-5 mb-20">
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Mousewheel, Pagination]}
						slidesPerView={2}
						spaceBetween={10}
						mousewheel
						grabCursor
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={Thumb1period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb2period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb3period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb4period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb12" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb14" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="mb-5 flex flex-col main-div-spacing-x-2">
					<div className="flex flex-col justify-center">
						<Image className="mb-5 mt-10" src={HupsterLogo} alt="HupsterLogo" />
					</div>
				</div>
				<div className="main-div-spacing-x-left mt-5 mb-20">
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 20,
							},
							1024: {
								slidesPerView: 5,
								spaceBetween: 20,
							},
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Mousewheel, Pagination]}
						slidesPerView={2}
						spaceBetween={10}
						// mousewheel
						grabCursor
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={Thumb1period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb2period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb3period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb4period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb12" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb14" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="main-div-spacing-y main-div-spacing-x-2 flex justify-between">
					<div className="flex items-center	">
						<Image className="mr-5" src={hupsterLogoRounded} alt="hupsterLogoRounded" />
						<p className="text-black text-2xl font-bold">Hupster, c’est aussi une newsletter</p>
					</div>
					<div className="">
						<Button
							// onClick={handleClickOpen}
							style={{
								backgroundColor: "black",
								color: "white",
								borderRadius: "50px",
								padding: "10px 20px",
								textTransform: "none",
								fontWeight: "bold",
							}}
							className="my-4 text-white hover:scale-105 duration-200 font-semibold py-2 px-4 rounded-lg"
						>
							Je m&apos;abonne
						</Button>
					</div>
				</div>
				<div className="main-div-spacing-y main-div-spacing-x-2 bg-[#100E0D] flex">
					<div className="flex-auto w-32">
						<h2 className="text-white text-main-title mb-5">Nos vidéos brand content</h2>
						<p className="text-white">Nos produisons des contenus brand content originaux et impactants pour faire émerger de façon authentique sur les réseaux sociaux</p>
						<div className="w-full mt-3">
							<ButtonWhite text="Nous contacter" />
						</div>
					</div>
					<div className="flex-auto w-32"> </div>
				</div>
				<div className="bg-[#100E0D] main-div-spacing-y-bot">
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 6,
								spaceBetween: 10,
							},
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Mousewheel, Pagination]}
						slidesPerView={2}
						spaceBetween={10}
						mousewheel
						grabCursor
						loop
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={Thumb1period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb2period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb3period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb3} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb4} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb5} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb4period} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb12" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={Thumb6period} alt="Thumb14" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="main-div-spacing-y">
					<h3 className="text-2xl	font-bold text-center loop-black-text mb-12">Ils nous font confiance</h3>
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 6,
								spaceBetween: 10,
							},
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Mousewheel, Pagination]}
						slidesPerView={2}
						spaceBetween={0}
						mousewheel
						grabCursor
						loop
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={bpi} alt="bpi" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={canal} alt="canal" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={citeo} alt="citeo" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={deezer} alt="deezer" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={leboncoin} alt="leboncoin" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={loreal} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={meta} alt="Thumb1" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={netflix} alt="Thumb12" />
						</SwiperSlide>
					</Swiper>
					<Swiper
						breakpoints={{
							640: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 4,
								spaceBetween: 10,
							},
							1024: {
								slidesPerView: 6,
								spaceBetween: 10,
							},
						}}
						pagination={{
							dynamicBullets: true,
						}}
						modules={[Mousewheel, Pagination]}
						slidesPerView={2}
						spaceBetween={0}
						// mousewheel
						grabCursor
						loop
						className="mySwiper"
					>
						<SwiperSlide>
							<Image src={paribas} alt="bpi" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={prime} alt="canal" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={sncf} alt="sncf" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={tinder} alt="tinder" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={universal} alt="leboncoin" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={veolia} alt="veolia" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={meta} alt="Thumb1" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="main-div-spacing-x main-div-spacing-y">
					<div className="flex flex-col mb-11" style={{maxWidth: "50%"}}>
						<h2 className="text-main-title mb-5 loop-black-text">Le studio Loopsider</h2>
						<p className="text-lg loop-gray-text">
							Nous imaginons et nous produisons des contenus en marque blanche pour les médias et les marques, de la vidéo unitaire jusqu’au brand media
						</p>
					</div>
					<div className="statistics-container justify-between" style={{padding: "0"}}>
						<div className="stat">
							<h2 className="ml-4 text-main-title loop-black-text">+500</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								contenus produits chaque mois
							</p>
						</div>
						<div className="stat">
							<h2 className="ml-4 text-main-title loop-black-text">2,5 milliards</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de vidéos vues par an
							</p>
						</div>
						<div className="stat">
							<h2 className="ml-4 text-main-title loop-black-text">30M</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de personnes touchées par mois
							</p>
						</div>
					</div>
					<div className="flex justify-between main-div-spacing-y">
						<Image src={tele7joursIphone} alt="" />
						<Image src={elleIphone} alt="" />
						<Image src={carrefourIphone} alt="" />
						<Image src={uptousIphone} alt="" />
					</div>
				</div>
				<div className="flex justify-center main-div-spacing-x main-div-spacing-y">
					<div className="" style={{maxWidth: "50%"}}>
						<h2 className="text-center text-main-title loop-black-text mb-11">Loopisder, certifié BCORP depuis 2022</h2>
						<div className="flex content-center	">
							<div className="text-lg	font-medium	pr-5">
								<p className="mb-3">B Corp est l’un des labels les plus exigeants et reconnus pour la responsabilité des entreprises, attestant l’impact positif de Loopsider.</p>
								<p className="mb-3">Nos valeurs éditoriales se reflètent au sein de notre entreprise et dans nos collaboration avec nos clients.</p>
								<p className="mb-3">Seulement 300 entreprises en France sont certifiées à ce jour.</p>
							</div>
							<Image className="m-4" src={bCorpLogo} alt="bCorpLogo" />
						</div>
					</div>
				</div>
				<div className="bg-[#100E0D] main-div-spacing-x pt-20 pb-20 flex justify-between items-center	">
					<h2 className="text-5xl	font-bold text-white">Réalisons votre projet</h2>
					<div className="mt-3">
						<ButtonWhite text="Nous contacter" />
					</div>
				</div>
			</div>
		</>
	)
}
