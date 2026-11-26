<script lang="ts">
	import { untrack } from 'svelte';
	import type { PageData } from './$types';
	import DateTagList from '#lib/components/dateTagList.svelte';
	import { title as headTitle } from '#lib/stores/title.ts';

	let { data }: { data: PageData } = $props();

	let { PostComponent, PostLayout, metadata } = $derived(data);
	let { title, description, date, tags } = $derived(metadata);

	$effect.pre(() => {
		headTitle.set(metadata.title);
	});
	headTitle.set(untrack(() => data.metadata.title));
</script>

<div>
	<div class="max-w-3xl mx-auto text-center my-10 md:my-12 px-2">
		<div class="flex justify-center">
			<DateTagList {date} {tags} />
		</div>
		<h1 class="text-4xl md:text-5xl font-bold mt-6 mb-3 leading-tight">{title}</h1>
		{#if description}
			<p class="text-lg text-dark/65">{description}</p>
		{/if}
		<hr class="border-dark/15 my-10" />
	</div>
	<PostLayout {metadata}>
		<PostComponent />
	</PostLayout>
</div>
