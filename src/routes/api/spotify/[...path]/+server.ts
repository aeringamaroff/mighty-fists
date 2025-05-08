import type { RequestHandler } from './$types';
import { SPOTIFY_BASE_URL } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies, fetch, params }) => {
	const accessToken = cookies.get('access_token');

	const res = await fetch(`${SPOTIFY_BASE_URL}/${params.path}`, {
		headers: {
			Authorization: `Bearer ${accessToken}`
		}
	});

	const resJson = await res.json();

	if (resJson.error) {
		throw error(resJson.error.status, resJson.error.message);
	}

	return json(resJson);
};
