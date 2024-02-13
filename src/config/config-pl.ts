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
    fields: [{
        class: 'fields',
        name: 'Username',
        type: 'text',
        placeholder: 'Nazwa użytkownika*',
    },
    {
        class: 'fields',
        name: 'First Name',
        type: 'text',
        placeholder: 'Imię'
    },
    {
        class: 'fields',
        name: 'Last Name',
        type: 'text',
        placeholder: 'Nazwisko'
    },
    {
        class: 'fields',
        name: 'Email',
        type: 'email',
        placeholder: 'Email*',
        error: 'Nieprawidłowy adres e-mail.'
    },
    {
        class: 'fields',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Numer telefonu*',
        error: 'Nieprawidłowy numer telefonu.'
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: 'Hasło*',
        error: 'Hasło nie jest wystarczająco silne. Brakuje: '
    },
    {
        class: 'fields',
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Powtórz hasło',
        error: 'Hasła nie są takie same.'
    },
    ],
    selects: [{
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Kobieta'
    },
    {
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Mężczyzna'
    }
    ],
    buttons: [{
        class: 'buttons',
        name: 'submit',
        type: 'submit',
        value: 'Zatwierdź'
    },
    {
        class: 'buttons-multi',
        name: 'previous',
        type: 'previous',
        value: 'Wstecz'
    },
    {
        class: 'buttons-multi',
        name: 'next',
        type: 'next',
        value: 'Dalej'
    }
    ]
};

export const formPagesPl: FormPageConfig[] = [
    { step: 'Etap 1', title: 'Dane osobowe', fields: ['Username', 'First Name', 'Last Name'] },
    { step: 'Etap 2', title: 'Dane kontaktowe', fields: ['Email', 'Phone'] },
    { step: 'Etap 3', title: 'Hasło i potwierdzenie', fields: ['Password', 'Confirm Password'] },
];
