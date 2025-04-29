<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<div class="bg-white">
	<header class="absolute inset-x-0 top-0 z-50">
		<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5">
					<code class="font-semibold tracking-tighter">Erik Nogueira Kückelheim</code>
				</a>
			</div>
		</nav>
	</header>
	{@render children()}
</div>
