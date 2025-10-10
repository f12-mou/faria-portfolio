<script>
	import { data, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	// const title = 'My Resume';
	// const data = '/Faria_CV.pdf'; // static path, not imported
</script>

<CommonPage {title}>
	<div class="resume">
		{#if data}
			<a
				href="https://drive.google.com/file/d/1OAUnK5BKDAEIiJiDEetgcIvynLvYYa04/view?usp=sharing"
				download
			>
				<Chip size={'1.25em'}>Download</Chip>
			</a>
		{:else}
			<Chip>For details, reach me out!</Chip>
		{/if}

		<iframe
			src="https://drive.google.com/file/d/1OAUnK5BKDAEIiJiDEetgcIvynLvYYa04/preview"
			width="170%"
			height="600px"
		></iframe>
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
