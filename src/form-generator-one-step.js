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
var config_1 = require("./config");
var form_element_creator_1 = require("./form-element-creator");
var form_styles_1 = require("./form-styles");
var validator_1 = require("./validator");
var html_tag_name_1 = require("./html-tag-name");
var FormGenerator = /** @class */ (function () {
    function FormGenerator(config) {
        var _this = this;
        this.createFormElement = function () { return __awaiter(_this, void 0, void 0, function () {
            var form, elements, _i, elements_1, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        form = html_tag_name_1.formCreator;
                        elements = __spreadArray(__spreadArray(__spreadArray([], this.config.selects, true), this.config.fields, true), this.config.buttons, true);
                        _i = 0, elements_1 = elements;
                        _a.label = 1;
                    case 1:
                        if (!(_i < elements_1.length)) return [3 /*break*/, 4];
                        element = elements_1[_i];
                        return [4 /*yield*/, this.formElementCreation.create(form, element)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, form];
                }
            });
        }); };
        this.config = config;
        this.formElementCreation = new form_element_creator_1.FormElementCreation();
        new form_styles_1.formStyles();
    }
    return FormGenerator;
}());
exports.FormGenerator = FormGenerator;
var FormGeneratorOneStep = /** @class */ (function () {
    function FormGeneratorOneStep(formGenerator) {
        this.formGenerator = formGenerator;
        new form_styles_1.formStyles();
    }
    FormGeneratorOneStep.prototype.generateForm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var form;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, html_tag_name_1.formCreator];
                    case 1:
                        form = _a.sent();
                        if (typeof document !== 'undefined' && document.body) {
                            document.body.appendChild(form);
                        }
                        else {
                            console.error('The document object not found.');
                        }
                        return [2 /*return*/, form];
                }
            });
        });
    };
    return FormGeneratorOneStep;
}());
exports.FormGeneratorOneStep = FormGeneratorOneStep;
var formGenerator = new FormGenerator(config_1.formConfig);
var formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
var formValidator = new validator_1.FormValidator();
formGeneratorOneStep.generateForm().then(function (form) {
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            formValidator.validation();
        });
    }
});
