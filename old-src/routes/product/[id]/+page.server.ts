import { error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const productRes = await fetch(`https://dummyjson.com/products/${params.id}`);

	if (!productRes.ok) {
		// can redirect to a provided url:
		// throw redirect(301, '/products');

		throw error(productRes.status, 'Product Not Found');
	}

	const product = await productRes.json();

	return {
		product,
		title: product.title,
		description: product.description
	};
};
