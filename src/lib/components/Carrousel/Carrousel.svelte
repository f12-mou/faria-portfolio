<script lang="ts">
	import { fade } from 'svelte/transition';
	export let images: string[] = [];
	export let autoplay = false;
	export let interval = 3000;

	let current = 0;
	let timer: NodeJS.Timeout;

	$: if (autoplay) {
		clearInterval(timer);
		timer = setInterval(() => {
			current = (current + 1) % images.length;
		}, interval);
	} else {
		clearInterval(timer);
	}
</script>

<div class="relative w-full overflow-hidden rounded-2xl">
	{#each images as img, i}
		<img
			src={img}
			alt={`Slide ${i + 1}`}
			class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700"
			style="opacity: {i === current ? 1 : 0}"
			in:fade
			out:fade
		/>
	{/each}

	<button
		on:click={() => (current = (current - 1 + images.length) % images.length)}
		class="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
	>
		‹
	</button>
	<button
		on:click={() => (current = (current + 1) % images.length)}
		class="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/40 text-white p-2 rounded-full"
	>
		›
	</button>
</div>

<style>
	img {
		height: 400px;
	}
</style>
