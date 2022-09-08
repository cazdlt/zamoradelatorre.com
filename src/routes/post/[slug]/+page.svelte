<script lang="ts">
	import PostLayout from '$lib/components/postLayout.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const Post = data.Component;
	const metadata = data.metadata;
</script>

<div>
	<PostLayout {metadata}>
		<Post />
	</PostLayout>
</div>
