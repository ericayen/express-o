import { getCoffeeListByType } from '../../lib/data';
import Loading from '@/app/ui/skeletons';

type CoffeeType = {
	params: {
		type: string;
	};
};

export default async function Page({ params }: CoffeeType) {
	function capitalizeFirstLetter(string: string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	const capitalizedType = capitalizeFirstLetter(params.type);
	const coffeeList = await getCoffeeListByType(`${capitalizedType}`);

	if (!coffeeList) {
		return <Loading />;
	}

	return (
		<main>
			<h1>
				<span className='text-brown'>About </span>
				<span className='font-semibold'>{coffeeList[0].coffee_type}</span>
			</h1>
		</main>
	);
}
