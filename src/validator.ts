import { classNames } from "./config/class-name";
import { config } from "./config/config-attributes";

export class FormValidator {

    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validationNumber(phoneNumber: string): boolean {
        const phoneRegex = /^\+\d{8,}$/;
        return phoneRegex.test(phoneNumber);
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

    createErrorParagraph(validationError: string, inputElement: any): HTMLParagraphElement   {
        const errorParagraphId = `${inputElement.name}-error`;
        let errorParagraph = document.getElementById(errorParagraphId) as HTMLParagraphElement;
        errorParagraph = document.createElement('p');
        errorParagraph.id = errorParagraphId;
        errorParagraph.textContent = validationError;
        const inputElementNode = inputElement.parentNode as Node;
        inputElementNode.insertBefore(errorParagraph, inputElement.nextSibling);
        return errorParagraph;
    }

    removeErrorParagraph(errorParagraph: HTMLElement): void  {
        if (errorParagraph !== null && errorParagraph !== undefined) {
            return errorParagraph.remove();
        } else {
            console.error("Error paragraph is null or undefined!");
        }
    }

    clearExistingError(inputElement: HTMLFormElement): void {
        const errorParagraphId = `${inputElement.name}-error`;
        const errorParagraph = document.getElementById(errorParagraphId) as HTMLParagraphElement;

        this.removeErrorParagraph(errorParagraph);
    }

    validateForm(inputElements: NodeListOf<Element>): boolean {
        let isFormValid = true;

        Array.from(inputElements).forEach((inputElement) => {
            this.clearExistingError(inputElement as HTMLFormElement);

            const isValid = this.isValid(inputElement as HTMLInputElement);

            if (!isValid) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }

    validateCurrentPage(currentPage: any): boolean {
        const form = currentPage.element as HTMLFormElement;
        const inputElements = form.querySelectorAll('input, select');
        const inputArray = Array.from(inputElements);
        let isFormValid = true;

        for (const inputElement of inputArray) {
            this.clearExistingError(inputElement as HTMLFormElement);

            if (!this.isValid(inputElement as HTMLInputElement)) {
                isFormValid = false;
            }
        }

        return isFormValid;
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
                    isValid = this.validationNumber(inputElement.value.trim());
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
