import { mockForms } from "../data/mockData";

export const FormList = () => {

	const forms = mockForms.map(form => 
		<li key={form.id}>
			<p>{form.name} (ID: {form.id})</p>
			<p>Fields: {form.fields.length}</p>
			<p>Depends on: {form.dependsOn.length > 0 ? form.dependsOn.join(', ') : '(none)'}</p>
		</li>
	);
	
	return (
		<div>
			<h2>Forms</h2>
			<ul>{forms}</ul>
		</div>
	);
};