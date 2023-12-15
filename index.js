"use strict";
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
        form.appendChild(input);
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
                console.log('field type not recognized');
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
        var elements = this.config.selects.concat(this.config.fields, this.config.data, this.config.buttons);
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
function validationRules(form) {
    var emailInput = form.querySelector('[name="Email"]');
    var phoneInput = form.querySelector('[name="Phone"]');
    var passwordInput = form.querySelector('[name="Password"]');
    var confirmPasswordInput = form.querySelector('[name="Confirm Password"]');
    var email = emailInput ? emailInput.value : '';
    var phone = phoneInput ? phoneInput.value : '';
    var password = passwordInput ? passwordInput.value : '';
    var confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var phoneNumberValue = parseInt(phone).toString();
    var formValidator = new FormValidator(form);
    if (confirmPassword !== password) {
        formValidator.createElementsValidation('Passwords do not match', '[name="Confirm Password"]');
    }
    if (phoneNumberValue.length !== 9) {
        formValidator.createElementsValidation('Invalid phone number', '[name="Phone"]');
    }
    if (emailInput && !emailRegex.test(email)) {
        formValidator.createElementsValidation('Email is not valid', '[name="Email"]');
    }
}
var FormValidator = /** @class */ (function () {
    function FormValidator(form) {
        this.form = form;
    }
    FormValidator.prototype.createElementsValidation = function (errorMsg, elementConfigFields) {
        var errorMsgElement = document.createElement('p');
        this.form.appendChild(errorMsgElement);
        errorMsgElement.textContent = errorMsg;
        var elementInput = this.form.querySelector(elementConfigFields);
        if (elementInput) {
            var elementInputNode = elementInput.parentNode;
            if (elementInputNode) {
                elementInputNode.insertBefore(errorMsgElement, elementInput.nextSibling);
            }
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
document.body.appendChild(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormErrorStyle();
    validationRules(form);
});
