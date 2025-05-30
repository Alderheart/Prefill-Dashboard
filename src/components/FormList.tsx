import type { Form } from "../types";

interface FormListProps {
	allForms: Form[]
	onFormSelect: (formId: string) => void
}

export const FormList = ({ allForms, onFormSelect }: FormListProps) => {

	const forms = allForms.map(form => 
		<li key={form.id} onClick={() => onFormSelect(form.id)} style={{ cursor: 'pointer', padding: '5px', border: '1px solid #ccc', margin: '5px 0' }}>
			{form.name}
		</li>
	);
	
	return (
		<div>
			<h2>Forms</h2>
			<ul>{forms}</ul>
		</div>
	);
};