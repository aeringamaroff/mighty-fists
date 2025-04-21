<script>
	import { page } from '$app/state';
	import ProductHeader from './ProductHeader.svelte';
</script>

<h1>Product page</h1>

<ProductHeader />

<p>Product ID: {page.params.id}</p>
