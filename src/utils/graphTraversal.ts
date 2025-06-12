import type { Form } from "../types";

// Iterates backwards through parents
export function buildChildrenMap(forms: Form[]): Map<string, string[]> {
	let childrenMap = new Map<string, string[]>;

	forms.forEach((form) => {
		form.dependsOn.forEach((parent) => {
			let children = childrenMap.get(parent) ?? [];
			children.push(form.id);
			childrenMap.set(parent, children);
		});
	});

	return childrenMap;
}

// Uses DFS to find all valid sources
export function getAllDataSources(targetFormId: string, forms: Form[]): string[] {
	const visited: string[] = [];
	const dataSources: string[] = [];
	const stack: string[] = [];

	const findForm = (id: string) => forms.find(form => form.id === id);

	stack.push(targetFormId);

	while (stack.length > 0) {
		const currentFormId = stack.pop()!
		const currentForm = findForm(currentFormId);

		if (!visited.includes(currentFormId)) {
			visited.push(currentFormId);
			dataSources.push(currentFormId);
			
			currentForm?.dependsOn.forEach((parent) => {
				stack.push(parent);
			});
		}
	}

	return dataSources.filter(id => id !== targetFormId);
}