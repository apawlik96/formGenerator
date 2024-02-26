import { Translations } from "./translations-interface";

export const translationsEn: Translations = {
    error: {
        characters: '8 characters',
        uppercase: '1 uppercase letter',
        lowercase: '1 lowercase litera',
        digit: '1 digit',
        character: '1 special character'
    },
    empty: {
        textContent: 'Fields with * are required',
    },
    titleOneStep: {
        textContent: 'Contact form',
    },
    titleMultiStep: {
        step1: 'Personal Details',
        step2: 'Contact Information',
        step3: 'Account Setup'
    },
    popup: {
        textContent: 'Form submitted successfully!',
    },
    fields: {
        usernamePlaceholder: 'Username*',
        firstNamePlaceholder: 'First Name',
        lastNamePlaceholder: 'Last Name',
        emailError: 'Invalid email address.',
        phonePlaceholder: 'Phone*', 
        diallingCode: 'Dialling Code', 
        phonError: 'Invalid phone number..',
        passwordPlaceholder: 'Password*', 
        passwordError: 'Password is not strong enough. Missing at least: ',
        confirmPasswordPlaceholder: 'Confirm Password*', 
        confirmPasswordError: 'Passwords do not match.'
    },
    selects: {
        forFemale: 'Female',
        forMale: 'Male',
    },
    password: { 
        textContent: 'Show password'
    },
    buttons: {
        valueSubmit: 'Submit',
        valuePrevious: 'Previous',
        valueNext: 'Next',
        valueClose: 'Close'
    }
};
