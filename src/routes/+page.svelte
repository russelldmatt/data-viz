<script lang="ts">
	import { TreeNode } from './tree';
	import TreeUL from './treeUL.svelte';
	import TreeDrilldown from './treeDrilldown.svelte';
	import BreadCrumbs from './BreadCrumbs.svelte';

	let root = new TreeNode('all', 10, [
		new TreeNode('a', 3, []),
		new TreeNode('b', 5, [new TreeNode('ba', 4, []), new TreeNode('bb', 1, [])]),
		new TreeNode('c', 2, [
			new TreeNode('ca', 1.5, [new TreeNode('caa', 0.5, []), new TreeNode('cab', 1, [])]),
			new TreeNode('cb', 0.25, [new TreeNode('cba', 0.25, [])]),
			new TreeNode('cc', 0.25, [])
		])
	]);

	let tree = root;
	let currentPath = [root.name];
</script>

<button
	on:click={() => {
		tree = root;
		currentPath = [root.name];
	}}>reset</button
>

<BreadCrumbs
	crumbs={currentPath}
	onClick={(path) => {
		let p = path.slice(1);
		let node = root.findNode(p);
		if (node) {
			tree = node;
			currentPath = path;
		}
	}}
/>

<div style="width: 700px;">
	<TreeDrilldown
		{tree}
		onClick={(node, path) => {
			tree = node;
			let allButLast = currentPath.slice(0, currentPath.length - 1);
			currentPath = allButLast.concat(path);
		}}
	/>
</div>

<!-- <ul>
	<TreeUL {tree} />
</ul> -->

<pre>{JSON.stringify(tree, null, 4)}</pre>
