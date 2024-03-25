import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { FormValidator } from "../validator";
import { HtmlTagName } from "../html-tag-name";
import { FormSuccessMessage } from "../form-element-creator/form-success-message";
import { FormRequiredFieldsParagraph } from "../form-element-creator/form-required-fields-paragraph";
import { DivCreatorWithClassName } from "../form-element-creator/div-creator";
import { ButtonCreation } from "../form-element-creator/button-creation";
import { classNames } from "../config/class-name";
import { config } from "../config/config-attributes";

export class FormHandlerOneStep {
    private formElementCreation: FormElementCreation;
    private formValidator: FormValidator;
    private formSuccessMessage: FormSuccessMessage;
    private formRequiredFieldsParagraph: FormRequiredFieldsParagraph;

    constructor() {
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator();
        this.formSuccessMessage = new FormSuccessMessage();
        this.formRequiredFieldsParagraph = new FormRequiredFieldsParagraph();
    }

    createFormElement = async (): Promise<HTMLDivElement> => {
        const container = new DivCreatorWithClassName().createDiv(classNames.container);
        const title = new DivCreatorWithClassName().createDiv(classNames.titleOneStep);
        title.textContent = config.titleOneStep.textContent;

        const form = new HtmlTagName().formCreator();
        const elements = [...config.selects, ...config.fields];

        for (const element of elements) {
            await this.formElementCreation.create(form, element);
        }

        container.appendChild(title);
        container.appendChild(form);

        const containerButton = new DivCreatorWithClassName().createDiv(classNames.buttonContainer);
        const submitButton = config.buttons.find((button) => button.name === 'submit');
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

        return this.formValidator.validateForm(inputElements);
    }
}
