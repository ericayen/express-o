import DetailCardWrapper from '@/app/ui/beans/detail-wrapper';
import { getCoffeeListByType } from '../../lib/data';
import Loading from '@/app/ui/skeletons';

type CoffeeType = {
	params: {
		type: string;
	};
};

export default async function Page({ params }: CoffeeType) {
	const capitalizedType =
		params.type.charAt(0).toUpperCase() + params.type.slice(1);
	const coffeeList = await getCoffeeListByType(capitalizedType);

	if (!coffeeList) {
		return <Loading />;
	}

	return (
		<main>
			<h1>
				<span className='text-brown'>About </span>
				<span className='font-semibold'>{coffeeList[0].coffee_type}</span>
			</h1>

			<section className='flex flex-wrap justify-between'>
				<DetailCardWrapper coffeeType={params.type} />
			</section>
		</main>
	);
}
