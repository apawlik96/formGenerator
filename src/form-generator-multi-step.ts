import { ButtonCreation } from "./button-creation";
import { FormElementCreation } from "./form-element-creator";
import { formStyles } from "./form-styles";
import { formPagesEn } from "./config";
import { formConfigEn } from "./config";
import { FormValidator } from "./validator";
import { divCreator,formCreator,titleCreator } from "./html-tag-name";

export class FormGeneratorMultiStep {
    config: any;
    formPages: any;
    currentPageIndex: number;
    private formElementCreation: FormElementCreation;
    private buttonCreation: ButtonCreation;
    private formValidator: FormValidator;

    constructor(config: any, formPages: any) {
        this.config = config;
        this.formPages = formPages;
        this.currentPageIndex = 0;
        this.buttonCreation = new ButtonCreation();
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator (config);
        new formStyles();
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
            const line = divCreator;
            line.className = 'step-indicator-line';
            stepIndicatorContainer.insertBefore(line, stepIndicatorWrapper[i + 1]);
    
            if (i < step - 1) {
                line.classList.add('green-line');
            }
        }

        stepIndicators[step - 1].classList.add('current-step');
    }

    createPage = async (title: string, fields: string[], pageIndex: number) => {
        const form = formCreator;
        form.className = 'form-page';
        const pageTitle = titleCreator;
        pageTitle.textContent = title;
        form.appendChild(pageTitle);
        for (const fieldName of fields) {
            const element = this.config.fields.find((field: any) => field.name === fieldName);
            await this.formElementCreation.create(form, element);
        }
        if (pageIndex > 0) {
            const prevButton = this.buttonCreation.create(this.config.buttons.find((button: any)  => button.name === 'previous').value, () => this.showPreviousPage());
            form.appendChild(prevButton);
        }

        switch (true) {
            case pageIndex === this.formPages.length - 1:
                const submitButton = this.buttonCreation.create(this.config.buttons.find((button: any)  => button.name === 'submit').value, () => this.onSubmitButtonClick());
                form.appendChild(submitButton);
                break;
            default:
                const nextButton = this.buttonCreation.create(this.config.buttons.find((button: any)  => button.name === 'next').value, () => this.showNextPage());
                form.appendChild(nextButton);
                break;
        }
        return form;
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
            console.log('Form submitted.');
        } else {
            console.error('Form validation failed.');
        }
    }

    generateForm = async (): Promise<HTMLDivElement | undefined> => {
        let container;
        if (typeof document !== 'undefined') {
            container = divCreator;
            for (let index = 0; index < this.formPages.length; index++) {
                const page = this.formPages[index];
                const formPage = await this.createPage(page.step, page.fields, index);
                formPage.style.display = index === 0 ? 'block' : 'none';
                container.appendChild(formPage);
                (this.formPages[index] as any).element = formPage;
            }
        document.body.appendChild(container);
        return container;
        }
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
