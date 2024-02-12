import { SelectElementCreationStrategy } from "../form-element-creator/select-element-creation-strategy";
import { InputCreationStrategy } from "../form-element-creator/input-creation-strategy";
import { FieldElementCreationStrategy } from "../form-element-creator/field-element-creation-strategy";
import { FormElementCreationContext } from "./form-element-creation-context";

export class FormElementCreation {

    create = async (form: HTMLFormElement, element: any): Promise<void> => {
        switch (element.class) {
            case 'selects':
                {
                    const context = new FormElementCreationContext(new SelectElementCreationStrategy(new InputCreationStrategy()));
                    context.create(form, element);
                }
                break;
            case 'buttons':
                {
                    const context = new FormElementCreationContext(new InputCreationStrategy());
                    context.create(form, element);
                }
                break;
            case 'fields':
                {
                    const context = new FormElementCreationContext(new FieldElementCreationStrategy());
                    await context.create(form, element);
                }
                break;
            default:
                console.error('Field type not recognized', element.class);
                return;
        }
    }
}
