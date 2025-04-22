import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ fetch }) => {
	const response = await fetch('https://dummyjson.com/products');

	console.log(response);

	if (response.ok) {
		const resJson = await response.json();

		return json(resJson, { status: 200 });
	}

	throw error(response.status, response.statusText);
};

export const POST: RequestHandler = async ({ request }) => {
	const product = await request.json();

	console.log('POST: ', product);

	if (!product.title) {
		throw error(400, 'Product Title is Required');
	}

	return json({ id: 1234, title: product.title });
};
