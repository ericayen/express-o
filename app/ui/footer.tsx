'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';

export default function Footer() {
	const pathname = usePathname();
	return (
		<div
			className={clsx(
				'pb-4 text-xs text-center bg-white font-ms text-brown md:text-sm lg:text-base selection:bg-brown-light selection:text-white',
				pathname === '/quiz' ? 'pt-60' : 'pt-16 lg:pt-24'
			)}>
			<Link
				href='https://github.com/ericayen/express-o'
				className='font-medium text-brown-dark hover:text-red'>
				&copy; Express-o.{' '}
			</Link>
			Created by{' '}
			<Link
				href='https://github.com/ericayen'
				className='font-medium text-brown-dark hover:text-red'>
				Erica Yen
			</Link>
		</div>
	);
}
