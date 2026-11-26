<script lang="ts">
	import Sidebar from '#lib/components/sidebar.svelte';
	import Footer from '#lib/components/footer.svelte';
	import Head from '#lib/components/Head.svelte';
	import { initLang, lang, setLang } from '#lib/stores/lang.ts';
	import { onMount, type Snippet } from 'svelte';
	import '../app.css';
	import '#lib/styles/variables.css';

	let { children }: { children: Snippet } = $props();

	onMount(() => {
		initLang();
	});

	$effect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = $lang;
		}
	});
</script>

<Head />

<div class="flex min-h-screen w-full text-dark font-sans flex-col lg:flex-row">
	<div class="lg:sticky lg:top-0 lg:h-screen lg:w-64 lg:shrink-0">
		<Sidebar />
	</div>
	<div class="relative bg-white flex-1 min-w-0 flex flex-col min-h-screen px-4 md:px-8">
		<div
			class="absolute top-4 right-5 md:right-8 z-20 flex items-center gap-1.5 text-xs tracking-wide"
			role="group"
			aria-label="Language"
		>
			<button
				type="button"
				onclick={() => setLang('es')}
				aria-pressed={$lang === 'es'}
				class="cursor-pointer transition-colors {$lang === 'es'
					? 'text-primary font-semibold'
					: 'text-dark/40 hover:text-secondary'}"
			>
				es
			</button>
			<span class="text-dark/25" aria-hidden="true">/</span>
			<button
				type="button"
				onclick={() => setLang('en')}
				aria-pressed={$lang === 'en'}
				class="cursor-pointer transition-colors {$lang === 'en'
					? 'text-primary font-semibold'
					: 'text-dark/40 hover:text-secondary'}"
			>
				en
			</button>
		</div>
		<main class="flex-1">
			{@render children()}
		</main>
		<div class="my-4">
			<Footer />
		</div>
	</div>
</div>
