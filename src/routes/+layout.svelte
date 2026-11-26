<script lang="ts">
	import Sidebar from '#lib/components/sidebar.svelte';
	import Footer from '#lib/components/footer.svelte';
	import Head from '#lib/components/Head.svelte';
	import type { Snippet } from 'svelte';
	import '../app.css';
	import '#lib/styles/variables.css';

	let { children }: { children: Snippet } = $props();
</script>

<Head />

<div class="flex min-h-screen w-screen text-dark font-sans flex-col lg:flex-row">
	<div class="lg:sticky lg:top-0 lg:h-screen min-w-fit min-h-max">
		<Sidebar />
	</div>
	<div class="bg-white w-full px-4 md:px-8">
		<div class="">
			{@render children()}
		</div>
		<div class="my-2">
			<Footer />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro');
</style>
