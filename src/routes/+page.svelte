<script lang="ts">
	import { TreeNode } from './tree';
	import TreeUL from './treeUL.svelte';

	let tree = new TreeNode('all', 10, [
		new TreeNode('a', 3, []),
		new TreeNode('b', 5, []),
		new TreeNode('c', 2, [])
	]);
</script>

<pre>{JSON.stringify(tree, null, 4)}</pre>

<ul>
	<TreeUL {tree} />
</ul>
