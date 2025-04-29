<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto, invalidateAll } from '$app/navigation';
	import type { ActionData } from './$types';

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

	export let form: ActionData;

	$: console.log(form);
</script>

<!-- * another way to login: <form on:submit|preventDefault={login}> -->
<!-- ! NOTE: using the login function wont work if javascript is disabled -->
<!-- if the login function is not used, the bind:value={} can be removed from the form inputs -->

<!-- ? ?/login is needed so we can use the named form action instead of the default -->
<form method="POST" action="?/login" use:enhance>
	<hr />

	{#if form?.informationMissing}
		<p style="color: red">Missing username or password!</p>
	{/if}

	<label for="username">Username</label>

	<br />

	<input type="text" id="username" name="username" placeholder="Username" />

	<br />

	<label for="password">Password</label>

	<br />

	<input type="password" id="password" name="password" placeholder="Password" />

	<br />

	<button type="submit">Log In</button>
</form>
