"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGeneratorMultiStep = void 0;
var element_creator_1 = require("./element-creator");
var button_creation_1 = require("./button-creation");
var form_element_creator_1 = require("./form-element-creator");
var select_element_creation_strategy_1 = require("./select-element-creation-strategy");
var input_creation_strategy_1 = require("./input-creation-strategy");
var field_element_creation_strategy_1 = require("./field-element-creation-strategy");
var form_styles_1 = require("./form-styles");
var config_1 = require("./config");
var config_2 = require("./config");
var validator_1 = require("./validator");
var FormGeneratorMultiStep = /** @class */ (function () {
    function FormGeneratorMultiStep(config) {
        var _this = this;
        this.createPage = function (title, fields) { return __awaiter(_this, void 0, void 0, function () {
            var form, pageTitle, _loop_1, this_1, _i, fields_1, fieldName, prevButton, nextButton;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = document.createElement('form');
                        form.className = 'form-page';
                        pageTitle = document.createElement('h2');
                        pageTitle.textContent = title;
                        form.appendChild(pageTitle);
                        _loop_1 = function (fieldName) {
                            var element;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        element = this_1.config.fields.find(function (field) { return field.name === fieldName; });
                                        return [4 /*yield*/, this_1.creationStrategy.create(form, element)];
                                    case 1:
                                        _b.sent();
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, fields_1 = fields;
                        _a.label = 1;
                    case 1:
                        if (!(_i < fields_1.length)) return [3 /*break*/, 4];
                        fieldName = fields_1[_i];
                        return [5 /*yield**/, _loop_1(fieldName)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        prevButton = this.buttonCreation.create('Previous', function () { return _this.showPreviousPage(); });
                        form.appendChild(prevButton);
                        nextButton = this.buttonCreation.create('Next', function () { return _this.showNextPage(); });
                        form.appendChild(nextButton);
                        return [2 /*return*/, form];
                }
            });
        }); };
        this.generateForm = function () { return __awaiter(_this, void 0, void 0, function () {
            var container, index, page, formPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        container = document.createElement('div');
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < config_1.formPages.length)) return [3 /*break*/, 4];
                        page = config_1.formPages[index];
                        return [4 /*yield*/, this.createPage(page.title, page.fields)];
                    case 2:
                        formPage = _a.sent();
                        formPage.style.display = index === 0 ? 'block' : 'none';
                        container.appendChild(formPage);
                        config_1.formPages[index].element = formPage;
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4:
                        document.body.appendChild(container);
                        return [2 /*return*/, container];
                }
            });
        }); };
        this.config = config;
        this.currentPageIndex = 0;
        this.elementCreator = new element_creator_1.ElementCreator();
        this.buttonCreation = new button_creation_1.ButtonCreation(this.elementCreator);
        this.creationStrategy = new form_element_creator_1.FormElementCreation(new select_element_creation_strategy_1.SelectElementCreationStrategy(this.elementCreator, new input_creation_strategy_1.InputCreationStrategy(this.elementCreator)), new input_creation_strategy_1.InputCreationStrategy(this.elementCreator), new field_element_creation_strategy_1.FieldElementCreationStrategy(this.elementCreator));
        new form_styles_1.formStyles();
    }
    FormGeneratorMultiStep.prototype.createStepIndicators = function (page, step) {
        var stepIndicatorContainer = document.createElement('div');
        stepIndicatorContainer.className = 'step-indicator-container';
        page.appendChild(stepIndicatorContainer);
        for (var i = 1; i <= config_1.formPages.length; i++) {
            var stepIndicator = document.createElement('div');
            stepIndicator.className = 'step-indicator';
            stepIndicator.textContent = i.toString();
            stepIndicatorContainer.appendChild(stepIndicator);
        }
        var stepIndicators = stepIndicatorContainer.querySelectorAll('.step-indicator');
        stepIndicators[step - 1].classList.add('current-step');
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
    return FormGeneratorMultiStep;
}());
exports.FormGeneratorMultiStep = FormGeneratorMultiStep;
var formGenerator = new FormGeneratorMultiStep(config_2.formConfig);
var formValidator = new validator_1.FormValidator();
formGenerator.generateForm().then(function (form) {
    document.body.appendChild(form);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formValidator.validation();
    });
});
