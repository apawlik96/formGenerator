"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ElementCreator = /** @class */ (function () {
    function ElementCreator() {
    }
    ElementCreator.prototype.createElement = function (tagName, attributes) {
        var element = document.createElement(tagName);
        if (attributes) {
            Object.keys(attributes).forEach(function (key) {
                element.setAttribute(key, attributes[key]);
            });
        }
        return element;
    };
    return ElementCreator;
}());
var FormElementCreator = /** @class */ (function () {
    function FormElementCreator(elementCreator) {
        this.elementCreator = elementCreator;
    }
    FormElementCreator.prototype.createInput = function (form, element) {
        var input = this.elementCreator.createElement('input');
        this.setInputAttributes(input, element);
        if (element.name === 'Phone') {
            var select = this.elementCreator.createElement('select');
            var optionPL = this.elementCreator.createElement('option');
            optionPL.value = 'PL';
            optionPL.text = 'Poland (+48)';
            select.appendChild(optionPL);
            var optionUS = this.elementCreator.createElement('option');
            optionUS.value = 'US';
            optionUS.text = 'United States (+1)';
            select.appendChild(optionUS);
            form.appendChild(select);
            form.appendChild(input);
        }
        else {
            form.appendChild(input);
        }
    };
    FormElementCreator.prototype.createLabel = function (form, element) {
        var label = this.elementCreator.createElement('label');
        label.textContent = element.for;
        this.createInput(form, element);
        form.appendChild(label);
    };
    FormElementCreator.prototype.createInputFields = function (form, element) {
        var paragraph = this.elementCreator.createElement('div');
        paragraph.textContent = element.name;
        form.appendChild(paragraph);
        this.createInput(form, element);
    };
    FormElementCreator.prototype.setInputAttributes = function (input, element) {
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
    };
    FormElementCreator.prototype.createFormElement = function (form, element) {
        switch (element.class) {
            case 'selects':
                this.createLabel(form, element);
                break;
            case 'buttons':
                this.createInput(form, element);
                break;
            case 'fields':
                this.createInputFields(form, element);
                break;
            default:
                console.log('field type not recognized', element.class);
        }
    };
    return FormElementCreator;
}());
var FormGenerator = /** @class */ (function () {
    function FormGenerator(config) {
        this.config = config;
        this.elementCreator = new ElementCreator();
        this.formElementCreator = new FormElementCreator(this.elementCreator);
    }
    FormGenerator.prototype.generateForm = function () {
        var _this = this;
        var form = this.elementCreator.createElement('form');
        var elements = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], this.config.selects, true), this.config.fields, true), this.config.data, true), this.config.buttons, true);
        elements.forEach(function (element) {
            _this.formElementCreator.createFormElement(form, element);
        });
        return form;
    };
    return FormGenerator;
}());
var FormGeneratorOneStep = /** @class */ (function () {
    function FormGeneratorOneStep(formGenerator) {
        this.formGenerator = formGenerator;
        new OneStepFormStyles();
    }
    FormGeneratorOneStep.prototype.generateForm = function () {
        var form = this.formGenerator.generateForm();
        return form;
    };
    return FormGeneratorOneStep;
}());
var OneStepFormStyles = /** @class */ (function () {
    function OneStepFormStyles() {
        this.addStyles();
    }
    OneStepFormStyles.prototype.addStyles = function () {
        var styles = "\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n    \n        form {\n            background-color: #fff;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            width: 300px;\n        }\n    \n        .fields, .selects, .data, .buttons {\n            margin-bottom: 15px;\n        }\n    \n        div {\n            margin-bottom: 5px;\n        }\n    \n        p {\n            margin-top: -17px;\n            margin-bottom: 10px;\n            font-size: 10px;\n        }\n    \n        input:not([type=\"radio\"]) {\n            display: block;\n            width: 100%;\n            box-sizing: border-box;\n            padding: 8px;\n            margin-bottom: 20px;\n        }\n    \n        input[type=\"radio\"], label {\n            margin: 20px 5px;\n        }\n    \n        input[type=\"submit\"] {\n            background-color: #4caf50;\n            color: #fff;\n            font-size: 16px;\n            border-radius: 10px;\n            padding 10px;\n            width: 120px;\n            margin-left: auto;\n            margin-right: auto;\n            cursor: pointer;\n        }\n    \n        input[type=\"submit\"]:hover {\n            background-color: #45a049;\n        }\n    \n        .error {\n            border: 1px solid #ff0000;\n        }\n        ";
        var styleElement = document.createElement('style');
        styleElement.appendChild(document.createTextNode(styles));
        document.body.appendChild(styleElement);
    };
    return OneStepFormStyles;
}());
function validateFormErrorStyle() {
    var form = document.querySelector('form');
    var elements = form.querySelectorAll('input, select');
    var errorStyle = document.createElement('style');
    errorStyle.textContent = "\n        .error {\n            border: 1px solid #ff0000;\n        }\n    ";
    document.head.appendChild(errorStyle);
    elements.forEach(function (element) {
        if ((element instanceof HTMLInputElement || element instanceof HTMLSelectElement) &&
            element.value.trim() === '' && element.type !== 'submit') {
            element.classList.add('error');
        }
        else {
            element.classList.remove('error');
        }
    });
}
var FormValidator = /** @class */ (function () {
    function FormValidator() {
    }
    FormValidator.prototype.validation = function () {
        var form = document.querySelector('form');
        var email = form.querySelector('[name="Email"]').value;
        var password = form.querySelector('[name="Password"]').value;
        var confirmPassword = form.querySelector('[name="Confirm Password"]').value;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.validationRules(confirmPassword !== password, "Passwords do not match", '[name="Confirm Password"]', '.error-pass');
        this.validationRules(!emailRegex.test(email), "Email is not valid", '[name="Email"]', '.error-email');
        this.validationNumber();
    };
    FormValidator.prototype.validationNumber = function () {
        var phoneNumberOption = form.querySelector('option').text;
        var phone = form.querySelector('[name="Phone"]').value;
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
var config = {
    fields: [{
            class: 'fields',
            name: 'Username',
            type: 'text',
            placeholder: 'Enter Username'
        },
        {
            class: 'fields',
            name: 'First Name',
            type: 'text',
            placeholder: 'Enter First Name'
        },
        {
            class: 'fields',
            name: 'Last Name',
            type: 'text',
            placeholder: 'Enter Last Name'
        },
        {
            class: 'fields',
            name: 'Email',
            type: 'email',
            placeholder: 'Enter Email'
        },
        {
            class: 'fields',
            name: 'Phone',
            type: 'tel',
            placeholder: 'Enter Phone'
        },
        {
            class: 'fields',
            name: 'Password',
            type: 'password',
            placeholder: 'Enter Password'
        },
        {
            class: 'fields',
            name: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm Password'
        },
    ],
    selects: [{
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Female'
        },
        {
            class: 'selects',
            type: 'radio',
            name: 'gender',
            for: 'Male'
        }
    ],
    data: [{
            class: 'data',
            type: 'date',
            name: 'depart'
        },],
    buttons: [{
            class: 'buttons',
            name: 'submit',
            type: 'submit',
            value: 'Submit'
        }
    ]
};
var formGenerator = new FormGenerator(config);
var formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
var form = formGeneratorOneStep.generateForm();
var formValidator = new FormValidator();
document.body.appendChild(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormErrorStyle();
    formValidator.validation();
});
