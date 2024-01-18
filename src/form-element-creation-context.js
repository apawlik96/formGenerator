"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormElementCreationContext = /** @class */ (function () {
    function FormElementCreationContext(creationStrategy) {
        this.creationStrategy = creationStrategy;
    }
    FormElementCreationContext.prototype.setCreationStrategy = function (creationStrategy) {
        this.creationStrategy = creationStrategy;
    };
    FormElementCreationContext.prototype.create = function (form, element) {
        this.creationStrategy.create(form, element);
    };
    return FormElementCreationContext;
}());
exports.FormElementCreationContext = FormElementCreationContext;
