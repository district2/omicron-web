"use client";

import { AnimatedNumber } from "@/components/ui/animated-number";
import { useInView } from "motion/react";
import { useRef, useState } from "react";

export default function CustomersCounter() {
	const [value, setValue] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref);

	if (isInView && value === 0) {
		setValue(4500);
	}

	return (
		<div className="flex gap-x-2 w-full items-center justify-center" ref={ref}>
			Oltre
			<AnimatedNumber
				className="inline-flex items-center text-blue-700"
				springOptions={{
					bounce: 0,
					duration: 4500,
				}}
				value={value}
			/>
			clienti soddisfatti
		</div>
	);
}
