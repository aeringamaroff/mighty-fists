<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/state';

	export let data: LayoutData;

	console.log('page', page.data);
</script>

<svelte:head>
	<title>Website Name{page.data.title ? ` - ${page.data.title}` : ''}</title>

	{#if page.data.description}
		<meta name="description" content={page.data.description} />
	{/if}
</svelte:head>

<div
	style="
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  "
>
	<nav>
		<a href="/">Home</a>
		<a href="/products">Products</a>
	</nav>

	{#if data.user}
		<p>Welcome, {data?.user.name}!</p>
	{/if}

	<slot />

	<footer
		style="
    background: #f1f1f1;
    padding: 10px;
    text-align: center;
  "
	>
		All rights reserved
	</footer>
</div>
