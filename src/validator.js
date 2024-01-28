"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
var FormValidator = /** @class */ (function () {
    function FormValidator() {
    }
    FormValidator.prototype.isEmailValid = function (email) {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    FormValidator.prototype.validationNumber = function (phoneNumber) {
        var phoneRegex = /^[\d\s-]+$/;
        return phoneRegex.test(phoneNumber);
    };
    FormValidator.prototype.arePasswordsMatching = function () {
        var passwordInput = document.querySelector('input[name="Password"]');
        var confirmPasswordInput = document.querySelector('input[name="Confirm Password"]');
        var password = passwordInput ? passwordInput.value : '';
        var confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
        return password === confirmPassword;
    };
    FormValidator.prototype.isStrongPassword = function (password) {
        var requirements = [
            { regex: /.{8,}/, message: '8 characters' },
            { regex: /[A-Z]/, message: 'one uppercase letter' },
            { regex: /[a-z]/, message: 'one lowercase letter' },
            { regex: /\d/, message: 'one digit' },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'one special character' },
        ];
        var missingSigns = requirements.filter(function (_a) {
            var regex = _a.regex;
            return !regex.test(password);
        }).map(function (_a) {
            var message = _a.message;
            return message;
        });
        return missingSigns.join(', ');
    };
    FormValidator.prototype.createErrorParagraph = function (validationError, inputElement) {
        var errorParagraphId = "".concat(inputElement.name, "-error");
        var errorParagraph = document.getElementById(errorParagraphId);
        if (errorParagraph === null || errorParagraph === undefined) {
            errorParagraph = document.createElement('p');
            errorParagraph.id = errorParagraphId;
            errorParagraph.textContent = validationError;
            errorParagraph.style.color = 'red';
            var inputElementNode = inputElement.parentNode;
            inputElementNode.insertBefore(errorParagraph, inputElement.nextSibling);
        }
    };
    FormValidator.prototype.removeErrorParagraph = function (errorParagraph) {
        if (errorParagraph !== null && errorParagraph !== undefined) {
            errorParagraph.remove();
        }
    };
    FormValidator.prototype.isValid = function (inputElement) {
        if (inputElement instanceof HTMLInputElement) {
            var isValid = true;
            var validationError = '';
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
                    var missingSigns = this.isStrongPassword(inputElement.value.trim());
                    isValid = missingSigns === '';
                    validationError = 'Password is not strong enough. Missing at least ' + missingSigns;
                    break;
                default:
                    break;
            }
            var errorParagraphId = "".concat(inputElement.name, "-error");
            var errorParagraph = document.getElementById(errorParagraphId);
            if (!isValid) {
                this.createErrorParagraph(validationError, inputElement);
            }
            else {
                this.removeErrorParagraph(errorParagraph);
            }
            return isValid;
        }
        return true;
    };
    return FormValidator;
}());
exports.FormValidator = FormValidator;
