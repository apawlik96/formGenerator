import { formStylesOneStep } from "../form-styles/form-styles-one-step";
import { HtmlTagName } from "../html-tag-name";
import { FormHandlerOneStep } from "./form-handler-one-step";

export class FormGeneratorOneStep {

    private readonly _formHandler: FormHandlerOneStep;

    constructor(_formHandler: FormHandlerOneStep) {
        this._formHandler =  _formHandler;
        new formStylesOneStep();
    }

    get formHandlerOneStep(): FormHandlerOneStep {
        return this._formHandler;
    }

    async generateForm(): Promise<HTMLFormElement | undefined> {
        const form = await new HtmlTagName().formCreator();
        if (typeof document !== 'undefined') {
            document.body.appendChild(form);
            return form;
        } else {
            console.error("'document' is not defined.");
            return undefined;
        }
    }
}

const formGeneratorOneStep = new FormGeneratorOneStep(new FormHandlerOneStep());

formGeneratorOneStep.generateForm().then(form => {
    if (form) {
        form.addEventListener('submit', function (event: Event) {
            event.preventDefault();
            formGeneratorOneStep.formHandlerOneStep.validateForm();
        });
    } else {
            console.error('Form not found.')
        }
});
