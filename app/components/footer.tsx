import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<div className="w-full pt-24 pb-12 px-10">
			<Separator orientation="horizontal" />
			<div className="w-full flex flex-col md:flex-row md:justify-evenly pt-10 flex-wrap gap-6">
				<div className="flex flex-col items-center gap-y-2 flex-1">
					<h1 className="font-medium text-lg pb-3 text-center">Azienda</h1>
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
						<span className="font-semibold">Email</span>:{" "}
						<Link
							className="underline underline-offset-4"
							href={"mailto:info@omicronelettronica.com"}
							target="_blank"
						>
							info@omicronelettronica.com
						</Link>
					</p>
				</div>
				<div className="flex flex-col flex-wrap gap-3 items-center flex-1">
					<h1 className="font-medium text-lg">Social Networks</h1>
					<div className="flex gap-14 flex-wrap">
						<Button size={"icon"} variant={"ghost"} className="h-auto w-auto">
							<Link
								target="_blank"
								href={
									"https://www.facebook.com/people/Omicron-Elettronica/pfbid0rnJUXJP9esPRuK83xm7F2YmzjtQc2XxwCzvC5gQYzvMjwHXEQd8L2Rgboq2svzLsl/"
								}
							>
								<Image
									src={"/facebook.svg"}
									alt="facebook logo"
									width={48}
									height={48}
								/>
							</Link>
						</Button>
						<Button size={"icon"} variant={"ghost"} className="h-auto w-auto">
							<Link
								target="_blank"
								href={"https://api.whatsapp.com/send?phone=393351013812"}
							>
								<Image
									src={"/whatsapp.svg"}
									alt="whatsapp logo"
									width={48}
									height={48}
								/>
							</Link>
						</Button>
					</div>
				</div>
			</div>
			<div className="pt-10">
				<Separator className="w-fit" />
				<h1 className="text-wrap opacity-75 text-center pt-6">
					© Copyright 2002-2025 Omicron Elettronica srl - P.IVA: 01265350882
				</h1>
			</div>
		</div>
	);
}
