<script lang="ts">
	import '../styles/global.scss';

	// ? this ensurees styles are consistent across all browsers
	import 'modern-normalize/modern-normalize.css';

	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: user = data.user;
</script>

<div id="main">
	<div id="content">
		<main id="main-content">
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	#main {
		#content {
			main#main-content {
				padding: 30px 15px 60px;
				@include breakpoint.up('md') {
					padding: 30px 30px 60px;
				}
			}
		}
	}
</style>
