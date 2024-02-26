import { Translations } from "./translations-interface";

export const translationsPl: Translations = {
    error: {
        characters: '8 znaków',
        uppercase: 'dużej litery',
        lowercase: 'małej litery',
        digit: 'cyfry',
        character: 'znaku specjalnego'
    },
    empty: {
        textContent: 'Pola z * są wymagane',
    },
    titleOneStep: {
        textContent: 'Formularz kontaktowy',
    },
    titleMultiStep: {
        step1: 'Dane osobowe',
        step2: 'Dane kontaktowe',
        step3: 'Hasło i potwierdzenie'
    },
    popup: {
        textContent: 'Formularz przesłany pomyślnie!',
    },
    fields: {
        usernamePlaceholder: 'Nazwa użytkownika*',
        firstNamePlaceholder: 'Imię',
        lastNamePlaceholder: 'Nazwisko',
        emailError: 'Nieprawidłowy adres e-mail.',
        phonePlaceholder: 'Numer telefonu*', 
        diallingCode: 'Numer kierunkowy', 
        phonError: 'Nieprawidłowy numer telefonu.',
        passwordPlaceholder: 'Hasło*', 
        passwordError: 'Hasło nie jest wystarczająco silne. Brakuje: ',
        confirmPasswordPlaceholder: 'Powtórz hasło*', 
        confirmPasswordError: 'Hasła nie są takie same.'
    },
    selects: {
        forFemale: 'Kobieta',
        forMale: 'Mężczyzna',
    },
    password: { 
        textContent: 'Pokaż hasło'
    },
    buttons: {
        valueSubmit: 'Zatwierdź',
        valuePrevious: 'Wstecz',
        valueNext: 'Dalej',
        valueClose: 'Zamknij'
    }
};
