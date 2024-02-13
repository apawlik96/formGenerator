import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { FormValidator } from "../validator";
import { formCreator } from "../html-tag-name";
import { FormConfig } from "../config/config-interface";

export class FormHandlerOneStep {
    config: FormConfig;
    private formElementCreation: FormElementCreation;
    private formValidator: FormValidator;

    constructor(config: FormConfig) {
        this.config = config;
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator(config); 
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
