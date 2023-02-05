<script lang="ts">
	export let crumbs: string[];
	export let onClick: (path: string[]) => void;
</script>

<div class="breadcrumbs">
	{#each crumbs as crumb, i}
		<div
			class="crumb"
			on:click={() => {
				onClick(crumbs.slice(0, i + 1));
			}}
		>
			{crumb}
		</div>
	{/each}
</div>

<style>
	.breadcrumbs {
		display: flex;
		flex-direction: row;
		justify-content: left;
	}

	.crumb {
		margin-right: 10px;
		cursor: pointer;
	}

	.crumb::before {
		content: '> ';
	}

	.crumb:has(~ .crumb:hover),
	.crumb:hover ~ .crumb {
		opacity: 0.5;
	}
</style>
