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
		console.log("Clearing field:", fieldId);
		onFieldMappingChange(fieldId, null);
	};

	const onClickField = (fieldId: string) => {
		console.log("Opening modal for field:", fieldId);
		setEditedFieldId(fieldId);
		setIsModalOpen(true);
	};

	return (
		<div>
			<h3>Field Configuration</h3>
			{fields.map(field => 
				<div key={field.id} onClick={(e) => onClickField(field.id)}>
					{field.prefillMapping ? field.name + ': ' + (field.prefillMapping.sourceFormId || 'Global') + '.' + field.prefillMapping.sourceFieldId : field.name}
					{field.prefillMapping &&
						<button onClick={(e) => {
							e.stopPropagation();
							onClickX(field.id)
						}}>
							X
						</button>
					}
				</div>
			)}
		</div>
	);
};