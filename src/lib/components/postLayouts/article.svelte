<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children?: Snippet } = $props();
</script>

<article
	class="prose prose-slate w-full max-w-3xl mx-auto px-2 md:px-4 prose-img:max-w-[85%] prose-img:mx-auto prose-img:rounded-xs mb-16 overflow-x-auto"
>
	{@render children?.()}
</article>
