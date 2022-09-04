<script lang="ts">
	import type { PageData } from './$types';
	import * as _ from 'lodash-es';
	export let data: PageData;

	let { blog, projects } = data;
	let posts_by_year = _.groupBy(blog.concat(projects), (p) => p.date.getFullYear());
	
</script>

<div>
	
</div>
