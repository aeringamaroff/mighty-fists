import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	const parentData = await parent();

	console.log('Parent Data', parentData);

	const products = (await import('$lib/dummy-products.json')).default;

	return {
		products
	};
};
