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
	<div>
		<div class="text-center my-12">
			<DateTagList {date} {tags} />
			<h1 class="text-5xl font-bold mt-8 mb-2">{title}</h1>
			<span class="my-4 text-slate-500">{description}</span>
			<hr class="my-12" />
		</div>
		<PostLayout {metadata}>
			<PostComponent />
		</PostLayout>
	</div>
</div>
