"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonCreation = void 0;
var html_tag_name_1 = require("./html-tag-name");
var ButtonCreation = /** @class */ (function () {
    function ButtonCreation() {
    }
    ButtonCreation.prototype.create = function (text, clickHandler) {
        var button = html_tag_name_1.buttonCreator;
        button.textContent = text;
        button.addEventListener('click', clickHandler);
        return button;
    };
    return ButtonCreation;
}());
exports.ButtonCreation = ButtonCreation;
