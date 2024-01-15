import { formConfig } from "./config";
import { ElementCreator } from "./element-creator";
import { FormElementCreationStrategy } from "./form-element-creator";
import { FormElementCreationContext } from "./form-element-creation-context";
import { FormElementCreation } from "./form-element-creator";
import { SelectElementCreationStrategy } from "./select-element-creation-strategy";
import { InputCreationStrategy } from "./input-creation-strategy";
import { FieldElementCreationStrategy } from "./field-element-creation-strategy";
import { formStyles } from "./form-styles";
import { FormValidator } from "./validator";

export class FormGenerator {
    config: typeof formConfig;
    private elementCreator: ElementCreator;
    private creationStrategy: FormElementCreationStrategy;
    public formElementCreationContext: FormElementCreationContext;

    constructor(config: any) {
        this.config = config;
        this.elementCreator = new ElementCreator();
        this.creationStrategy = new FormElementCreation(
            new SelectElementCreationStrategy(this.elementCreator, new InputCreationStrategy(this.elementCreator)),
            new InputCreationStrategy(this.elementCreator),
            new FieldElementCreationStrategy(this.elementCreator)
        );
        this.formElementCreationContext = new FormElementCreationContext(this.creationStrategy);
        new formStyles();
    }

    createFormElement= async (): Promise<HTMLFormElement> => {
        const form = this.elementCreator.createElement('form') as HTMLFormElement;
        const elements = [...this.config.selects, ...this.config.fields, ...this.config.buttons];
        for (const element of elements) {
            await this.creationStrategy.create(form, element);
        }
        return form;
    }
}

export class FormGeneratorOneStep {
    private formGenerator: FormGenerator;

    constructor(formGenerator: FormGenerator) {
        this.formGenerator = formGenerator;
        new formStyles();
    }

    async generateForm(): Promise<HTMLFormElement> {
        const form = await this.formGenerator.createFormElement();
        document.body.appendChild(form);
        return form;
    }
}

const formGenerator = new FormGenerator(formConfig);
const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
const formValidator = new FormValidator();

formGeneratorOneStep.generateForm().then(form => {
    form.addEventListener('submit', function (event: Event) {
        event.preventDefault();
        formValidator.validation();
    });
});
