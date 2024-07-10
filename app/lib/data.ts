import { sql } from '@vercel/postgres';
import { Coffee, Comment, Question, Response } from './definitions';

export async function getCoffeeList() {
	try {
		const data = await sql<Coffee>`SELECT * FROM coffee`;
		return data.rows;
	} catch (error) {
		console.error('Database Error:', error);
		throw new Error('Failed to fetch revenue data.');
	}
}
