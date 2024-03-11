import { translationsEn } from "./config-en";
import { translationsPl } from "./config-pl";
import { FormConfig, FormPageConfig } from "./config-interface";

const selectedLanguage = translationsEn;

export const propertiesConfig: FormConfig  = {
    error: {
        class: 'error-phone',
        characters: selectedLanguage.error.characters,
        uppercase: selectedLanguage.error.uppercase,
        lowercase: selectedLanguage.error.lowercase,
        digit: selectedLanguage.error.digit,
        character: selectedLanguage.error.character
    },
    empty: {
        class: 'empty',
        textContent: selectedLanguage.empty.textContent
    },
    titleOneStep: {
        class: 'title',
        textContent: selectedLanguage.titleOneStep.textContent
    },
    popup: {
        class: 'popup',
        textContent: selectedLanguage.popup.textContent
    },
    fields: [{
        class: 'fields',
        name: 'Username',
        type: 'text',
        placeholder: selectedLanguage.fields.usernamePlaceholder
    },
    {
        class: 'fields',
        name: 'First Name',
        type: 'text',
        placeholder: selectedLanguage.fields.firstNamePlaceholder
    },
    {
        class: 'fields',
        name: 'Last Name',
        type: 'text',
        placeholder: selectedLanguage.fields.lastNamePlaceholder
    },
    {
        class: 'fields',
        name: 'Email',
        type: 'email',
        placeholder: 'Email*',
        error: selectedLanguage.fields.emailError
    },
    {
        class: 'fields',
        name: 'Phone',
        diallingCode: selectedLanguage.fields.diallingCode,
        type: 'tel',
        placeholder: selectedLanguage.fields.phonePlaceholder,
        error: selectedLanguage.fields.phonError
    },
    {
        class: 'fields',
        name: 'Password',
        type: 'password',
        placeholder: selectedLanguage.fields.passwordPlaceholder,
        error: selectedLanguage.fields.passwordError
    },
    {
        class: 'fields',
        name: 'Confirm Password',
        type: 'password',
        placeholder: selectedLanguage.fields.confirmPasswordPlaceholder,
        error: selectedLanguage.fields.confirmPasswordError
    }],
    selects: [{
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: selectedLanguage.selects.forFemale
    },
    {
        class: 'selects',
        type: 'radio',
        name: 'gender',
        for: selectedLanguage.selects.forMale
    }],
    password: {
        class: 'showPass',
        type: 'checkbox',
        textContent: selectedLanguage.password.textContent,
        for: 'showPasswordCheckbox'
    },
    buttons: [{
        class: 'buttons',
        name: 'submit',
        type: 'submit',
        value: selectedLanguage.buttons.valueSubmit
    },
    {
        class: 'buttons',
        name: 'previous',
        type: 'previous',
        value: selectedLanguage.buttons.valuePrevious
    },
    {
        class: 'buttons',
        name: 'next',
        type: 'next',
        value: selectedLanguage.buttons.valueNext
    },
    {
        class: 'buttons',
        name: 'close',
        type: 'close',
        value: selectedLanguage.buttons.valueClose
    }]
};

export const config = propertiesConfig;

export const formPages: FormPageConfig[] = [
    { title: selectedLanguage.titleMultiStep.step1, fields: ['Username', 'First Name', 'Last Name'] },
    { title: selectedLanguage.titleMultiStep.step2, fields: ['Email', 'Phone'] },
    { title: selectedLanguage.titleMultiStep.step3, fields: ['Password', 'Confirm Password'] },
];
