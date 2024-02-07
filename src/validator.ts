export class FormValidator {
    config: any;

    constructor(config: any) {
        this.config = config;
    }

    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validationNumber(phoneNumber: string): any {
        var selectElement = document.getElementById('phoneCountryCodeSelect') as HTMLSelectElement;
            if (selectElement) {
                var selectedOption = selectElement.options[selectElement.selectedIndex];
                var selectedValue = selectedOption.value;
                return phoneNumber.startsWith(selectedValue);
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
            { regex: /.{8,}/, message: this.config.error[0].characters },
            { regex: /[A-Z]/, message: this.config.error[0].uppercase },
            { regex: /[a-z]/, message: this.config.error[0].lowercase },
            { regex: /\d/, message: this.config.error[0].digit },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: this.config.error[0].character },
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
            errorParagraph.style.color = 'red';
            const inputElementNode = inputElement.parentNode as Node;
            inputElementNode.insertBefore(errorParagraph, inputElement.nextSibling);
        }
    }

    removeErrorParagraph(errorParagraph: HTMLElement): void  {
        if (errorParagraph !== null && errorParagraph !== undefined) {
            errorParagraph.remove();
        }
    }

    isValid(inputElement: HTMLInputElement): boolean {
        let isValid = true;
        let validationError = '';
        const fieldConfig = this.config.fields.find((field: any) => field.name === inputElement.name);
    
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
    
        const errorParagraphId = `${inputElement.name}-error`;
        const errorParagraph = document.getElementById(errorParagraphId) as HTMLParagraphElement;
    
        if (!isValid) {
            this.createErrorParagraph(validationError, inputElement);
        } else {
            this.removeErrorParagraph(errorParagraph);
        }
    
        return isValid;
    }
}
