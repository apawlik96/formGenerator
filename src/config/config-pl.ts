import { FormConfig } from "./config-interface";
import { FormPageConfig } from "./config-interface";

export const formConfigPl: FormConfig  = {
    language: "pl",
    error: [{
        class: 'error-phone',
        characters: '8 znaków',
        uppercase: 'dużej litery',
        lowercase: 'małej litery',
        digit: 'cyfry',
        character: 'znaku specjalnego'
    }],
    empty: [{
        class: 'empty',
        className: 'required',
        textContent: 'Pola z * wymagane',
    }],
    title: [{
        class: 'title',
        className: 'text',
        textContent: 'Formularz kontaktowy',
    }],
    popup: [{
        class: 'popup',
        classNameContainer: 'popup-container',
        classNameParagraph: 'success-message-paragraph',
        textContent: 'Formularz przesłany pomyślnie!',
    }],
    fields: [{
        class: 'fields',
        className: 'input-data',
        name: 'Username',
        type: 'text',
        placeholder: 'Nazwa użytkownika*',
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'First Name',
        type: 'text',
        placeholder: 'Imię'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Last Name',
        type: 'text',
        placeholder: 'Nazwisko'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Email',
        type: 'email',
        placeholder: 'Email*',
        error: 'Nieprawidłowy adres e-mail.'
    },
    {
        class: 'fields',
        className: 'input-data',
        diallingCode: 'Numer kierunkowy',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Numer telefonu*',
        error: 'Nieprawidłowy numer telefonu.'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Password',
        type: 'password',
        placeholder: 'Hasło*',
        error: 'Hasło nie jest wystarczająco silne. Brakuje: '
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Powtórz hasło*',
        error: 'Hasła nie są takie same.'
    }],
    selects: [{
        class: 'selects',
        className: 'input-data-gender',
        classNameLabel: 'gender-label',
        type: 'radio',
        name: 'gender',
        for: 'Kobieta'
    },
    {
        class: 'selects',
        className: 'input-data-gender',
        classNameLabel: 'gender-label',
        type: 'radio',
        name: 'gender',
        for: 'Mężczyzna'
    }],
    password: [{
        class: 'showPass',
        className: 'showPass',
        type: 'checkbox',
        textContent: 'Pokaż hasło',
        for: 'showPasswordCheckbox'
    }],
    buttons: [{
        class: 'buttons',
        className: 'button-container',
        name: 'submit',
        type: 'submit',
        value: 'Zatwierdź'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'previous',
        type: 'previous',
        value: 'Wstecz'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'next',
        type: 'next',
        value: 'Dalej'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'close',
        type: 'close',
        value: 'Zamknij'
    }]
};


export const formPagesPl: FormPageConfig[] = [
    { title: 'Dane osobowe', fields: ['Username', 'First Name', 'Last Name'] },
    { title: 'Dane kontaktowe', fields: ['Email', 'Phone'] },
    { title: 'Hasło i potwierdzenie', fields: ['Password', 'Confirm Password'] },
];
