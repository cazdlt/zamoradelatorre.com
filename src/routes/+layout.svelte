<script>
	import Sidebar from '$lib/components/sidebar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import '../app.css';
</script>

<div class="grid grid-cols-5 grid-flow-col gap-4">
	<div class="col-span-1">
		<Sidebar />
	</div>
	<div>
        <slot />
        <Footer />
	</div>
</div>
