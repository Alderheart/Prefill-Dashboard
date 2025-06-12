export interface Form {
	id: string,
	name: string,
	dependsOn: string[],			// Parents and Grandparents
	fields: Field[],				// Fields of the form
}

export interface Field {
	id: string,						
	name: string,
	type: string,					// Data type of the field
	prefillMapping?: PrefillMapping	// Prefill mapping of the field
}

export interface PrefillMapping {
	sourceType: 'form_field' | 'global_data',
	sourceFormId?: string,
	sourceFieldId?: string,
	globalDataKey?: string
}