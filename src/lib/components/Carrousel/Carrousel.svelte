<script lang="ts">
	import { onMount } from 'svelte';
	import UIcon from '../Icon/UIcon.svelte';

	// Your snippet images
	import snip1 from '$lib/assets/snips/snip1.png';
	import snip2 from '$lib/assets/snips/snip2.png';

	export let items = [
		{ logo: snip1, name: 'Snippet 1' },
		{ logo: snip2, name: 'Snippet 2' }
	];

	const delay = 3000;
	let element: HTMLElement;
	let timeout: unknown;
	let index = 0;
	let toRight = true;

	const slide = (right: boolean) => {
		if (right) {
			if (index < items.length - 1) index++;
			else {
				index--;
				toRight = false;
			}
		} else {
			if (index > 0) index--;
			else {
				index++;
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

	$: {
		if (element) {
			element.scrollTo({
				left: index * element.offsetWidth,
				behavior: 'smooth'
			});
		}
	}
</script>

<div class="carousel-wrapper">
	<button class="button" on:click={toggleLeft}>
		<UIcon icon="i-carbon-chevron-left" />
	</button>

	<div bind:this={element} class="carousel-inner">
		{#each items as item}
			<div class="carousel-item">
				<img src={item.logo} alt={item.name} />
				<span>{item.name}</span>
			</div>
		{/each}
	</div>

	<button class="button" on:click={toggleRight}>
		<UIcon icon="i-carbon-chevron-right" />
	</button>
</div>

<style lang="scss">
	.carousel-wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		width: 100%;
	}

	.carousel-inner {
		display: flex;
		overflow: hidden;
		width: 500px; /* only one item visible */
		scroll-behavior: smooth;
	}

	.carousel-item {
		min-width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.carousel-item img {
		width: 450px;
		height: 450px;
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
