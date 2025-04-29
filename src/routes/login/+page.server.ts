import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	login: async ({ request, cookies, locals }) => {
		const form = await request.formData();

		const username = form.get('username');
		const password = form.get('password');

		if (!username || !password) {
			return fail(400, { informationMissing: true });
		}

		cookies.set('token', 'token_value', { path: '/' });

		locals.user = { name: 'Aerin', id: 1 };

		throw redirect(303, '/');
	},
	logout: async ({ cookies, url, locals }) => {
		cookies.delete('token', { path: '/' });

		locals.user = undefined;

		throw redirect(303, url.searchParams.get('redirectTo') || '/');
	}
};
