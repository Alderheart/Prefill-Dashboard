import { useState } from "react";
import type { Field, Form, PrefillMapping } from "../types";
import { PrefillModal } from "./PrefillModal";

interface FormDetailsProps {
	fields: Field[],
	allForms: Form[],
	currentFormId: string,
	onFieldMappingChange: (fieldId: string, newMapping: PrefillMapping | null) => void
}

export const FormDetails = ({ fields, allForms, currentFormId, onFieldMappingChange }: FormDetailsProps) => {
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedFieldId, setSelectedFieldId] = useState<string | null>(null);

	const handleFieldClick = (fieldId: string) => {
		const field = fields.find(f => f.id === fieldId);
		// Only open modal if field doesn't have a mapping yet
		if (!field?.prefillMapping) {
			setSelectedFieldId(fieldId);
			setModalOpen(true);
		}
	};

	const handleModalSelect = (mapping: PrefillMapping) => {
		if (selectedFieldId) {
			onFieldMappingChange(selectedFieldId, mapping);
		}
		setModalOpen(false);
		setSelectedFieldId(null);
	};

	const handleModalClose = () => {
		setModalOpen(false);
		setSelectedFieldId(null);
	};

	const onClickX = (fieldId: string) => {
		onFieldMappingChange(fieldId, null);
	};

	const selectedField = selectedFieldId ? fields.find(f => f.id === selectedFieldId) : null;

	return (
		<div>
			<h3>Field Configuration</h3>
			{fields.map(field => (
				<div key={field.id} style={{ margin: '10px 0', padding: '5px', border: '1px solid #ccc' }}>
					<div onClick={() => handleFieldClick(field.id)} style={{ cursor: 'pointer' }}>
						{field.prefillMapping 
							? `${field.name}: ${field.prefillMapping.sourceFormId}.${field.prefillMapping.sourceFieldId}`
							: `${field.name} (click to set mapping)`
						}
						{field.prefillMapping && (
							<button onClick={(e) => { e.stopPropagation(); onClickX(field.id); }}>
								X
							</button>
						)}
					</div>
				</div>
			))}
			
			<PrefillModal
				isOpen={modalOpen}
				fieldName={selectedField?.name || ''}
				currentFormId={currentFormId}
				allForms={allForms}
				onClose={handleModalClose}
				onSelect={handleModalSelect}
			/>
		</div>
	);
};