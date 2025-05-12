import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const TELEGRAM_API_ENDPOINT = "https://api.telegram.org";

type TelegramProps = {
	BOT_TOKEN?: string;
	CHAT_ID?: string;
	message: string;
	parse_mode?: "Markdownv2" | "HTML" | "Markdown";
};

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function clearCustomer(customer: string) {
	return customer.slice(0, customer.indexOf("."));
}

export function styleSelectedRoute(
	current_route: string,
	excepted_route: string,
) {
	if (current_route === excepted_route)
		return "pointer-events-none underline underline-offset-4 text-gray-400";
}

export async function sendTelegramMessage({
	BOT_TOKEN = process.env.BOT_TOKEN,
	CHAT_ID = process.env.CHAT_ID,
	message,
	parse_mode = "Markdownv2",
}: TelegramProps) {
	const res = await fetch(
		`${TELEGRAM_API_ENDPOINT}/bot${BOT_TOKEN}/sendMessage`,
		{
			method: "post",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				chat_id: CHAT_ID,
				text: message,
				parse_mode: parse_mode,
			}),
		},
	);

	if (res.status !== 200) {
		console.log(res);
		return Error(`Something went wrong: ${res.statusText}`);
	}
}

export function escapeMW(text: string): string {
	return text
		.replace(/\_/g, "\\_")
		.replace(/\*/g, "\\*")
		.replace(/\[/g, "\\[")
		.replace(/\]/g, "\\]")
		.replace(/\(/g, "\\(")
		.replace(/\)/g, "\\)")
		.replace(/\~/g, "\\~")
		.replace(/\`/g, "\\`")
		.replace(/\>/g, "\\>")
		.replace(/\#/g, "\\#")
		.replace(/\+/g, "\\+")
		.replace(/\-/g, "\\-")
		.replace(/\=/g, "\\=")
		.replace(/\|/g, "\\|")
		.replace(/\{/g, "\\{")
		.replace(/\}/g, "\\}")
		.replace(/\./g, "\\.")
		.replace(/\!/g, "\\!");
}
