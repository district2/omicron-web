import { TextLoop } from "@/components/ui/text-loop";
import SurveillanceImage from "@/public/surveillance.jpg";
import HandShakeImage from "@/public/handshake.jpg";
import Image from "next/image";
import CustomersCounter from "./components/customers-counter";
import CustomersSlider from "./components/customers-slider";
import Solution from "./components/solution";

export default function Home() {
	return (
		<div className="flex flex-col justify-center items-center gap-y-14 pb-28">
			<div className="flex flex-col gap-y-32 items-center pt-10">
				<h1 className="font-[family-name:var(--font-geist-sans)] font-bold text-4xl md:text-7xl tracking-wide text-center">
					Esperti <br />
					In <br />
					{""}
					<TextLoop
						className="overflow-y-clip text-blue-700 overflow-hidden"
						interval={3}
					>
						<span>Videosorveglianza</span>
						<span>Elettronica</span>
						<span>Antifurto</span>
						<span>Reti</span>
						<span>Domotica</span>
						<span>Antincendio</span>
					</TextLoop>
				</h1>
				<div className="flex w-full justify-center md:justify-evenly flex-wrap gap-4 items-center p-3">
					<Image
						src={SurveillanceImage}
						alt="immagine di videosorveglianza"
						className="hidden md:block grayscale w-1/3 h-auto rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
					/>

					<h2 className="max-w-lg text-xl md:text-2xl text-center md:text-left text-wrap font-[family-name:var(--font-geist-sans)]">
						Dal 1991 eroghiamo servizi per la progettazione ed installazione di
						sistemi tecnologici di sicurezza, in particolare di antifurti per
						aziende di produzione, attività commerciali, uffici, banche, case.
					</h2>
				</div>
				<div className="flex items-center flex-row-reverse flex-wrap justify-center gap-16 p-3">
					<Image
						src={HandShakeImage}
						alt="immagine di stretta di mano"
						className="hidden md:block grayscale w-1/3 h-auto rounded-2xl shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]"
					/>
					<div className="flex flex-col gap-y-6 items-center">
						<h1 className="text-2xl lg:text-4xl font-bold font-[family-name:var(--font-geist-sans)">
							<CustomersCounter />
						</h1>
						<CustomersSlider />
					</div>
				</div>
				<div className="flex items-center flex-col gap-y-10">
					<h1 className="text-center text-2xl font-bold md:text-3xl font-[family-name:var(--font-geist-sans)]">
						Soluzioni tecnologiche all&apos;avanguardia
					</h1>
					<div className="flex gap-14 justify-center flex-wrap">
						<Solution
							image="/solutions/surveillanceSolution.jpg"
							title="Videosorveglianza"
							description="Con la consulenza dei nostri tecnici è possibile realizzare una
								copertura ottimale degli ambienti che si desidera controllare."
							href="/servizi/videosorveglianza"
						/>
						<Solution
							image={"/solutions/antiTheft.jpg"}
							title="Antifurto"
							href="/servizi/antifurto"
							description="Grazie alla moderna tecnologia e alla consolidata esperienza
								tecnica maturata, offriamo un sistema avanzato per la sicurezza
								totale dell'ambiente domestico e lavorativo."
						/>
						<Solution
							image={"/solutions/fireSensor.jpg"}
							href="/servizi/antincendio"
							title="Rilevazioni fumi"
							description="I sistemi di rilevazione fumi assicurano la tutela di beni e persone all'
							interno delle aree protette, segnalando tempestivamente il verificarsi di una situazione di pericolo."
						/>
						<Solution
							image={"/solutions/domotics.jpg"}
							href="/servizi/domotica"
							title="Domotica"
							description="L'automazione domestica permette non solo di ridurre i consumi di energia elettrica (20-30%)
							 e i rischi di black-out, ma anche di segnalare guasti e perdite."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
