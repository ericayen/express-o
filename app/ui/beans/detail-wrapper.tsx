import { getCoffeeListByType } from '@/app/lib/data';
import DetailCard from './detail-card';

type Props = {
	coffeeType: string;
};

export default async function DetailCardWrapper({ coffeeType }: Props) {
	const coffeeList = await getCoffeeListByType(coffeeType);

	return (
		<>
			{coffeeList.map((coffee) => (
				<DetailCard
					key={coffee.coffee_id}
					region={coffee.region}
					countries={coffee.countries}
					roast_profile={coffee.roast_profile}
					flavour={coffee.flavour}
					acidity={coffee.acidity}
				/>
			))}
		</>
	);
}
