<script lang="ts">
	import { page } from '$app/state';
</script>

<h2>{page.status}: {page.error?.message}</h2>
