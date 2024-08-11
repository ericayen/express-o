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
