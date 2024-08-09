import { getQuizList, getResponseList } from '@/app/lib/data';

export default async function Card() {
	const questions = await getQuizList();
	const responses = await getResponseList();

	return (
		<>
			<form>
				{questions.map((question) => {
					return (
						<div key={question.question_id}>
							<h3
								className={`pt-8 pb-2 text-sm font-medium sm:text-lg lg:text-xl `}>
								{question.question}
							</h3>
							<ul className='flex flex-col m-auto w-fit'>
								{responses
									.filter(
										(response) => response.question_id === question.question_id
									)
									.map((response) => (
										<li
											key={response.response_id}
											className='flex items-center py-1 text-sm sm:text-lg lg:text-xl'>
											<input
												type='radio'
												className='mr-2 radio radio-xs checked:bg-red'
												id={`${response.response_id}`}
												name={`question_${question.question_id}`}
												value={response.option}
											/>
											<label
												htmlFor={`${response.response_id}`}
												className='cursor-pointer hover:text-red'>
												{response.option}
											</label>
										</li>
									))}
							</ul>
						</div>
					);
				})}
				<button type='submit' className='mt-8 button'>
					Submit
				</button>
			</form>
		</>
	);
}
