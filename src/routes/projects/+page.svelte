<script lang="ts">
	import PostListing from '#lib/components/postListing.svelte';
	import PageTitle from '#lib/components/pageTitle.svelte';
	import type { PageData } from './$types';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';

	let { data }: { data: PageData } = $props();
</script>

<div class="max-w-3xl mx-auto my-8 md:my-12 px-2">
	<PageTitle title={ui[$lang].pages.projects} />
	<PostListing posts={data.projects} />
</div>
