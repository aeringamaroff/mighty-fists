import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';

export const handle1: Handle = async ({ event, resolve }) => {
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

export const handleError: HandleServerError = ({ error, event }) => {
	// can send to an error logging service
	// this will ONLY run for unexpected errors in the server

	console.log('ERROR:', error);
	console.log('EVENT:', event);

	// custom error message:
	return {
		message: 'An Unexpected Error Occurred'
	};
};
