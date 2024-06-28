import {env} from "./env"

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export default {
	title: "Loopsider",
	description: "LOOPSIDER | Regarder. Comprendre. Partager. Conçu pour les écrans mobiles et les réseaux sociaux, Loopsider est un média d'information en vidéo qui dé...",
	images: "loopsider.png",
	lang: "fr",
	metadataBase: env.BASE_URL,
	// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#icons
	icons: {
		icon: "loopsider.png",
		shortcut: "loopsider.png",
		apple: "loopsider.png",
		other: {
			rel: "favicon",
			url: "loopsider.png",
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
		title: "Loopsider",
		description: "LOOPSIDER | Regarder. Comprendre. Partager. Conçu pour les écrans mobiles et les réseaux sociaux, Loopsider est un média d'information en vidéo qui dé...",
		url: env.BASE_URL,
		siteName: "Loopsider",
		images: [
			{
				url: `${env.BASE_URL}/loopsider.png`,
				width: 800,
				height: 600,
				alt: "Image",
			},
			{
				url: `${process.env.NEXT_PUBLIC_BASE_URL}/loopsider.png`,
				width: 1800,
				height: 1600,
				alt: "loopsider",
			},
		],
		locale: "fr_FR",
		type: "website",
	},
}
