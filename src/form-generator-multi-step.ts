import { ButtonCreation } from "./button-creation";
import { FormElementCreation } from "./form-element-creator";
import { formStyles } from "./form-styles";
import { formPages } from "./config";
import { formConfig } from "./config";
import { FormValidator } from "./validator";
import { divCreator,formCreator,titleCreator } from "./html-tag-name";

export class FormGeneratorMultiStep {
    config: any;
    currentPageIndex: number;
    private formElementCreation: FormElementCreation;
    private buttonCreation: ButtonCreation;
    private formValidator: FormValidator;

    constructor(config: any) {
        this.config = config;
        this.currentPageIndex = 0;
        this.buttonCreation = new ButtonCreation();
        this.formElementCreation = new FormElementCreation();
        this.formValidator = new FormValidator ();
        new formStyles();
    }

    createStepIndicators(page: HTMLFormElement, step: number): void {
        const stepIndicatorContainer = divCreator;
        stepIndicatorContainer.className = 'step-indicator-container';
        page.insertBefore(stepIndicatorContainer, page.firstChild);
        for (let i = 1; i <= formPages.length; i++) {
            const stepIndicator = document.createElement('div');
            stepIndicator.className = 'step-indicator';
            stepIndicator.textContent = i.toString();
            stepIndicatorContainer.appendChild(stepIndicator);
        }
        const stepIndicators = stepIndicatorContainer.querySelectorAll('.step-indicator');
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
            const prevButton = this.buttonCreation.create('Previous', () => this.showPreviousPage());
            form.appendChild(prevButton);
        }
        switch (pageIndex) {
            case 0:
                const nextButton = this.buttonCreation.create('Next', () => this.showNextPage());
                form.appendChild(nextButton);
                break;
            case formPages.length - 1:
                const submitButton = this.buttonCreation.create('Submit', () => this.showNextPage());
                form.appendChild(submitButton);
                break;
            default:
                const nextButtonDefault = this.buttonCreation.create('Next', () => this.showNextPage());
                form.appendChild(nextButtonDefault);
                break;
        }
        return form;
    }

    validateCurrentPage(): boolean {
        const currentPage = formPages[this.currentPageIndex];
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
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex--;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    showNextPage(): void {
        if (this.currentPageIndex < formPages.length - 1 && this.validateCurrentPage()) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex++;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        } else if (this.currentPageIndex == formPages.length - 1 && this.validateCurrentPage()) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    generateForm = async (): Promise<HTMLDivElement | undefined> => {
        let container;
        if (typeof document !== 'undefined') {
            container = divCreator;
            for (let index = 0; index < formPages.length; index++) {
                const page = formPages[index];
                const formPage = await this.createPage(page.title, page.fields, index);
                formPage.style.display = index === 0 ? 'block' : 'none';
                container.appendChild(formPage);
                (formPages[index] as any).element = formPage;
            }
        document.body.appendChild(container);
        return container;
        }
    }
}

const formGenerator = new FormGeneratorMultiStep(formConfig);

formGenerator.generateForm().then(form => {
    if (form) {
        document.body.appendChild(form);
        form.addEventListener('submit', function (event) {
            event.preventDefault();
        });
    }
});
