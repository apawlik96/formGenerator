import { classNames } from "./config/class-name";
import { config } from "./config/config-attributes";

export class FormValidator {

    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validationNumber(): any {
        const phoneInput = document.querySelector('input[name="Phone"]') as HTMLInputElement;
        const phoneInputValue = phoneInput.value;
        var selectElement = document.getElementById('phoneCountryCodeSelect') as HTMLSelectElement;
        if (selectElement) {
            var selectedOption = selectElement.options[selectElement.selectedIndex];
            var selectedValue = selectedOption.value;
            const phoneNumber = phoneInputValue.slice(selectedValue.length);
            const phoneRegex = /^\d+$/;
            return phoneRegex.test(phoneNumber);
        } else {
            console.error("Select element not found!");
        }
    }

    arePasswordsMatching(): any {
        const passwordInput = document.querySelector('input[name="Password"]') as HTMLInputElement;
        const confirmPasswordInput = document.querySelector('input[name="Confirm Password"]') as HTMLInputElement;
        const password = passwordInput ? passwordInput.value : '';
        const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
        return password === confirmPassword;
    }

    isStrongPassword(password: string): any {
        const requirements = [
            { regex: /.{8,}/, message: config.error.characters },
            { regex: /[A-Z]/, message: config.error.uppercase },
            { regex: /[a-z]/, message: config.error.lowercase },
            { regex: /\d/, message: config.error.digit },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: config.error.character },
        ];
        const missingSigns = requirements.filter(({ regex }) => !regex.test(password)).map(({ message }) => message);
        return missingSigns.join(', ');
    }

    createErrorParagraph(validationError: string, inputElement: any): void  {
        const errorParagraphId = `${inputElement.name}-error`;
        let errorParagraph = document.getElementById(errorParagraphId) as HTMLParagraphElement;
        if (errorParagraph === null || errorParagraph === undefined) {
            errorParagraph = document.createElement('p');
            errorParagraph.id = errorParagraphId;
            errorParagraph.textContent = validationError;
            const inputElementNode = inputElement.parentNode as Node;
            inputElementNode.insertBefore(errorParagraph, inputElement.nextSibling);
        } else {
            console.error("Select element not found.");
        }
    }

    removeErrorParagraph(errorParagraph: HTMLElement): void  {
        if (errorParagraph !== null && errorParagraph !== undefined) {
            errorParagraph.remove();
        } else {
            console.error("Error paragraph is null or undefined!");
        }
    }

    isValid(inputElement: HTMLInputElement): boolean {
        let isValid = true;
        let validationError = '';
        const fieldConfig = config.fields.find((field: any) => field.name === inputElement.name);
    
        if (fieldConfig) {
            validationError = fieldConfig.error || '';
    
            switch (inputElement.name) {
                case 'Email':
                    isValid = this.isEmailValid(inputElement.value.trim());
                    break;
                case 'Phone':
                    isValid = this.validationNumber();
                    break;
                case 'Confirm Password':
                    isValid = this.arePasswordsMatching();
                    break;
                case 'Password':
                    const missingSigns = this.isStrongPassword(inputElement.value.trim());
                    isValid = missingSigns === '';
                    validationError = validationError + missingSigns;
                    break;
                default:
                    break;
            }
        }

        if (fieldConfig && fieldConfig.placeholder.includes('*') && inputElement.value.trim() === '') {
            isValid = false;
            inputElement.style.borderBottom = '2px solid #e74c3c';
            inputElement.classList.add(classNames.emptyEffect);
            inputElement.addEventListener('focus', () => inputElement.style.borderBottom = '');
            inputElement.addEventListener('blur', () => this.addBorderBottomEffectOnBlur(inputElement));
        } else {
            inputElement.style.borderBottom = '';
            inputElement.classList.remove(classNames.emptyEffect);
        }
    
        const errorParagraphId = `${inputElement.name}-error`;
        const errorParagraph = document.getElementById(errorParagraphId) as HTMLParagraphElement;
    
        if (!isValid) {
            this.createErrorParagraph(validationError, inputElement);
        } else {
            this.removeErrorParagraph(errorParagraph);
        }
        return isValid;
    }

    addBorderBottomEffectOnBlur(inputElement: HTMLInputElement) {
        if (inputElement.value.trim() === '') {
            inputElement.style.borderBottom = '2px solid #e74c3c';
        }
    }
}
