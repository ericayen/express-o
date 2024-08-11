'use client';
import Link from 'next/link';

export function Card({
	coffee_type,
	history,
}: {
	coffee_type: string;
	history: string;
}) {
	return (
		<>
			<div className='mb-2 collapse collapse-plus bg-beige-light'>
				<input type='checkbox' name='my-accordion-3' />
				<h2 className='pl-12 text-lg font-medium lg:text-2xl collapse-title'>
					{coffee_type}
				</h2>
				<div className='collapse-content '>
					<div className='w-full bg-white card lg:card-side'>
						<div className='items-center card-body'>
							<p className='text-sm lg:text-base'>{history}</p>
							<Link href={`/beans/${coffee_type}`} className='button'>
								Learn More
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
