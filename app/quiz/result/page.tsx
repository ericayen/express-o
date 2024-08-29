import { getQuizResult } from '@/app/lib/data';
import { Coffee } from '@/app/lib/definitions';
import ResultCard from '@/app/ui/quiz/result-card';

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

			{results?.length > 0 && (
				<section>
					<h2 className='pb-8 text-lg font-medium lg:text-2xl'>Top Match:</h2>
					<div className='p-4 mb-2 rounded-2xl bg-beige-light'>
						<h2 className='pb-4 text-lg font-medium lg:text-2xl'>
							{results[0][0].coffee_type} ({results[0][0].region})
						</h2>
						<ResultCard results={results[0][0]} />
					</div>

					{results.length > 1 && (
						<div>
							<h2 className='pt-8 pb-8 text-lg font-medium lg:text-2xl'>
								Other Matches:
							</h2>

							{results.slice(1).map((result, index) => (
								<div className='mb-2 collapse collapse-plus bg-beige-light'>
									<input type='checkbox' name='my-accordion-3' />
									<h2 className='pl-12 text-lg font-medium lg:text-2xl collapse-title'>
										{result[0].coffee_type} ({result[0].region})
									</h2>
									<div className='collapse-content'>
										<ResultCard key={index} results={result[0]} />
									</div>
								</div>
							))}
						</div>
					)}
				</section>
			)}
		</main>
	);
}
