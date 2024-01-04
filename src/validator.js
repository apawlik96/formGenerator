"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormValidator = void 0;
var FormValidator = /** @class */ (function () {
    function FormValidator() {
        this.form = document.querySelector('form');
    }
    FormValidator.prototype.validation = function () {
        var form = document.querySelector('form');
        var email = form.querySelector('[name="Email"]').value;
        var password = form.querySelector('[name="Password"]').value;
        var confirmPassword = form.querySelector('[name="Confirm Password"]').value;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.isStrongPassword(password);
        this.validationRules(confirmPassword !== password, "Passwords do not match", '[name="Confirm Password"]', '.error-pass');
        this.validationRules(!emailRegex.test(email), "Email is not valid", '[name="Email"]', '.error-email');
        this.validationNumber();
    };
    FormValidator.prototype.isStrongPassword = function (password) {
        var requirements = [
            { regex: /.{8,}/, message: 'at least 8 characters' },
            { regex: /[A-Z]/, message: 'at least one uppercase letter' },
            { regex: /[a-z]/, message: 'at least one lowercase letter' },
            { regex: /\d/, message: 'at least one digit' },
            { regex: /[!@#$%^&*(),.?":{}|<>]/, message: 'at least one special character' },
        ];
        var missingSigns = requirements.filter(function (_a) {
            var regex = _a.regex;
            return !regex.test(password);
        }).map(function (_a) {
            var message = _a.message;
            return message;
        });
        if (missingSigns.length > 0) {
            this.createValidationElement('Password is not strong enough. Missing: ' + missingSigns.join(', '), '[name="Password"]', '.error-pass');
        }
        else {
            this.removeValidationError('.error-pass');
        }
    };
    FormValidator.prototype.validationNumber = function () {
        var phoneNumberOption = this.form.querySelector('option').text;
        var phone = this.form.querySelector('[name="Phone"]').value;
        var cleanedNumber = phone.replace(/\D/g, '');
        var polishRegex = /^(?:\+48|0)?[1-9]\d{8}$/;
        var americanRegex = /^(?:\+1)?[2-9]\d{9}$/;
        if (phoneNumberOption === "Poland (+48)") {
            this.validationRules(!polishRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone');
        }
        else if (phoneNumberOption === "United States (+1)") {
            this.validationRules(!americanRegex.test(cleanedNumber), "Invalid phone number", '[name="Phone"]', '.error-phone');
        }
    };
    FormValidator.prototype.validationRules = function (validationRule, validationError, elementConfigFields, className) {
        if (validationRule) {
            this.createValidationElement(validationError, elementConfigFields, className);
        }
        else {
            this.removeValidationError(className);
        }
    };
    FormValidator.prototype.createValidationElement = function (validationError, elementConfigFields, className) {
        var form = document.querySelector('form');
        var errorMsg = form.querySelector(className);
        if (!errorMsg) {
            var errorMsg_1 = document.createElement('p');
            errorMsg_1.classList.add(className.substring(1));
            errorMsg_1.textContent = validationError;
            var elementInput = form.querySelector(elementConfigFields);
            var elementInputNode = elementInput.parentNode;
            elementInputNode.insertBefore(errorMsg_1, elementInput.nextSibling);
        }
    };
    FormValidator.prototype.removeValidationError = function (className) {
        var form = document.querySelector('form');
        var errorMsg = form.querySelector(className);
        if (errorMsg) {
            errorMsg.remove();
        }
    };
    return FormValidator;
}());
exports.FormValidator = FormValidator;
