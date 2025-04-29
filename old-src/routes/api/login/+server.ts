import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();

	if (!data.username || !data.password) throw error(400, 'Missing Username or Password');

	cookies.set('token', 'token_value', { path: '/' });

	return json({
		name: data.username,
		id: 1
	});
};
