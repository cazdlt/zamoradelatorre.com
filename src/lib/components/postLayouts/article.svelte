<script lang="ts">
	import type { PostMetadata } from '$lib/types/post';

	export let metadata: PostMetadata;
</script>

<article
	class="prose prose-slate w-full max-w-none px-24 prose-img:max-w-[80%] prose-img:mx-auto mb-16"
>
	<slot />
</article>
