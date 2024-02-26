import { ButtonCreation } from "../form-element-creator/button-creation";
import { FormElementCreation } from "../form-element-creator-strategy/form-element-creator";
import { formStylesOneStep } from "../form-styles/form-styles-one-step";
import { FormValidator } from "../validator";
import { formCreator, titleCreator } from "../html-tag-name";
import { DivCreatorWithClassName } from "../form-element-creator/div-creator";
import { FormSuccessMessage } from "../form-element-creator/form-success-message";
import { FormRequiredFieldsParagraph } from "../form-element-creator/form-required-fields-parapraph";
import { classNames } from "../config/class-name";
import { config, formPages } from "../config/config-attributes";

export class FormGeneratorMultiStep {
    formPages: any;
    currentPageIndex: number;
    private formElementCreation: FormElementCreation;
    private buttonCreation: ButtonCreation;
    private formValidator: FormValidator;
    private formSuccessMessage: FormSuccessMessage;
    private formRequiredFieldsParagraph: FormRequiredFieldsParagraph;

    constructor(formPages: any) {
        this.formPages = formPages;
        this.currentPageIndex = 0;
        this.buttonCreation = new ButtonCreation();
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator();
        this.formSuccessMessage = new FormSuccessMessage();
        this.formRequiredFieldsParagraph = new FormRequiredFieldsParagraph();
    }

    createStepIndicators(step: number, stepIndicatorContainerTop: HTMLDivElement): void {
        const stepIndicatorWrapper = new DivCreatorWithClassName().createDiv(classNames.stepIndicatorWrapper);
        stepIndicatorContainerTop.appendChild(stepIndicatorWrapper);

        const stepIndicator = new DivCreatorWithClassName().createDiv(classNames.stepIndicator);
        stepIndicator.textContent = step.toString();
        stepIndicatorWrapper.appendChild(stepIndicator);
    
        const title = new DivCreatorWithClassName().createDiv(classNames.titleStep);
        title.textContent = this.formPages[step - 1].title;
        stepIndicatorWrapper.appendChild(title);

        if (step < this.formPages.length) {
            const line = new DivCreatorWithClassName().createDiv(classNames.stepIndicatorLine);
            stepIndicatorContainerTop.appendChild(line);
        }

        stepIndicator.classList.add(step === 1 ? classNames.currentStep : undefined);
    }

    updateStepIndicatorColors(): void {
        const stepIndicatorContainerTop = document.querySelector(`.${classNames.stepIndicatorContainer}`) as HTMLDivElement;
    
        if (stepIndicatorContainerTop) {
            const stepIndicators = stepIndicatorContainerTop.querySelectorAll(`.${classNames.stepIndicator}`);
            const stepLines = stepIndicatorContainerTop.querySelectorAll(`.${classNames.stepIndicatorLine}`);
    
            stepIndicators.forEach((indicator, index) => {
                if (index < this.currentPageIndex) {
                    indicator.classList.add('green-line');
                } else {
                    indicator.classList.remove('green-line');
                }

                indicator.classList.remove('current-step');
                if (index === this.currentPageIndex) {
                    indicator.classList.add('current-step');
                }
            });

            stepLines.forEach((line, index) => {
                if (index < this.currentPageIndex) {
                    line.classList.add('green-line');
                } else {
                    line.classList.remove('green-line');
                }
            });

        }
    }

    createPage = async (title: string, fields: string[]) => {
        const form = formCreator;
        form.className = classNames.personalDataForm;

        const pageTitle = titleCreator;
        pageTitle.textContent = title;
        form.appendChild(pageTitle);

        for (const fieldName of fields) {
            const element = config.fields.find((field: any) => field.name === fieldName);
            await this.formElementCreation.create(form, element);
        }
        return form;
    }

