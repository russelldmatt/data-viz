<script lang="ts">
	import type { TreeNode } from './tree';

	export let tree: TreeNode;
	console.log({ tree });
</script>

<li>{tree.name || '??'} {tree.value}</li>
{#if tree.children.length > 0}
	<ul>
		{#each tree.children as child}
			<svelte:self tree={child} />
		{/each}
	</ul>
{/if}
