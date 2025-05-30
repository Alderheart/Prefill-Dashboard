import type { Form, PrefillMapping } from "../types";
import { getAllDataSources } from "../utils/graphTraversal";
import styles from './PrefillModal.module.css';

interface PrefillModalProps {
  isOpen: boolean;
  fieldName: string;
  currentFormId: string;
  allForms: Form[];
  onClose: () => void;
  onSelect: (mapping: PrefillMapping) => void;
}

export const PrefillModal = ({ 
  isOpen, 
  fieldName, 
  currentFormId, 
  allForms, 
  onClose, 
  onSelect 
}: PrefillModalProps) => {
  if (!isOpen) return null;

  // Use the graph traversal function to find available data sources
  const availableDataSources = getAllDataSources(currentFormId, allForms);
  
  // Get all fields from the source forms
  const sourceOptions = availableDataSources.flatMap(formId => {
    const form = allForms.find(f => f.id === formId);
    return form?.fields.map(field => ({
      formId,
      formName: form.name,
      fieldId: field.id,
      fieldName: field.name
    })) || [];
  });

  const handleOptionClick = (option: typeof sourceOptions[0]) => {
    onSelect({
      sourceType: 'form_field',
      sourceFormId: option.formId,
      sourceFieldId: option.fieldId
    });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h3>Select Data Source for "{fieldName}"</h3>
        <button onClick={onClose}>X</button>
        
        <div>
          <h4>Available Form Fields:</h4>
          {sourceOptions.length === 0 ? (
            <p>No available data sources found.</p>
          ) : (
            sourceOptions.map(option => (
              <div 
                key={`${option.formId}-${option.fieldId}`}
                className={styles.option}
                onClick={() => handleOptionClick(option)}
              >
                {option.formName} → {option.fieldName}
              </div>
            ))
          )}
        </div>
        
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};