    createButtons(pageIndex: number): HTMLDivElement {
        const buttonContainer = new DivCreatorWithClassName().createDiv(classNames.buttonContainer);
    
        if (pageIndex > 0) {
            const prevButton = this.createPreviousButton();
            buttonContainer.appendChild(prevButton);
        }
    
        if (pageIndex === this.formPages.length - 1) {
            const submitButton = this.createSubmitButton();
            buttonContainer.appendChild(submitButton);
        } else {
            const nextButton = this.createNextButton();
            buttonContainer.appendChild(nextButton);
        }
    
        return buttonContainer;
    }

    private createPreviousButton = (): any => {
        const prevButtonConfig = config.buttons.find((button: any) => button.name === 'previous')
        if (prevButtonConfig){
            const prevButton = this.buttonCreation.create(prevButtonConfig.value, () => this.showPreviousPage());
            prevButton.id = classNames.previousButton;
            return prevButton;
        }
    }

    private createNextButton = (): any => {
        const nextButtonConfig = config.buttons.find((button: any) => button.name === 'next')
        if (nextButtonConfig){
            const nextButton = this.buttonCreation.create(nextButtonConfig.value, () => this.showNextPage());
            nextButton.id = classNames.nextButton;
            return nextButton;
        }
    }

    private createSubmitButton = (): any => {
        const submitButtonConfig = config.buttons.find((button: any) => button.name === 'submit')
        if (submitButtonConfig){
            const submitButton = this.buttonCreation.create(submitButtonConfig.value, () => this.onSubmitButtonClick());
            submitButton.id = classNames.nextButton;
            return submitButton;
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

    transitionBetweenPages(currentElement: any, nextElement: any): void {
        currentElement.style.transition = `opacity 0.5s ease-out`;
        currentElement.style.opacity = '0';

        nextElement.style.transition = `opacity 0.5s ease-in`;
        nextElement.style.opacity = '1';

        setTimeout(() => {
            currentElement.style.display = 'none';
            nextElement.style.display = 'block';

            currentElement.style.transition = '';
            currentElement.style.opacity = '';
            nextElement.style.transition = '';
            nextElement.style.opacity = '';
        }, 500);
    }

    showPreviousPage(): void {
        if (this.currentPageIndex > 0) {
            const currentElement = (this.formPages[this.currentPageIndex] as any).element;
            const previousElement = (this.formPages[this.currentPageIndex - 1] as any).element;
    
            this.transitionBetweenPages(currentElement, previousElement);
            
            this.currentPageIndex--;
            this.updateStepIndicatorColors();
        }
    }

    showNextPage(): void {
        if (this.currentPageIndex < this.formPages.length - 1 && this.validateCurrentPage()) {
            const currentElement = (this.formPages[this.currentPageIndex] as any).element;
            const nextElement = (this.formPages[this.currentPageIndex + 1] as any).element;
    
            this.transitionBetweenPages(currentElement, nextElement);
    
            this.currentPageIndex++;
            this.updateStepIndicatorColors();
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
        const container = new DivCreatorWithClassName().createDiv(classNames.container);
        const stepIndicatorContainerTop = new DivCreatorWithClassName().createDiv(classNames.stepIndicatorContainer);
        container.appendChild(stepIndicatorContainerTop);

        const formContainer = new DivCreatorWithClassName().createDiv(classNames.formContainer);

        for (let index = 0; index < this.formPages.length; index++) {
            const page = this.formPages[index];
            const formPage = new DivCreatorWithClassName().createDiv(classNames.formStep);
            const inputElement = await this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            formPage.appendChild(inputElement);

            const buttonContainer = this.createButtons(index);
            formPage.appendChild(buttonContainer);

            (this.formPages[index] as any).element = formPage;
            this.createStepIndicators(index + 1, stepIndicatorContainerTop);

            formContainer.appendChild(formPage);
            container.appendChild(formContainer);

        }

        const requiredParagraph = this.formRequiredFieldsParagraph.createParagraphRequiredFields();
        container.appendChild(requiredParagraph);
        return container;
    }
}

const formGenerator = new FormGeneratorMultiStep(formPages);

formGenerator.generateForm().then(form => {
    if (form) {
        document.body.appendChild(form);
        new formStylesOneStep();
        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
});
