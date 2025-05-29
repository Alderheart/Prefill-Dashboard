import { useState } from "react";
import type { Field, Form, PrefillMapping } from "../types";

interface FormDetailsProps {
	fields: Field[],
	allForms: Form[],
	onFieldMappingChange: (fieldId: string, newMapping: PrefillMapping | null) => void
}

export const FormDetails = ({ fields, allForms, onFieldMappingChange }: FormDetailsProps) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editedFieldId, setEditedFieldId] = useState<string | null>(null);

	const onClickX = (fieldId: string) => {
		onFieldMappingChange(fieldId, null);
	};

	return (
		<div>
			<h3>Field Configuration</h3>
			{fields.map(field => 
				<div key={field.id}>
					{field.prefillMapping ? field.name + ': ' + (field.prefillMapping.sourceFormId || 'Global') + '.' + field.prefillMapping.sourceFieldId : field.name}
					{field.prefillMapping &&
						<button onClick={() => onClickX(field.id)}>
							X
						</button>
					}
				
				</div>
			)}
			
		</div>
	);
};