<script lang="ts">
	import PageTitle from '#lib/components/pageTitle.svelte';
	import { about, type TextRun } from '#lib/data/about.ts';
	import { cvLinks } from '#lib/data/site.ts';
	import { ui } from '#lib/data/i18n.ts';
	import { lang } from '#lib/stores/lang.ts';
	import Fa from 'svelte-fa';
	import { faFileLines } from '@fortawesome/free-regular-svg-icons';

	let content = $derived(about[$lang]);
</script>

{#snippet richText(runs: TextRun[])}
	{#each runs as run, i (i)}
		{#if typeof run === 'string'}
			{run}
		{:else if 'em' in run}
			<em class="italic text-dark/80">{run.em}</em>
		{:else}
			<a
				href={run.link.href}
				target={run.link.external ? '_blank' : undefined}
				rel={run.link.external ? 'noreferrer' : undefined}
				class="text-secondary hover:underline"
			>
				{run.link.label}
			</a>
		{/if}
	{/each}
{/snippet}

<div class="max-w-3xl mx-auto my-8 md:my-12 px-2 space-y-12">
	<header class="space-y-4">
		<PageTitle title={ui[$lang].pages.about} />
		<p class="text-sm text-dark/60">
			{content.kicker}
		</p>
		<div class="space-y-4 text-base md:text-lg leading-relaxed text-dark/85">
			{#each content.intro as paragraph, i (i)}
				<p>{@render richText(paragraph)}</p>
			{/each}
		</div>

		<div class="pt-3 space-y-2">
			<p class="text-sm text-dark/60">{content.cvNote}</p>
			<div class="flex flex-wrap items-center gap-2.5">
				{#each cvLinks as cv (cv.href)}
					<a
						href={cv.href}
						target="_blank"
						rel="noreferrer"
						class="inline-flex items-center gap-2 border border-dark/15 bg-light/50 px-3 py-1.5 text-sm text-dark transition-colors hover:border-secondary hover:text-secondary"
					>
						<Fa icon={faFileLines} class="text-xs text-primary" />
						<span>{cv.label}</span>
					</a>
				{/each}
			</div>
		</div>
	</header>

	<section class="space-y-5">
		<h2 class="text-2xl font-semibold text-dark border-b border-dark/10 pb-2">
			{content.nowHeading}
		</h2>
		<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
			{#each content.now as area (area.title)}
				<div class="border-l-2 border-primary/50 pl-4 space-y-1.5">
					<h3 class="font-semibold text-lg text-dark">{area.title}</h3>
					<p class="text-sm md:text-base leading-relaxed text-dark/80">
						{@render richText(area.body)}
					</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="space-y-4">
		<h2 class="text-2xl font-semibold text-dark border-b border-dark/10 pb-2">
			{content.personalHeading}
		</h2>
		<ul class="space-y-2 text-base text-dark/85 list-disc list-inside">
			{#each content.personal as line (line)}
				<li>{line}</li>
			{/each}
		</ul>
	</section>

	<div class="pt-4 border-t border-dark/10 flex flex-wrap items-center justify-between gap-4">
		<p class="text-dark/75">{content.contactPrompt}</p>
		<a
			href="/contact"
			class="inline-flex items-center bg-secondary px-5 py-2 text-sm text-white transition-opacity hover:opacity-90"
		>
			{content.contactLinkLabel}
		</a>
	</div>
</div>
