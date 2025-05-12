"use client";

import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import { styleSelectedRoute } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./mobile-menu";

const services = [
	{
		name: "Sistemi di antifurto",
		href: "/servizi/antifurto",
	},
	{
		name: "Sistemi di videosorveglianza",
		href: "/servizi/videosorveglianza",
	},
	{
		name: "Impianti antincendio",
		href: "/servizi/antincendio",
	},
	{
		name: "Impianti di domotica",
		href: "/servizi/domotica",
	},
];

export default function Navbar() {
	const path = usePathname();

	return (
		<div className="mt-36">
			<MobileMenu />
			<div className="hidden md:flex justify-evenly items-center fixed top-0 right-0 left-0 z-50 bg-black/85">
				<Link href={"/"}>
					<Image
						className="m-0 p-0"
						src={"/logo.png"}
						width={200}
						height={150}
						alt="Omicron logo"
					/>
				</Link>
				<NavigationMenu
					orientation="vertical"
					className="font-[family-name:var(--font-geist-sans)]"
				>
					<NavigationMenuList>
						<NavigationMenuItem>
							<Link href="/" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} ${styleSelectedRoute(path, "/")} bg-transparent`}
								>
									Home
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<Separator orientation="vertical" className="h-7" />
						<NavigationMenuItem>
							<Link href="/chi-siamo" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} ${styleSelectedRoute(path, "/chi-siamo")} bg-transparent`}
								>
									Chi siamo
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
						<Separator orientation="vertical" className="h-7" />
						<NavigationMenuItem>
							<NavigationMenuTrigger className="bg-transparent">
								Servizi
							</NavigationMenuTrigger>
							<NavigationMenuContent className="grid gap-3 p-4 lg:w-[600px] lg:grid-cols-2">
								{services.map((service) => (
									<Link
										key={service.href}
										className={navigationMenuTriggerStyle()}
										href={service.href}
									>
										{service.name}
									</Link>
								))}
							</NavigationMenuContent>
						</NavigationMenuItem>
						<Separator orientation="vertical" className="h-7" />
						<NavigationMenuItem>
							<Link href="/contatti" legacyBehavior passHref>
								<NavigationMenuLink
									className={`${navigationMenuTriggerStyle()} ${styleSelectedRoute(path, "/contatti")} bg-transparent`}
								>
									Contatti
								</NavigationMenuLink>
							</Link>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<div className="relative">
					<Link href={"/preventivo"}>
						<Button
							variant="outline"
							className="font-[family-name:--font-geist-sans] font-bold bg-transparent"
						>
							Ottieni un preventivo
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
