<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/state';
	import { enhance } from '$app/forms';

	export let data: LayoutData;
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

		{#if !data.user}
			<a href="/login">Login</a>
		{/if}
	</nav>

	{#if data.user}
		<p>Welcome, {data?.user.name}!</p>

		<form method="POST" action="/login?/logout&redirectTo={page.url.pathname}" use:enhance>
			<button type="submit">Logout</button>
		</form>
	{/if}

	<slot />

	<footer
		style="
		position:absolute;
		width:100%;
		bottom:0px;
		background: #f1f1f1;
		padding: 10px;
		text-align: center;
  "
	>
		All rights reserved
	</footer>
</div>
