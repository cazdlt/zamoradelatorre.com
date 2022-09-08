<script>
	import '../../lib/styles/prism-theme.css';
</script>

<slot />

<style global lang="postcss">
	h1,
	h2 {
		.icon-link {
			position: relative;
		}

		.icon-link::before {
			content: '#';
			position: absolute;
			left: -1.5ch;
			top: 0;
			opacity: 0;
			text-decoration: underline;
		}
		&:hover .icon-link::before {
			opacity: 1;
		}
	}
</style>
