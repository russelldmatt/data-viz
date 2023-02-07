export class TreeNode {
	name: string;
	value: number;
	children: TreeNode[];

	constructor(name: string, value: number, children: TreeNode[] = []) {
		this.name = name;
		this.value = value;
		this.children = children;
	}

	findNode(path: string[]): TreeNode | undefined {
		if (path.length === 0) {
			return this;
		} else {
			for (const child of this.children) {
				if (child.name === path[0]) {
					return child.findNode(path.slice(1));
				}
			}
			return undefined;
		}
	}
}
