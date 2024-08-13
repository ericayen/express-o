import Card from "@/app/ui/quiz/card";

export default async function Page() {
	return (
		<main>
			<h1>
				<span className='text-brown'>Take a </span>
				<span className='font-semibold'>Quiz</span>
			</h1>
			<Card />
		</main>
	);
}
