import { getQuizList, getResponseList } from '@/app/lib/data';
import Form from '@/app/ui/quiz/form';
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
			<Form questions={questions} responses={responses} />
		</main>
	);
}
