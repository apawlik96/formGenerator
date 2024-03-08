interface ErrorConfig {
    class: string;
    characters: string;
    uppercase: string;
    lowercase: string;
    digit: string;
    character: string;
}

interface EmptyConfig {
    class: string;
    textContent: string;
}

interface TitleOneStepConfig {
    class: string;
    textContent: string;
}

interface PopupConfig {
    class: string;
    textContent: string;
}

interface FieldConfig {
    class: string;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
    diallingCode?: string;
}

interface SelectConfig {
    class: string;
    type: string;
    name: string;
    for: string;
}

interface PasswordConfig {
    class: string;
    type: string;
    textContent: string;
    for: string;
}

interface ButtonConfig {
    class: string;
    name: string;
    type: string;
    value: string;
}

export interface FormConfig {
    error: ErrorConfig;
    fields: FieldConfig[];
    selects: SelectConfig[];
    buttons: ButtonConfig[];
    empty: EmptyConfig;
    titleOneStep: TitleOneStepConfig;
    popup: PopupConfig;
    password: PasswordConfig;
}

export interface FormPageConfig {
    title: string;
    fields: string[];
}
