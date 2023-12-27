"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementCreator = void 0;
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
exports.ElementCreator = ElementCreator;
