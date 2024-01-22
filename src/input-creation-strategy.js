"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCreationStrategy = void 0;
var InputCreationStrategy = /** @class */ (function () {
    function InputCreationStrategy(elementCreator) {
        this.elementCreator = elementCreator;
    }
    InputCreationStrategy.prototype.create = function (form, element) {
        var input = this.elementCreator.createElement('input');
        if (input) {
            input.type = element.type;
            input.name = element.name;
            element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
            form.appendChild(input);
        }
    };
    return InputCreationStrategy;
}());
exports.InputCreationStrategy = InputCreationStrategy;
