import { formConfig } from "./config";
import { FormElementCreation } from "./form-element-creator";
import { formStyles } from "./form-styles";
import { FormValidator } from "./validator";
import { formCreator } from "./html-tag-name";

export class FormGenerator {
    config: typeof formConfig;
    private formElementCreation: FormElementCreation;

    constructor(config: any) {
        this.config = config;
        this.formElementCreation = new FormElementCreation();
        new formStyles();
    }

    createFormElement= async (): Promise<HTMLFormElement> => {
        const form = formCreator;
        const elements = [...this.config.selects, ...this.config.fields, ...this.config.buttons];
        for (const element of elements) {
            await this.formElementCreation.create(form, element);
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

    async generateForm(): Promise<HTMLFormElement | undefined> {
        const form = await formCreator;
        if (typeof document !== 'undefined' && document.body) {
            document.body.appendChild(form);
        } else {
            console.error('The document object not found.')
        }
        return form;
    }
}

const formGenerator = new FormGenerator(formConfig);
const formGeneratorOneStep = new FormGeneratorOneStep(formGenerator);
const formValidator = new FormValidator();

formGeneratorOneStep.generateForm().then(form => {
    if (form) {
        form.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            formValidator.validation();
        });
    }
});
