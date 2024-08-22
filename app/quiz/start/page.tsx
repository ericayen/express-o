import { getQuizList, getResponseList } from '@/app/lib/data';
import Card from '@/app/ui/quiz/card';
import Scroll from '@/app/ui/quiz/scroll';

export default async function Page() {
	const questions = await getQuizList();
	const responses = await getResponseList();

	return (
		<main>
			<h1>
				<span className='text-brown'>Take a </span>
				<span className='font-semibold'>Quiz</span>
			</h1>
			<Scroll />
			<form action='/quiz/result'>
				<Card questions={questions} responses={responses} />
				<button type='submit' className='mt-8 button'>
					Submit
				</button>
			</form>
		</main>
	);
}
