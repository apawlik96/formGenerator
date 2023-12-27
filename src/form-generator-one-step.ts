import { ElementCreator } from "./element-creator";
import { FormElementCreator } from "./form-element-creator";
import { formStyles } from "./form-styles";
import { config } from "./config";
import { FormValidator,validateFormErrorStyle } from "./validator";

interface Field {
    class: string;
    name: string;
    type: string;
    placeholder?: string;
    for?: string;
    value?: string;
}


interface FormConfig {
    fields: Array<Field>;
    selects: Array<Field>;
    data: Array<Field>;
    buttons: Array<Field>;
}

interface FormGeneratorImpl {
    config: FormConfig;
}

export class FormGenerator implements FormGeneratorImpl {
    config: FormConfig;

    private elementCreator: ElementCreator;
    private formElementCreator: FormElementCreator;

    constructor(config: any) {
        this.config = config;
        this.elementCreator = new ElementCreator();
        this.formElementCreator = new FormElementCreator(this.elementCreator);
    }

    generateForm(): HTMLFormElement {
        const form = this.elementCreator.createElement('form') as HTMLFormElement;
        const elements = [...this.config.selects, ...this.config.fields, ...this.config.data, ...this.config.buttons];

        elements.forEach((element) => {
            this.formElementCreator.createFormElement(form, element);
        });
        return form;
    }
}

export class FormGeneratorOneStep {
    private formGenerator: FormGenerator;

    constructor(formGenerator: FormGenerator) {
        this.formGenerator = formGenerator;
        new formStyles();
    }

    generateForm(): HTMLFormElement {
        const form = this.formGenerator.generateForm();
        return form;
    }
}

const formGenerator = new FormGenerator(config);
const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
const form = formGeneratorOneStep.generateForm();

const formValidator = new FormValidator();

document.body.appendChild(form);

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFormErrorStyle();
    formValidator.validation();
});