import { useState } from 'react';
import './App.css'
import { FormDetails } from './components/FormDetails'
import { mockForms } from './data/mockData'
import type { Form, PrefillMapping } from './types'
import { FormList } from './components/FormList';
import { produce } from 'immer';

function App() {
	const [allForms, setAllForms] = useState(mockForms);
	const [selectedForm, setSelectedForm] = useState<Form | null>(null);

	const findForm = (id: string) => allForms.find(form => form.id === id) ?? null;

	const handleFormSelect = (formId: string) => {
		setSelectedForm(findForm(formId));
	};
	
	const handleFieldMappingChange = (fieldId: string, newMapping: PrefillMapping | null) => {
		
		
		
	};

	return (
		<>
			<FormList allForms={allForms} onFormSelect={handleFormSelect} />
			{selectedForm && <FormDetails fields={selectedForm.fields} allForms={allForms} onFieldMappingChange={handleFieldMappingChange}/>}
		</>
	)
}

export default App