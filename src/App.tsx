import { useEffect, useState } from 'react';
import './App.css'
import { FormDetails } from './components/FormDetails'
import { mockForms } from './data/mockData'
import type { Form, PrefillMapping } from './types'
import { FormList } from './components/FormList';
import { produce } from 'immer';

function App() {
	const [allForms, setAllForms] = useState(mockForms);
	const [selectedForm, setSelectedForm] = useState<Form | null>(null);

	useEffect(() => {
		if (selectedForm) {
			const updatedForm = findForm(selectedForm.id);
			if (updatedForm)
				setSelectedForm(updatedForm)
		}
	}, [allForms, selectedForm?.id])

	// Finds form from ID
	const findForm = (id: string) => allForms.find(form => form.id === id) ?? null;

	// Callback for selecting source
	const handleFormSelect = (formId: string) => {
		setSelectedForm(findForm(formId));
	};
	
	// Callback for field edits
	const handleFieldMappingChange = (fieldId: string, newMapping: PrefillMapping | null) => {
		setAllForms(produce(draft => {
			const form = draft.find(form => form.fields.some(field => field.id === fieldId));
			if (form) {
				const field = form.fields.find(field => field.id === fieldId)
				if (field) {
					if (newMapping === null) {
						delete field.prefillMapping;
						console.log("DELETED");
					}
					else {
						field.prefillMapping = newMapping;
						console.log("ADDED MAPPING");
					}
				}
			}
		}));
	};

	return (
		<>
			<FormList allForms={allForms} onFormSelect={handleFormSelect} />
			{selectedForm && (
				<FormDetails 
					fields={selectedForm.fields} 
					allForms={allForms} 
					currentFormId={selectedForm.id}
					onFieldMappingChange={handleFieldMappingChange}
				/>
			)}
		</>
	)
}

export default App