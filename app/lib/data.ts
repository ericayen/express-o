import { sql } from '@vercel/postgres';
import { Coffee, Comment, Question, Response } from './definitions';

export async function getCoffeeList() {
	try {
		const data = await sql<Coffee>`SELECT * FROM coffee`;
		const coffee = data.rows;
		return coffee;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch coffee data.');
	}
}

export async function getCoffeeTypes() {
	try {
		const data =
			await sql<Coffee>`SELECT DISTINCT ON (coffee_type) * FROM coffee ORDER BY coffee_type`;
		const coffee = data.rows;
		return coffee;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch coffee type data.');
	}
}

export async function getCoffeeListByType(coffeeType: string) {
	try {
		const data = await sql<Coffee>`
		SELECT * FROM coffee WHERE coffee_type = ${coffeeType}`;
		const coffee = data.rows;
		return coffee;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error(`Failed to fetch data for ${coffeeType} coffee.`);
	}
}

export async function getQuizList() {
	try {
		const data = await sql<Question>`SELECT * FROM questions`;
		const quiz = data.rows;
		return quiz;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch question data.');
	}
}

export async function getResponseList() {
	try {
		const data = await sql<Response>`SELECT * FROM responses`;
		const response = data.rows;
		return response;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch response data.');
	}
}

export async function getQuizResult(options: string[]) {
	try {
		const { rows } =
			await sql<Response>`SELECT coffee_ids FROM responses WHERE option IN(${options[0]}, ${options[1]}, ${options[2]}, ${options[3]})`;

		const coffeeIds = rows
			.map((item) => item.coffee_ids.split(','))
			.flat()
			.reduce((count: { [key: string]: number }, id: string) => {
				count[id] = (count[id] || 0) + 1;
				return count;
			}, {});

		let maxCount = 0;
		const maxIds: string[] = [];

		for (const id in coffeeIds) {
			if (coffeeIds[id] > maxCount) {
				maxCount = coffeeIds[id];
				maxIds.length = 0;
				maxIds.push(id);
			} else if (coffeeIds[id] === maxCount) {
				maxIds.push(id);
			}
		}

		const coffeeInfo = await Promise.all(
			maxIds.map(
				(id) => sql<Coffee>`SELECT * FROM coffee WHERE coffee_id = ${id}`
			)
		);

		let data = coffeeInfo.map((result) => result.rows);
		return data;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch coffee_id data.');
	}
}
