export class FormValidator {

    isEmailValid(email: string): boolean {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    validationNumber(phoneNumber: string): boolean {
        const phoneRegex = /^[\d\s-]+$/;
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
            { regex: /.{8,}/, message: '8 characters' },
            { regex: /[A-Z]/, message: 'one uppercase letter' },
            { regex: /[a-z]/, message: 'one lowercase letter' },
            { regex: /\d/, message: 'one digit' },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'one special character' },
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
        if (inputElement instanceof HTMLInputElement) {
            let isValid = true;
            let validationError = '';
            switch (inputElement.name) {
                case 'Email':
                    isValid = this.isEmailValid(inputElement.value.trim());
                    validationError = 'Invalid email address.';
                    break;
                case 'Phone':
                    isValid = this.validationNumber(inputElement.value.trim());
                    validationError = 'Invalid phone number.';
                    break;
                case 'Confirm Password':
                    isValid = this.arePasswordsMatching();
                    validationError = 'Passwords do not match.';
                    break;
                case 'Password':
                    const missingSigns = this.isStrongPassword(inputElement.value.trim());
                    isValid = missingSigns === '';
                    validationError = 'Password is not strong enough. Missing at least ' + missingSigns;
                    break;
                default:
                    break;
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
        return true;
    }
}
