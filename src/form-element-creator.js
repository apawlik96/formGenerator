"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormElementCreator = void 0;
var FormElementCreator = /** @class */ (function () {
    function FormElementCreator(elementCreator) {
        this.elementCreator = elementCreator;
    }
    FormElementCreator.prototype.createInput = function (form, element) {
        var input = this.elementCreator.createElement('input');
        this.setInputAttributes(input, element);
        if (element.name === 'Phone') {
            var select = this.elementCreator.createElement('select');
            this.createOption(select, 'PL', 'Poland (+48)');
            this.createOption(select, 'US', 'United States (+1)');
            form.appendChild(select);
            form.appendChild(input);
        }
        else {
            form.appendChild(input);
        }
    };
    FormElementCreator.prototype.createOption = function (select, optionValue, optionText) {
        var option = this.elementCreator.createElement('option');
        option.value = optionValue;
        option.text = optionText;
        select.appendChild(option);
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
    FormElementCreator.prototype.createButton = function (text, clickHandler) {
        var button = this.elementCreator.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
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
exports.FormElementCreator = FormElementCreator;
