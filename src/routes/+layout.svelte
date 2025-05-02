<script lang="ts">
	import '../styles/global.scss';

	// ? this ensurees styles are consistent across all browsers
	import 'modern-normalize/modern-normalize.css';

	import type { LayoutData } from './$types';
	import LogoutButton from '$components/LogoutButton.svelte';

	export let data: LayoutData;

	$: user = data.user;
</script>

{#if user}
	<p>Hello, {user.display_name}</p>

	<LogoutButton />
{/if}

<slot />
