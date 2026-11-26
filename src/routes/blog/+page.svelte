<script lang="ts">
	import PostListing from '#lib/components/postListing.svelte';
	import type { PageData } from './$types';
	import { title } from '#lib/stores/title.ts';

	let { data }: { data: PageData } = $props();

	title.set('Blog');
</script>

<PostListing posts={data.blog} />
