import { getQuizResult } from '@/app/lib/data';
import { Coffee } from '@/app/lib/definitions';

type Props = {
	searchParams: {
		[key: string]: string | string[];
	};
};

export default async function Page({ searchParams }: Props) {
	const options: string[] = Object.values(searchParams).flat();
	let results: Coffee[][] = [];

	try {
		results = await getQuizResult(options);
	} catch (error) {
		console.error('Error fetching results:', error);
	}

	return (
		<main>
			<h1>
				<span className='text-brown'>Your </span>
				<span className='font-semibold'>Results</span>
			</h1>
			{
				results.length === 0 ? (
					<div>No results found</div>
				) : (
					<div>Here are your results</div>
				)
				/* 
			 : (
				<div>
					{results.flat().map((result, index) => (
						<div key={result.coffee_id}>
							<h2>Result #{index + 1}</h2>
							<p>Type: {result.coffee_type}</p>
							<p>Region: {result.region}</p>
							<p>History: {result.history}</p>
							<p>Countries: {result.countries}</p>
							<p>Acidity: {result.acidity}</p>
							<p>Flavour: {result.flavour}</p>
							<p>Roast Profile: {result.roast_profile}</p>
						</div>
					))}
				</div>
			)*/
			}
		</main>
	);
}

// Make this component a server component by not including 'use client'
// export default Page;
