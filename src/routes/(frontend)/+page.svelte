<script>
	import { goto } from '$app/navigation';
	import { Button, Button2 } from '$components';
</script>

<Button />
<Button2 />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button
	onclick={() => {
		goto('/about');
	}}>Go to About</button
>
