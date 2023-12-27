"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGeneratorMultiStep = void 0;
var form_element_creator_1 = require("./form-element-creator");
var element_creator_1 = require("./element-creator");
var config_1 = require("./config");
var form_styles_1 = require("./form-styles");
var config_2 = require("./config");
var validator_1 = require("./validator");
var FormGeneratorMultiStep = /** @class */ (function () {
    function FormGeneratorMultiStep(config) {
        this.config = config;
        this.currentPageIndex = 0;
        this.formElementCreator = new form_element_creator_1.FormElementCreator(new element_creator_1.ElementCreator());
        new form_styles_1.formStyles();
    }
    FormGeneratorMultiStep.prototype.createPage = function (title, fields) {
        var _this = this;
        var form = document.createElement('form');
        form.className = 'form-page';
        var pageTitle = document.createElement('h2');
        pageTitle.textContent = title;
        form.appendChild(pageTitle);
        fields.forEach(function (fieldName) {
            _this.formElementCreator.createFormElement(form, _this.config.fields.find(function (field) { return field.name === fieldName; }));
        });
        var formElementCreator = new form_element_creator_1.FormElementCreator(new element_creator_1.ElementCreator());
        var prevButton = formElementCreator.createButton('Previous', function () { return _this.showPreviousPage(); });
        form.appendChild(prevButton);
        var nextButton = formElementCreator.createButton('Next', function () { return _this.showNextPage(); });
        form.appendChild(nextButton);
        return form;
    };
    FormGeneratorMultiStep.prototype.showPreviousPage = function () {
        if (this.currentPageIndex > 0) {
            config_1.formPages[this.currentPageIndex].element.style.display = 'none';
            this.currentPageIndex--;
            config_1.formPages[this.currentPageIndex].element.style.display = 'block';
        }
    };
    FormGeneratorMultiStep.prototype.showNextPage = function () {
        if (this.currentPageIndex < config_1.formPages.length - 1) {
            config_1.formPages[this.currentPageIndex].element.style.display = 'none';
            this.currentPageIndex++;
            config_1.formPages[this.currentPageIndex].element.style.display = 'block';
        }
    };
    FormGeneratorMultiStep.prototype.generateForm = function () {
        var _this = this;
        var container = document.createElement('div');
        config_1.formPages.forEach(function (page, index) {
            var formPage = _this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            container.appendChild(formPage);
            config_1.formPages[index].element = formPage;
        });
        document.body.appendChild(container);
        return container;
    };
    return FormGeneratorMultiStep;
}());
exports.FormGeneratorMultiStep = FormGeneratorMultiStep;
var formGenerator = new FormGeneratorMultiStep(config_2.config);
var form = formGenerator.generateForm();
var formValidator = new validator_1.FormValidator();
document.body.appendChild(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    (0, validator_1.validateFormErrorStyle)();
    formValidator.validation();
});
