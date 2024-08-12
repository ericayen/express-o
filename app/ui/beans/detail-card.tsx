export default function DetailCard({
	region,
	countries,
	roast_profile,
	flavour,
	acidity,
}: {
	region: string;
	countries: string;
	roast_profile: string;
	flavour: string;
	acidity: string;
}) {
	return (
		<div className='mb-2 collapse collapse-plus bg-beige-light'>
			<input type='checkbox' name='my-accordion-3' />
			<h2 className='pl-12 text-lg font-medium lg:text-2xl collapse-title'>
				{region}
			</h2>
			<div className='collapse-content '>
				<div className='w-full bg-white card lg:card-side'>
					<div className='items-center card-body'>
						<p className='text-sm lg:text-base'>
							<span className='font-medium'>Countries: </span>
							{countries}
						</p>
						<p className='text-sm lg:text-base'>
							<span className='font-medium'>Roast profile: </span>
							{roast_profile}
						</p>
						<p className='text-sm lg:text-base'>
							<span className='font-medium'>Flavour profile: </span>
							{flavour}
						</p>
						<p className='text-sm lg:text-base'>
							<span className='font-medium'>Acidity: </span>
							{acidity}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
