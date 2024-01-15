import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creator";
import { ButtonCreation } from "./button-creation";
import { FormElementCreation } from "./form-element-creator";
import { SelectElementCreationStrategy } from "./select-element-creation-strategy";
import { InputCreationStrategy } from "./input-creation-strategy";
import { FieldElementCreationStrategy } from "./field-element-creation-strategy";
import { formStyles } from "./form-styles";
import { formPages } from "./config";
import { formConfig } from "./config";
import { FormValidator } from "./validator";

export class FormGeneratorMultiStep {
    config: any;
    currentPageIndex: number;
    private elementCreator: ElementCreator;
    private creationStrategy: FormElementCreationStrategy;
    private buttonCreation: ButtonCreation;

    constructor(config: any) {
        this.config = config;
        this.currentPageIndex = 0;
        this.elementCreator = new ElementCreator();
        this.buttonCreation = new ButtonCreation(this.elementCreator);
        this.creationStrategy = new FormElementCreation(
            new SelectElementCreationStrategy(this.elementCreator, new InputCreationStrategy(this.elementCreator)),
            new InputCreationStrategy(this.elementCreator),
            new FieldElementCreationStrategy(this.elementCreator)
        );
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

    createPage = async (title: string, fields: string[]) => {
        const form = document.createElement('form') as HTMLFormElement;
        form.className = 'form-page';
        const pageTitle = document.createElement('h2');
        pageTitle.textContent = title;
        form.appendChild(pageTitle);

        for (const fieldName of fields) {
            const element = this.config.fields.find((field: any) => field.name === fieldName);
            await this.creationStrategy.create(form, element);
        }

        const prevButton = this.buttonCreation.create('Previous', () => this.showPreviousPage());
        form.appendChild(prevButton);

        const nextButton = this.buttonCreation.create('Next', () => this.showNextPage());
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

    generateForm = async (): Promise<HTMLDivElement> => {
        const container = document.createElement('div');

        for (let index = 0; index < formPages.length; index++) {
            const page = formPages[index];
            const formPage = await this.createPage(page.title, page.fields);
            formPage.style.display = index === 0 ? 'block' : 'none';
            container.appendChild(formPage);
            (formPages[index] as any).element = formPage;
        }

        document.body.appendChild(container);

        return container;
    }
}

const formGenerator = new FormGeneratorMultiStep(formConfig);
const formValidator = new FormValidator();

formGenerator.generateForm().then(form => {
    document.body.appendChild(form);
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        formValidator.validation();
    });
});
