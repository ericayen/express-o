import Link from 'next/link';

export default function ResultCard({ results }: any) {
	const {
		coffee_type,
		history,
		countries,
		roast_profile,
		flavour,
		acidity,
	} = results;
	return (
			<div className='w-full bg-white card lg:card-side'>
				<div className='items-center card-body'>
					<p className='text-sm lg:text-base'>{history}</p>
					<p className='text-sm lg:text-base'>
						<span className='font-medium'>Countries: </span>
						{countries}
					</p>
					<p className='text-sm lg:text-base'>
						<span className='font-medium'>Roast profile: </span>
						{roast_profile}
					</p>
					<p className='text-sm lg:text-base'>
						<span className='font-medium'>flavour profile: </span>
						{flavour}
					</p>
					<p className='text-sm lg:text-base'>
						<span className='font-medium'>Acidity: </span>
						{acidity}
					</p>
					<Link href={`/beans/${coffee_type}`} className='button'>
						Learn More
					</Link>
				</div>
			</div>
	);
}
