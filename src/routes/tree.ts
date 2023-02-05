export class TreeNode {
	value: number;
	name?: string;
	children: TreeNode[];

	constructor(name: string | undefined = undefined, value: number, children: TreeNode[] = []) {
		this.name = name;
		this.value = value;
		this.children = children;
	}

	countLeafNodes(): number {
		let count = 0;
		if (this.children.length === 0) {
			count = 1;
		} else {
			for (const child of this.children) {
				count += child.countLeafNodes();
			}
		}
		return count;
	}

	toHtmlList(): string {
		let html = `<li>${this.name || this.value}`;
		if (this.children.length > 0) {
			html += '<ul>';
			for (const child of this.children) {
				html += child.toHtmlList();
			}
			html += '</ul>';
		}
		html += '</li>';
		return html;
	}
}
