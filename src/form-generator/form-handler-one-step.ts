import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { FormValidator } from "../validator";
import { formStylesOneStep } from "../form-styles/form-styles-one-step";
import { formCreator } from "../html-tag-name";

export class FormHandlerOneStep {
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
