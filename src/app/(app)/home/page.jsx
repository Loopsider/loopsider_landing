/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable import/no-unresolved */

"use client"

// eslint-disable-next-line no-unused-vars
import {React, useEffect, useState} from "react"

import Image from "next/image"
import Button from "@mui/material/Button"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {Mousewheel, Navigation, Pagination} from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"

// import Thumb1 from "./svg/loopsiderCarousel/Thumbnail1.svg"
// import Thumb2 from "./svg/loopsiderCarousel/Thumbnail2.svg"
import Thumb3 from "./svg/loopsiderCarousel/Thumbnail3.svg"
import Thumb4 from "./svg/loopsiderCarousel/Thumbnail4.svg"
import Thumb5 from "./svg/loopsiderCarousel/Thumbnail5.svg"

import Thumb1period from "./svg/periodCarousel/Thumbnail1.svg"
import Thumb2period from "./svg/periodCarousel/Thumbnail2.svg"
import Thumb3period from "./svg/periodCarousel/Thumbnail3.svg"
import Thumb4period from "./svg/periodCarousel/Thumbnail4.svg"
// import Thumb5period from "./svg/periodCarousel/Thumbnail5.svg"
import Thumb6period from "./svg/periodCarousel/Thumbnail6.svg"

import CardLoopsider from "./svg/card_loopsider.svg"
// import LoopsiderThumb1 from "./svg/loopsiderCarousel/Thumbnail1.svg"
import CardPeriod from "./svg/card_period.svg"
import CardHupster from "./svg/card_hupster.svg"
import BilieEilish from "./svg/billieEilish.svg"

// trusted brand logo
import bpi from "../../../../public/img/svg/trustedBrands/bpi.svg"
import canal from "../../../../public/img/svg/trustedBrands/canal.svg"
import citeo from "../../../../public/img/svg/trustedBrands/citeo.svg"
import deezer from "../../../../public/img/svg/trustedBrands/deezer.svg"
import leboncoin from "../../../../public/img/svg/trustedBrands/leboncoin.svg"
import loreal from "../../../../public/img/svg/trustedBrands/loreal.svg"
import meta from "../../../../public/img/svg/trustedBrands/meta.svg"
import netflix from "../../../../public/img/svg/trustedBrands/netflix.svg"
import republique from "../../../../public/img/svg/trustedBrands/republique.svg"
import google from "../../../../public/img/svg/trustedBrands/google.svg"
import m from "../../../../public/img/svg/trustedBrands/m.png"
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
import {env} from "../../../configs/env"

const SwiperButtonNext = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowForwardIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slideNext()} />
}
const SwiperButtonPrev = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowBackIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slidePrev()} />
}

