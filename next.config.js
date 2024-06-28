module.exports = {
	output: "standalone",
	async redirects() {
		return [
			{
				source: process.env.NEXT_PUBLIC_MAINTENANCE === "true" ? "/:path((?!maintenance$).*)" : "/maintenance",
				destination: process.env.NEXT_PUBLIC_MAINTENANCE === "true" ? "/maintenance" : "/",
				permanent: true,
			},
		]
	},
	images: {
		domains: ["public.sherp.ai", "scontent-atl3-1.xx.fbcdn.net", "scontent-dfw5-1.xx.fbcdn.net", "scontent-ord5-2.xx.fbcdn.net", "scontent-iad3-1.xx.fbcdn.net"],
	},
}
