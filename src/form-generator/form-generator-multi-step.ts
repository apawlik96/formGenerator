import { ButtonCreation } from "../form-element-creator/button-creation";
import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { formStylesOneStep } from "../form-styles/form-styles-one-step";
import { formPagesEn } from "../config/config-en";
import { formConfigEn } from "../config/config-en";
import { FormValidator } from "../validator";
import { divCreator, formCreator, titleCreator } from "../html-tag-name";
import { FormConfig } from "../config/config-interface";
import { DivCreatorWithClassName } from "../form-element-creator/div-creator";
import { FormSuccessMessage } from "../form-element-creator/form-success-message";
import { FormRequiredFieldsParagraph } from "../form-element-creator/form-required-fields-parapraph";

export class FormGeneratorMultiStep {
    config: FormConfig;
    formPages: any;
    currentPageIndex: number;
    private formElementCreation: FormElementCreation;
    private buttonCreation: ButtonCreation;
    private formValidator: FormValidator;
    private formSuccessMessage: FormSuccessMessage;
    private formRequiredFieldsParagraph: FormRequiredFieldsParagraph;

    constructor(config: FormConfig, formPages: any) {
        this.config = config;
        this.formPages = formPages;
        this.currentPageIndex = 0;
        this.buttonCreation = new ButtonCreation();
        this.formElementCreation = new FormElementCreation(this.config);
        this.formValidator = new FormValidator(config);
        this.formSuccessMessage = new FormSuccessMessage(this.config);
        this.formRequiredFieldsParagraph = new FormRequiredFieldsParagraph(this.config);
        new formStylesOneStep();
    }

    createStepIndicators(page: HTMLFormElement, step: number): void {
        const stepIndicatorContainer = divCreator;
        stepIndicatorContainer.className = 'step-indicator-container-top';
        page.insertBefore(stepIndicatorContainer, page.firstChild);
        for (let i = 1; i <= this.formPages.length; i++) {
            const stepIndicatorWrapper = divCreator;
            stepIndicatorWrapper.className = 'step-indicator-wrapper';
            stepIndicatorContainer.appendChild(stepIndicatorWrapper);

            const stepIndicator = divCreator;
            stepIndicator.className = 'step-indicator';
            stepIndicator.textContent = i.toString();
            stepIndicatorContainer.appendChild(stepIndicator);

            const title = titleCreator;
            title.className = 'step-title';
            title.textContent = this.formPages[i - 1].title;
            stepIndicatorWrapper.appendChild(title);

            if (i < step) {
                stepIndicator.classList.add('green-line');
            }
        }

        const stepIndicators = stepIndicatorContainer.querySelectorAll('.step-indicator');
        const stepIndicatorWrapper = stepIndicatorContainer.querySelectorAll('.step-indicator-wrapper');

        for (let i = 0; i < stepIndicators.length - 1; i++) {
            const line = new DivCreatorWithClassName().createDiv('step-indicator-line');
            stepIndicatorContainer.insertBefore(line, stepIndicatorWrapper[i + 1]);

            if (i < step - 1) {
                line.classList.add('green-line');
            }
        }

        stepIndicators[step - 1].classList.add('current-step');
    }

    createPage = async (title: string, fields: string[]) => {
        const form = formCreator;
        form.className = 'form-page';

        const pageTitle = titleCreator;
        pageTitle.textContent = title;
        form.appendChild(pageTitle);

        for (const fieldName of fields) {
            const element = this.config.fields.find((field: any) => field.name === fieldName);
            await this.formElementCreation.create(form, element);
        }
        return form;
    }

    createButtons = (pageIndex: number): void => {
        const buttonContainerConfig = this.config.buttons.find((button: any) => button.name === 'submit');

        if (buttonContainerConfig) {
            const buttonContainer = new DivCreatorWithClassName().createDiv(buttonContainerConfig.className);
    
            if (pageIndex > 0) {
                const prevButtonConfig = this.config.buttons.find((button: any) => button.name === 'previous');
                if (prevButtonConfig) {
                    const prevButton = this.buttonCreation.create(prevButtonConfig.value, () => this.showPreviousPage());
                    prevButton.id = 'previous-button';
                    if (buttonContainer) {
                        buttonContainer.appendChild(prevButton);
                    }
                }
            }
    
            switch (true) {
                case pageIndex === this.formPages.length - 1:
                    const submitButtonConfig = this.config.buttons.find((button: any) => button.name === 'submit');
                    if (submitButtonConfig) {
                        const submitButton = this.buttonCreation.create(submitButtonConfig.value, () => this.onSubmitButtonClick());
                        submitButton.id = 'next-button';
                        if (buttonContainer) {
                            buttonContainer.appendChild(submitButton);
                        }
                    }
                    break;
                default:
                    const nextButtonConfig = this.config.buttons.find((button: any) => button.name === 'next');
                    if (nextButtonConfig) {
                        const nextButton = this.buttonCreation.create(nextButtonConfig.value, () => this.showNextPage());
                        nextButton.id = 'next-button';
                        if (buttonContainer) {
                            buttonContainer.appendChild(nextButton);
                        }
                    }
                    break;
            }
            return buttonContainer;
        }
    }

    validateCurrentPage(): boolean {
        const currentPage = this.formPages[this.currentPageIndex];
        const form = currentPage.element as HTMLFormElement;
        const inputElements = form.querySelectorAll('input, select');
        const inputArray = Array.from(inputElements);
        for (const inputElement of inputArray) {
            if (!this.formValidator.isValid(inputElement as HTMLInputElement)) {
                return false;
            }
        }
        return true;
    }

    showPreviousPage(): void {
        if (this.currentPageIndex > 0) {
            (this.formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex--;
            (this.formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    showNextPage(): void {
        if (this.currentPageIndex < this.formPages.length - 1 && this.validateCurrentPage()) {
            (this.formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex++;
            (this.formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    onSubmitButtonClick(): void {
        if (this.validateCurrentPage()) {
            const successMessage = this.formSuccessMessage.showSuccessMessage();
            this.formPages[this.currentPageIndex].element.appendChild(successMessage);
        } else {
            console.error('Form validation failed.');
        }
    }

    generateForm = async (): Promise<HTMLDivElement | undefined> => {
        const container = new DivCreatorWithClassName().createDiv('container');
        for (let index = 0; index < this.formPages.length; index++) {
            const page = this.formPages[index];
            const formPage = new DivCreatorWithClassName().createDiv('container-form-page');
            const inputElement = await this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            formPage.appendChild(inputElement)

            const buttonContainer = this.createButtons(index);
            formPage.appendChild(buttonContainer);

            (this.formPages[index] as any).element = formPage;
            this.createStepIndicators(inputElement, index + 1);

            container.appendChild(formPage)
        }

        const requiredParagraph = this.formRequiredFieldsParagraph.createParagraphRequiredFields();
        container.appendChild(requiredParagraph);
        return container;
    }
}

const formGenerator = new FormGeneratorMultiStep(formConfigEn, formPagesEn);

formGenerator.generateForm().then(form => {
    if (form) {
        document.body.appendChild(form);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
});
