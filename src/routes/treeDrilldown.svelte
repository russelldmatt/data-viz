<script lang="ts">
	import type { TreeNode } from './tree';

	export let tree: TreeNode;
	export let onClick: (tree: TreeNode, path: string[]) => void;
</script>

<div class="el" on:click={() => onClick(tree, [tree.name])}>{tree.name}</div>

{#if tree.children.length > 0}
	<div class="children">
		{#each tree.children as child}
			{@const width = (100 * child.value) / tree.value}
			<div style={`width: ${width}%`}>
				<svelte:self
					tree={child}
					onClick={(node, path) => {
						console.log('name', tree.name);
						let newPath = [tree.name, ...path];
						console.log('new path:', newPath);
						onClick(node, newPath);
					}}
				/>
			</div>
		{/each}
	</div>
{/if}

<style>
	.el {
		margin-bottom: 1px;
		border: 1px solid black;
		display: flex;
		justify-content: center;
		cursor: pointer;
	}
	.children {
		display: flex;
		flex-direction: row;
		gap: 1px;
	}
</style>
