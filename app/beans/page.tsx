import { Metadata } from 'next';
import { getCoffeeList } from '@/app/lib/data';
import CardWrapper from '@/app/ui/beans/wrapper';

export const metadata: Metadata = {
	title: 'About Beans',
	description:
		'Learn more about different types of beans, their origins, and flavour profiles.',
};

export default async function Page() {
	const coffeeList = await getCoffeeList();

	return (
		<main>
			<h1>
				<span className='text-brown'>About </span>
				<span className='font-semibold'>Beans</span>
			</h1>
			<section className='flex flex-wrap justify-between'>
				<CardWrapper />
			</section>
		</main>
	);
}
