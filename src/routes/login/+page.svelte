<script lang="ts">
	import { goto, invalidateAll } from '$app/navigation';

	let username = '';
	let password = '';

	const login = async () => {
		const res = await fetch('api/login', {
			method: 'POST',
			body: JSON.stringify({ username, password })
		});

		const resJson = await res.json();

		if (res.ok) {
			// by rerunning the load function in login/+page.ts we will be redirected because a user object exists

			invalidateAll();
		} else {
			alert(resJson.message);
		}
	};
</script>

<form on:submit|preventDefault={login}>
	<hr />

	<label for="username">Username</label>

	<br />

	<input bind:value={username} type="text" id="username" name="username" placeholder="Username" />

	<br />

	<label for="password">Password</label>

	<br />

	<input
		bind:value={password}
		type="password"
		id="password"
		name="password"
		placeholder="Password"
	/>

	<br />

	<button type="submit">Log In</button>
</form>
