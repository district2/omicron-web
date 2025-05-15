"use server";

import type { formSchema } from "@/lib/schemas/form";
import { escapeMW, sendTelegramMessage } from "@/lib/utils";
import type { z } from "zod";
import { verify } from "hcaptcha";

export async function sendForm(values: z.infer<typeof formSchema>) {
	const SECRET_KEY = process.env.HCAPTCHA_SECRET_KEY;
	if (!SECRET_KEY) return console.log("hcaptcha secret key not specified");

	await verify(SECRET_KEY, values.token)
		.then((response) => {
			if (response.success === true) {
				sendTelegramMessage({
					message: `Nuovo preventivo da parte di *${escapeMW(values.anagrafica)}*\n
                Provincia: *${values.provincia}*\n
                Dettagli preventivo:
                Immobile: *${values.immobile}*
                Copertura preferibile: *${values.copertura}*
                Tipologia preferibile: *${values.tipologia}*
                Stanze da proteggere: *${values.stanze}*
                Porte da proteggere: *${values.porte}*\n
                Contatti forniti:
                E\\-mail: *${escapeMW(values.email)}*
                Cellulare: *${escapeMW(values.cellulare)}*\n
                ${
									values.dettagli
										? `Ulteriori dettagli:\n${escapeMW(values.dettagli)}`
										: ""
								}`,
				});
				console.log("message sent successfully");
			} else console.log("something went wrong during captcha validation");
		})
		.catch(console.error);
}
