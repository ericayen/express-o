import { getQuizResult } from '@/app/lib/data';

type Props = {
	options: any;
};

export default async function QuizResult({ options }: Props) {
    const results = await getQuizResult(options)

    results.map((result, index) => console.log(`This is result #${index+1}:`,result.rows))

    return <div>Result here</div>;
}
