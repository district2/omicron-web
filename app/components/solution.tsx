"use client";

import { Button } from "@/components/ui/button";
import {
	Disclosure,
	DisclosureContent,
	DisclosureTrigger,
} from "@/components/ui/disclosure";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Solution({
	image,
	title,
	href,
	description,
}: { image: string; title: string; href: string; description: string }) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative w-[250px] h-[320px] rounded-xl overflow-hidden">
			<div onMouseDown={() => setIsOpen(!isOpen)}>
				<Image
					src={image}
					quality={100}
					alt={`${title}'s picture`}
					width="300"
					height="400"
					className={`grayscale pointer-events-none w-full transition-all h-auto select-none ${isOpen ? "scale-125 blur-[3px]" : "scale-100"}`}
				/>
			</div>
			<Disclosure
				className="absolute bottom-0 left-0 right-0 bg-zinc-200 pt-2 px-4 rounded-lg"
				onOpenChange={setIsOpen}
				open={isOpen}
			>
				<DisclosureTrigger>
					<button
						className="relative w-full pb-2 text-left text-[16px] font-medium text-black"
						type="button"
						onClick={() => setIsOpen(!isOpen)}
					>
						{title}
						<p className="absolute right-0 top-0 bottom-0">
							{isOpen ? "" : "➜"}
						</p>
					</button>
				</DisclosureTrigger>
				<DisclosureContent className="text-black">
					<p className="text-sm pb-2">{description}</p>
					<Link href={href}>
						<Button className="mb-2 w-full" variant={"secondary"}>
							Scopri di più
						</Button>
					</Link>
				</DisclosureContent>
			</Disclosure>
		</div>
	);
}
