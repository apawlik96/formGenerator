"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ButtonCreation = /** @class */ (function () {
    function ButtonCreation(elementCreator) {
        this.elementCreator = elementCreator;
    }
    ButtonCreation.prototype.create = function (text, clickHandler) {
        var button = this.elementCreator.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    };
    return ButtonCreation;
}());
exports.ButtonCreation = ButtonCreation;
