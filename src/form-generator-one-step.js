"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGeneratorOneStep = exports.FormGenerator = void 0;
var element_creator_1 = require("./element-creator");
var form_element_creator_1 = require("./form-element-creator");
var form_styles_1 = require("./form-styles");
var config_1 = require("./config");
var validator_1 = require("./validator");
var FormGenerator = /** @class */ (function () {
    function FormGenerator(config) {
        this.config = config;
        this.elementCreator = new element_creator_1.ElementCreator();
        this.formElementCreator = new form_element_creator_1.FormElementCreator(this.elementCreator);
    }
    FormGenerator.prototype.generateForm = function () {
        var _this = this;
        var form = this.elementCreator.createElement('form');
        var elements = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], this.config.selects, true), this.config.fields, true), this.config.data, true), this.config.buttons, true);
        elements.forEach(function (element) {
            _this.formElementCreator.createFormElement(form, element);
        });
        return form;
    };
    return FormGenerator;
}());
exports.FormGenerator = FormGenerator;
var FormGeneratorOneStep = /** @class */ (function () {
    function FormGeneratorOneStep(formGenerator) {
        this.formGenerator = formGenerator;
        new form_styles_1.formStyles();
    }
    FormGeneratorOneStep.prototype.generateForm = function () {
        var form = this.formGenerator.generateForm();
        return form;
    };
    return FormGeneratorOneStep;
}());
exports.FormGeneratorOneStep = FormGeneratorOneStep;
var formGenerator = new FormGenerator(config_1.config);
var formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
var form = formGeneratorOneStep.generateForm();
var formValidator = new validator_1.FormValidator();
document.body.appendChild(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    (0, validator_1.validateFormErrorStyle)();
    formValidator.validation();
});
