interface ErrorConfig {
    class: string;
    characters: string;
    uppercase: string;
    lowercase: string;
    digit: string;
    character: string;
}

interface FieldConfig {
    class: string;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
}

interface SelectConfig {
    class: string;
    type: string;
    name: string;
    for: string;
}

interface ButtonConfig {
    class: string;
    name: string;
    type: string;
    value: string;
}

export interface FormConfig {
    language: string;
    error: ErrorConfig[];
    fields: FieldConfig[];
    selects: SelectConfig[];
    buttons: ButtonConfig[];
}

export interface FormPageConfig {
    step: string;
    title: string;
    fields: string[];
    element?: HTMLFormElement;
}
