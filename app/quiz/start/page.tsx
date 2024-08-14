import Card from '@/app/ui/quiz/card';
import { getQuizList, getResponseList } from '@/app/lib/data';

export default async function Page() {
	const questions = await getQuizList();
	const responses = await getResponseList();

	return (
		<main>
			<h1>
				<span className='text-brown'>Take a </span>
				<span className='font-semibold'>Quiz</span>
			</h1>

			<form action='/quiz/result' method='POST'>
				<Card questions={questions} responses={responses} />
				<button type='submit' className='mt-8 button'>
					Submit
				</button>
			</form>
		</main>
	);
}
