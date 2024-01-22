import { SelectElementCreationStrategy } from "./select-element-creation-strategy";
import { InputCreationStrategy } from "./input-creation-strategy";
import { FieldElementCreationStrategy } from "./field-element-creation-strategy";
import { FormElementCreationContext } from "./form-element-creation-context";

export class FormElementCreation {

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        let formElementCreationContext: FormElementCreationContext;
        switch (element.class) {
            case 'selects':
                formElementCreationContext = new FormElementCreationContext(
                    new SelectElementCreationStrategy(new InputCreationStrategy())
                );
                break;
            case 'buttons':
                formElementCreationContext = new FormElementCreationContext(
                    new InputCreationStrategy()
                );
                break;
            case 'fields':
                formElementCreationContext = new FormElementCreationContext(
                    new FieldElementCreationStrategy()
                );
                break;
            default:
                console.error('Field type not recognized', element.class);
                return;
        }
        await formElementCreationContext.create(form, element);
    };
}
