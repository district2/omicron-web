"use client";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";
import { Textarea } from "@/components/ui/textarea";
import { CheckIcon, XIcon } from "lucide-react";
import { sendForm } from "../actions/form";
import { formSchema } from "@/lib/schemas/form";
import type { z } from "zod";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";

const province = [
	"Agrigento",
	"Caltanissetta",
	"Catania",
	"Enna",
	"Messina",
	"Palermo",
	"Ragusa",
	"Siracusa",
	"Trapani",
];

export default function ContactForm() {
	const [token, setToken] = useState("");
	const captchaRef = useRef<HCaptcha>(null);

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			stanze: 1,
			porte: 0,
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		(captchaRef.current as HCaptcha).resetCaptcha();

		try {
			sendForm(values);
			toast(
				<p className="p-2">
					Richiesta inviata con successo, ti ricontatteremo appena possibile
				</p>,
				{
					icon: <CheckIcon />,
					closeButton: true,
				},
			);
		} catch (error) {
			console.error("Form submission error", error);
			toast.error(
				<p className="text-red-600 p-2">
					C&apos;è stato un errore durante il processo, per favore riprova più
					tardi
				</p>,
				{ icon: <XIcon />, closeButton: true },
			);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 max-w-3xl mx-auto py-10 px-4"
			>
				<FormField
					control={form.control}
					name="immobile"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Immobile</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Seleziona il tipo di immobile" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Abitazione">Abitazione</SelectItem>
									<SelectItem value="Negozio/Ufficio">
										Negozio/Ufficio
									</SelectItem>
									<SelectItem value="Condominio">Condominio</SelectItem>
									<SelectItem value="Hotel">Hotel</SelectItem>
									<SelectItem value="Capannone industriale">
										Capannone industriale
									</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>
								In quale tipologia di immobile va realizzato il lavoro?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="copertura"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Copertura zona</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Seleziona la zona da coprire" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Interno">Interno</SelectItem>
									<SelectItem value="Esterno">Esterno</SelectItem>
									<SelectItem value="Interno/Esterno">
										Interno ed Esterno
									</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>
								Quale zona vuoi coprire con l&apos;impianto di allarme?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="tipologia"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Tipologia impianto</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Seleziona la tipologia che preferiresti" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="Tradizionale">
										Tradizionale (Filare)
									</SelectItem>
									<SelectItem value="Wireless">
										Wireless (Senza fili)
									</SelectItem>
								</SelectContent>
							</Select>
							<FormDescription>
								Quale tipo di Impianto preferisci?
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="stanze"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Stanze da proteggere</FormLabel>
							<FormControl>
								<Input
									placeholder="Inserisci il numero di stanze da proteggere"
									type="number"
									{...field}
								/>
							</FormControl>
							<FormDescription>Quante stanze devi proteggere?</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="porte"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Porte e/o finestre da proteggere </FormLabel>
							<FormControl>
								<Input
									placeholder="Inserisci il numero di porte / finestre"
									type="number"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Quante porte e/o finestre devi collegare all&apos;impianto?
								(opzionale)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<h1 className="text-4xl py-3">Dati personali</h1>
				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="anagrafica"
							defaultValue=""
							render={({ field }) => (
								<FormItem>
									<FormLabel>Nome e cognome / Azienda</FormLabel>
									<FormControl>
										<Input
											placeholder="Omicron elettronica s.r.l."
											type=""
											{...field}
										/>
									</FormControl>
									<FormDescription>
										Il tuo nome e cognome, oppure il nome della tua azienda
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="provincia"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Provincia</FormLabel>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue placeholder="Seleziona..." />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{province.map((provincia) => (
												<SelectItem key={provincia} value={provincia}>
													{provincia}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
									<FormDescription>
										Seleziona la provincia dov&apos;è situata la struttura
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<div className="grid grid-cols-12 gap-4">
					<div className="col-span-6">
						<FormField
							control={form.control}
							name="email"
							defaultValue=""
							render={({ field }) => (
								<FormItem>
									<FormLabel>E-mail</FormLabel>
									<FormControl>
										<Input
											placeholder="info@omicronelettronica.com"
											type="email"
											{...field}
										/>
									</FormControl>
									<FormDescription>
										La tua e-mail, o quella aziendale
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>

					<div className="col-span-6">
						<FormField
							control={form.control}
							name="cellulare"
							render={({ field }) => (
								<FormItem className="flex flex-col items-start">
									<FormLabel>Numero di telefono</FormLabel>
									<FormControl className="w-full">
										<PhoneInput
											placeholder="335 101 3812"
											{...field}
											defaultCountry="IT"
										/>
									</FormControl>
									<FormDescription>
										Inserisci il tuo numero di telefono, o quello aziendale
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
				</div>

				<FormField
					control={form.control}
					name="dettagli"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Ulteriori dettagli</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Sono reperibile da Lun. - Ven. dalle 8:30 alle 17:30"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormDescription>
								Puoi darci qualche informazione in più se desideri (opzionale)
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					name="token"
					render={() => (
						<HCaptcha
							sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
							theme={"dark"}
							languageOverride="it"
							loadAsync={true}
							onVerify={(token) => {
								setToken(token);
								form.setValue("token", token);
							}}
							onExpire={() => {
								if (token !== "") setToken("");
							}}
							ref={captchaRef}
						/>
					)}
				/>
				<Button className="w-full" type="submit" disabled={!token}>
					Invia
				</Button>
			</form>
		</Form>
	);
}
