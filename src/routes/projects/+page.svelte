<script lang="ts">
	import PostListing from '$lib/components/postListing.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const posts = data.projects;

	import { title } from '$lib/stores/title';
	title.set('Projects');
</script>

<PostListing {posts} />
