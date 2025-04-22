import { error, json } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	// unlike a normal js fetch(), this one only needs the relative path instead of a full url
	// this is an internal request (going from our server to our server)
	const response = await fetch('api/products');

	if (response.ok) {
		return {
			products: await response.json()
		};
	}

	const errJson = await response.json();

	throw error(response.status, errJson);
};
