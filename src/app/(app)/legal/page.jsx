export default function legal() {
	return (
		<div className="main-div-spacing-x md:pt-20 pt-11 md:flex-column items-center w-full text-black bg-white md:pb-20 pb-11">
			<div className="md:flex-column items-center w-full text-black bg-white md:pb-20 pb-11">
				<h1 className="text-main-title loop-black-text">Mentions légales</h1>
			</div>
			<div className="text-2xl">
				<h3 className="font-bold text-3xl" style={{color: "var(--green-loopsider)"}}>
					Loopsider
				</h3>
				<p className="text-2xl	">
					impasse Beaubourg
					<br />
					75003
					<br />
					Paris
					<br />
					France
				</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Téléphone</h3>
				<p className="text-2xl	">09.88.99.90.61</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Edité par JAG </h3>
				<p className="">SAS au capital de 4500€ </p>
				<p className="">RCS Paris 832 111 959</p>
				<p className="">Numéro de TVA : FR52832111959</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Numéro de déclaration simplifiée Cnil</h3>
				<p className="">en cours</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Membre du Syndicat de la presse indépendante d’information en ligne (Spiil)</h3>
				<p className="">
					Charte éthique et déontologique{" "}
					<a className="underline	" href="https://medium.com/@johanhufnagel/loopsider-linformation-%C3%A0-l-heure-des-plateformes-3b4cdbf74d4d">
						à lire ici
					</a>
				</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Directeur de la publication</h3>
				<p className="">Giuseppe de Martino</p>
			</div>
			<div className="text-2xl mt-5">
				<h3 className="font-bold text-3xl">Hébergement du site</h3>
				<p className="">Google Cloud</p>
			</div>
		</div>
	)
}
