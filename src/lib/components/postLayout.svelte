<!-- Couldn't use this in MDSVEX layout definition because it doesn't seem to understand typescript -->
<script lang="ts">
	import DateTagList from '$lib/components/dateTagList.svelte';
	import type { PostMetadata } from '$lib/types/post';

	export let metadata: PostMetadata;
	let { title, description, date, tags } = metadata;
</script>

<div>
	<div class="text-center my-12">
		<DateTagList {date} {tags} />
		<h1 class="text-5xl font-bold mt-8 mb-2">{title}</h1>
		<span class="my-4 text-slate-500">{description}</span>
		<hr class="my-12" />
	</div>

	<article
		class="prose prose-slate w-full max-w-none px-24 prose-img:max-w-[80%] prose-img:mx-auto mb-16"
	>
		<slot />
	</article>
</div>
