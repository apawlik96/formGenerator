import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { FormValidator } from "../validator";
import { formCreator } from "../html-tag-name";
import { FormConfig } from "../config/config-interface";
import { FormSuccessMessage } from "../form-element-creator/form-success-message";
import { FormRequiredFieldsParagraph } from "../form-element-creator/form-required-fields-parapraph";
import { DivCreatorWithClassName } from "../form-element-creator/div-creator";
import { ButtonCreation } from "../form-element-creator/button-creation";

export class FormHandlerOneStep {
    config: FormConfig;
    private formElementCreation: FormElementCreation;
    private formValidator: FormValidator;
    private formSuccessMessage: FormSuccessMessage;
    private formRequiredFieldsParagraph: FormRequiredFieldsParagraph;

    constructor(config: FormConfig) {
        this.config = config;
        this.formElementCreation = new FormElementCreation(this.config);
        this.formValidator = new FormValidator(config);
        this.formSuccessMessage = new FormSuccessMessage(this.config);
        this.formRequiredFieldsParagraph = new FormRequiredFieldsParagraph(this.config);
    }

    createFormElement = async (): Promise<HTMLDivElement> => {
        const container = new DivCreatorWithClassName().createDiv('container');
        const title = new DivCreatorWithClassName().createDiv(this.config.title[0].className);
        title.textContent = this.config.title[0].textContent;

        const form = formCreator;
        const elements = [...this.config.selects, ...this.config.fields];

        for (const element of elements) {
            await this.formElementCreation.create(form, element);
        }

        container.appendChild(title);
        container.appendChild(form);

        const containerButton = new DivCreatorWithClassName().createDiv(this.config.buttons[0].className);
        const submitButton = this.config.buttons.find((button) => button.name === 'submit');
        if (submitButton) {
            const submitButtonElement = new ButtonCreation().create(submitButton.value, async () => {
                if (this.validateForm()) {
                    const successMessage = this.formSuccessMessage.showSuccessMessage();
                    container.appendChild(successMessage);
                }
            })
            containerButton.appendChild(submitButtonElement);
        };
        container.appendChild(containerButton);

        const requiredParagraph = this.formRequiredFieldsParagraph.createParagraphRequiredFields();
        container.appendChild(requiredParagraph);
        return container;
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
