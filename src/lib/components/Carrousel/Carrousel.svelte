<script lang="ts">
	import { onMount } from 'svelte';
	import UIcon from '../Icon/UIcon.svelte';

	// Import your 4 snippet images
	import snip1 from '$lib/assets/snips/snip1.png';
	import snip2 from '$lib/assets/snips/snip2.png';
	// import snip3 from '$lib/assets/snips/snip3.jpg';
	// import snip4 from '$lib/assets/snips/snip4.jpg';

	// Create carousel items
	export let items = [
		{ logo: snip1, name: 'Snippet 1' },
		{ logo: snip2, name: 'Snippet 2' }
		// { logo: snip3, name: 'Snippet 3' },
		// { logo: snip4, name: 'Snippet 4' }
	];

	const delay = 2500; // autoplay delay in ms
	let element: HTMLElement;
	let timeout: unknown;
	let index = 0;
	let toRight = true;

	// reactive scroll
	$: {
		if (element) {
			element.scroll({
				left: index * 220, // scroll width of each item
				behavior: 'smooth'
			});
		}
	}

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) {
				index += 1;
			} else {
				index -= 1;
				toRight = false;
			}
		} else {
			if (index > 0) {
				index -= 1;
			} else {
				index += 1;
				toRight = true;
			}
		}
	};

	const toggle = (right: boolean) => {
		clearTimeout(timeout as number);
		timeout = setTimeout(() => {
			slide(right);
			toggle(toRight);
		}, delay);
	};

	const toggleLeft = () => {
		clearTimeout(timeout as number);
		toRight = false;
		slide(false);
		toggle(toRight);
	};

	const toggleRight = () => {
		clearTimeout(timeout as number);
		toRight = true;
		slide(true);
		toggle(toRight);
	};

	onMount(() => {
		toggle(true);
	});
</script>

<div class="carousel-container">
	<!-- Left Button -->
	<button class="button" on:click={toggleLeft}>
		<UIcon icon="i-carbon-chevron-left" />
	</button>

	<!-- Carousel Items -->
	<div bind:this={element} class="carousel-inner">
		{#each items as item}
			<div class="carousel-item">
				<img src={item.logo} alt={item.name} />
				<span>{item.name}</span>
			</div>
		{/each}
	</div>

	<!-- Right Button -->
	<button class="button" on:click={toggleRight}>
		<UIcon icon="i-carbon-chevron-right" />
	</button>
</div>

<style lang="scss">
	.carousel-container {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.carousel-inner {
		display: flex;
		overflow: hidden;
		width: 900px; /* width of the visible carousel */
	}

	.carousel-item {
		min-width: 200px;
		margin: 0 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carousel-item img {
		width: 180px;
		height: 180px;
		object-fit: cover;
		border-radius: 12px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
		transition: transform 0.2s;
	}

	.carousel-item img:hover {
		transform: scale(1.05);
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid var(--border);
		background: transparent;
		cursor: pointer;
	}

	.button:hover {
		border-color: var(--border-hover);
	}
</style>
