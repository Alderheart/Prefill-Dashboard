import type { Form } from "../types";

export const mockForms: Form[] = [
  	{
		id: "cat",
		name: "Cat", 
		dependsOn: [],
		fields: [
			{
				id: "cat_name",
				name: "Cat Name",
				type: "text",
			},
			{
				id: "cat_level",
				name: "Cat Level",
				type: "number",
			},
			{
				id: "cat_experience",
				name: "Cat Experience",
				type: "number",
			}
    	]
 	 },
  	{
		id: "item",
		name: "Item", 
		dependsOn: [],
		fields: [
			{
				id: "item_name",
				name: "Item Name",
				type: "text",
			},
			{
				id: "item_quantity",
				name: "Item Quantity",
				type: "number",
			}
		]
	},
	{
		id: "cat_advancement",
		name: "Cat Advancement", 
		dependsOn: [
			"cat"
		],
		fields: [
			{
				id: "cat_level",
				name: "Cat Level",
				type: "number",
				prefillMapping: {
					sourceType: "form_field",
					sourceFormId: "cat",
					sourceFieldId: "cat_level"
				}
			},
			{
				id: "cat_experience",
				name: "Cat Experience",
				type: "number",
				prefillMapping: {
					sourceType: "form_field",
					sourceFormId: "cat",
					sourceFieldId: "cat_experience"
				}
			}
		]
	},
]