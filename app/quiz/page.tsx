// 'use client';

import { Metadata } from 'next';
// import React, { useState, useRef } from 'react';

export const metadata: Metadata = {
	title: 'Quiz',
	description:
		'Take a short quiz to discover coffee that matches your preferences',
};

export default async function Page() {
	// const coffeeList = await getCoffeeList();
	// const [clicked, setClicked] = useState(false);
	// const quizRef = useRef(null);
	// const handleClick = () => {
	// 	setClicked(true);
	// };

	return (
		<main>
			<h1>
				<span className='text-brown'>Take a </span>
				<span className='font-semibold'>Quiz</span>
			</h1>
			<h2 className='mb-4 text-base sm:text-lg lg:text-2xl'>
				Find out what coffee best matches your preferences
			</h2>
            <button className='button'
                // onClick={() => handleClick()} 
            >
				Let's start!
			</button>
		</main>
	);
}
