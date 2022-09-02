<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<div class="grid grid-cols-4 grid-flow-col gap-0 min-h-screen w-screen text-dark font-sans">
	<div class="col-span-1">
		<Sidebar />
	</div>
	<div class = "bg-white w-full col-span-3 px-8 my-4">
        <slot />
        <Footer />
	</div>
</div>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro");
</style>