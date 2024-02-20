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
    empty: [{
        class: 'empty',
        className: 'required',
        textContent: 'Fields with * are required',
    }],
    title: [{
        class: 'title',
        className: 'text',
        textContent: 'Contact form',
    }],
    popup: [{
        class: 'popup',
        classNameContainer: 'popup-container',
        classNameParagraph: 'success-message-paragraph',
        textContent: 'Form submitted successfully!',
    }],
    fields: [{
        class: 'fields',
        className: 'input-data',
        name: 'Username',
        type: 'text',
        placeholder: 'Username*',
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'First Name',
        type: 'text',
        placeholder: 'First Name'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Last Name',
        type: 'text',
        placeholder: 'Last Name'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Email',
        type: 'email',
        placeholder: 'Email*',
        error: 'Invalid email address.'
    },
    {
        class: 'fields',
        className: 'input-data',
        diallingCode: 'Dialling Code',
        name: 'Phone',
        type: 'tel',
        placeholder: 'Phone*',
        error: 'Invalid phone number.'
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Password',
        type: 'password',
        placeholder: 'Password*',
        error: 'Password is not strong enough. Missing at least: '
    },
    {
        class: 'fields',
        className: 'input-data',
        name: 'Confirm Password',
        type: 'password',
        placeholder: 'Confirm Password*',
        error: 'Passwords do not match.'
    }],
    selects: [{
        class: 'selects',
        className: 'input-data-gender',
        classNameLabel: 'gender-label',
        type: 'radio',
        name: 'gender',
        for: 'Female'
    },
    {
        class: 'selects',
        className: 'input-data-gender',
        classNameLabel: 'gender-label',
        type: 'radio',
        name: 'gender',
        for: 'Male'
    }],
    password: [{
        class: 'showPass',
        className: 'showPass',
        type: 'checkbox',
        textContent: 'Show password',
        for: 'showPasswordCheckbox'
    }],
    buttons: [{
        class: 'buttons',
        className: 'button-container',
        name: 'submit',
        type: 'submit',
        value: 'Submit'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'previous',
        type: 'previous',
        value: 'Previous'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'next',
        type: 'next',
        value: 'Next'
    },
    {
        class: 'buttons',
        className: 'button-container',
        name: 'close',
        type: 'close',
        value: 'Close'
    }]
};

export const formPagesEn: FormPageConfig[] = [
    { title: 'Personal Details', fields: ['Username', 'First Name', 'Last Name'] },
    { title: 'Contact Information', fields: ['Email', 'Phone'] },
    { title: 'Account Setup', fields: ['Password', 'Confirm Password'] },
];
