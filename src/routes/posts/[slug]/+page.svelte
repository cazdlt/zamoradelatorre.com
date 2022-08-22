<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	let Post = data.Component;
	let { title } = data.metadata;
</script>

<article>
	<h2>{title}</h2>
	<Post />
</article>
