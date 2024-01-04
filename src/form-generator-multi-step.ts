import { FormElementCreator } from "./form-element-creator";
import { ElementCreator } from "./element-creator";
import { formPages } from "./config";
import { formStyles } from "./form-styles";
import { formConfig } from "./config";
import { FormValidator } from "./validator";

export class FormGeneratorMultiStep {
    config: any;
    currentPageIndex: number;
    formElementCreator: FormElementCreator;

    constructor(config: any) {
        this.config = config;
        this.currentPageIndex = 0;
        this.formElementCreator = new FormElementCreator(new ElementCreator());
        new formStyles();
    }

    createStepIndicators(page: HTMLFormElement, step: number): void {
        const stepIndicatorContainer = document.createElement('div');
        stepIndicatorContainer.className = 'step-indicator-container';
        page.appendChild(stepIndicatorContainer);
    
        for (let i = 1; i <= formPages.length; i++) {
            const stepIndicator = document.createElement('div');
            stepIndicator.className = 'step-indicator';
            stepIndicator.textContent = i.toString();
            stepIndicatorContainer.appendChild(stepIndicator);
        }
    
        const stepIndicators = stepIndicatorContainer.querySelectorAll('.step-indicator');
        stepIndicators[step - 1].classList.add('current-step');
    }

    createPage(title: string, fields: string[]): HTMLFormElement {
        const form = document.createElement('form') as HTMLFormElement;
        form.className = 'form-page';
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = title;
        form.appendChild(pageTitle);
    
        fields.forEach((fieldName) => {
            this.formElementCreator.createFormElement(form, this.config.fields.find((field: any) => field.name === fieldName));
        });

        const formElementCreator = new FormElementCreator(new ElementCreator());

        const prevButton = formElementCreator.createButton('Previous', () => this.showPreviousPage());
        form.appendChild(prevButton);

        const nextButton = formElementCreator.createButton('Next', () => this.showNextPage());
        form.appendChild(nextButton);
    
        return form;
    }
    

    showPreviousPage(): void {
        if (this.currentPageIndex > 0) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex--;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    showNextPage(): void {
        if (this.currentPageIndex < formPages.length - 1) {
            (formPages[this.currentPageIndex] as any).element.style.display = 'none';
            this.currentPageIndex++;
            (formPages[this.currentPageIndex] as any).element.style.display = 'block';
        }
    }

    generateForm(): HTMLElement {
        const container = document.createElement('div');

        formPages.forEach((page, index) => {
            const formPage = this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            container.appendChild(formPage);
            (formPages[index] as any).element = formPage;
        });

        document.body.appendChild(container);

        return container;
    }
}

const formGenerator = new FormGeneratorMultiStep(formConfig);
const form = formGenerator.generateForm();

const formValidator = new FormValidator();

document.body.appendChild(form);

form.addEventListener('next', function (event) {
    event.preventDefault();
    formValidator.validation();
});