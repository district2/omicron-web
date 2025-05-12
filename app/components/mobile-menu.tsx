"use client";

import { Button } from "@/components/ui/button";
import {
	Disclosure,
	DisclosureContent,
	DisclosureTrigger,
} from "@/components/ui/disclosure";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
	SheetTrigger,
	SheetContent,
	Sheet,
	SheetTitle,
	SheetHeader,
} from "@/components/ui/sheet";
import { styleSelectedRoute } from "@/lib/utils";
import { Squeeze as Hamburger } from "hamburger-react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import Link, { type LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { type HTMLProps } from "react";
import { type Dispatch, type SetStateAction, useState } from "react";

export default function MobileMenu() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="md:hidden w-full flex flex-col fixed top-0 px-5 right-0 left-0 z-50 bg-black/85">
			<div className="flex items-center justify-between">
				<Link href={"/"}>
					<Image
						className=""
						src={"/logo.png"}
						width={150}
						height={100}
						alt="Omicron logo"
					/>
				</Link>
				<Sheet open={isOpen} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Hamburger toggled={isOpen} toggle={setOpen} />
					</SheetTrigger>
					<SheetContent side="left" className="flex flex-col gap-6">
						<SheetHeader className="items-center">
							<SheetTitle>Menù principale</SheetTitle>
						</SheetHeader>
						<MenuContent setOpen={setOpen} />
					</SheetContent>
				</Sheet>
			</div>
			<Link href={"/preventivo"}>
				<Button className="w-full" variant={"outline"}>
					Ottieni un preventivo
				</Button>
			</Link>
		</div>
	);
}

function MenuContent({
	setOpen,
}: { setOpen: Dispatch<SetStateAction<boolean>> }) {
	return (
		<div className="flex flex-col gap-y-6 items-center">
			<MobileLink title="Home" href="/" onClick={() => setOpen(false)} />
			<Separator />
			<MobileLink
				title="Chi siamo"
				href="/chi-siamo"
				onClick={() => setOpen(false)}
			/>
			<Separator />
			<ServicesAccordion setOpen={setOpen} />
			<Separator />
			<MobileLink
				title="Contatti"
				href="/contatti"
				onClick={() => setOpen(false)}
			/>
		</div>
	);
}

type MobileLinkProps = LinkProps &
	HTMLProps<HTMLAnchorElement> & {
		href: string;
		title: string;
	};

function MobileLink({ href, title, ...props }: MobileLinkProps) {
	const path = usePathname();

	return (
		<Link
			href={href}
			className={`${navigationMenuTriggerStyle()} ${styleSelectedRoute(path, href)} `}
			{...props}
		>
			<Button variant={"ghost"}>{title}</Button>
		</Link>
	);
}

function ServicesAccordion({
	setOpen,
}: { setOpen: Dispatch<SetStateAction<boolean>> }) {
	const path = usePathname();
	const [open, setDisclosureOpen] = useState(false);
	const SERVICE_BASE_ENDPOINT = "/servizi";
	const services = [
		{
			route: `${SERVICE_BASE_ENDPOINT}/antifurto`,
			title: "Sistemi di antifurto",
		},
		{
			route: `${SERVICE_BASE_ENDPOINT}/videosorveglianza`,
			title: "Sistemi di videosorveglianza",
		},
		{
			route: `${SERVICE_BASE_ENDPOINT}/antincendio`,
			title: "Impianti antincendio",
		},
		{
			route: `${SERVICE_BASE_ENDPOINT}/domotica`,
			title: "Impianti di domotica",
		},
	];
	return (
		<Disclosure
			className="text-center"
			onOpenChange={setDisclosureOpen}
			open={open}
		>
			<DisclosureTrigger>
				<Button variant={"ghost"}>
					Servizi {open ? <ChevronUp /> : <ChevronDown />}
				</Button>
			</DisclosureTrigger>
			<DisclosureContent>
				<div className="pt-4 flex flex-col items-center gap-3">
					{services.map((service) => (
						<Link
							key={service.route}
							href={service.route}
							className={`${navigationMenuTriggerStyle()} ${styleSelectedRoute(path, `${service.route}`)} `}
							onClick={() => setOpen(!open)}
						>
							<Button variant={"ghost"}>{service.title}</Button>
						</Link>
					))}
				</div>
			</DisclosureContent>
		</Disclosure>
	);
}
