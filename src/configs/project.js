import {env} from "./env"

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export default {
	title: "Sherp.ai",
	description: "Sherpai est une plateforme innovante qui centralise et harmonise l'accès aux données de vos différents réseaux sociaux, optimisant ainsi la gestion de votre présence en ligne.",
	images: "sherpai_favicon.png",
	lang: "fr",
	metadataBase: env.BASE_URL,
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
	icons: {
		icon: "/sherpai_favicon.png",
		shortcut: "/sherpai_favicon.png",
		apple: "/sherpai_favicon.png",
		other: {
			rel: "favicon",
			url: "/sherpai_favicon.png",
		},
	},
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#opengraph
	openGraph: {
		title: "Sherp.ai",
		description: "Sherpai est une plateforme innovante qui centralise et harmonise l'accès aux données de vos différents réseaux sociaux, optimisant ainsi la gestion de votre présence en ligne.",
		url: env.BASE_URL,
		siteName: "Sherp.ai",
		images: [
			{
				url: `${env.BASE_URL}/sherpai_favicon.png`,
				width: 800,
				height: 600,
				alt: "Image",
			},
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/sherpai_favicon.png`,
				width: 1800,
				height: 1600,
				alt: "Custom image alt",
			},
		],
		locale: "fr_FR",
		type: "website",
	},
}
