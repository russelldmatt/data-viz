<script lang="ts">
	import type { TreeNode } from './tree';

	export let tree: TreeNode;
	export let root: Boolean;
	export let onClick: (tree: TreeNode, path: string[]) => void;

	$: hasChildren = tree.children.length > 0;
</script>

{#if !root}
	<div
		class="el"
		class:clickable={hasChildren}
		on:click={() => {
			if (hasChildren) onClick(tree, [tree.name]);
		}}
	>
		{tree.name}
	</div>
{/if}

{#if hasChildren}
	<div class="children">
		{#each tree.children as child}
			{@const width = (100 * child.value) / tree.value}
			<div style={`width: ${width}%`}>
				<svelte:self
					tree={child}
					root={false}
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
		user-select: none;
	}
	.children {
		display: flex;
		flex-direction: row;
		gap: 1px;
	}
	.clickable {
		cursor: pointer;
	}

	/* */
	.el {
		height: 50px;
		align-items: center;
		border-radius: 2px;
	}
</style>
