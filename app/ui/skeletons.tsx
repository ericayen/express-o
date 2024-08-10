// loading animation
import Image from 'next/image';
const logo = require('@/public/logo.png');

const shimmer =
	'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function Loading() {
	return (
		<main>
			<h1 className='text-brown pt-48'>
				Loading...
				<Image
					src={logo}
					alt='coffee cup logo'
					className='inline animate-bounce mx-0.5 w-6 sm:w-8 lg:w-12'
				/>
			</h1>
		</main>
	);
}
