export const formConfigEn = {
    language: "en",
    error: [{
        class: 'error-phone',
        characters: '8 characters',
        uppercase: '1 uppercase letter',
        lowercase: '1 lowercase litera',
        digit: '1 digit',
        character: '1 special character'
    }],
    fields: [{
        class: 'fields',
        name: 'Username',
        type: 'text',
        placeholder: 'Enter Username'
    },
    {
        class: 'fields',
        name: 'First Name',
        type: 'text',
        placeholder: 'Enter First Name'
    },
    {
        class: 'fields',
        name: 'Last Name',
        type: 'text',
        placeholder: 'Enter Last Name'
    },
    {
        class: 'fields',
        name: 'Email',
        type: 'email',
        placeholder: 'Enter Email',
        error: 'Invalid email address.'
    },
    {
        class: 'fields',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Enter Phone',
        error: 'Invalid phone number.'
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: 'Enter Password',
        error: 'Passwords do not match.'
    },
    {
        class: 'fields',
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password',
        error: 'Password is not strong enough. Missing at least '
    },
    ],
    selects: [{
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Female'
    },
    {
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: 'Male'
    }
    ],
    buttons: [{
        class: 'buttons',
        name: 'submit',
        type: 'submit',
        value: 'Submit'
    },
    {
        class: 'buttons-multi',
        name: 'previous',
        type: 'previous',
        value: 'Previous'
    },
    {
        class: 'buttons-multi',
        name: 'next',
        type: 'next',
        value: 'Next'
    }
    ]
};

export const formConfigPl = {
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
        placeholder: 'Nazwa użytkownika',
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
        placeholder: 'Email',
        error: 'Nieprawidłowy adres e-mail.'
    },
    {
        class: 'fields',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Numer telefonu',
        error: 'Nieprawidłowy numer telefonu.'
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: 'Hasło',
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

export const formPagesEn: { step: string; title: string; fields: string[]; element?: HTMLFormElement }[] = [
    { step: 'Step 1', title: 'Personal Details', fields: ['Username', 'First Name', 'Last Name'] },
    { step: 'Step 2', title: 'Contact Information', fields: ['Email', 'Phone'] },
    { step: 'Step 3', title: 'Account Setup', fields: ['Password', 'Confirm Password'] },
];

export const formPagesPl: { step: string; title: string; fields: string[]; element?: HTMLFormElement }[] = [
    { step: 'Etap 1', title: 'Dane osobowe', fields: ['Username', 'First Name', 'Last Name'] },
    { step: 'Etap 2', title: 'Dane kontaktowe', fields: ['Email', 'Phone'] },
    { step: 'Etap 3', title: 'Hasło i potwierdzenie', fields: ['Password', 'Confirm Password'] },
];
