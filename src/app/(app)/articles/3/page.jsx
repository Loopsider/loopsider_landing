"use client"

import React from "react"
import Image from "next/image"
import Button from "@mui/material/Button"

import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {Pagination, Navigation} from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

import logo from "../../../../../public/img/logo_loopsider.png"

import img1 from "../img/01.jpg"
import img2 from "../img/08.jpg"
import img3 from "../img/14.jpg"
import img4 from "../img/16.jpg"

const SwiperButtonNext = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowForwardIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slideNext()} />
}
const SwiperButtonPrev = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowBackIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slidePrev()} />
}

export default function Article3() {
	return (
		<>
			<a href="/">
				<Image className="h-full p-5 m-5" src={logo} alt="loopsider logo" />
			</a>
			<div className="mt-5 mb-11">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination, Navigation]}
					slidesPerView={2}
					spaceBetween={20}
					grabCursor
					className="mySwiper"
				>
					<div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
						<SwiperButtonPrev color="black" />
						<SwiperButtonNext />
					</div>
					<SwiperSlide>
						<Image src={img1} alt="img1" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img2} alt="img1" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img3} alt="img1" />
					</SwiperSlide>
					<SwiperSlide>
						<Image src={img4} alt="img1" />
					</SwiperSlide>
				</Swiper>
			</div>
			<div className="main-div-spacing-x main-div-spacing-y bg-white p-5 w-full flex flex-col items-start">
				<div className="mb-6">
					<h1 className="text-2xl font-bold mb-2">La fête du Ramadan 2024 approche!</h1>
					<p className="text-gray-700">
						Le Ramadan 2024 approche! Cette année, il devrait avoir lieu le 10 mars 2024. C&#39;est un mois sacré pour les musulmans du monde entier. C&#39;est un moment de jeûne, de
						prière et de réflexion spirituelle. Mais c&#39;est aussi un temps de joie, de partage et de générosité. Dans cet article, nous allons explorer la tradition des cadeaux pendant
						le Ramadan et comment ils contribuent à rendre cette période encore plus spéciale.
					</p>
				</div>

				<div className="space-y-4 text-gray-700">
					<div>
						<h2 className="font-bold text-lg">Des cadeaux pour célébrer l&#39;amour et l&#39;amitié</h2>
						<p>
							Pendant le Ramadan, les familles et les amis se rassemblent pour rompre leur jeûne quotidien au coucher du soleil, appelé l&#39;iftar. C&#39;est un moment précieux où les
							liens familiaux et amicaux sont renforcés. Pour montrer leur amour et leur appréciation les uns envers les autres, les gens échangent des cadeaux. Ces cadeaux ne sont pas
							extravagants, mais ils sont chargés de sens et d&#39;affection.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">Offrez des cadeaux symboliques</h2>
						<p>
							Les cadeaux échangés pendant le Ramadan sont souvent symboliques. Ils peuvent inclure des livres saints, des tapis de prière, des dates, des lanternes et des parfums.
							Chacun de ces éléments a une signification profonde dans la pratique de la foi islamique. Par exemple, les dates sont souvent consommées pour rompre le jeûne en raison de
							leur valeur nutritive et de leur association avec le prophète Muhammad. Sur le site de la{" "}
							<a className="text-blue-700" href="https://lamaisondessultans.com/">
								Maison des Sultans
							</a>
							, vous trouverez plein de jolis coffrets cadeaux à offrir.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">La générosité est au cœur de la tradition du Ramadan</h2>
						<p>
							La générosité est une valeur clé du Ramadan, et cela se reflète dans les cadeaux échangés. Les personnes qui ont la capacité d&#39;offrir des cadeaux le font non seulement
							pour exprimer leur affection, mais aussi pour aider ceux qui sont dans le besoin. C&#39;est une période où les actes de charité et de bienfaisance sont encouragés, et
							offrir des cadeaux en est une manifestation concrète.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">Le ramadan, une fête de l&#39;amour et de la générosité</h2>
						<p>
							La fête du Ramadan est bien plus qu&#39;un simple jeûne religieux. C&#39;est une période de célébration de l&#39;amour, de l&#39;amitié et de la générosité. Les cadeaux
							échangés pendant cette période sont le reflet de ces valeurs, et ils contribuent à créer une atmosphère de joie et de convivialité parmi les familles et les communautés
							musulmanes. Le Ramadan est donc une occasion spéciale pour montrer son affection envers ses proches et pour aider ceux qui sont dans le besoin. Pour souhaiter un bon
							Ramadan à vos proches qui célèbrent cette fête, vous pouvez commencer par une salutation appropriée telle que &quot;Ramadan Moubarak&quot; (رمضان مبارك), qui signifie
							&quot;Bonne bénédiction de Ramadan&quot;. C&#39;est une expression couramment utilisée pour souhaiter un bon Ramadan en arabe.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