export default function HomePage() {
	const [dataLoopsider, setDataLoopsider] = useState([])

	const endpointLoop = "/api/loopsider"
	const urlLoop = `${env.BASE_URL}${endpointLoop}`
	useEffect(() => {
		async function fetchLoopsiderData() {
			const response = await fetch(urlLoop, {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})

			const result = await response.json()
			setDataLoopsider(result.data)
		}

		fetchLoopsiderData()
	}, [])

	return (
		<>
			<div className="bg-image p-5 w-full flex md:flex-row flex-col md:items-start items-center">
				<div className="h-full w-full">
					<div className="h-full flex md:justify-center justify-end items-center	flex-col">
						<div className="flex w-full md:justify-start justify-center">
							<Image src={logoWhite} alt="dashboard" className=" mb-3" />
						</div>
						<div className="flex md:justify-start justify-center w-full mb-8">
							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.facebook.com/Loopsider" rel="noreferrer">
								<Image src={fbLogo} alt="facebook logo" className="mr-3" />
							</a>

							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.instagram.com/loopsider" rel="noreferrer">
								<Image src={igLogo} alt="instagram logo" className="mr-3" />
							</a>

							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.tiktok.com/@loopsider" rel="noreferrer">
								<Image src={tkLogo} alt="tiktok logo" className="mr-3" />
							</a>
							<a
								target="_blank"
								className="link-underline-black hover:scale-105 duration-200"
								href="https://www.snapchat.com/p/37b40764-f5da-4fc3-8326-c8ebf26c3973/1147134081357824"
								rel="noreferrer"
							>
								<Image src={scLogo} alt="snapchat logo" className="mr-3" />
							</a>
							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.youtube.com/c/loopsider" rel="noreferrer">
								<Image src={ytLogo} alt="youtube logo" className="mr-3" />
							</a>

							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.linkedin.com/company/loopsider" rel="noreferrer">
								<Image src={inLogo} alt="linkedin logo" className="mr-3" />
							</a>
							<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://x.com/loopsidernews?lang=en" rel="noreferrer">
								<Image src={xLogo} alt="x logo" className="" />
							</a>
						</div>
						<div className="md:flex hidden flex-col w-full">
							<h1 className="text-main-title  w-full">Regarder,</h1>
							<h1 className="text-main-title  w-full">Comprendre,</h1>
							<h1 className="text-main-title w-full" style={{color: "var(--green-loopsider)"}}>
								Partager
							</h1>
						</div>
						<div className="flex md:hidden ">
							<h1 className="text-main-title text-center">
								Regarder, Comprendre,{" "}
								<span className="text-main-title" style={{color: "var(--green-loopsider)"}}>
									Partager
								</span>
							</h1>
						</div>

						<div className="w-full flex md:justify-start justify-center mt-3">
							<ButtonWhite text="Nous contacter" />
						</div>
					</div>
				</div>
			</div>
			<div className="main-div-spacing-x main-div-spacing-y">
				<div className="md:hidden flex text-lg font-bold" style={{color: "var(--green-loopsider)"}}>
					LOOPSIDER
				</div>
				<div className="flex md:flex-row flex-col">
					<h2 style={{color: "var(--black-text)"}} className="md:mb-0 mb-5 text-main-title flex-1 md:w-32 w-full flex items-center">
						Notre ambition
					</h2>
					<p style={{color: "var(--gray-text)"}} className="text-main flex-1 ...">
						Depuis 2018, rendre l’information accessible, là où sont les français : sur les réseaux sociaux. Des vidéos courtes et percutantes pour regarder, comprendre et partager le
						monde qui nous entoure
					</p>
				</div>
				<div className="flex justify-center mt-5 main-div-spacing-y">
					<div className="flex lg:flex-row flex-col justify-center">
						<Image className="hover:scale-105 duration-200 bg-auto mr-3" src={CardLoopsider} alt="Card Loopsider" />
						<Image className="hover:scale-105 duration-200 bg-auto mr-3" src={CardPeriod} alt="Card Period" />
						<Image className="hover:scale-105 duration-200 bg-auto mr-3" src={CardHupster} alt="Card Hupster" />
					</div>
				</div>
				<div className="main-div-spacing-x">
					<div className="statistics-container md:items-center items-start justify-around flex md:flex-row flex-col ">
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
						<div className="stat md:mb-0 mb-5">
							<h2 style={{color: "var(--black-text)"}} className="ml-4 text-main-title">
								7,3M
							</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de followers
							</p>
						</div>
						<div className="md:flex hidden">
							<ButtonBlack />
						</div>

						<div className="md:hidden justify-center flex w-full">
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
								className="my-4 w-3/4 text-white hover:scale-105 duration-200 font-semibold py-2 px-4 rounded-lg"
							>
								Nous contacter
							</Button>{" "}
						</div>
					</div>
				</div>
			</div>
			<div className="bg-[#100E0D] flex">
				<div className="main-div-spacing-x-2 main-div-spacing-y mt-5 mb-5 flex md:flex-row flex-col items-center">
					<Image className="bg-auto md:mr-20 mr-0" src={BilieEilish} alt="Billie Eilish photo" />
					<div className="flex flex-col justify-center m-5">
						<div className="flex flex-col flex-col-reverse md:text-start text-center">
							<h2 className="text-main-title text-white">Vidéo à la une</h2>
							<h3 className="uppercase font-bold mt-2 mb:mb-0 mb-4" style={{color: "var(--green-loopsider)"}}>
								I comme icone
							</h3>
						</div>

						<p className="md:text-start text-center text-lg mt-5 text-white font-extralight">
							En 5 ans, elle est devenue l’un des artistes les plus influentes de sa générations. À 22 ans, elle revient déjà avec un 3 album. Voici l’histoire de la prodigieuse Billie
							Eilish
						</p>
						<div className="flex md:justify-start justify-center w-full mt-2">
							<Button
								style={{
									backgroundColor: "white",
									color: "black",
									borderRadius: "50px",
									padding: "10px 20px",
									textTransform: "none",
									maxWidth: "220px",
								}}
								className=" w-full text-lg my-4 mt-5 text-white hover:scale-105 duration-200 font-bold py-2 px-4 rounded-lg"
							>
								<a target="_blank" href="/" rel="noreferrer">
									Découvrir la vidéo
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div className="main-div-spacing-y" style={{paddingBottom: "0"}}>
				<div className="mb-5 flex flex-col main-div-spacing-x-2">
					<div className="flex flex-col justify-center">
						<h2 className="text-main-title mt-3" style={{color: "var(--black-text)"}}>
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
						className="mySwiper"
					>
						<div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
							<SwiperButtonPrev />
							<SwiperButtonNext />
						</div>
						{Array.isArray(dataLoopsider) &&
							dataLoopsider.map((item, index) => (
								<SwiperSlide key={index}>
									<Image
										className=""
										width={200}
										height={350}
										src={item.storage_thumbnail ? `${process.env.NEXT_PUBLIC_GOOGLE_CDN}/${item.storage_thumbnail}` : ""}
										alt={item.account_name}
									/>
								</SwiperSlide>
							))}
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
						// mousewheel
						grabCursor
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
						className="mySwiper"
					>
						<div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
							<SwiperButtonPrev />
							<SwiperButtonNext />
						</div>
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
						<div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
							<SwiperButtonPrev />
							<SwiperButtonNext />
						</div>
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
					<div className="md:flex hidden items-center">
						<Image className="mr-5" src={hupsterLogoRounded} alt="hupsterLogoRounded" />
						<p className="text-black text-2xl font-bold">Hupster, c’est aussi une newsletter</p>
					</div>
					<div className="md:flex hidden">
						<a rel="noreferrer" target="_blank" href="https://hupster.kessel.media/posts?subscribe=true&priceId=price_free">
							<Button
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
						</a>
					</div>
				</div>
				<div className=" bg-[#100E0D]">
					<div className="main-div-spacing-y main-div-spacing-x-2 flex">
						<div className="flex-auto md:w-32 w-full">
							<h2 className="text-white text-main-title mb-5 md:text-left text-center">Nos vidéos brand content</h2>
							<p className="text-white md:text-left text-center">
								Nos produisons des contenus brand content originaux et impactants pour faire émerger de façon authentique sur les réseaux sociaux
							</p>
							<div className="w-full mt-3 flex md:justify-start justify-center	">
								<ButtonWhite text="Nous contacter" />
							</div>
						</div>
						<div className="md:flex flex-auto hidden md:w-32 w-full"> </div>
					</div>
					<div className=" main-div-spacing-y-bot">
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
							loop
							// onSlideChange={() => console.log("slide change")}
							// onSwiper={(swiper) => console.log(swiper)}
							className="mySwiper"
						>
							<div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
								<SwiperButtonPrev color1="white" />
								<SwiperButtonNext color1="white" />
							</div>
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
						slidesPerView={4}
						spaceBetween={30}
						centeredSlides
						grabCursor
						loop
						className="mySwiper"
					>
						<SwiperSlide className="justify-center" style={{display: "flex !important"}}>
							<Image style={{height: "90px", width: "90px"}} src={republique} alt="republique" />
						</SwiperSlide>
						<SwiperSlide className="justify-center" style={{display: "flex !important"}}>
							<Image style={{height: "90px", width: "90px"}} src={m} alt="m" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={netflix} alt="netflix" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={prime} alt="prime" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={universal} alt="universal" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={google} alt="google" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={paribas} alt="paribas" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={sncf} alt="sncf" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={tinder} alt="tinder" />
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
						centeredSlides
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
							<Image src={loreal} alt="loreal" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={meta} alt="meta" />
						</SwiperSlide>
						<SwiperSlide>
							<Image src={veolia} alt="veolia" />
						</SwiperSlide>
					</Swiper>
				</div>
				<div className="main-div-spacing-x main-div-spacing-y">
					<div className="flex flex-col mb-11 width50">
						<h2 className="text-main-title mb-5 loop-black-text">Le studio Loopsider</h2>
						<p className="text-lg loop-gray-text">
							Nous imaginons et nous produisons des contenus en marque blanche pour les médias et les marques, de la vidéo unitaire jusqu’au brand media
						</p>
					</div>
					<div className="statistics-container justify-between flex md:flex-row flex-col" style={{padding: "0"}}>
						<div className="stat mb-5">
							<h2 className="ml-4 text-main-title loop-black-text">+500</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								contenus produits chaque mois
							</p>
						</div>
						<div className="stat  mb-5">
							<h2 className="ml-4 text-main-title loop-black-text">2,5 milliards</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de vidéos vues par an
							</p>
						</div>
						<div className="stat mb-5">
							<h2 className="ml-4 text-main-title loop-black-text">30M</h2>
							<p style={{color: "var(--gray-text)"}} className="ml-4 text-main ">
								de personnes touchées par mois
							</p>
						</div>
					</div>
					<div className="lg:flex hidden flex-row justify-between main-div-spacing-y">
						<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.instagram.com/up_to_us_veolia" rel="noreferrer">
							<Image className="h-full" src={uptousIphone} alt="" />
						</a>
						<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.instagram.com/ellefr" rel="noreferrer">
							<Image className="h-full" src={elleIphone} alt="" />
						</a>

						<a target="_blank" className="link-underline-black hover:scale-105 duration-200" href="https://www.instagram.com/tele7jours" rel="noreferrer">
							<Image className="h-full" src={tele7joursIphone} alt="" />
						</a>
						<Image className="h-full hover:scale-105 duration-200" src={carrefourIphone} alt="" />
					</div>
					<div className="lg:hidden flex flex-col flex-row">
						<div className="flex justify-around w-full mt-5">
							<Image style={{maxWidth: "150px"}} className="	" src={uptousIphone} alt="" />
							<Image style={{maxWidth: "150px"}} className="	" src={elleIphone} alt="" />
						</div>
						<div className="flex justify-around w-full mt-5">
							<Image style={{maxWidth: "150px"}} className="" src={tele7joursIphone} alt="" />
							<Image style={{maxWidth: "150px"}} className="	" src={carrefourIphone} alt="" />
						</div>
					</div>
				</div>
				<div className="flex justify-center main-div-spacing-x main-div-spacing-y">
					<div className="md:w-1/2 w-full">
						<h2 className="text-center text-main-title loop-black-text mb-11">Loopsider, certifié BCORP depuis 2022</h2>
						<div className="flex md:flex-row flex-col content-center mb-5">
							<div className="text-lg	font-medium	md:pr-5 pr-0">
								<p className="mb-3">B Corp est l’un des labels les plus exigeants et reconnus pour la responsabilité des entreprises, attestant l’impact positif de Loopsider.</p>
								<p className="mb-3">Nos valeurs éditoriales se reflètent au sein de notre entreprise et dans nos collaboration avec nos clients.</p>
								<p className="mb-3">Seulement 300 entreprises en France sont certifiées à ce jour.</p>
							</div>
							<div className="flex w-full justify-center">
								<Image className="m-4" src={bCorpLogo} alt="bCorpLogo" />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-[#100E0D] main-div-spacing-x md:pt-20 pt-9 md:pb-20 pb-9 flex md:flex-row flex-col justify-between md:items-center items-start">
					<h2 className="md:text-5xl text-3xl font-bold text-white">Réalisons votre projet</h2>
					<div className="flex md:justify-end justify-start md:mt-3 mt-5 md:w-1/2 w-full">
						<ButtonWhite text="Contactez-nous" />
					</div>
				</div>
			</div>
		</>
	)
}
