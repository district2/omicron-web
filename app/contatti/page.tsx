import Link from "next/link";

export default function Contatti() {
	return (
		<div className="flex flex-col items-center pt-10 p-5">
			<div className="flex justify-center gap-8 items-center flex-wrap">
				<div className="flex items-center justify-center flex-col gap-y-5 w-full mx-2">
					<h1 className="text-2xl md:text-3xl font-bold">Contattaci</h1>
					<div className="text-sm flex flex-col gap-y-2">
						<p>
							<span className="font-semibold">Indirizzo</span>:{" "}
							<Link
								className="underline underline-offset-4"
								href={"https://maps.app.goo.gl/jJZGmC6xGYpNyf9F6"}
								target="_blank"
							>
								Viale 17, 11, Zona Ind.le III Fase di Ragusa
							</Link>
						</p>
						<p>
							<span className="font-semibold">Telefono</span>:{" "}
							<Link
								className="underline underline-offset-4"
								target="_blank"
								href={"tel:0932 667 012"}
							>
								0932 667 012
							</Link>
						</p>
						<p>
							<span className="font-semibold">Whatsapp</span>:{" "}
							<Link
								className="underline underline-offset-4"
								href={"tel:+39 335 101 3812"}
								target="_blank"
							>
								+39 335 101 3812
							</Link>
						</p>
						<p>
							<span className="font-semibold">Email</span>:{" "}
							<Link
								className="underline underline-offset-4"
								href={"mailto:info@omicronelettronica.com"}
								target="_blank"
							>
								info@omicronelettronica.com
							</Link>
						</p>
						<p>
							<span className="font-semibold">Area Assistenza</span>:{" "}
							<Link
								className="underline underline-offset-4"
								href={"mailto:assistenza@omicronelettronica.com"}
								target="_blank"
							>
								assistenza@omicronelettronica.com
							</Link>{" "}
						</p>
						<p>
							<span className="font-semibold">Area Commerciale</span>:{" "}
							<Link
								className="underline underline-offset-4"
								href={"mailto:commerciale@omicronelettronica.com"}
								target="_blank"
							>
								commerciale@omicronelettronica.com
							</Link>{" "}
						</p>
					</div>
				</div>
				<iframe
					title="Mappa di omicron elettronica"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.931795967767!2d14.69148007629301!3d36.891979862519726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13119829648b6b2d%3A0x345f2919966cc84b!2sOmicron%20Elettronica%20Srl!5e0!3m2!1sit!2sit!4v1745004970621!5m2!1sit!2sit"
					width="500"
					height="350"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					className="rounded-2xl max-w-full"
				/>
				{/* </Suspense> */}
			</div>
		</div>
	);
}
