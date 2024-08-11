import { getCoffeeTypes } from '@/app/lib/data';
import { Card } from './card';

export default async function CardWrapper() {
	const coffeeList = await getCoffeeTypes();

	return (
		<>
			{coffeeList.map((coffee) => (
				<Card
					key={coffee.coffee_id}
					coffee_type={coffee.coffee_type}
					history={coffee.history}
				/>
			))}
		</>
	);
}
