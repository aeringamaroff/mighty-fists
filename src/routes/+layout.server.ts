import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const token = cookies.get('token');

	// in an irl situation at this point the user would be fetched

	const user = {
		name: 'Aerin',
		id: 1
	};

	return { user: token ? user : null };
};
