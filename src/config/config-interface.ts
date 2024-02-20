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
    className: string;
    textContent: string;
}

interface TitleConfig {
    class: string;
    className: string;
    textContent: string;
}

interface PopupConfig {
    class: string;
    classNameContainer: string;
    classNameParagraph: string;
    textContent: string;
}

interface FieldConfig {
    class: string;
    className: string;
    name: string;
    type: string;
    placeholder: string;
    error?: string;
    diallingCode?: string;
}

interface SelectConfig {
    class: string;
    className: string;
    classNameLabel: string;
    type: string;
    name: string;
    for: string;
}

interface PasswordConfig {
    class: string;
    className: string;
    type: string;
    textContent: string;
    for: string;
}

interface ButtonConfig {
    class: string;
    className: string;
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
    empty: EmptyConfig[];
    title: TitleConfig[];
    popup: PopupConfig[];
    password: PasswordConfig[];
}

export interface FormPageConfig {
    title: string;
    fields: string[];
    element?: HTMLFormElement;
}
