import { SelectElementCreationStrategy } from "./select-element-creation-strategy";
import { InputCreationStrategy } from "./input-creation-strategy";
import { FieldElementCreationStrategy } from "./field-element-creation-strategy";
import { FormElementCreationContext } from "./form-element-creation-context";
import { ElementCreator } from "./element-creator";

export class FormElementCreation {
    private elementCreator: ElementCreator;

    constructor() {
        this.elementCreator = new ElementCreator();
    }

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        let formElementCreationContext: FormElementCreationContext;
        switch (element.class) {
            case 'selects':
                formElementCreationContext = new FormElementCreationContext(
                    new SelectElementCreationStrategy(this.elementCreator, new InputCreationStrategy(this.elementCreator))
                );
                break;
            case 'buttons':
                formElementCreationContext = new FormElementCreationContext(
                    new InputCreationStrategy(this.elementCreator)
                );
                break;
            case 'fields':
                formElementCreationContext = new FormElementCreationContext(
                    new FieldElementCreationStrategy(this.elementCreator)
                );
                break;
            default:
                console.error('Field type not recognized', element.class);
                return;
        }
        await formElementCreationContext.create(form, element);
    };
}
