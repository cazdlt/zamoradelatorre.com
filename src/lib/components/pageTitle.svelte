<script lang="ts">
	import { untrack } from 'svelte';
	import { title as headTitle } from '#lib/stores/title.ts';

	let { title }: { title: string } = $props();
	$effect.pre(() => {
		headTitle.set(title);
	});
	headTitle.set(untrack(() => title));
</script>

<h1 class="text-4xl font-semibold my-8">{title}</h1>
