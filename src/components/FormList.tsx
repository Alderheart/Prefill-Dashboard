import type { Form } from "../types";

interface FormListProps {
	allForms: Form[]
	onFormSelect: (formId: string) => void
}

export const FormList = ({ allForms, onFormSelect }: FormListProps) => {

	const forms = allForms.map(form => 
		<li key={form.id} onClick={() => onFormSelect(form.id)}>
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