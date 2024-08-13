// import { Metadata } from 'next';
import Link from 'next/link';
import Card from '../ui/quiz/card';

// export const metadata: Metadata = {
// 	title: 'Quiz',
// 	description:
// 		'Take a short quiz to discover coffee that matches your preferences',
// };

export default async function Page() {
	return (
		<main>
			<h1>
				<span className='text-brown'>Take a </span>
				<span className='font-semibold'>Quiz</span>
			</h1>
			<h2 className='mb-4 text-base sm:text-lg lg:text-2xl'>
				Find out what coffee best matches your preferences
			</h2>
			<Link href='/quiz/start'>
				<button className='button'>Let&apos;s start!</button>
			</Link>
		</main>
	);
}
