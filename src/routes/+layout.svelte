<script lang="ts">
	import '../styles/global.scss';
	// ? this ensurees styles are consistent across all browsers
	import 'modern-normalize/modern-normalize.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

{#if data.user}
	<p>{data.user.display_name}</p>
{/if}

<slot />
