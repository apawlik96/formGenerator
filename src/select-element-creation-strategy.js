"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectElementCreationStrategy = void 0;
var html_tag_name_1 = require("./html-tag-name");
var SelectElementCreationStrategy = /** @class */ (function () {
    function SelectElementCreationStrategy(inputCreationStrategy) {
        this.inputCreationStrategy = inputCreationStrategy;
    }
    SelectElementCreationStrategy.prototype.create = function (form, element) {
        var label = html_tag_name_1.labelCreator;
        label.textContent = element.for;
        this.inputCreationStrategy.create(form, element);
        form.appendChild(label);
    };
    return SelectElementCreationStrategy;
}());
exports.SelectElementCreationStrategy = SelectElementCreationStrategy;
