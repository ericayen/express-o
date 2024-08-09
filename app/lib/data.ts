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
			await sql<Coffee>`SELECT DISTINCT coffee_id, coffee_type, history FROM coffee ORDER BY coffee_id ASC`;
		const coffee = data.rows;
		return coffee;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch coffee type data.');
	}
}

export async function getArabicaList() {
	try {
		const data =
			await sql<Coffee>`SELECT * FROM coffee WHERE coffee_type = 'Arabica'`;
		const coffee = data.rows;
		return coffee;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch Arabica data.');
	}
}

export async function getQuizList() {
	try {
		const data = await sql<Question>`SELECT * FROM questions`;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch question data.');
	}
}