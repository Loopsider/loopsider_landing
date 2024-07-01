"use client"

import React from "react"
import Image from "next/image"
// Import Swiper React components
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {Pagination} from "swiper/modules"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import "swiper/css"
import "swiper/css/navigation"

import logo from "../../../../../public/img/logo_loopsider.png"

const SwiperButtonNext = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowForwardIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slideNext()} />
}
const SwiperButtonPrev = ({color1 = "black"}) => {
	const swiper = useSwiper()
	return <ArrowBackIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slidePrev()} />
}

export default function Article1() {
	return (
		<>
			<a href="/">
				<Image className="h-full p-5 m-5" src={logo} alt="loopsider logo" />
			</a>
			<div className="main-div-spacing-x-left mt-5 mb-20">
				<Swiper
					pagination={{
						dynamicBullets: true,
					}}
					modules={[Pagination]}
					slidesPerView={1}
					spaceBetween={0}
					grabCursor
					className="mySwiper"
				>
					{/* <div className="mt-4 main-div-spacing-x space-x-5 flex justify-end">
						<SwiperButtonPrev />
						<SwiperButtonNext />
					</div> */}

					{/* <SwiperSlide>
						<Image src={Thumb6period} alt="Thumb14" />
					</SwiperSlide> */}
				</Swiper>
			</div>
			<div className="main-div-spacing-x main-div-spacing-y bg-white p-5 w-full flex flex-col items-start">
				<div className="mb-6">
					<h1 className="text-2xl font-bold mb-2">Quel type de cadeau offrir pour un mariage musulman?</h1>
					<p className="text-gray-700">
						Le mariage est une étape importante dans la vie de toute personne, et cela vaut particulièrement vrai dans la culture musulmane. Lorsque vous êtes invité à un mariage musulman,
						il est important de choisir un cadeau approprié qui reflète à la fois votre respect pour la tradition et votre considération pour les mariés. Dans cet article, nous allons
						explorer les types de cadeaux qui sont généralement appréciés lors d'un mariage musulman.
					</p>
				</div>
				<div className="space-y-4 text-gray-700">
					<div>
						<h2 className="font-bold text-lg">1. L'argent ou la dot (Mahr)</h2>
						<p>
							Dans la tradition musulmane, la dot, appelée "Mahr," est un élément central du contrat de mariage. C'est un cadeau financier que le mari offre à sa future épouse en signe
							de respect et de responsabilité envers elle. C'est une tradition profondément enracinée dans l'islam, et donner de l'argent en cadeau lors d'un mariage musulman est
							considéré comme une pratique respectueuse et traditionnelle. Vous pouvez choisir d'offrir une somme d'argent sous forme de chèque ou d'enveloppe, ou même opter pour des
							bijoux précieux.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">2. Cadeaux déco ou cadeaux pour la maison</h2>
						<p>
							Les cadeaux de maison sont également très appréciés lors des mariages musulmans. Vous pouvez offrir des articles utiles pour le nouveau foyer des mariés, tels que des
							ustensiles de cuisine de qualité, de la vaisselle, des ensembles de literie, des appareils électroménagers, ou des meubles. Assurez-vous que ces cadeaux correspondent au
							style et aux besoins des mariés.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">3. Livres saints et art religieux</h2>
						<p>
							Les livres saints, comme le Coran, et l'art religieux sont des cadeaux appropriés pour un mariage musulman. Un beau exemplaire du Coran, un tapis de prière élégant, ou des
							tableaux avec des versets coraniques calligraphiés peuvent être des choix significatifs. Ces cadeaux montrent votre respect pour la foi des mariés.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">4. Bijoux</h2>
						<p>
							Les bijoux sont des cadeaux traditionnels et précieux pour un mariage musulman. Vous pouvez choisir d'offrir des bijoux en or, en argent, ou même en pierres précieuses. Les
							bijoux symbolisent la beauté et la valeur de la mariée, et ils sont souvent transmis de génération en génération.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">5. Coffrets et cadeaux personnalisés</h2>
						<p>
							Pour ajouter une touche personnelle à votre cadeau, envisagez d&#39;offrir quelque chose de personnalisé. Cela pourrait être un cadre photo gravé avec le nom des mariés et
							la date de leur mariage, ou un album photo où ils peuvent conserver leurs souvenirs spéciaux. Sur le site de{" "}
							<a className="text-blue-700" href="https://roselalune.com/">
								Rose La Lune
							</a>
							, vous trouverez également des idées de{" "}
							<a className="text-blue-700" href="https://roselalune.com/collections/coffret-mariage-islam ">
								coffrets
							</a>{" "}
							beauté pour chouchouter les mariés avec des produits naturels, sains, originaux. <br />
							<br />
							Choisir le bon cadeau pour un mariage musulman est une occasion de montrer votre respect pour la tradition et votre amour pour les mariés. Les cadeaux financiers, les
							articles de maison, les livres saints, les bijoux et les cadeaux personnalisés sont autant d&#39;options appropriées. L&#39;essentiel est de choisir quelque chose qui
							reflète votre considération pour le couple et qui contribue à rendre leur journée encore plus spéciale.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
