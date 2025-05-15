import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./components/footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Omicron Elettronica",
	description: "Sistemi tecnologici di sicurezza",
	keywords: [
		"videosorveglianza",
		"antifurto",
		"antincendio",
		"domotica",
		"elettronica",
		"reti",
		"cybersecurity",
	],
	openGraph: {
		title: "Omicron Elettronica",
		type: "website",
		locale: "it",
		description: "Soluzioni tecnologiche all'avanguardia",
		url: "https://omicronelettronica.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider forcedTheme="dark" attribute={"class"}>
					<Navbar />
					{children}
					<Toaster />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
