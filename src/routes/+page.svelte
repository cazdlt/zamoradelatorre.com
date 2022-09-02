<script>
	const pages = [
		{
			url: '/blog',
			img: '/img/home/canaletal.jpg',
			description: 'Canaletal, Bolívar',
			title: 'Blog'
		},
		{
			url: '/proyectos',
			img: '/img/home/iglesia.jpg',
			description: 'Canaletal, Bolívar',
			title: 'Proyectos'
		},
		{
			url: '/about',
			img: '/img/home/norosi.jpg',
			description: 'Norosí, Bolívar',
			title: 'Acerca de'
		},
		{
			url: '/contacto',
			img: '/img/home/cocuy.jpg',
			description: 'PNN El Cocuy',
			title: 'Contacto'
		}
	];
</script>

<div class="grid gap-1 place-content-center home-grid m-2">
	{#each pages as page}
		<a href={page.url} class="h-full w-full">
			<img alt={page.description} class="h-full w-full object-cover object-bottom" src={page.img} />
			<span> {page.description} </span>
			<span> {page.title} </span>
		</a>
	{/each}
</div>

<style>
	.home-grid {
		grid-template-columns: repeat(auto-fill, 44%);
	}
</style>
