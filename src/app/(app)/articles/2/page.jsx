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

import melusine from "../img/melusine.png"

// const SwiperButtonNext = ({color1 = "black"}) => {
// 	const swiper = useSwiper()
// 	return <ArrowForwardIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slideNext()} />
// }
// const SwiperButtonPrev = ({color1 = "black"}) => {
// 	const swiper = useSwiper()
// 	return <ArrowBackIcon style={{color: color1}} className="cursor-pointer " onClick={() => swiper.slidePrev()} />
// }

export default function Article2() {
	return (
		<>
			<a href="/">
				<Image className="h-full p-5 m-5" src={logo} alt="loopsider logo" />
			</a>
			<div className=" mt-5 mb-11 w-full flex justify-center">
				<Image className="w-1/3 justify-center" style={{display: "flex !important"}} src={melusine} alt="melusine" />
			</div>
			<div className="main-div-spacing-x main-div-spacing-y bg-white p-5 w-full flex flex-col items-start">
				<div className="mb-6">
					<h1 className="text-2xl font-bold mb-2">Le Coffret Cadeau Idéal pour une Sage-Femme Exceptionnelle</h1>
					<p className="text-gray-700">
						Les sages-femmes jouent un rôle essentiel dans la vie de nombreuses personnes, car elles guident et soutiennent les femmes tout au long de leur période périnatale. Pour
						exprimer notre gratitude envers ces professionnels dévoués, rien de mieux qu&#39;un coffret cadeau soigneusement sélectionné pour reconnaître leur travail exceptionnel.
						Découvrons ensemble ce qui rend un coffret cadeau sage-femme idéal et qui lui fasse vraiment plaisir!
					</p>
				</div>
				<div className="space-y-4 text-gray-700">
					<div>
						<h2 className="font-bold text-lg">1. Un moment de détente bien mérité</h2>
						<p>
							Le quotidien d&#39;une sage-femme est souvent intense et exigeant. Offrez-lui un moment de détente bien mérité avec un coffret cadeau comprenant des articles de relaxation.
							Nous sommes fans des{" "}
							<a className="text-blue-700" href="https://melusinecosmetics.com/collections/cadeau-pour-sage-femme">
								coffrets pour sage-femme
							</a>{" "}
							de Mélusine, la fée de la forêt, dont les produits sont naturels. Vous pouvez ajouter des bougies parfumées, des sels de bain apaisants ou un masque pour les yeux qui
							peuvent faire du bien et créer chez votre sage-femme préférée, une ambiance propice à la relaxation après une longue journée de travail.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">2. Une touche de gourmandise</h2>
						<p>
							Un coffret cadeau gastronomique peut également être une excellente option! Choisissez des chocolats fins, des biscuits artisanaux, des macarons délicieux et une sélection
							de thés ou cafés de qualité. Les délices sucrés et savoureux peuvent apporter une touche gourmande à la vie quotidienne d&#39;une sage-femme, lui offrant une pause
							bienvenue à partager entre collègues, lorsque els journées et les nuits sont bien longues….
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">3. Des accessoires de bien-être</h2>
						<p>
							Les accessoires de bien-être marchent toujours. Un ensemble de bouillottes réchauffantes, des coussins chauffants ou même des huiles essentielles apaisantes peuvent
							participer à une atmosphère chaleureuse et réconfortante. Ces articles sont parfaits pour aider une sage-femme à se détendre et à prendre soin d&#39;elle-même.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">4. Une lecture inspirante</h2>
						<p>
							Un livre inspirant peut être une belle addition à un coffret cadeau. Choisissez des livres qui célèbrent la sagesse, la compassion et la force intérieure. Qu&#39;il
							s&#39;agisse de littérature feel-good, de poésie réconfortante ou de récits inspirants, un bon livre peut offrir à une sage-femme une pause mentale enrichissante.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">5. Un carnet de notes personnalisé</h2>
						<p>
							Un carnet de notes de qualité avec une touche personnelle peut être un joli plus au coffret cadeau. Choisissez un design élégant et ajoutez une note de remerciement ou un
							message personnalisé. Un carnet de notes est idéal pour permettre à une sage-femme de noter ses pensées, ses réflexions et ses idées.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">6. Des produits de soins et de maquillage</h2>
						<p>
							On ne se trompe jamais avec des produits de soins et de maquillage de qualité. Des lotions pour le corps luxueuses, des masques faciaux hydratants et des produits de bain
							parfumés offrent une expérience de soins personnels bien méritée.
						</p>
					</div>
					<div>
						<h2 className="font-bold text-lg">7. Une carte-cadeau</h2>
						<p>
							Si vous hésitez sur les préférences de la sage-femme, une carte-cadeau peut être la solution idéale. Optez pour une carte-cadeau d&#39;une boutique en ligne de produits de
							bien-être, de vêtements, ou même d&#39;expériences relaxantes comme un massage ou une journée spa.
						</p>
						<p className="mt-3">
							En conclusion, un coffret cadeau pour une sage-femme doit être empreint de reconnaissance et de considération. Choisissez des articles qui lui offriront du réconfort, de la
							détente et une petite évasion bienvenue dans son quotidien chargé. Montrez-lui à quel point son travail est précieux pour vous en lui offrant un coffret cadeau qui rappelle
							sa dévotion et son dévouement exceptionnels. Votre (futur) bébé est bien d’accord!
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
