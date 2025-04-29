import type { HandleClientError } from '@sveltejs/kit';

export const handleError: HandleClientError = ({ error, event }) => {
	// can send to an error logging service
	// this will ONLY run for unexpected errors on the client

	console.log('ERROR:', error);
	console.log('EVENT:', event);

	// custom error message:
	return {
		message: 'An Unexpected Error Occurred'
	};
};
