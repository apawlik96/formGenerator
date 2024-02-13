import { FormConfig } from "./config-interface";
import { FormPageConfig } from "./config-interface";

export const formConfigEn: FormConfig  = {
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
        placeholder: 'Enter Username*'
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
        placeholder: 'Enter Email*',
        error: 'Invalid email address.'
    },
    {
        class: 'fields',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Enter Phone*',
        error: 'Invalid phone number.'
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: 'Enter Password*',
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

export const formPagesEn: FormPageConfig[] = [
    { step: 'Step 1', title: 'Personal Details', fields: ['Username', 'First Name', 'Last Name'] },
    { step: 'Step 2', title: 'Contact Information', fields: ['Email', 'Phone'] },
    { step: 'Step 3', title: 'Account Setup', fields: ['Password', 'Confirm Password'] },
];
