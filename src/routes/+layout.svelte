<script lang="ts">
	import '../styles/global.scss';

	// ? this ensurees styles are consistent across all browsers
	import 'modern-normalize/modern-normalize.css';
	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import type { LayoutData } from './$types';
	import { page } from '$app/state';
	import { Navigation } from '$components';
	import Header from '$components/Header.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';

	NProgress.configure({
		showSpinner: false
	});

	export let data: LayoutData;

	let topbar: HTMLElement;
	let scrollY: number;

	let headerOpacity = 0;

	$: if (topbar) {
		headerOpacity = scrollY / topbar.offsetHeight < 1 ? scrollY / topbar.offsetHeight : 1;
	}

	$: user = data.user;

	beforeNavigate(() => {
		NProgress.start();
	});

	afterNavigate(() => {
		NProgress.done();
	});
</script>

<svelte:window bind:scrollY />

<svelte:head>
	<title>Svelte Spotify {page.data.title ? ` - ${page.data.title}` : ''}</title>
</svelte:head>

<div id="main">
	{#if user}
		<div id="sidebar">
			<Navigation desktop={true} />
		</div>
	{/if}
	<div id="content">
		{#if user}
			<div id="topbar" bind:this={topbar}>
				<div
					class="topbar-bg"
					style:background-color="var(--header-color)"
					style:opacity={headerOpacity}
				></div>
				<Header />
			</div>
		{/if}

		<main id="main-content" class:logged-in={user}>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	#main {
		display: flex;
		#content {
			flex: 1;
			#topbar {
				position: fixed;
				height: var(--header-height);
				padding: 0 15px;
				display: flex;
				align-items: center;
				width: 100%;
				z-index: 100;
				.topbar-bg {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					z-index: -1;
				}
				@include breakpoint.up('md') {
					padding: 0 30px;
					width: calc(100% - var(--sidebar-width));
				}
			}
			main#main-content {
				padding: 30px 15px 60px;
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
				&.logged-in {
					padding-top: calc(30px + var(--header-height));
				}
			}
		}
	}
</style>
