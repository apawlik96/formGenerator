"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectElementCreationStrategy = void 0;
var SelectElementCreationStrategy = /** @class */ (function () {
    function SelectElementCreationStrategy(elementCreator, inputCreationStrategy) {
        this.elementCreator = elementCreator;
        this.inputCreationStrategy = inputCreationStrategy;
    }
    SelectElementCreationStrategy.prototype.create = function (form, element) {
        var label = this.elementCreator.createElement('label');
        if (label) {
            label.textContent = element.for;
            this.inputCreationStrategy.create(form, element);
            form.appendChild(label);
        }
    };
    return SelectElementCreationStrategy;
}());
exports.SelectElementCreationStrategy = SelectElementCreationStrategy;
