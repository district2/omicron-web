import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { clearCustomer } from "@/lib/utils";
import { readdir } from "node:fs/promises";

export default async function CustomersSlider() {
	const customers_images = await readdir("public/customers");

	return (
		<InfiniteSlider
			gap={50}
			className="max-w-[300px] md:max-w-[400px] lg:max-w-[600px]"
		>
			{customers_images.map((customer_image) => (
				<img
					src={`/customers/${customer_image}`}
					alt={`logo of ${clearCustomer(customer_image)}`}
					key={customer_image}
					className="h-[35px] md:h-[60px] w-auto max-w-[170px]"
				/>
			))}
		</InfiniteSlider>
	);
}
