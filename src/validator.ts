export class FormValidator {

    private form: HTMLFormElement;

    constructor() {
        this.form = document.querySelector('form') as HTMLFormElement;
    }

    validation(): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const email = (form.querySelector('[name="Email"]') as HTMLInputElement).value;
        const password = (form.querySelector('[name="Password"]') as HTMLInputElement).value;
        const confirmPassword = (form.querySelector('[name="Confirm Password"]') as HTMLInputElement).value;

        const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.isStrongPassword(password);
        this.validationRules(confirmPassword !== password, "Passwords do not match", '[name="Confirm Password"]', '.error-pass');
        this.validationRules(!emailRegex.test(email), "Email is not valid", '[name="Email"]', '.error-email');
        this.validationNumber();
    }

    isStrongPassword(password: string) {
        const requirements = [
            { regex: /.{8,}/, message: 'at least 8 characters' },
            { regex: /[A-Z]/, message: 'at least one uppercase letter' },
            { regex: /[a-z]/, message: 'at least one lowercase letter' },
            { regex: /\d/, message: 'at least one digit' },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'at least one special character' },
        ];
    
        const missingSigns = requirements.filter(({ regex }) => !regex.test(password)).map(({ message }) => message);
    
        if (missingSigns.length > 0){
            this.createValidationElement('Password is not strong enough. Missing: ' + missingSigns.join(', '),'[name="Password"]', '.error-pass');
        } else {
            this.removeValidationError('.error-pass')
        }
        
    }

    validationNumber() {
        const phoneNumberOption = (this.form.querySelector('option') as HTMLOptionElement).text;
        const phone = (this.form.querySelector('[name="Phone"]') as HTMLInputElement).value;
    
        const cleanedNumber = phone.replace(/\D/g, '');
        const polishRegex = /^(?:\+48|0)?[1-9]\d{8}$/;
        const americanRegex = /^(?:\+1)?[2-9]\d{9}$/;
    
        if(phoneNumberOption === "Poland (+48)") {
            this.validationRules (!polishRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone')
        } else if(phoneNumberOption === "United States (+1)"){
            this.validationRules (!americanRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone')
        }
    }

    validationRules(validationRule: boolean, validationError: string, elementConfigFields: string, className: string): void {
        if (validationRule) {
            this.createValidationElement(validationError, elementConfigFields, className);
        } else {
            this.removeValidationError(className);
        }
    }

    createValidationElement(validationError: string, elementConfigFields: string, className: string): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const errorMsg = form.querySelector(className) as HTMLParagraphElement;

        if (!errorMsg) {
            const errorMsg = document.createElement('p');
            errorMsg.classList.add(className.substring(1));
            errorMsg.textContent = validationError;
            const elementInput = form.querySelector(elementConfigFields) as HTMLElement;
            const elementInputNode = elementInput.parentNode as Node;
            elementInputNode.insertBefore(errorMsg, elementInput.nextSibling);
        }
    }

    removeValidationError(className: string): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const errorMsg = form.querySelector(className) as HTMLParagraphElement;
        if (errorMsg) {
            errorMsg.remove();
        }
    }

}