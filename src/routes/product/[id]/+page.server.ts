import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	console.log('Product server load function', params);

	const products = (await import('$lib/dummy-products.json')).products;

	const product = products.find((product) => product.id === +params.id);

	console.log('product Data', product);

	if (!product) {
		// can redirect to the url:
		// throw redirect(301, '/products');

		throw error(404, 'Product Not Found');
	}

	return {
		product,
		title: product.title,
		description: product.description
	};
};
