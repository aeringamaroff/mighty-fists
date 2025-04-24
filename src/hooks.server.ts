import type { Handle, HandleFetch } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
	console.log(event.url.pathname, event.isDataRequest);

	const { cookies, locals, url } = event;

	if (!url.pathname.startsWith('/api')) {
		const token = cookies.get('token');

		// locals.user is defined in /app.d.ts in the Locals interface

		locals.user = token ? { name: 'Aerin', id: 1 } : undefined;
	}

	const response = await resolve(event);

	return response;
};

export const handle = sequence(handle1);

export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
	if (request.url.startsWith('https://dummyjson.com/')) {
		const cookie = event.request.headers.get('cookie');

		if (cookie) {
			request.headers.set('cookie', cookie);
		}
	}
	return fetch(request);
};
