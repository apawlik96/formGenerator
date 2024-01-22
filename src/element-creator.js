"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementCreator = void 0;
var ElementCreator = /** @class */ (function () {
    function ElementCreator() {
    }
    ElementCreator.prototype.createElement = function (tagName, attributes) {
        if (typeof document !== 'undefined') {
            var element_1 = document.createElement(tagName);
            if (attributes) {
                Object.keys(attributes).forEach(function (key) {
                    element_1.setAttribute(key, attributes[key]);
                });
            }
            return element_1;
        }
    };
    return ElementCreator;
}());
exports.ElementCreator = ElementCreator;
