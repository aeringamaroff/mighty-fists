import type { PageLoad } from './$types';

// data returned from +page.server.ts is accessable

export const load: PageLoad = ({ data }) => {
	return {
		products: data.products,
		title: 'Product List'
	};
};
