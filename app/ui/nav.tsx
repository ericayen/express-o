import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';

import React, { useState, useEffect } from 'react';

export default function MainNav() {
	return (
		<div
			id='navbar'
			className='sticky top-0 z-50 py-4 bg-white w-dvw font-ms selection:bg-brown-light selection:text-white'>
			<nav className='flex items-center justify-center space-x-1 leading-loose sm:space-x-2 lg:space-x-4'>
				<NavLinks />
			</nav>
		</div>
	);
}
