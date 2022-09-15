<script lang="ts">
	import type { PageData } from './$types';
	import DateTagList from '$lib/components/dateTagList.svelte';
	export let data: PageData;

	const { PostComponent, PostLayout, metadata } = data;
	let { title, description, date, tags } = metadata;
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
