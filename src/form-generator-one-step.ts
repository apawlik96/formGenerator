import { formConfigPl } from "./config";
import { FormElementCreation } from "./form-element-creator";
import { formStylesOneStep } from "./form-styles";
import { FormValidator } from "./validator";
import { formCreator } from "./html-tag-name";

export class FormGenerator {
    config: any;
    private formElementCreation: FormElementCreation;
    private formValidator: FormValidator;

    constructor(config: any) {
        this.config = config;
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator(config); 
        new formStylesOneStep();
    }

    createFormElement= async (): Promise<HTMLFormElement> => {
        const form = formCreator;
        const elements = [...this.config.selects, ...this.config.fields, ...this.config.buttons];
        for (const element of elements) {
            await this.formElementCreation.create(form, element);
        }
        return form;
    }

    validateForm = (): boolean => {
        const form = document.querySelector('form') as HTMLFormElement;
        const inputElements = form.querySelectorAll('input, select');
        const inputArray = Array.from(inputElements);
        for (const inputElement of inputArray) {
            if (!this.formValidator.isValid(inputElement as HTMLInputElement)) {
                return false;
            }
        }
        return true;
    }
}

export class FormGeneratorOneStep {
    private formGenerator: FormGenerator;

    constructor(formGenerator: FormGenerator) {
        this.formGenerator = formGenerator;
        new formStylesOneStep();
    }

    async generateForm(): Promise<HTMLFormElement | undefined> {
        const form = await formCreator;
        if (typeof document !== 'undefined' && document.body) {
            document.body.appendChild(form);
        } else {
            console.error('The document object not found.')
        }
        return form;
    }
}

const formGenerator = new FormGenerator(formConfigPl);
const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);

formGeneratorOneStep.generateForm().then(form => {
    if (form) {
        form.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            formGenerator.validateForm();
        });
    }
});
