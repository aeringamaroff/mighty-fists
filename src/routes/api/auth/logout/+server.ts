import { json, redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { invalidateAll } from '$app/navigation';

export const POST: RequestHandler = ({ cookies, request }) => {
	cookies.delete('refresh_token', { path: '/' });
	cookies.delete('access_token', { path: '/' });

	if (request.headers.get('accept') === 'application/json') {
		return json({ success: true });
	}

	throw redirect(303, '/login');
};
