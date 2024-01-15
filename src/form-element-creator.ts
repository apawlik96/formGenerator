import { SelectElementCreationStrategy } from "./select-element-creation-strategy";
import { InputCreationStrategy } from "./input-creation-strategy";
import { FieldElementCreationStrategy } from "./field-element-creation-strategy";

export interface FormElementCreationStrategy {
    create(form: HTMLFormElement, element: any): void;
}

export class FormElementCreation implements FormElementCreationStrategy {
    private selectElementCreationStrategy: SelectElementCreationStrategy;
    private inputCreationStrategy: InputCreationStrategy;
    private fieldElementCreationStrategy: FieldElementCreationStrategy;

    constructor(selectElementCreationStrategy: SelectElementCreationStrategy, inputCreationStrategy: InputCreationStrategy, fieldElementCreationStrategy: FieldElementCreationStrategy) {
        this.selectElementCreationStrategy = selectElementCreationStrategy;
        this.inputCreationStrategy = inputCreationStrategy;
        this.fieldElementCreationStrategy = fieldElementCreationStrategy;
    }

    create = async (form: HTMLFormElement, element: any): Promise<void> =>  {
        switch (element.class) {
            case 'selects':
                this.selectElementCreationStrategy.create(form, element);
                break;
            case 'buttons':
                this.inputCreationStrategy.create(form, element);
                break;
            case 'fields':
                await this.fieldElementCreationStrategy.create(form, element);
                break;
            default:
                console.log('Field type not recognized', element.class);
        }
    }
}
