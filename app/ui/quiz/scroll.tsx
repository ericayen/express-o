'use client';

import { useEffect, useRef } from 'react';

export default function Scroll() {
	const formRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (formRef.current) {
			const formOffset = formRef.current.offsetTop - 60;
			window.scrollTo({ top: formOffset, behavior: 'smooth' });
		}
	}, []);

	return <div ref={formRef} />;
}
