<script lang="ts">
	import { title } from '#lib/stores/title.ts';
	import { lang } from '#lib/stores/lang.ts';
	import { ui } from '#lib/data/i18n.ts';
</script>

<svelte:head>
	<title>{$title}</title>
	<meta name="description" content={ui[$lang].metaDescription} />
</svelte:head>
