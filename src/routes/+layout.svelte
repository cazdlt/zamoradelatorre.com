<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
	import Head from '$lib/components/Head.svelte';

	export const prerender = true;
</script>

<Head />

<div class="grid grid-cols-4 grid-flow-col gap-0 min-h-screen w-screen text-dark font-sans">
	<div class="col-span-1 sticky top-0 h-screen">
		<Sidebar />
	</div>
	<div class="bg-white w-full col-span-3 px-8 my-2">
		<div class="my-2">
			<slot />
		</div>
		<div class="my-2">
			<Footer />
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro');
	@import "../lib/styles/variables.css";
</style>
