import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies, locals }) => {
	const token = cookies.get('token');

	// in an irl situation at this point the user would be fetched using the token

	const user = locals.user;

	return {
		user
	};
};
