'use client';

import { useState } from 'react';
import { Question, Response } from '@/app/lib/definitions';
import Scroll from './scroll';

type Props = {
	questions: Question[];
	responses: Response[];
};

export default function Form({ questions, responses }: Props) {
	const [selectedResponses, setSelectedResponses] = useState<{
		[key: number]: string;
	}>({});
	const [errors, setErrors] = useState<{ [key: number]: boolean }>({});
	const [scroll, setScroll] = useState<boolean>(false);

	const handleSelection = (questionId: number, option: string) => {
		setScroll(false);
		setSelectedResponses((prev) => ({
			...prev,
			[questionId]: option,
		}));
		setErrors((prev) => ({
			...prev,
			[questionId]: false,
		}));
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const newErrors: { [key: number]: boolean } = {};

		questions.forEach((question) => {
			if (!selectedResponses[question.question_id]) {
				newErrors[question.question_id] = true;
			}
		});

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			setScroll(true);
			alert('Please answer all the questions!');
			return;
		} else {
			const queryParams = new URLSearchParams();
			Object.entries(selectedResponses).forEach(([questionId, answer]) => {
				queryParams.append(`${questionId}`, answer);
			});
			window.location.href = `/quiz/result?${queryParams.toString()}`;
		}
	};

	return (
		<>
			{scroll && <Scroll />}
			<form onSubmit={handleSubmit}>
				{questions.map((question) => {
					const hasError = errors[question.question_id];
					return (
						<div key={question.question_id}>
							<h3
								className={`pt-8 pb-2 text-sm font-medium sm:text-lg lg:text-xl ${
									hasError ? 'text-red font-semibold' : ''
								}`}>
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
												checked={
													selectedResponses[question.question_id] ===
													response.option
												}
												onChange={() =>
													handleSelection(question.question_id, response.option)
												}
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
