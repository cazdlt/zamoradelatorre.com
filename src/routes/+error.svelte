<script lang="ts">
	import { page } from '$app/state';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';
</script>

<div class="text-center flex place-content-center flex-col min-h-[70vh]">
	<h1 class="text-8xl text-primary font-mono">{page.status}</h1>
	<p class="font-mono mt-2">{page.error?.message}</p>
	<a href="/" class="text-secondary hover:underline my-8">{ui[$lang].error.goHome}</a>
</div>
