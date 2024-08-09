import { getArabicaList, getCoffeeList, getCoffeeTypes } from '@/app/lib/data';

export default async function CardWrapper() {
	// const coffeeList = await getCoffeeList();
	const data = await getCoffeeTypes();
	const coffeeList = [data[0], data[5], data[8], data[9]];

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

export function Card({
	coffee_type,
	history,
}: {
	coffee_type: string;
	history: string;
}) {
	return (
		<>
			<div className='mb-2 collapse collapse-plus bg-beige-light'>
				<input type='checkbox' name='my-accordion-3' />
				<h2 className='pl-12 text-lg font-medium lg:text-2xl collapse-title'>
					{coffee_type}
				</h2>
				<div className='collapse-content '>
					<div className='w-full bg-white card lg:card-side'>
						<div className='items-center card-body'>
							<p className='text-sm lg:text-base'>{history}</p>
							{/* <button onClick={handleLeanMore} className='button'>
								Learn more
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
