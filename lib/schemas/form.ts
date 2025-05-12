import { isValidPhoneNumber } from "react-phone-number-input";
import { z } from "zod";

export const formSchema = z.object({
	immobile: z.string(),
	copertura: z.string(),
	tipologia: z.string(),
	stanze: z.coerce
		.number()
		.min(1, "Devi avere almeno una stanza da proteggere"),
	porte: z.coerce.number().min(0).optional(),
	anagrafica: z
		.string()
		.min(4, "Questo campo deve contenere almeno 4 caratteri"),
	provincia: z.string(),
	email: z.string().email({ message: "E-mail non valida" }),
	cellulare: z
		.string()
		.refine(isValidPhoneNumber, { message: "Numero di telefono invalido" }),
	dettagli: z.string().optional(),
	token: z.string(),
});

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
	if (issue.code === z.ZodIssueCode.invalid_type) {
		if (ctx.data === undefined) {
			return { message: "Campo obbligatorio" };
		}
		if (issue.received === "nan") {
			return { message: "Inserire un numero positivo" };
		}
	}
	return { message: ctx.defaultError };
};

z.setErrorMap(customErrorMap);
