'use client';

import QuizResult from '@/app/ui/quiz/result';
import { useSearchParams } from 'next/navigation';

export default async function Page() {
	const searchParams = useSearchParams();
	const params = Object.fromEntries(searchParams.entries());
	const options = Object.values(params);

	return (
		<main>
			<h1>
				<span className='text-brown'>Your </span>
				<span className='font-semibold'>Results</span>
			</h1>
			<QuizResult options={options} />
		</main>
	);
}
