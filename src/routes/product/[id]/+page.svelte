<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.product;
</script>

<h2>{product?.title}</h2>

<ul>
	<li>
		<img src={product?.thumbnail} alt={product?.title} />

		<p>{product?.description}</p>
	</li>
</ul>

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 30px;
	}

	img {
		width: 100%;
	}
</style>
