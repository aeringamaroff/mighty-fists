<script lang="ts">
	import { invalidateAll } from '$app/navigation';
</script>

<form
	method="POST"
	action="/api/auth/logout"
	on:submit|preventDefault={async () => {
		// ! NOTE: this is to prevent the browser from refreshing

		const res = await fetch('/api/auth/logout', {
			method: 'POST',
			headers: {
				accept: 'application/json'
			}
		});

		if (res.ok) {
			invalidateAll();
		}
	}}
>
	<button type="submit">Logout</button>
</form>
