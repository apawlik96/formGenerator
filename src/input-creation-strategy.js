"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputCreationStrategy = void 0;
var html_tag_name_1 = require("./html-tag-name");
var InputCreationStrategy = /** @class */ (function () {
    function InputCreationStrategy() {
    }
    InputCreationStrategy.prototype.create = function (form, element) {
        var input = html_tag_name_1.inputCreator;
        input.type = element.type;
        input.name = element.name;
        element.class === 'buttons' ? (input.value = element.value) : (input.placeholder = element.placeholder);
        form.appendChild(input);
    };
    return InputCreationStrategy;
}());
exports.InputCreationStrategy = InputCreationStrategy;
