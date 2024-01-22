export class FormValidator {

    private form: HTMLFormElement | undefined;

    constructor() {
        if (typeof document !== 'undefined') {
            this.form = document.querySelector('form') as HTMLFormElement;
        }
    }

    validation(): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const email = (form.querySelector('[name="Email"]') as HTMLInputElement).value;
        const password = (form.querySelector('[name="Password"]') as HTMLInputElement).value;
        const confirmPassword = (form.querySelector('[name="Confirm Password"]') as HTMLInputElement).value;
        const emailRegex: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.isStrongPassword(password);
        this.validationRules(confirmPassword !== password, "Passwords do not match", '[name="Confirm Password"]', '.error-con-pass');
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

    validationNumber(): void {
        const form = document.querySelector('form') as HTMLFormElement;
        const phoneInput = (form.querySelector('[name="Phone"]') as HTMLInputElement).value;
        const selectedOption = (form.querySelector('option:checked') as HTMLOptionElement);
        if (selectedOption) {
            const selectElementValue = selectedOption.value;
            const isValid = phoneInput.startsWith(selectElementValue);
            this.validationRules(!isValid, "Invalid phone number", '[name="Phone"]', '.error-phone')
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
