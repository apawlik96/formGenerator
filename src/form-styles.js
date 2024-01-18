"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formStyles = /** @class */ (function () {
    function formStyles() {
        this.addStyles();
    }
    formStyles.prototype.addStyles = function () {
        var styles = "\n        body {\n            font-family: Arial, sans-serif;\n            background-color: #f4f4f4;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n        }\n    \n        form {\n            background-color: #fff;\n            padding: 20px;\n            border-radius: 8px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n            width: 300px;\n        }\n    \n        .fields, .selects, .data, .buttons {\n            margin-bottom: 15px;\n        }\n    \n        div {\n            margin-bottom: 5px;\n        }\n    \n        p {\n            margin-top: -17px;\n            margin-bottom: 10px;\n            font-size: 10px;\n        }\n    \n        input:not([type=\"radio\"]) {\n            display: block;\n            width: 100%;\n            box-sizing: border-box;\n            padding: 8px;\n            margin-bottom: 20px;\n        }\n    \n        input[type=\"radio\"], label {\n            margin: 20px 5px;\n        }\n    \n        input[type=\"submit\"], button {\n            background-color: #4caf50;\n            color: #fff;\n            font-size: 16px;\n            border-radius: 10px;\n            padding 10px;\n            width: 120px;\n            margin-left: auto;\n            margin-right: auto;\n            cursor: pointer;\n        }\n    \n        input[type=\"submit\"]:hover {\n            background-color: #45a049;\n        }\n    \n        .error {\n            border: 1px solid #ff0000;\n        }\n\n        .step-indicator {\n            width: 20px;\n            height: 20px;\n            border-radius: 50%;\n            background-color: #ddd;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            font-weight: bold;\n        }\n        \n        .step-indicator.current-step {\n            background-color: #4caf50;\n            color: white;\n        }\n        ";
        if (typeof document !== 'undefined') {
            var styleElement = document.createElement('style');
            styleElement.appendChild(document.createTextNode(styles));
            document.body.appendChild(styleElement);
        }
    };
    return formStyles;
}());
exports.formStyles = formStyles;
